import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, ADMIN_EMAIL } = process.env;

let transporter = null;

// Only build a transporter if SMTP is actually configured — lets the rest of
// the app (and the apply flow's DB-save path) keep working even before real
// SMTP credentials are filled in.
if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
} else {
  console.warn('⚠️ SMTP not configured (SMTP_HOST/SMTP_USER/SMTP_PASS missing) — application emails will be skipped.');
}

/**
 * Emails a new job application to the company inbox (ADMIN_EMAIL).
 * @param {{ job: {id?: number|string, title: string}, applicant: object, resumeFile?: { originalname: string, buffer: Buffer, mimetype: string } }} params
 */
export async function sendApplicationEmail({ job, applicant, resumeFile }) {
  if (!transporter) {
    return { sent: false, reason: 'SMTP not configured' };
  }

  const recipient = ADMIN_EMAIL || 'admin@encegen.com';
  const from = SMTP_FROM || SMTP_USER;

  const lines = [
    `New application for: ${job.title}`,
    '',
    `Name: ${applicant.fullName}`,
    `Email: ${applicant.email}`,
    `Phone: ${applicant.phone || '—'}`,
    `LinkedIn: ${applicant.linkedin || '—'}`,
    `Location: ${applicant.location || '—'}`,
    `How they heard about us: ${applicant.hearAbout || '—'}`,
    '',
    'Cover letter:',
    applicant.coverLetter || '(none provided)',
  ];

  const attachments = resumeFile
    ? [{ filename: resumeFile.originalname, content: resumeFile.buffer, contentType: resumeFile.mimetype }]
    : [];

  try {
    await transporter.sendMail({
      from,
      to: recipient,
      replyTo: applicant.email,
      subject: `New Application: ${job.title} — ${applicant.fullName}`,
      text: lines.join('\n'),
      attachments,
    });
    return { sent: true };
  } catch (err) {
    console.error('Failed to send application email:', err.message);
    return { sent: false, reason: err.message };
  }
}
