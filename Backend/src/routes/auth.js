import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../db.js';
import { authenticateAdmin } from '../middleware/auth.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'encegen_super_secret_admin_jwt_key_2026';

// Admin Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    let adminUser = null;
    try {
      const result = await query('SELECT * FROM admin_users WHERE email = $1', [email]);
      if (result.rows.length > 0) {
        adminUser = result.rows[0];
      }
    } catch (dbErr) {
      console.warn('DB query failed, using fallback check:', dbErr.message);
    }

    // Fallback credential check if DB record not found or DB offline
    const envAdminEmail = process.env.ADMIN_EMAIL || 'admin@encegen.com';
    const envAdminPass = process.env.ADMIN_PASSWORD || 'admin123';

    let isMatch = false;
    if (adminUser) {
      isMatch = await bcrypt.compare(password, adminUser.password_hash);
    } else if (email === envAdminEmail && password === envAdminPass) {
      isMatch = true;
    }

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ email, role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({ message: 'Login successful', token, user: { email, role: 'admin' } });

  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Server error during authentication' });
  }
});

// Verify Current Admin Token
router.get('/me', authenticateAdmin, (req, res) => {
  return res.json({ user: req.admin });
});

export default router;
