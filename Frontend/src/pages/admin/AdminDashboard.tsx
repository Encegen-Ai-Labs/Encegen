import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { API_BASE_URL } from '../../config/api';
import './AdminDashboard.css';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  experience_level: string;
  description: string;
  requirements: string;
  status: string;
}

interface Insight {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  content: string;
  meta: string;
  author: string;
  author_role: string;
  action_label: string;
  media_url: string;
  art_variant: string;
  cover_image: string;
  hue: number;
  is_featured: boolean;
  status: string;
}

interface Resource {
  id: number;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  cover_image: string;
  author: string;
  media_url: string;
  is_featured: boolean;
  status: string;
}

interface Application {
  id: number;
  job_id: number | null;
  job_title: string;
  full_name: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  cover_letter: string;
  hear_about: string;
  resume_filename: string;
  created_at: string;
}

const DEPARTMENT_OPTIONS = [
  'Engineering',
  'AI & Research',
  'Product',
  'Sales',
  'Operations',
  'Design',
  'Other (Custom)'
];

const LOCATION_OPTIONS = [
  'Remote (Global)',
  'Bangalore, India',
  'San Francisco, CA',
  'New York, NY',
  'London, UK',
  'Hybrid',
  'On-site',
  'Other (Custom)'
];

const EMPLOYMENT_OPTIONS = ['Full-time', 'Part-time', 'Contract', 'Internship'];
const EXPERIENCE_OPTIONS = ['Entry Level (0-1 yrs)', 'Mid Level (2-4 yrs)', 'Senior Level (5+ yrs)', 'Lead / Staff / Director'];

const INSIGHT_CATEGORIES = ['Blog', 'Reports', 'Customer Stories', 'Webinars', 'Podcasts', 'Videos'];
const RESOURCE_CATEGORIES = ['Blog', 'Webinars', 'Reports', 'Documentation'];
const ART_VARIANTS = ['cyan', 'orange', 'magenta', 'purple', 'blue', 'green'];

