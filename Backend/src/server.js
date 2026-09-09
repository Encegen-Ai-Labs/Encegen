import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import jobsRoutes from './routes/jobs.js';
import blogsRoutes from './routes/blogs.js';
import insightsRoutes from './routes/insights.js';
import resourcesRoutes from './routes/resources.js';
import { initDb } from './initDb.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health Check Root
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    app: 'Encegen Backend API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth/login',
      jobs: '/api/jobs',
      blogs: '/api/blogs',
      insights: '/api/insights',
      resources: '/api/resources'
    }
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api', jobsRoutes);
app.use('/api', blogsRoutes);
app.use('/api', insightsRoutes);
app.use('/api', resourcesRoutes);


// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

// Start Server & Initialize Database
app.listen(PORT, async () => {
  console.log(`🚀 Encegen Backend Server running on http://localhost:${PORT}`);
  await initDb();
});
