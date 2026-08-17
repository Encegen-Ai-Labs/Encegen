import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { JOBS as DEFAULT_JOBS } from '../../data/jobs'
import { API_BASE_URL } from '../../config/api'
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

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  resume?: string;
}

export default function JobDetail() {
  const { slug } = useParams()
  const [job, setJob] = useState<JobData | null>(null)
  const [loading, setLoading] = useState(true)

  // Form State
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [linkedIn, setLinkedIn] = useState('')
  const [location, setLocation] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [hearAbout, setHearAbout] = useState('')
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  // Validation States
  const [errors, setErrors] = useState<FormErrors>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${API_BASE_URL}/jobs`)
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

  // --- Real-Time Interactive Validation Rules & Handlers ---

  // 1. FULL NAME
  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Intercept space at starting position
    if (e.key === ' ' && (e.currentTarget.selectionStart === 0 || fullName.length === 0)) {
      e.preventDefault()
      setErrors((prev) => ({ ...prev, fullName: 'Name cannot start with a blank space.' }))
      return
    }
    // Intercept numbers (0-9)
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault()
      setErrors((prev) => ({
        ...prev,
        fullName: 'Numbers are not allowed in full name. Please enter letters (A-Z, a-z) only.'
      }))
      return
    }
    // Intercept special characters
    if (e.key.length === 1 && !/^[a-zA-Z\s]$/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault()
      setErrors((prev) => ({
        ...prev,
        fullName: `Special character '${e.key}' is not allowed in name. Only letters and single spaces are allowed.`
      }))
      return
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    let errorMsg = ''

    if (raw.startsWith(' ')) {
      errorMsg = 'Name cannot start with a blank space.'
    } else if (/\d/.test(raw)) {
      errorMsg = 'Numbers are not allowed in name. Only alphabetic letters (A-Z, a-z) and spaces are permitted.'
    } else if (/[^a-zA-Z\s]/.test(raw)) {
      errorMsg = 'Special characters are not allowed in name. Only alphabetic letters and single spaces are permitted.'
    } else if (/\s{2,}/.test(raw)) {
      errorMsg = 'Multiple consecutive blank spaces are not allowed.'
    }

    const clean = raw
      .replace(/[^a-zA-Z\s]/g, '')
      .replace(/^\s+/, '')
      .replace(/\s{2,}/g, ' ')
      .slice(0, 50)

    setFullName(clean)

    if (errorMsg) {
      setErrors((prev) => ({ ...prev, fullName: errorMsg }))
    } else if (!clean) {
      setErrors((prev) => ({ ...prev, fullName: 'Full name is required.' }))
    } else if (clean.length < 3) {
      setErrors((prev) => ({
        ...prev,
        fullName: `Name is too short. Minimum 3 characters required (${clean.length}/3 characters entered).`
      }))
    } else {
      setErrors((prev) => ({ ...prev, fullName: undefined }))
    }
  }

  const handleNameBlur = () => {
    const trimmed = fullName.trim()
    if (!trimmed) {
      setErrors((prev) => ({ ...prev, fullName: 'Full name is required.' }))
    } else if (trimmed.length < 3) {
      setErrors((prev) => ({
        ...prev,
        fullName: `Name must be at least 3 characters long (${trimmed.length}/3 characters entered).`
      }))
    } else if (trimmed.length > 50) {
      setErrors((prev) => ({ ...prev, fullName: 'Name cannot exceed 50 characters.' }))
    } else if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
      setErrors((prev) => ({
        ...prev,
        fullName: 'Only letters and spaces are allowed (no numbers or special characters).'
      }))
    } else {
      setErrors((prev) => ({ ...prev, fullName: undefined }))
    }
  }

  // 2. PHONE NUMBER
  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Intercept blank spaces
    if (e.key === ' ') {
      e.preventDefault()
      setErrors((prev) => ({ ...prev, phone: 'Blank spaces are not allowed in phone number.' }))
      return
    }
    // Intercept letters
    if (/^[a-zA-Z]$/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault()
      setErrors((prev) => ({
        ...prev,
        phone: 'Letters are not allowed in phone number. Please enter numeric digits (0-9) only.'
      }))
      return
    }
    // Intercept special characters
    if (e.key.length === 1 && !/^[0-9]$/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault()
      setErrors((prev) => ({
        ...prev,
        phone: `Special character '${e.key}' is not allowed in phone number. Only numeric digits (0-9) are permitted.`
      }))
      return
    }
    // Intercept entering more than 10 digits
    if (
      /^[0-9]$/.test(e.key) &&
      phone.length >= 10 &&
      e.currentTarget.selectionStart === e.currentTarget.selectionEnd
    ) {
      e.preventDefault()
      setErrors((prev) => ({ ...prev, phone: 'Phone number cannot exceed 10 digits.' }))
      return
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    let errorMsg = ''

    if (/[a-zA-Z]/.test(raw)) {
      errorMsg = 'Letters are not allowed in phone number. Only numeric digits (0-9) are allowed.'
    } else if (/[^0-9\s]/.test(raw)) {
      errorMsg = 'Special characters are not allowed in phone number. Only numeric digits (0-9) are allowed.'
    } else if (/\s/.test(raw)) {
      errorMsg = 'Blank spaces are not allowed in phone number.'
    }

    const clean = raw.replace(/\D/g, '').slice(0, 10)
    setPhone(clean)

    if (errorMsg) {
      setErrors((prev) => ({ ...prev, phone: errorMsg }))
    } else if (!clean) {
      setErrors((prev) => ({ ...prev, phone: 'Phone number is required.' }))
    } else if (clean.length > 0 && !/^[6-9]/.test(clean)) {
      setErrors((prev) => ({
        ...prev,
        phone: `Indian mobile numbers must start with 6, 7, 8, or 9 (you entered '${clean[0]}').`
      }))
    } else if (clean.length < 10) {
      setErrors((prev) => ({
        ...prev,
        phone: `Phone number must be exactly 10 digits (${clean.length}/10 digits entered).`
      }))
    } else {
      setErrors((prev) => ({ ...prev, phone: undefined }))
    }
  }

  const handlePhoneBlur = () => {
    const clean = phone.replace(/\D/g, '')
    if (!clean) {
      setErrors((prev) => ({ ...prev, phone: 'Phone number is required.' }))
    } else if (!/^[6-9]/.test(clean)) {
      setErrors((prev) => ({
        ...prev,
        phone: `Indian mobile numbers must start with 6, 7, 8, or 9 (starts with '${clean[0]}').`
      }))
    } else if (clean.length !== 10) {
      setErrors((prev) => ({
        ...prev,
        phone: `Phone number must be exactly 10 digits (${clean.length}/10 digits entered).`
      }))
    } else {
      setErrors((prev) => ({ ...prev, phone: undefined }))
    }
  }

  // 3. EMAIL ADDRESS
  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault()
      setErrors((prev) => ({ ...prev, email: 'Blank spaces are not allowed in email address.' }))
      return
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    let errorMsg = ''
    if (/\s/.test(raw)) {
      errorMsg = 'Blank spaces are not allowed in email address.'
    }

    const clean = raw.replace(/\s+/g, '').slice(0, 100)
    setEmail(clean)

    if (errorMsg) {
      setErrors((prev) => ({ ...prev, email: errorMsg }))
    } else if (!clean) {
      setErrors((prev) => ({ ...prev, email: 'Email address is required.' }))
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if (!emailRegex.test(clean)) {
        setErrors((prev) => ({
          ...prev,
          email: 'Please enter a valid email address (e.g. rahul.sharma@example.com).'
        }))
      } else {
        setErrors((prev) => ({ ...prev, email: undefined }))
      }
    }
  }

  const handleEmailBlur = () => {
    const clean = email.trim()
    if (!clean) {
      setErrors((prev) => ({ ...prev, email: 'Email address is required.' }))
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if (!emailRegex.test(clean)) {
        setErrors((prev) => ({
          ...prev,
          email: 'Please enter a valid email address (e.g. rahul.sharma@example.com).'
        }))
      } else {
        setErrors((prev) => ({ ...prev, email: undefined }))
      }
    }
  }

  // 4. RESUME UPLOAD
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const allowedExts = ['.pdf', '.doc', '.docx']
      const hasValidExt = allowedExts.some((ext) => file.name.toLowerCase().endsWith(ext))

      if (!hasValidExt) {
        setErrors((prev) => ({ ...prev, resume: 'Invalid file format. Only PDF, DOC, or DOCX resumes are accepted.' }))
        setResumeFile(null)
        return
      }

      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: 'File size exceeds the 10MB limit. Please upload a smaller file.' }))
        setResumeFile(null)
        return
      }

      setResumeFile(file)
      setErrors((prev) => ({ ...prev, resume: undefined }))
      setFormError(null)
    }
  }

  // 5. FORM SUBMISSION
  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    const nameTrimmed = fullName.trim()
    let nameErr = ''
    if (!nameTrimmed) {
      nameErr = 'Full name is required.'
    } else if (nameTrimmed.length < 3) {
      nameErr = `Name must be at least 3 characters long (${nameTrimmed.length}/3 characters entered).`
    } else if (nameTrimmed.length > 50) {
      nameErr = 'Name cannot exceed 50 characters.'
    } else if (!/^[a-zA-Z\s]+$/.test(nameTrimmed)) {
      nameErr = 'Only letters and spaces are allowed (no numbers or special characters).'
    }

    const emailClean = email.trim()
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let emailErr = ''
    if (!emailClean) {
      emailErr = 'Email address is required.'
    } else if (!emailRegex.test(emailClean)) {
      emailErr = 'Please enter a valid email address (e.g. rahul.sharma@example.com).'
    }

    const phoneDigits = phone.replace(/\D/g, '')
    let phoneErr = ''
    if (!phoneDigits) {
      phoneErr = 'Phone number is required.'
    } else if (!/^[6-9]/.test(phoneDigits)) {
      phoneErr = `Indian mobile numbers must start with 6, 7, 8, or 9 (starts with '${phoneDigits[0]}').`
    } else if (phoneDigits.length !== 10) {
      phoneErr = `Phone number must be exactly 10 digits (${phoneDigits.length}/10 digits entered).`
    }

    const resumeErr = !resumeFile ? 'Please attach your Resume/CV (PDF or DOC/DOCX).' : ''

    const newErrors: FormErrors = {
      fullName: nameErr || undefined,
      email: emailErr || undefined,
      phone: phoneErr || undefined,
      resume: resumeErr || undefined
    }

    setErrors(newErrors)

    if (nameErr || emailErr || phoneErr || resumeErr) {
      setFormError('Please resolve the highlighted errors below before submitting your application.')
      return
    }

    if (!job) {
      setFormError('Job details are still loading. Please try again in a moment.')
      return
    }

    setSubmitting(true)

    const sanitizedFullName = nameTrimmed.replace(/\s{2,}/g, ' ')
    const sanitizedEmail = emailClean.replace(/\s+/g, '')
    const sanitizedPhone = phoneDigits

    const formData = new FormData()
    formData.append('fullName', sanitizedFullName)
    formData.append('email', sanitizedEmail)
    formData.append('phone', sanitizedPhone)
    formData.append('linkedin', linkedIn.trim())
    formData.append('location', location.trim())
    formData.append('coverLetter', coverLetter.trim())
    formData.append('hearAbout', hearAbout)
    formData.append('jobTitle', job.title)
    if (resumeFile) {
      formData.append('resume', resumeFile)
    }

    try {
      const res = await fetch(`${API_BASE_URL}/jobs/${job.id ?? ''}/apply`, {
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
                  Thank you, <strong>{fullName}</strong>. Your application for <strong>{job.title}</strong> has been received. Our recruiting team will reach out directly via <strong>{email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} noValidate>
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

                {/* FULL NAME */}
                <div className="apply-field">
                  <label htmlFor="fullName">
                    Full Name <em>*</em>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={fullName}
                    onKeyDown={handleNameKeyDown}
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                    maxLength={50}
                    className={errors.fullName ? 'has-error' : ''}
                    autoComplete="name"
                  />
                  {errors.fullName ? (
                    <div className="apply-field-error">
                      <span>⚠️</span> <span>{errors.fullName}</span>
                    </div>
                  ) : (
                    <span className="apply-field-hint">Min 3 characters, letters & spaces only (no numbers/special characters)</span>
                  )}
                </div>

                {/* EMAIL ADDRESS */}
                <div className="apply-field">
                  <label htmlFor="email">
                    Email Address <em>*</em>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. rahul.sharma@example.com"
                    value={email}
                    onKeyDown={handleEmailKeyDown}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    maxLength={100}
                    className={errors.email ? 'has-error' : ''}
                    autoComplete="email"
                  />
                  {errors.email ? (
                    <div className="apply-field-error">
                      <span>⚠️</span> <span>{errors.email}</span>
                    </div>
                  ) : (
                    <span className="apply-field-hint">No spaces allowed</span>
                  )}
                </div>

                {/* PHONE NUMBER (INDIA FORMAT) */}
                <div className="apply-field">
                  <label htmlFor="phone">
                    Phone Number <em>*</em>
                  </label>
                  <div className={`phone-input-wrap ${errors.phone ? 'has-error' : ''}`}>
                    <span className="phone-prefix">🇮🇳 +91</span>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="98765 43210"
                      value={phone}
                      onKeyDown={handlePhoneKeyDown}
                      onChange={handlePhoneChange}
                      onBlur={handlePhoneBlur}
                      maxLength={10}
                      autoComplete="tel-national"
                    />
                  </div>
                  {errors.phone ? (
                    <div className="apply-field-error">
                      <span>⚠️</span> <span>{errors.phone}</span>
                    </div>
                  ) : (
                    <span className="apply-field-hint">10-digit Indian mobile number starting with 6, 7, 8, or 9</span>
                  )}
                </div>

                {/* LINKEDIN PROFILE */}
                <div className="apply-field">
                  <label htmlFor="linkedin">LinkedIn Profile</label>
                  <input
                    id="linkedin"
                    type="url"
                    placeholder="e.g. linkedin.com/in/rahulsharma"
                    value={linkedIn}
                    onChange={(e) => setLinkedIn(e.target.value.replace(/\s+/g, ''))}
                  />
                </div>

                {/* CURRENT LOCATION */}
                <div className="apply-field">
                  <label htmlFor="location">Current Location</label>
                  <input
                    id="location"
                    type="text"
                    placeholder="e.g. Bengaluru, Karnataka (or Mumbai / Remote)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value.replace(/^\s+/, ''))}
                  />
                </div>

                {/* RESUME / CV UPLOAD */}
                <div className="apply-field">
                  <label>
                    Resume / CV (PDF, DOC) <em>*</em>
                  </label>
                  <div
                    className={`apply-drop ${errors.resume ? 'has-error' : ''}`}
                    style={{ position: 'relative', cursor: 'pointer' }}
                  >
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
                    <span>{resumeFile ? `${(resumeFile.size / 1024 / 1024).toFixed(2)} MB` : 'PDF, DOC, DOCX up to 10MB'}</span>
                  </div>
                  {errors.resume && (
                    <div className="apply-field-error">
                      <span>⚠️</span> <span>{errors.resume}</span>
                    </div>
                  )}
                </div>

                {/* COVER LETTER */}
                <div className="apply-field">
                  <label htmlFor="coverLetter">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    placeholder="Tell us briefly about your background, relevant projects, and why you are excited to join Encegen…"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value.replace(/^\s+/, ''))}
                  />
                </div>

                {/* HEAR ABOUT US */}
                <div className="apply-field">
                  <label htmlFor="hearAbout">How did you hear about us?</label>
                  <select
                    id="hearAbout"
                    value={hearAbout}
                    onChange={(e) => setHearAbout(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="College / Campus Placement">College / Campus Placement</option>
                    <option value="Referral">Employee Referral</option>
                    <option value="Job Board (Naukri / Indeed)">Job board (Naukri / Indeed)</option>
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
