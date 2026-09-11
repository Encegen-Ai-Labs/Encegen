import express from 'express';
import multer from 'multer';
import { query } from '../db.js';
import { authenticateAdmin } from '../middleware/auth.js';
import { sendApplicationEmail } from '../mailer.js';

const router = express.Router();

const ALLOWED_RESUME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (ALLOWED_RESUME_TYPES.has(file.mimetype)) return cb(null, true);
    cb(new Error('Only PDF or DOC/DOCX resumes are accepted'));
  },
});

// Fallback in-memory applications store (used if the DB insert fails)
let memoryApplications = [];

// Fallback in-memory jobs store
let memoryJobs = [
  {
    id: 1,
    title: 'AI Research & Automation Engineer',
    department: 'Engineering',
    location: 'Pune / Remote',
    employment_type: 'Full-time',
    experience_level: 'Senior Level (5+ yrs)',
    salary: '₹18L – ₹30L per annum',
    description: 'Design and deploy production-grade LLM agents, automated workflows, and high-performance microservices.',
    requirements: 'Experience with PyTorch/TensorFlow, Node.js/Python, Vector DBs, and API integrations.',
    status: 'active',
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Senior Full Stack Developer (React & Node.js)',
    department: 'Engineering',
    location: 'Pune / Remote',
    employment_type: 'Full-time',
    experience_level: 'Mid Level (2-4 yrs)',
    salary: '₹12L – ₹22L per annum',
    description: 'Build modern enterprise dashboards, real-time analytics interfaces, and scalable microservices.',
    requirements: 'Proficiency in React 19, TypeScript, Express, PostgreSQL, and Cloud infrastructure.',
    status: 'active',
    created_at: new Date().toISOString()
  }
];

// ADMIN: Get all job openings
router.get('/jobs', authenticateAdmin, async (req, res) => {
  try {
    const result = await query('SELECT * FROM jobs ORDER BY created_at DESC');
    return res.json(result.rows);
  } catch (err) {
    console.warn('DB query failed, using in-memory jobs:', err.message);
    return res.json(memoryJobs);
  }
});

// ADMIN: Get single job by ID
router.get('/jobs/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query('SELECT * FROM jobs WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Job not found' });
    }
    return res.json(result.rows[0]);
  } catch (err) {
    const job = memoryJobs.find(j => j.id == id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    return res.json(job);
  }
});

