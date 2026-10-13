import express from 'express';
import { sendContactEmail } from '../mailer.js';

const router = express.Router();
const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u;
const EMAIL_PATTERN = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;
const PHONE_PATTERN = /^\d{10}$/;
const MESSAGE_CONTROL_PATTERN = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;

router.post('/', async (req, res) => {
  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const name = typeof body.name === 'string' ? body.name.trim().replace(/\s+/g, ' ') : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const company = typeof body.company === 'string' ? body.company.trim().replace(/\s+/g, ' ') : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const consent = body.consent === true || body.consent === 'true';

  if (name.length < 2 || name.length > 100 || !NAME_PATTERN.test(name)) {
    return res.status(400).json({ error: 'Enter a valid name using letters, spaces, apostrophes, periods, or hyphens.' });
  }
  const [emailLocalPart] = email.split('@');
  if (
    email.length > 254 ||
    emailLocalPart.length > 64 ||
    email.includes('..') ||
    emailLocalPart.startsWith('.') ||
    emailLocalPart.endsWith('.') ||
    !EMAIL_PATTERN.test(email)
  ) {
    return res.status(400).json({ error: 'Enter a valid email address.' });
  }
  if (company.length < 2 || company.length > 120 || /\p{Cc}/u.test(company)) {
    return res.status(400).json({ error: 'Enter a company name between 2 and 120 characters.' });
  }
  if (!PHONE_PATTERN.test(phone)) {
    return res.status(400).json({ error: 'Enter a phone number containing exactly 10 digits.' });
  }
  if (message.length < 10 || message.length > 2000 || MESSAGE_CONTROL_PATTERN.test(message)) {
    return res.status(400).json({ error: 'Your message must be 10 to 2,000 characters and cannot contain unsupported control characters.' });
  }
  if (!consent) {
    return res.status(400).json({ error: 'Please agree to be contacted about your request.' });
  }

  const result = await sendContactEmail({
    contact: { name, email, company, phone, message },
  });

  if (!result.sent) {
    return res.status(503).json({
      error: 'We could not send your request right now. Please try again or email contact@encegen.com.',
    });
  }

  return res.status(200).json({ message: 'Your request has been sent.' });
});

export default router;
