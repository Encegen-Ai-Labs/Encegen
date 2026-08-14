import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { JOBS as DEFAULT_JOBS } from '../../data/jobs'
import './careers.css'

interface JobData {
  id?: number | string;
  title: string;
  department: string;
  location: string;
  type: string;
  posted?: string;
  description: string;
  requirements?: string;
}

export default function JobDetail() {
  const { slug } = useParams()
  const [job, setJob] = useState<JobData | null>(null)
  const [loading, setLoading] = useState(true)

  // Form State & Validation
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [linkedIn, setLinkedIn] = useState('')
  const [location, setLocation] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [hearAbout, setHearAbout] = useState('')
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [formError, setFormError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:5000/api/jobs')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const found = data.find((j: any) => j.id.toString() === slug || j.slug === slug || j.title.toLowerCase().replace(/\s+/g, '-') === slug)
          if (found) {
            setJob({
              id: found.id,
              title: found.title,
              department: found.department || 'Engineering',
              location: found.location || 'Remote',
              type: found.employment_type || 'Full-time',
              posted: found.status === 'active' ? 'Active' : 'Closed',
              description: found.description,
              requirements: found.requirements
            })
            setLoading(false)
            return
          }
        }
        // Fallback to static job data
        const staticFound = DEFAULT_JOBS.find((j) => j.slug === slug) ?? DEFAULT_JOBS[0]
        setJob({
          title: staticFound.title,
          department: staticFound.department,
          location: staticFound.location,
          type: staticFound.type,
          posted: staticFound.posted,
          description: `Join Encegen as a ${staticFound.title} in the ${staticFound.department} team. You will lead core projects, architect high-performance solutions, and collaborate with global engineering teams.`,
          requirements: '5+ years experience in software/AI development, strong problem solving, familiarity with React, Node.js, and cloud deployments.'
        })
        setLoading(false)
      })
      .catch(() => {
        const staticFound = DEFAULT_JOBS.find((j) => j.slug === slug) ?? DEFAULT_JOBS[0]
        setJob({
          title: staticFound.title,
          department: staticFound.department,
          location: staticFound.location,
          type: staticFound.type,
          posted: staticFound.posted,
          description: `Join Encegen as a ${staticFound.title} in the ${staticFound.department} team. You will lead core projects, architect high-performance solutions, and collaborate with global engineering teams.`,
          requirements: '5+ years experience in software/AI development, strong problem solving.'
        })
        setLoading(false)
      })
  }, [slug])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.size > 10 * 1024 * 1024) {
        setFormError('File size exceeds 10MB limit.')
        return
      }
      setResumeFile(file)
      setFormError(null)
    }
  }

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    if (!job) {
      setFormError('Job details are still loading. Please try again in a moment.')
      return
    }

    // Validation checks
    if (!fullName.trim()) {
      setFormError('Please enter your full name.')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setFormError('Please enter a valid email address.')
      return
    }
    if (!resumeFile) {
      setFormError('Please attach your Resume/CV (PDF or DOC).')
      return
    }

    setSubmitting(true)

    const formData = new FormData()
    formData.append('fullName', fullName)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('linkedin', linkedIn)
    formData.append('location', location)
    formData.append('coverLetter', coverLetter)
    formData.append('hearAbout', hearAbout)
    formData.append('jobTitle', job.title)
    formData.append('resume', resumeFile)

    try {
      const res = await fetch(`http://localhost:5000/api/jobs/${job.id ?? ''}/apply`, {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit application. Please try again.')
      }
      setSubmitting(false)
      setSubmitted(true)
    } catch (err: any) {
      setSubmitting(false)
      setFormError(err.message || 'Unable to connect to server. Please try again.')
    }
  }

  if (loading || !job) {
    return (
      <div style={{ paddingTop: 140, paddingBottom: 100, textAlign: 'center', color: '#94a3b8' }}>
        <h2>Loading position details...</h2>
      </div>
    )
  }

  return (
    <>
      <section className="jd-hero">
        <div className="container">
          <span className="jd-hero__badge">● {job.department} · Job Opening</span>
          <p className="jd-hero__crumbs">
            <Link to="/careers">Careers</Link> → <Link to="/careers">All Open Roles</Link> →{' '}
            {job.title}
          </p>
          <div className="jd-hero__row">
            <div>
              <h1>{job.title}</h1>
              <div className="jd-hero__meta">
                <span className="dept">{job.department}</span>
                <span>· {job.type}</span>
                <span>· {job.location}</span>
                <span>· {job.posted || 'Active'}</span>
              </div>
            </div>
            <div className="jd-hero__actions">
              <a href="#apply" className="kbtn kbtn--white">
                Apply Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container jd-body">
          <div className="jd-content">
            <h2>About the Role</h2>
            <div style={{ whiteSpace: 'pre-line', lineHeight: '1.7', color: '#475569', fontSize: '1.05rem' }}>
              {job.description}
            </div>

            {job.requirements && (
              <>
                <h2 style={{ marginTop: '2.5rem' }}>Requirements & Qualifications</h2>
                <div style={{ whiteSpace: 'pre-line', lineHeight: '1.7', color: '#475569', fontSize: '1.05rem' }}>
                  {job.requirements}
                </div>
              </>
            )}

            <div className="jd-offer" style={{ marginTop: '3rem' }}>
              <h2>What We Offer</h2>
              <div className="jd-offer__grid">
                <div className="jd-offer__group">
                  <strong>💰 Competitive Compensation</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#64748b' }}>Attractive base salary + performance bonuses</p>
                </div>
                <div className="jd-offer__group">
                  <strong>🌍 Flexible Workplace</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#64748b' }}>Remote-first with global collaboration hubs</p>
                </div>
                <div className="jd-offer__group">
                  <strong>🏥 Health & Wellness</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#64748b' }}>Comprehensive health coverage & mental wellness</p>
                </div>
                <div className="jd-offer__group">
                  <strong>📚 Learning Stipend</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#64748b' }}>Annual budget for courses, books, & events</p>
                </div>
              </div>
            </div>
          </div>

          {/* APPLICATION FORM ASIDE */}
          <aside className="apply-card" id="apply">
            <h3>Apply for this role</h3>
            <p>Join Encegen and help build the future of AI.</p>

            {submitted ? (
              <div style={{
                background: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                padding: '1.5rem',
                borderRadius: '12px',
                color: '#15803d',
                textAlign: 'center',
                marginTop: '1rem'
              }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>🎉 Application Sent!</h4>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                  Thank you, <strong>{fullName}</strong>. Your resume for <strong>{job.title}</strong> has been received. Our recruiting team will reach out directly via <strong>{email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication}>
                {formError && (
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#dc2626',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    marginBottom: '1rem'
                  }}>
                    ⚠️ {formError}
                  </div>
                )}

                <div className="apply-field">
                  <label>
                    Full Name <em>*</em>
                  </label>
                  <input
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="apply-field">
                  <label>
                    Email Address <em>*</em>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="apply-field">
                  <label>Phone Number</label>
                  <input
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="apply-field">
                  <label>LinkedIn Profile</label>
                  <input
                    placeholder="linkedin.com/in/username"
                    value={linkedIn}
                    onChange={(e) => setLinkedIn(e.target.value)}
                  />
                </div>

                <div className="apply-field">
                  <label>Current Location</label>
                  <input
                    placeholder="e.g. San Francisco, CA or Bangalore"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div className="apply-field">
                  <label>
                    Resume / CV (PDF, DOC) <em>*</em>
                  </label>
                  <div className="apply-drop" style={{ position: 'relative', cursor: 'pointer' }}>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0,
                        cursor: 'pointer',
                        width: '100%',
                        height: '100%'
                      }}
                    />
                    <span style={{ fontSize: 20 }}>⬆</span>
                    <strong>{resumeFile ? resumeFile.name : 'Click or Drag & drop to upload'}</strong>
                    <span>{resumeFile ? `${(resumeFile.size / 1024 / 1024).toFixed(2)} MB` : 'PDF, DOC up to 10MB'}</span>
                  </div>
                </div>

                <div className="apply-field">
                  <label>Cover Letter</label>
                  <textarea
                    placeholder="Briefly describe why you're a good fit…"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                  />
                </div>

                <div className="apply-field">
                  <label>How did you hear about us?</label>
                  <select value={hearAbout} onChange={(e) => setHearAbout(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Referral">Referral</option>
                    <option value="Job Board">Job board</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button type="submit" className="apply-submit" disabled={submitting}>
                  {submitting ? 'Submitting Application...' : 'Submit Application →'}
                </button>
              </form>
            )}

            <p className="apply-card__legal">
              By applying, you agree to our <a href="#">Privacy Policy</a> and{' '}
              <a href="#">Terms of Service</a>.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