const JOB_TEMPLATES = [
  {
    label: '⚡ AI Research Engineer',
    title: 'AI Research & Automation Engineer',
    department: 'AI & Research',
    location: 'Remote (Global)',
    type: 'Full-time',
    exp: 'Senior Level (5+ yrs)',
    desc: 'Lead cutting-edge research in multi-agent orchestration, tool calling, and LLM fine-tuning.',
    req: '5+ years experience with PyTorch, Transformer models, distributed GPU training, and vector databases.'
  },
  {
    label: '💻 Full Stack Dev',
    title: 'Senior Full Stack Engineer (React & Node.js)',
    department: 'Engineering',
    location: 'Bangalore, India',
    type: 'Full-time',
    exp: 'Mid Level (2-4 yrs)',
    desc: 'Architect and scale user-facing web applications, API microservices, and real-time AI dashboards.',
    req: 'Strong proficiency in React 19, TypeScript, Express, PostgreSQL, and AWS/Cloud deployments.'
  },
  {
    label: '🚀 Growth Marketing Lead',
    title: 'Digital Marketing & Growth Lead',
    department: 'Sales',
    location: 'Remote (Global)',
    type: 'Full-time',
    exp: 'Mid Level (2-4 yrs)',
    desc: 'Drive inbound user acquisition, enterprise content marketing, SEO strategy, and campaign analytics.',
    req: 'Track record scaling SaaS/Tech product traffic, managing PPC/SEO campaigns, and data-driven growth.'
  }
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'jobs' | 'insights' | 'resources' | 'applications'>('insights');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Custom inputs for Jobs
  const [customDept, setCustomDept] = useState('');
  const [customLoc, setCustomLoc] = useState('');

  // Job Modal State
  const [showJobModal, setShowJobModal] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [jobForm, setJobForm] = useState({
    title: '',
    department: 'Engineering',
    location: 'Remote (Global)',
    employment_type: 'Full-time',
    experience_level: 'Mid Level (2-4 yrs)',
    description: '',
    requirements: '',
    status: 'active'
  });

  // Insight Modal State
  const [showInsightModal, setShowInsightModal] = useState(false);
  const [editingInsight, setEditingInsight] = useState<Insight | null>(null);
  const [insightForm, setInsightForm] = useState({
    title: '',
    slug: '',
    category: 'Blog',
    description: '',
    content: '',
    meta: '',
    author: 'Encegen Team',
    author_role: 'Principal Analyst',
    action_label: 'Read →',
    media_url: '',
    art_variant: 'cyan',
    cover_image: '',
    hue: 190,
    is_featured: false,
    status: 'published'
  });

  // Resource Modal State
  const [showResourceModal, setShowResourceModal] = useState(false);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);
  const [resourceForm, setResourceForm] = useState({
    title: '',
    slug: '',
    category: 'Blog',
    summary: '',
    content: '',
    cover_image: '',
    author: 'Encegen AI Research',
    media_url: '',
    is_featured: false,
    status: 'published'
  });

  // Toast Notification State
  const [toasts, setToasts] = useState<{ id: string; type: 'success' | 'error' | 'info'; title: string; message: string }[]>([]);

  const showToast = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const token = localStorage.getItem('adminToken');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/');
  };

  useEffect(() => {
    if (!token) {
      navigate('/');
      return;
    }
    // Verify the stored token is still valid before trusting it for admin
    fetch(`${API_BASE_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Invalid or expired session');
        return fetchData();
      })
      .catch(() => handleLogout());
  }, [token]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resJobs, resInsights, resResources, resApplications] = await Promise.allSettled([
        fetch(`${API_BASE_URL}/jobs`),
        fetch(`${API_BASE_URL}/insights?includeDrafts=true`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch(`${API_BASE_URL}/resources?includeDrafts=true`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch(`${API_BASE_URL}/admin/applications`, {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      if (resJobs.status === 'fulfilled' && resJobs.value.ok) {
        const data = await resJobs.value.json();
        if (Array.isArray(data)) setJobs(data);
      }
      if (resInsights.status === 'fulfilled' && resInsights.value.ok) {
        const data = await resInsights.value.json();
        if (Array.isArray(data)) setInsights(data);
      }
      if (resResources.status === 'fulfilled' && resResources.value.ok) {
        const data = await resResources.value.json();
        if (Array.isArray(data)) setResources(data);
      }
      if (resApplications.status === 'fulfilled' && resApplications.value.ok) {
        const data = await resApplications.value.json();
        if (Array.isArray(data)) setApplications(data);
      }
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  // JOB HANDLERS
  const openNewJobModal = () => {
    setEditingJob(null);
    setCustomDept('');
    setCustomLoc('');
    setJobForm({
      title: '',
      department: 'Engineering',
      location: 'Remote (Global)',
      employment_type: 'Full-time',
      experience_level: 'Mid Level (2-4 yrs)',
      description: '',
      requirements: '',
      status: 'active'
    });
    setShowJobModal(true);
  };

  const openEditJobModal = (job: Job) => {
    setEditingJob(job);
    setCustomDept('');
    setCustomLoc('');
    setJobForm({
      title: job.title,
      department: job.department,
      location: job.location,
      employment_type: job.employment_type,
      experience_level: job.experience_level || 'Mid Level (2-4 yrs)',
      description: job.description,
      requirements: job.requirements || '',
      status: job.status
    });
    setShowJobModal(true);
  };

  const applyJobTemplate = (tpl: typeof JOB_TEMPLATES[0]) => {
    setJobForm({
      title: tpl.title,
      department: tpl.department,
      location: tpl.location,
      employment_type: tpl.type,
      experience_level: tpl.exp,
      description: tpl.desc,
      requirements: tpl.req,
      status: 'active'
    });
  };

  const handleSaveJob = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalDepartment = jobForm.department === 'Other (Custom)' ? customDept : jobForm.department;
    const finalLocation = jobForm.location === 'Other (Custom)' ? customLoc : jobForm.location;

    const payload = {
      ...jobForm,
      department: finalDepartment || 'Engineering',
      location: finalLocation || 'Remote'
    };

    const url = editingJob
      ? `${API_BASE_URL}/admin/jobs/${editingJob.id}`
      : `${API_BASE_URL}/admin/jobs`;
    const method = editingJob ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (res.ok) {
        setShowJobModal(false);
        const savedJob = data.job;
        if (savedJob) {
          setJobs((prev) => {
            const exists = prev.some((j) => j.id === savedJob.id);
            if (exists) {
              return prev.map((j) => (j.id === savedJob.id ? savedJob : j));
            }
            return [savedJob, ...prev];
          });
        }
        setSearchQuery('');
        showToast(
          'success',
          editingJob ? 'Job Opening Updated' : 'Job Opportunity Posted',
          `"${jobForm.title}" is saved and visible on the Careers page.`
        );
        fetchData();
      } else {
        showToast('error', 'Failed to Save Job', data.error || 'Please check the required fields.');
      }
    } catch (err) {
      showToast('error', 'Connection Error', 'Could not connect to the backend server.');
    }
  };

  const handleDeleteJob = async (id: number) => {
    if (!confirm('Are you sure you want to delete this job opening?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/admin/jobs/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setJobs((prev) => prev.filter((j) => j.id !== id));
        showToast('info', 'Job Opening Deleted', 'The job role has been removed successfully.');
        fetchData();
      } else {
        const err = await res.json();
        showToast('error', 'Delete Failed', err.error || 'Failed to delete job opening.');
      }
    } catch (err) {
      showToast('error', 'Connection Error', 'Could not connect to the backend server.');
    }
  };

  // INSIGHT HANDLERS
  const openNewInsightModal = () => {
    setEditingInsight(null);
    setInsightForm({
      title: '',
      slug: '',
      category: 'Blog',
      description: '',
      content: '',
      meta: '8 min · May 2026 · AI & Process',
      author: 'Encegen Team',
      author_role: 'Principal Analyst',
      action_label: 'Read →',
      media_url: '',
      art_variant: 'cyan',
      cover_image: '',
      hue: 190,
      is_featured: false,
      status: 'published'
    });
    setShowInsightModal(true);
  };

  const openEditInsightModal = (insight: Insight) => {
    setEditingInsight(insight);
    setInsightForm({
      title: insight.title || '',
      slug: insight.slug || '',
      category: insight.category || 'Blog',
      description: insight.description || '',
      content: insight.content || '',
      meta: insight.meta || '',
      author: insight.author || 'Encegen Team',
      author_role: insight.author_role || 'Analyst',
      action_label: insight.action_label || 'Read →',
      media_url: insight.media_url || '',
      art_variant: insight.art_variant || 'cyan',
      cover_image: insight.cover_image || '',
      hue: insight.hue || 190,
      is_featured: Boolean(insight.is_featured),
      status: insight.status || 'published'
    });
    setShowInsightModal(true);
  };

  const handleInsightImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setInsightForm((prev) => ({ ...prev, cover_image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveInsight = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingInsight
      ? `${API_BASE_URL}/admin/insights/${editingInsight.id}`
      : `${API_BASE_URL}/admin/insights`;
    const method = editingInsight ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(insightForm)
      });

      const data = await res.json();
      if (res.ok) {
        setShowInsightModal(false);
        const savedInsight = data.insight;
        if (savedInsight) {
          setInsights((prev) => {
            const exists = prev.some((i) => i.id === savedInsight.id);
            if (exists) {
              return prev.map((i) => (i.id === savedInsight.id ? savedInsight : i));
            }
            return [savedInsight, ...prev];
          });
        }
        setCategoryFilter('All');
        setSearchQuery('');
        showToast(
          'success',
          editingInsight ? 'Insight Updated' : 'Insight Published',
          `"${insightForm.title}" is live and visible on Insights Hub.`
        );
        fetchData();
      } else {
        showToast('error', 'Publish Failed', data.error || 'Failed to publish insight.');
      }
    } catch (err) {
      showToast('error', 'Connection Error', 'Could not connect to the backend server.');
    }
  };

  const handleDeleteInsight = async (id: number) => {
    if (!confirm('Are you sure you want to delete this insight?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/admin/insights/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setInsights((prev) => prev.filter((i) => i.id !== id));
        showToast('info', 'Insight Deleted', 'The insight item has been deleted successfully.');
        fetchData();
      } else {
        const err = await res.json();
        showToast('error', 'Delete Failed', err.error || 'Failed to delete insight.');
      }
    } catch (err) {
      showToast('error', 'Connection Error', 'Could not connect to the backend server.');
    }
  };

  // RESOURCE HANDLERS
  const openNewResourceModal = () => {
    setEditingResource(null);
    setResourceForm({
      title: '',
      slug: '',
      category: 'Blog',
      summary: '',
      content: '',
      cover_image: '',
      author: 'Encegen AI Research',
      media_url: '',
      is_featured: false,
      status: 'published'
    });
    setShowResourceModal(true);
  };

  const openEditResourceModal = (resource: Resource) => {
    setEditingResource(resource);
    setResourceForm({
      title: resource.title || '',
      slug: resource.slug || '',
      category: resource.category || 'Blog',
      summary: resource.summary || '',
      content: resource.content || '',
      cover_image: resource.cover_image || '',
      author: resource.author || 'Encegen Team',
      media_url: resource.media_url || '',
      is_featured: Boolean(resource.is_featured),
      status: resource.status || 'published'
    });
    setShowResourceModal(true);
  };

  const handleResourceImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setResourceForm((prev) => ({ ...prev, cover_image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveResource = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingResource
      ? `${API_BASE_URL}/admin/resources/${editingResource.id}`
      : `${API_BASE_URL}/admin/resources`;
    const method = editingResource ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(resourceForm)
      });

      const data = await res.json();
      if (res.ok) {
        setShowResourceModal(false);
        const savedResource = data.resource;
        if (savedResource) {
          setResources((prev) => {
            const exists = prev.some((r) => r.id === savedResource.id);
            if (exists) {
              return prev.map((r) => (r.id === savedResource.id ? savedResource : r));
            }
            return [savedResource, ...prev];
          });
        }
        setCategoryFilter('All');
        setSearchQuery('');
        showToast(
          'success',
          editingResource ? 'Resource Updated' : 'Resource Published',
          `"${resourceForm.title}" is live and visible on Resources Hub.`
        );
        fetchData();
      } else {
        showToast('error', 'Publish Failed', data.error || 'Failed to publish resource.');
      }
    } catch (err) {
      showToast('error', 'Connection Error', 'Could not connect to the backend server.');
    }
  };

  const handleDeleteResource = async (id: number) => {
    if (!confirm('Are you sure you want to delete this resource item?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/admin/resources/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setResources((prev) => prev.filter((r) => r.id !== id));
        showToast('info', 'Resource Deleted', 'The resource item has been deleted successfully.');
        fetchData();
      } else {
        const err = await res.json();
        showToast('error', 'Delete Failed', err.error || 'Failed to delete resource.');
      }
    } catch (err) {
      showToast('error', 'Connection Error', 'Could not connect to the backend server.');
    }
  };

  // Safe Filtered Lists with Null Guards
  const q = searchQuery.toLowerCase().trim();

  const filteredJobs = jobs.filter(
    (j) =>
      (j.title || '').toLowerCase().includes(q) ||
      (j.department || '').toLowerCase().includes(q) ||
      (j.location || '').toLowerCase().includes(q)
  );

  const filteredInsights = insights.filter((i) => {
    const title = (i.title || '').toLowerCase();
    const cat = (i.category || '').toLowerCase();
    const author = (i.author || '').toLowerCase();

    const matchesSearch = !q || title.includes(q) || cat.includes(q) || author.includes(q);
    const matchesCat =
      categoryFilter === 'All' ||
      cat === categoryFilter.toLowerCase() ||
      cat.replace(/s$/, '') === categoryFilter.toLowerCase().replace(/s$/, '');
    return matchesSearch && matchesCat;
  });

  const filteredResources = resources.filter((r) => {
    const title = (r.title || '').toLowerCase();
    const cat = (r.category || '').toLowerCase();
    const author = (r.author || '').toLowerCase();

    const matchesSearch = !q || title.includes(q) || cat.includes(q) || author.includes(q);
    const matchesCat =
      categoryFilter === 'All' ||
      cat === categoryFilter.toLowerCase() ||
      cat.replace(/s$/, '') === categoryFilter.toLowerCase().replace(/s$/, '');
    return matchesSearch && matchesCat;
  });

  const filteredApplications = applications.filter(
    (a) =>
      (a.full_name || '').toLowerCase().includes(q) ||
      (a.email || '').toLowerCase().includes(q) ||
      (a.job_title || '').toLowerCase().includes(q)
  );

  return (
    <div className="admin-dashboard">
      <Navbar />

      <div className="admin-header-banner">
        <div className="container admin-header-flex">
          <div className="admin-title-area">
            <h1>Encegen Control Center</h1>
            <p>Unified administration portal for Jobs, Insights Hub &amp; Resources management</p>
          </div>
          <div className="admin-user-nav">
            <span className="admin-badge-tag">⚡ Admin Mode Active</span>
            <button className="admin-logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Quick Stats Banner */}
        <div className="admin-stats-row">
          <div className="admin-stat-card">
            <span>💡 Insights Hub Items</span>
            <strong style={{ color: '#c084fc' }}>{insights.length}</strong>
          </div>
          <div className="admin-stat-card">
            <span>📚 Resources Items</span>
            <strong style={{ color: '#60a5fa' }}>{resources.length}</strong>
          </div>
          <div className="admin-stat-card">
            <span>💼 Active Careers Roles</span>
            <strong style={{ color: '#4ade80' }}>
              {jobs.filter((j) => j.status === 'active').length} / {jobs.length}
            </strong>
          </div>
          <div className="admin-stat-card">
            <span>📥 Total Applications</span>
            <strong style={{ color: '#f472b6' }}>{applications.length}</strong>
          </div>
        </div>

        {/* 4 Dedicated Segregated Navigation Tabs */}
        <div className="admin-tabs">
          <button
            className={`admin-tab-btn ${activeTab === 'insights' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('insights');
              setSearchQuery('');
              setCategoryFilter('All');
            }}
          >
            💡 Insights Hub ({insights.length})
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('resources');
              setSearchQuery('');
              setCategoryFilter('All');
            }}
          >
            📚 Resources Hub ({resources.length})
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'jobs' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('jobs');
              setSearchQuery('');
              setCategoryFilter('All');
            }}
          >
            💼 Careers &amp; Jobs ({jobs.length})
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('applications');
              setSearchQuery('');
              setCategoryFilter('All');
            }}
          >
            📥 Applications ({applications.length})
          </button>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>Loading management data...</p>
        ) : (
          <>
            {/* 1. INSIGHTS HUB TAB */}
            {activeTab === 'insights' && (
              <div>
                <div className="admin-section-top">
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <input
                      type="text"
                      className="admin-search-input"
                      placeholder="🔍 Search insights by title, category, author..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="filter-pills-row">
                      {['All', ...INSIGHT_CATEGORIES].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          className={`filter-pill-btn ${categoryFilter === cat ? 'active' : ''}`}
                          onClick={() => setCategoryFilter(cat)}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button className="admin-create-btn" onClick={openNewInsightModal}>
                    + Add New Insight Item
                  </button>
                </div>

                <div className="admin-table-card">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Author &amp; Role</th>
                        <th>Action &amp; Media</th>
                        <th>Art / Visual</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInsights.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <strong>
                              {item.is_featured && <span className="featured-star" title="Featured Insight">★</span>}
                              {item.title}
                            </strong>
                            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: 2 }}>{item.meta}</div>
                          </td>
                          <td>
                            <span className={`category-badge category-${item.category.toLowerCase().replace(/\s+/g, '-')}`}>
                              {item.category}
                            </span>
                          </td>
                          <td>
                            <div style={{ fontWeight: 500 }}>{item.author}</div>
                            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.author_role}</div>
                          </td>
                          <td>
                            <span style={{ fontSize: '0.85rem', color: '#60a5fa' }}>{item.action_label}</span>
                            {item.media_url && (
                              <div style={{ fontSize: '0.75rem', color: '#38bdf8', marginTop: 2 }}>
                                🔗 {item.media_url.substring(0, 24)}...
                              </div>
                            )}
                          </td>
                          <td>
                            {item.cover_image ? (
                              <img
                                src={item.cover_image}
                                alt="cover"
                                style={{ width: '40px', height: '28px', objectFit: 'cover', borderRadius: '4px' }}
                              />
                            ) : (
                              <div
                                className={`art-color-btn art-${item.art_variant || 'cyan'}`}
                                style={{ width: '22px', height: '22px', display: 'inline-block' }}
                              />
                            )}
                          </td>
                          <td>
                            <span className={`status-badge ${item.status}`}>
                              {item.status}
                            </span>
                          </td>
                          <td className="admin-actions-cell">
                            <button className="admin-edit-btn" onClick={() => openEditInsightModal(item)}>
                              Edit
                            </button>
                            <button className="admin-delete-btn" onClick={() => handleDeleteInsight(item.id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredInsights.length === 0 && (
                        <tr>
                          <td colSpan={7} style={{ textAlign: 'center', color: '#94a3b8', padding: '2rem' }}>
                            No insight items match your search or filter.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 2. RESOURCES HUB TAB */}
            {activeTab === 'resources' && (
              <div>
                <div className="admin-section-top">
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <input
                      type="text"
                      className="admin-search-input"
                      placeholder="🔍 Search resources by title, category, author..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="filter-pills-row">
                      {['All', ...RESOURCE_CATEGORIES].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          className={`filter-pill-btn ${categoryFilter === cat ? 'active' : ''}`}
                          onClick={() => setCategoryFilter(cat)}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button className="admin-create-btn" onClick={openNewResourceModal}>
                    + Add New Resource Item
                  </button>
                </div>

                <div className="admin-table-card">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Resource Title</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Cover Image</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredResources.map((res) => (
                        <tr key={res.id}>
                          <td>
                            <strong>
                              {res.is_featured && <span className="featured-star" title="Featured Resource">★</span>}
                              {res.title}
                            </strong>
                            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: 2 }}>
                              {res.summary ? res.summary.substring(0, 60) + '...' : ''}
                            </div>
                          </td>
                          <td>
                            <span className={`category-badge category-${res.category.toLowerCase().replace(/\s+/g, '-')}`}>
                              {res.category}
                            </span>
                          </td>
                          <td>{res.author}</td>
                          <td>
                            {res.cover_image ? (
                              <img
                                src={res.cover_image}
                                alt="cover"
                                style={{ width: '45px', height: '30px', objectFit: 'cover', borderRadius: '4px' }}
                              />
                            ) : (
                              <span style={{ color: '#64748b' }}>None</span>
                            )}
                          </td>
                          <td>
                            <span className={`status-badge ${res.status}`}>
                              {res.status}
                            </span>
                          </td>
                          <td className="admin-actions-cell">
                            <button className="admin-edit-btn" onClick={() => openEditResourceModal(res)}>
                              Edit
                            </button>
                            <button className="admin-delete-btn" onClick={() => handleDeleteResource(res.id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredResources.length === 0 && (
                        <tr>
                          <td colSpan={6} style={{ textAlign: 'center', color: '#94a3b8', padding: '2rem' }}>
                            No resource items match your filter.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. JOBS TAB */}
            {activeTab === 'jobs' && (
              <div>
                <div className="admin-section-top">
                  <input
                    type="text"
                    className="admin-search-input"
                    placeholder="🔍 Search jobs by title, team, location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="admin-create-btn" onClick={openNewJobModal}>
                    + Add New Job Opportunity
                  </button>
                </div>

                <div className="admin-table-card">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Job Title</th>
                        <th>Department</th>
                        <th>Location</th>
                        <th>Type</th>
                        <th>Experience</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredJobs.map((job) => (
                        <tr key={job.id}>
                          <td><strong>{job.title}</strong></td>
                          <td>{job.department}</td>
                          <td>{job.location}</td>
                          <td>{job.employment_type}</td>
                          <td>{job.experience_level || 'Mid-Level'}</td>
                          <td>
                            <span className={`status-badge ${job.status}`}>
                              {job.status}
                            </span>
                          </td>
                          <td className="admin-actions-cell">
                            <button className="admin-edit-btn" onClick={() => openEditJobModal(job)}>
                              Edit
                            </button>
                            <button className="admin-delete-btn" onClick={() => handleDeleteJob(job.id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredJobs.length === 0 && (
                        <tr>
                          <td colSpan={7} style={{ textAlign: 'center', color: '#94a3b8', padding: '2rem' }}>
                            No job opportunities match your search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 4. APPLICATIONS TAB */}
            {activeTab === 'applications' && (
              <div>
                <div className="admin-section-top">
                  <input
                    type="text"
                    className="admin-search-input"
                    placeholder="🔍 Search applicants by name, email, or role..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="admin-table-card">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Applicant</th>
                        <th>Role Applied For</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Heard Via</th>
                        <th>Submitted</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredApplications.map((app) => (
                        <tr key={app.id}>
                          <td>
                            <strong>{app.full_name}</strong>
                            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: 2 }}>{app.email}</div>
                          </td>
                          <td>{app.job_title}</td>
                          <td>{app.phone || '—'}</td>
                          <td>{app.location || '—'}</td>
                          <td>{app.hear_about || '—'}</td>
                          <td>{new Date(app.created_at).toLocaleDateString()}</td>
                        </tr>
                      ))}
                      {filteredApplications.length === 0 && (
                        <tr>
                          <td colSpan={6} style={{ textAlign: 'center', color: '#94a3b8', padding: '2rem' }}>
                            No applications match your search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* INSIGHT MODAL */}
      {showInsightModal && (
        <div className="admin-modal-overlay" onClick={() => setShowInsightModal(false)}>
          <div className="admin-modal-card" style={{ maxWidth: '720px' }} onClick={(e) => e.stopPropagation()}>
            <button className="admin-modal-close" onClick={() => setShowInsightModal(false)}>✕</button>
            <div className="admin-modal-header" style={{ marginBottom: '1.25rem' }}>
              <h2>{editingInsight ? 'Edit Insight Item' : 'Add New Insight Item'}</h2>
              <p style={{ margin: '4px 0 0 0' }}>Configure category, author, media links, and interactive read/watch content</p>
            </div>
            <form onSubmit={handleSaveInsight}>
              <div className="form-grid">
                <div className="admin-form-group form-full">
                  <label>Insight Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AI-Powered Process Orchestration at Global Scale"
                    value={insightForm.title}
                    onChange={(e) => setInsightForm({ ...insightForm, title: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Category *</label>
                  <select
                    value={insightForm.category}
                    onChange={(e) => {
                      const newCat = e.target.value;
                      const autoAction = newCat === 'Videos' || newCat === 'Webinars' ? 'Watch →' : newCat === 'Podcasts' ? 'Listen →' : newCat === 'Reports' ? 'Download →' : 'Read →';
                      setInsightForm({ ...insightForm, category: newCat, action_label: autoAction });
                    }}
                  >
                    {INSIGHT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="admin-form-group">
                  <label>Publish Status</label>
                  <select
                    value={insightForm.status}
                    onChange={(e) => setInsightForm({ ...insightForm, status: e.target.value })}
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label>Author Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah Chen"
                    value={insightForm.author}
                    onChange={(e) => setInsightForm({ ...insightForm, author: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Author Role</label>
                  <input
                    type="text"
                    placeholder="e.g. Principal Analyst"
                    value={insightForm.author_role}
                    onChange={(e) => setInsightForm({ ...insightForm, author_role: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Action Button Text</label>
                  <input
                    type="text"
                    placeholder="e.g. Read → / Watch → / Listen → / Download →"
                    value={insightForm.action_label}
                    onChange={(e) => setInsightForm({ ...insightForm, action_label: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Media / Video / Audio / Doc URL (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. https://www.youtube.com/watch?v=..."
                    value={insightForm.media_url}
                    onChange={(e) => setInsightForm({ ...insightForm, media_url: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Card Art Color Variant</label>
                  <div className="art-color-picker">
                    {ART_VARIANTS.map((v) => (
                      <button
                        key={v}
                        type="button"
                        className={`art-color-btn art-${v} ${insightForm.art_variant === v ? 'selected' : ''}`}
                        onClick={() => setInsightForm({ ...insightForm, art_variant: v })}
                        title={v}
                      />
                    ))}
                  </div>
                </div>

                <div className="admin-form-group">
                  <label>Card Meta Tag</label>
                  <input
                    type="text"
                    placeholder="e.g. 8 min · May 2026 · Supply Chain"
                    value={insightForm.meta}
                    onChange={(e) => setInsightForm({ ...insightForm, meta: e.target.value })}
                  />
                </div>

                <div className="admin-form-group form-full">
                  <label>Cover Image (Upload from Desktop or paste URL)</label>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleInsightImageUpload}
                      style={{ padding: '0.4rem', fontSize: '0.85rem' }}
                    />
                    <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>OR</span>
                    <input
                      type="text"
                      placeholder="Paste image URL (optional)"
                      value={insightForm.cover_image}
                      onChange={(e) => setInsightForm({ ...insightForm, cover_image: e.target.value })}
                    />
                  </div>
                  {insightForm.cover_image && (
                    <div className="image-preview-box">
                      <img src={insightForm.cover_image} alt="Cover Preview" />
                    </div>
                  )}
                </div>

                <div className="admin-form-group form-full">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={insightForm.is_featured}
                      onChange={(e) => setInsightForm({ ...insightForm, is_featured: e.target.checked })}
                      style={{ width: 'auto' }}
                    />
                    <span>⭐ Pin as Featured Card at the top of Insights Hub</span>
                  </label>
                </div>

                <div className="admin-form-group form-full">
                  <label>Short Description *</label>
                  <textarea
                    required
                    placeholder="Brief description for grid card preview..."
                    value={insightForm.description}
                    onChange={(e) => setInsightForm({ ...insightForm, description: e.target.value })}
                    style={{ minHeight: '75px' }}
                  />
                </div>

                <div className="admin-form-group form-full">
                  <label>Full Content / Article Details (Shown in Reader Modal) *</label>
                  <textarea
                    required
                    placeholder="Write detailed insight body, takeaways, and case study narrative..."
                    value={insightForm.content}
                    onChange={(e) => setInsightForm({ ...insightForm, content: e.target.value })}
                    style={{ minHeight: '140px' }}
                  />
                </div>
              </div>

              <button type="submit" className="admin-submit-btn" style={{ width: '100%', marginTop: '1.25rem' }}>
                {editingInsight ? 'Save Insight Changes' : 'Publish Insight'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* RESOURCE MODAL */}
      {showResourceModal && (
        <div className="admin-modal-overlay" onClick={() => setShowResourceModal(false)}>
          <div className="admin-modal-card" style={{ maxWidth: '700px' }} onClick={(e) => e.stopPropagation()}>
            <button className="admin-modal-close" onClick={() => setShowResourceModal(false)}>✕</button>
            <div className="admin-modal-header" style={{ marginBottom: '1.25rem' }}>
              <h2>{editingResource ? 'Edit Resource Item' : 'Add New Resource Item'}</h2>
              <p style={{ margin: '4px 0 0 0' }}>Manage Blogs, Documentation, Reports &amp; Webinars for the Resources page</p>
            </div>
            <form onSubmit={handleSaveResource}>
              <div className="form-grid">
                <div className="admin-form-group form-full">
                  <label>Resource Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Building Scalable Autonomous Microservices"
                    value={resourceForm.title}
                    onChange={(e) => setResourceForm({ ...resourceForm, title: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Category *</label>
                  <select
                    value={resourceForm.category}
                    onChange={(e) => setResourceForm({ ...resourceForm, category: e.target.value })}
                  >
                    {RESOURCE_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="admin-form-group">
                  <label>Publish Status</label>
                  <select
                    value={resourceForm.status}
                    onChange={(e) => setResourceForm({ ...resourceForm, status: e.target.value })}
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label>Author Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Encegen AI Research"
                    value={resourceForm.author}
                    onChange={(e) => setResourceForm({ ...resourceForm, author: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Media / Video / Documentation URL (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. https://www.youtube.com/watch?v=..."
                    value={resourceForm.media_url}
                    onChange={(e) => setResourceForm({ ...resourceForm, media_url: e.target.value })}
                  />
                </div>

                <div className="admin-form-group form-full">
                  <label>Cover Image (Upload from Desktop or paste URL)</label>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleResourceImageUpload}
                      style={{ padding: '0.4rem', fontSize: '0.85rem' }}
                    />
                    <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>OR</span>
                    <input
                      type="text"
                      placeholder="Paste image URL (optional)"
                      value={resourceForm.cover_image}
                      onChange={(e) => setResourceForm({ ...resourceForm, cover_image: e.target.value })}
                    />
                  </div>
                  {resourceForm.cover_image && (
                    <div className="image-preview-box">
                      <img src={resourceForm.cover_image} alt="Resource Cover Preview" />
                    </div>
                  )}
                </div>

                <div className="admin-form-group form-full">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={resourceForm.is_featured}
                      onChange={(e) => setResourceForm({ ...resourceForm, is_featured: e.target.checked })}
                      style={{ width: 'auto' }}
                    />
                    <span>⭐ Pin as Featured Resource Card</span>
                  </label>
                </div>

                <div className="admin-form-group form-full">
                  <label>Short Summary *</label>
                  <textarea
                    required
                    placeholder="Brief 2-sentence summary for card previews..."
                    value={resourceForm.summary}
                    onChange={(e) => setResourceForm({ ...resourceForm, summary: e.target.value })}
                    style={{ minHeight: '70px' }}
                  />
                </div>

                <div className="admin-form-group form-full">
                  <label>Full Content / Body *</label>
                  <textarea
                    required
                    placeholder="Write full article body text, documentation guides, code examples..."
                    value={resourceForm.content}
                    onChange={(e) => setResourceForm({ ...resourceForm, content: e.target.value })}
                    style={{ minHeight: '150px' }}
                  />
                </div>
              </div>

              <button type="submit" className="admin-submit-btn" style={{ width: '100%', marginTop: '1.25rem' }}>
                {editingResource ? 'Save Resource Changes' : 'Publish Resource Item'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* JOB MODAL */}
      {showJobModal && (
        <div className="admin-modal-overlay" onClick={() => setShowJobModal(false)}>
          <div className="admin-modal-card" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
            <button className="admin-modal-close" onClick={() => setShowJobModal(false)}>✕</button>
            <div className="admin-modal-header" style={{ marginBottom: '1.25rem' }}>
              <h2>{editingJob ? 'Edit Job Opening' : 'Add New Job Opportunity'}</h2>
              <p style={{ margin: '4px 0 0 0' }}>Select options from dropdowns or click a quick template below</p>
            </div>

            {!editingJob && (
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginBottom: '0.4rem' }}>
                  ⚡ Quick Auto-Fill Templates:
                </span>
                <div className="template-chips">
                  {JOB_TEMPLATES.map((tpl) => (
                    <button
                      key={tpl.label}
                      type="button"
                      className="template-chip-btn"
                      onClick={() => applyJobTemplate(tpl)}
                    >
                      {tpl.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSaveJob}>
              <div className="form-grid">
                <div className="admin-form-group form-full">
                  <label>Job Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior AI Agent Researcher"
                    value={jobForm.title}
                    onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Department *</label>
                  <select
                    value={jobForm.department}
                    onChange={(e) => setJobForm({ ...jobForm, department: e.target.value })}
                  >
                    {DEPARTMENT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {jobForm.department === 'Other (Custom)' && (
                    <input
                      type="text"
                      placeholder="Enter custom department"
                      value={customDept}
                      onChange={(e) => setCustomDept(e.target.value)}
                      style={{ marginTop: '0.4rem' }}
                      required
                    />
                  )}
                </div>

                <div className="admin-form-group">
                  <label>Location *</label>
                  <select
                    value={jobForm.location}
                    onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                  >
                    {LOCATION_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {jobForm.location === 'Other (Custom)' && (
                    <input
                      type="text"
                      placeholder="Enter custom location"
                      value={customLoc}
                      onChange={(e) => setCustomLoc(e.target.value)}
                      style={{ marginTop: '0.4rem' }}
                      required
                    />
                  )}
                </div>

                <div className="admin-form-group">
                  <label>Employment Type</label>
                  <select
                    value={jobForm.employment_type}
                    onChange={(e) => setJobForm({ ...jobForm, employment_type: e.target.value })}
                  >
                    {EMPLOYMENT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="admin-form-group">
                  <label>Experience Level</label>
                  <select
                    value={jobForm.experience_level}
                    onChange={(e) => setJobForm({ ...jobForm, experience_level: e.target.value })}
                  >
                    {EXPERIENCE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="admin-form-group form-full">
                  <label>Job Status</label>
                  <select
                    value={jobForm.status}
                    onChange={(e) => setJobForm({ ...jobForm, status: e.target.value })}
                  >
                    <option value="active">Active (Accepting Applications)</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                <div className="admin-form-group form-full">
                  <label>Job Description *</label>
                  <textarea
                    required
                    placeholder="Describe role responsibilities..."
                    value={jobForm.description}
                    onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                  />
                </div>

                <div className="admin-form-group form-full">
                  <label>Requirements &amp; Qualifications</label>
                  <textarea
                    placeholder="List required skills, technologies, experience..."
                    value={jobForm.requirements}
                    onChange={(e) => setJobForm({ ...jobForm, requirements: e.target.value })}
                  />
                </div>
              </div>
              <button type="submit" className="admin-submit-btn" style={{ width: '100%', marginTop: '1.25rem' }}>
                {editingJob ? 'Save Job Changes' : 'Post Job Opportunity'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification Stack */}
      <div className="admin-toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`admin-toast toast-${toast.type}`}>
            <span className="admin-toast-icon">
              {toast.type === 'success' ? '🎉' : toast.type === 'error' ? '⚠️' : 'ℹ️'}
            </span>
            <div className="admin-toast-content">
              <div className="admin-toast-title">{toast.title}</div>
              <div className="admin-toast-msg">{toast.message}</div>
            </div>
            <button
              className="admin-toast-close"
              onClick={() => removeToast(toast.id)}
              aria-label="Close notification"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