// ADMIN: Add Job Opportunity
router.post('/admin/jobs', authenticateAdmin, async (req, res) => {
  const { title, department, location, employment_type, experience_level, salary, description, requirements, status } = req.body;

  if (!title || !department || !location || !description) {
    return res.status(400).json({ error: 'Title, department, location, and description are required fields.' });
  }

  const jobStatus = status || 'active';
  const empType = employment_type || 'Full-time';
  const expLevel = experience_level || 'Entry Level';
  const jobSalary = salary || '';

  try {
    const result = await query(
      `INSERT INTO jobs (title, department, location, employment_type, experience_level, salary, description, requirements, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [title, department, location, empType, expLevel, jobSalary, description, requirements || '', jobStatus]
    );
    return res.status(201).json({ message: 'Job opportunity created successfully', job: result.rows[0] });
  } catch (err) {
    console.warn('DB insert failed, adding to memoryJobs store:', err.message);
    const newJob = {
      id: memoryJobs.length ? Math.max(...memoryJobs.map(j => j.id)) + 1 : 1,
      title, department, location, employment_type: empType, experience_level: expLevel,
      salary: jobSalary, description, requirements: requirements || '', status: jobStatus,
      created_at: new Date().toISOString()
    };
    memoryJobs.unshift(newJob);
    return res.status(201).json({ message: 'Job opportunity created successfully', job: newJob });
  }
});

// ADMIN: Update Job Opportunity
router.put('/admin/jobs/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  const { title, department, location, employment_type, experience_level, salary, description, requirements, status } = req.body;

  try {
    const result = await query(
      `UPDATE jobs SET
         title = COALESCE($1, title),
         department = COALESCE($2, department),
         location = COALESCE($3, location),
         employment_type = COALESCE($4, employment_type),
         experience_level = COALESCE($5, experience_level),
         salary = COALESCE($6, salary),
         description = COALESCE($7, description),
         requirements = COALESCE($8, requirements),
         status = COALESCE($9, status),
         updated_at = CURRENT_TIMESTAMP
       WHERE id = $10 RETURNING *`,
      [title, department, location, employment_type, experience_level, salary, description, requirements, status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Job not found' });
    }
    return res.json({ message: 'Job opportunity updated successfully', job: result.rows[0] });
  } catch (err) {
    const index = memoryJobs.findIndex(j => j.id == id);
    if (index === -1) return res.status(404).json({ error: 'Job not found' });

    memoryJobs[index] = {
      ...memoryJobs[index],
      title: title || memoryJobs[index].title,
      department: department || memoryJobs[index].department,
      location: location || memoryJobs[index].location,
      employment_type: employment_type || memoryJobs[index].employment_type,
      experience_level: experience_level || memoryJobs[index].experience_level,
      salary: salary !== undefined ? salary : memoryJobs[index].salary,
      description: description || memoryJobs[index].description,
      requirements: requirements !== undefined ? requirements : memoryJobs[index].requirements,
      status: status || memoryJobs[index].status
    };
    return res.json({ message: 'Job opportunity updated successfully', job: memoryJobs[index] });
  }
});

// ADMIN: Delete Job Opportunity
router.delete('/admin/jobs/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query('DELETE FROM jobs WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Job not found' });
    }
    return res.json({ message: 'Job opportunity deleted successfully', id });
  } catch (err) {
    const index = memoryJobs.findIndex(j => j.id == id);
    if (index === -1) return res.status(404).json({ error: 'Job not found' });

    memoryJobs.splice(index, 1);
    return res.json({ message: 'Job opportunity deleted successfully', id });
  }
});

// PUBLIC: Submit a job application (resume upload + email + DB save)
router.post('/jobs/:id/apply', (req, res) => {
  upload.single('resume')(req, res, async (uploadErr) => {
    if (uploadErr) {
      return res.status(400).json({ error: uploadErr.message || 'Resume upload failed' });
    }

    const { id } = req.params;
    const { fullName, email, phone, linkedin, location, coverLetter, hearAbout, jobTitle } = req.body;

    const trimmedName = (fullName || '').trim().replace(/\s{2,}/g, ' ');
    const cleanEmail = (email || '').trim().replace(/\s+/g, '');
    const cleanPhone = (phone || '').replace(/\D/g, '');

    // Name validation: min 3, max 50, no numbers, no special characters
    if (!trimmedName || trimmedName.length < 3) {
      return res.status(400).json({ error: 'Full name must be at least 3 characters long.' });
    }
    if (trimmedName.length > 50) {
      return res.status(400).json({ error: 'Full name cannot exceed 50 characters.' });
    }
    if (!/^[a-zA-Z\s]+$/.test(trimmedName)) {
      return res.status(400).json({ error: 'Full name can only contain letters and spaces (no numbers or special characters).' });
    }

    // Email validation: valid format, no blank spaces
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return res.status(400).json({ error: 'Please provide a valid email address without spaces.' });
    }

    // Phone validation: must be 10 digits if provided
    if (cleanPhone && cleanPhone.length !== 10) {
      return res.status(400).json({ error: 'Phone number must be exactly 10 digits.' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'A resume file (PDF or DOC/DOCX) is required.' });
    }

    // Resolve the job title: prefer a live DB/in-memory lookup, fall back to
    // whatever the frontend sent (covers the case where the frontend is
    // showing a job from its own static fallback list).
    let resolvedTitle = jobTitle || 'Unknown Role';
    try {
      const jobResult = await query('SELECT title FROM jobs WHERE id = $1', [id]);
      if (jobResult.rows.length > 0) resolvedTitle = jobResult.rows[0].title;
    } catch (err) {
      const memJob = memoryJobs.find((j) => j.id == id);
      if (memJob) resolvedTitle = memJob.title;
    }

    const applicant = { fullName, email, phone, linkedin, location, coverLetter, hearAbout };
    const jobIdNum = Number(id);

    let savedApplication;
    try {
      const result = await query(
        `INSERT INTO applications (job_id, job_title, full_name, email, phone, linkedin, location, cover_letter, hear_about, resume_filename)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
        [
          Number.isFinite(jobIdNum) ? jobIdNum : null,
          resolvedTitle,
          fullName,
          email,
          phone || '',
          linkedin || '',
          location || '',
          coverLetter || '',
          hearAbout || '',
          req.file.originalname,
        ]
      );
      savedApplication = result.rows[0];
    } catch (err) {
      console.warn('DB insert failed, adding to memoryApplications store:', err.message);
      savedApplication = {
        id: memoryApplications.length ? Math.max(...memoryApplications.map((a) => a.id)) + 1 : 1,
        job_id: Number.isFinite(jobIdNum) ? jobIdNum : null,
        job_title: resolvedTitle,
        full_name: fullName,
        email,
        phone: phone || '',
        linkedin: linkedin || '',
        location: location || '',
        cover_letter: coverLetter || '',
        hear_about: hearAbout || '',
        resume_filename: req.file.originalname,
        created_at: new Date().toISOString(),
      };
      memoryApplications.unshift(savedApplication);
    }

    const emailResult = await sendApplicationEmail({
      job: { id, title: resolvedTitle },
      applicant,
      resumeFile: req.file,
    });

    return res.status(201).json({
      message: 'Application submitted successfully',
      application: savedApplication,
      emailSent: emailResult.sent,
    });
  });
});

// ADMIN: List all applications
router.get('/admin/applications', authenticateAdmin, async (req, res) => {
  try {
    const result = await query('SELECT * FROM applications ORDER BY created_at DESC');
    return res.json(result.rows);
  } catch (err) {
    console.warn('DB query failed, using in-memory applications:', err.message);
    return res.json(memoryApplications);
  }
});

export default router;
