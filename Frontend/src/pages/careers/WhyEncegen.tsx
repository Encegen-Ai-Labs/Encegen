import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArtTile,
  Avatar,
  Btn,
  ClosingCTA,
  GradBand,
  SectionHead,
  Stars,
} from '../../components/kit'
import { SearchIcon } from '../../components/icons'
import { type Job } from '../../data/jobs'
import { API_BASE_URL } from '../../config/api'
import './careers.css'
import '../company/company.css'

const BENEFITS = [
  {
    color: '#6336f5',
    halo: 'rgba(124, 92, 255, 0.15)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="9" r="5" />
        <path d="M9.5 13.5L8 21l4-2.5L16 21l-1.5-7.5" />
      </svg>
    ),
    title: 'High-Impact Ownership',
    desc: 'Work directly on mission-critical AI systems and client solutions. What you build goes into production.',
  },
  {
    color: '#2573f0',
    halo: 'rgba(59, 130, 246, 0.15)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M12 3a14.5 14.5 0 0 0 0 18" />
        <path d="M12 3a14.5 14.5 0 0 1 0 18" />
      </svg>
    ),
    title: 'Pune HQ & Hybrid',
    desc: 'Collaborate at our Pune headquarters with flexible hybrid workflow options.',
  },
  {
    color: '#09b698',
    halo: 'rgba(20, 184, 166, 0.16)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 4.5h6.5a3.5 3.5 0 0 1 3.5 3.5v12a2.5 2.5 0 0 0-2.5-2.5H2z" />
        <path d="M22 4.5h-6.5A3.5 3.5 0 0 0 12 8v12a2.5 2.5 0 0 1 2.5-2.5H22z" />
      </svg>
    ),
    title: 'Rapid AI Learning',
    desc: 'Hands-on exposure to cutting-edge Generative AI, AI agents, document intelligence, and modern full-stack engineering.',
  },
  {
    color: '#0ca668',
    halo: 'rgba(16, 185, 129, 0.16)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
      </svg>
    ),
    title: 'Direct Client Engagement',
    desc: 'Understand real business workflows and engineer solutions that solve real challenges for clients.',
  },
  {
    color: '#f56e0f',
    halo: 'rgba(249, 115, 22, 0.16)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3.5" y="4.5" width="17" height="16" rx="2.5" />
        <path d="M16 2.5v4" />
        <path d="M8 2.5v4" />
        <path d="M3.5 9.5h17" />
      </svg>
    ),
    title: 'Agile Build Sprints',
    desc: 'Move fast with a startup mindset: Build → Test → Learn → Improve.',
  },
  {
    color: '#e83e8c',
    halo: 'rgba(236, 72, 153, 0.16)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" />
        <circle cx="10" cy="8.5" r="3.2" />
        <path d="M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35" />
        <path d="M15 5.35a3.2 3.2 0 0 1 0 6.3" />
      </svg>
    ),
    title: 'Competitive Growth',
    desc: 'Work with a dedicated, mission-driven team with direct recognition and growth incentives.',
  },
]

const PEOPLE_STATS = [
  { value: '11–50', label: 'Team members' },
  { value: 'Pune, IN', label: 'Single Tech HQ' },
  { value: '2025', label: 'Founded Year' },
]

const DEPT_CARDS = [
  {
    title: 'Engineering & AI Systems',
    count: '2 Open roles',
    desc: 'Full-stack development, AI agent pipelines, robust APIs, scalable databases, and cloud infrastructure.',
    chips: ['AI Research & Automation Engineer', 'Senior Full Stack Developer (React & Node.js)'],
    color: '#6553ee',
  },
]

const VOICES = [
  {
    initials: 'EA',
    name: 'Encegen Builder',
    role: 'AI & Automation Engineer',
    quote: "At Encegen, you don't wait months for permissions. We test an idea, build a prototype, test it on real data, and deploy it to production.",
    hue: 150,
  },
  {
    initials: 'ST',
    name: 'Software Team',
    role: 'Full-Stack Developer',
    quote: 'We work directly on products like EasyHunt and custom solutions for Varasa, Pramay Agro, and Fx Algo. The learning curve is exponential.',
    hue: 215,
  },
  {
    initials: 'PL',
    name: 'Product Lead',
    role: 'Solutions & Intelligence',
    quote: 'We don’t believe in technology for the sake of technology. Every system we build has to solve a genuine, measurable business problem.',
    hue: 330,
  },
]

const CLIENT_RECOGNITION = [
  { by: 'Flairnetic Advocates', title: 'Major Legal Client for EasyHunt Software', year: '2025' },
  { by: 'EasyHunt', title: 'Title Search Software for Maharashtra Records', year: '2025' },
  { by: 'Varasa', title: 'Heritage Conservation & Scholarship Grant Platform', year: '2026' },
  { by: 'Pramay Agro', title: 'Fertilizers & Pesticides E-Commerce Portal', year: '2026' },
  { by: 'Fx Algo', title: 'Ultra-Low Latency Algorithmic Trading Systems', year: '2026' },
]

export default function WhyEncegen() {
  const [dept, setDept] = useState('All Departments')
  const [query, setQuery] = useState('')
  const [jobsList, setJobsList] = useState<Job[]>([])
  const [jobsLoading, setJobsLoading] = useState(true)
  const [jobsLoadError, setJobsLoadError] = useState(false)

  useEffect(() => {
    fetch(`${API_BASE_URL}/jobs`)
      .then((res) => {
        if (!res.ok) throw new Error(`Jobs request failed with status ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error('Jobs response was not a list')
        const formatted: Job[] = data
          .filter((j) => j.status === 'active')
          .map((j) => ({
            slug: j.id.toString(),
            title: j.title,
            department: j.department || 'Engineering',
            type: j.employment_type || 'Full-time',
            location: j.location || 'Remote',
            posted: 'Actively hiring',
          }))
        setJobsList(formatted)
      })
      .catch((err) => {
        console.warn('Could not fetch backend jobs:', err)
        setJobsLoadError(true)
      })
      .finally(() => setJobsLoading(false))
  }, [])

  const departments = useMemo(() => {
    const set = new Set<string>()
    jobsList.forEach((j) => {
      if (j.department) set.add(j.department)
    })
    return ['All Departments', ...Array.from(set)]
  }, [jobsList])

  const filteredJobs = useMemo(() => {
    return jobsList.filter((j) => {
      const matchDept = dept === 'All Departments' || j.department.toLowerCase() === dept.toLowerCase()
      const matchQuery = query.trim() === '' || 
        j.title.toLowerCase().includes(query.toLowerCase()) || 
        j.department.toLowerCase().includes(query.toLowerCase()) ||
        j.location.toLowerCase().includes(query.toLowerCase())
      return matchDept && matchQuery
    })
  }, [dept, query, jobsList])

  return (
    <>
      {/* Hero */}
      <section className="why-hero">
        <div className="container why-hero__grid">
          <div className="why-hero__copy">
            <span className="phero__badge">Our story begins with you</span>
            <h1>
              We don't just build software. We engineer what comes next.
            </h1>
            <p>
              Join a team of builders, operators, and thinkers solving real business problems with
              practical AI and modern engineering.
            </p>
            <div className="why-hero__actions">
              <Btn to="/careers" variant="white">
                Explore Open Roles →
              </Btn>
              <Btn to="/culture" variant="outline-light">
                Our Culture
              </Btn>
            </div>
            <div className="why-hero__chips">
              <span>11–50 team members</span>
              <span>· Pune Headquarters</span>
              <span>· Problem-First Culture</span>
            </div>
          </div>
          <div className="why-hero__tiles">
            <ArtTile variant="purple" className="why-hero__tile why-hero__tile--one" />
            <ArtTile variant="magenta" className="why-hero__tile why-hero__tile--two" />
            <ArtTile variant="blue" className="why-hero__tile why-hero__tile--three" />
            <ArtTile variant="cyan" className="why-hero__tile why-hero__tile--four" />
          </div>
        </div>
      </section>

      <GradBand
        className="why-encegen-quote"
        quote="We exist to bridge the gap between business problems and intelligent technology — and we need exceptional builders to make it happen."
        cite="ENCEGEN AI LABS PVT. LTD."
      />

      {/* The problem */}
      <section className="section section--dark">
        <div className="container split">
          <div>
            <p className="shead__eyebrow" style={{ color: 'var(--purple-400)' }}>
              Chapter 02 · The Philosophy
            </p>
            <h2 className="left-title" style={{ color: '#fff' }}>
              We build for the problem, not the hype.
            </h2>
            <p className="left-copy" style={{ color: '#a8a5cb' }}>
              We don’t believe every problem needs AI. We believe the right problem deserves the right technology.
              Sometimes that means a robust software platform. Sometimes it means automation.
              Sometimes it means an AI agent working alongside humans.
            </p>
            <ul className="check-list check-list--dark">
              <li>We move fast and learn faster</li>
              <li>We build for outcomes and real utility</li>
              <li>We take full ownership of what we deliver</li>
            </ul>
          </div>
          <div className="fail-panel">
            <div className="fail-panel__head">
              <span>Generic Approaches</span>
              <span>With Encegen</span>
            </div>
            <div className="fail-panel__rows">
              {[
                { bad: 'Months', label: 'Idea to Prototype', good: 'Days' },
                { bad: 'Manual', label: 'Workflow Execution', good: 'Automated' },
                { bad: 'Generic', label: 'AI Accuracy', good: 'Domain-Tuned' },
                { bad: 'Complex', label: 'User Experience', good: 'Intuitive' },
              ].map((r) => (
                <div key={r.label} className="fail-panel__row">
                  <span className="bad">{r.bad}</span>
                  <span className="label">{r.label}</span>
                  <span className="good">{r.good}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section--lavender why-benefits-section">
        <div className="container">
          <SectionHead eyebrow="Chapter 03 · Why Here" title="Everything you need to do your best work." />
          <div className="cards-3 why-benefits-grid">
            {BENEFITS.map((b, idx) => (
              <div
                key={b.title}
                className="benefit"
                style={{
                  ['--benefit-color' as string]: b.color,
                  ['--benefit-halo' as string]: b.halo,
                  ['--benefit-idx' as string]: idx,
                }}
              >
                <div className="benefit__icon-wrap">
                  <span className="benefit__icon">{b.icon}</span>
                </div>
                <strong>{b.title}</strong>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People */}
      <section className="section section--dark people-section-exact">
        <div className="container">
          <div className="people-head-exact">
            <span className="people-eyebrow-exact">CHAPTER 03 · THE PEOPLE</span>
            <h2 className="people-title-exact">Built by people who’ve sat in your seat.</h2>
            <p className="people-sub-exact">
              A team of curious and practical problem solvers. Engineers, designers, and AI developers building intelligent systems from Pune, India.
            </p>
          </div>

          <div className="people-layout-exact">
            {/* Left Stats Box */}
            <div className="people-stats-card-exact">
              {PEOPLE_STATS.map((s) => (
                <div key={s.label} className="people-stat-row-exact">
                  <span className="people-stat-label-exact">{s.label}</span>
                  <strong className="people-stat-val-exact">{s.value}</strong>
                </div>
              ))}
            </div>

            {/* Right Voice Rows */}
            <div className="people-voices-list-exact">
              {VOICES.map((v) => (
                <div key={v.initials} className="people-voice-row-exact">
                  <div className="people-voice-left-exact">
                    <div className="people-voice-avatar-exact">
                      {v.initials}
                    </div>
                    <div className="people-voice-meta-exact">
                      <h4>{v.name}</h4>
                      <span>{v.role}</span>
                    </div>
                  </div>
                  <div className="people-voice-quote-exact">
                    <em>“{v.quote}”</em>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Chapter 05 · Where You Fit" title="Find where you belong." />
          <div className="dept-cards-single-wrap">
            {DEPT_CARDS.map((d) => (
              <div key={d.title} className="dept-card dept-card--single" style={{ ['--dept-color' as string]: d.color }}>
                <h3>{d.title}</h3>
                <span className="count">{d.count}</span>
                <p>{d.desc}</p>
                <div className="dept-card__chips">
                  {d.chips.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
                <Link to="/careers">View roles →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices with stars */}
      <section className="section section--light why-voices">
        <div className="container">
          <SectionHead eyebrow="Chapter 06 · Real Voices" title="Hear from our team." />
          <div className="cards-3 why-voices__grid">
            {VOICES.map((v) => (
              <article key={v.name} className="voice why-voice-card">
                <div className="why-voice-card__person">
                  <Avatar text={v.initials} hue={v.hue} size={42} />
                  <div className="why-voice-card__identity">
                    <strong>{v.name}</strong>
                    <span>{v.role}</span>
                  </div>
                </div>
                <p>“{v.quote}”</p>
                <Stars outline />
              </article>
            ))}
          </div>
          <div className="rule-bar why-voices__callout">
            <strong>Join 11–50 people building the future of applied AI in Pune</strong>
            <Link to="/careers" className="why-voices__link">
              → Explore open roles
            </Link>
          </div>
        </div>
      </section>

      {/* Roles & Search Filter (Exact match to screenshot) */}
      <section className="section section--light roles-search-section">
        <div className="container roles-search-container">
          <div className="roles-search-head">
            <span className="roles-search-eyebrow">CHAPTER 06 · YOUR ROLE</span>
            <div className="roles-search-title-row">
              <h2 className="roles-search-title">Where will you make your mark?</h2>
              {jobsList.length > 0 && <span className="roles-search-badge">Actively hiring</span>}
            </div>
          </div>

          {/* Search Bar */}
          {jobsList.length > 0 && (
            <div className="roles-search-bar">
              <SearchIcon size={18} className="roles-search-icon" />
              <input
                type="text"
                placeholder="Search roles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          )}

          {/* Department Filter Pills */}
          {jobsList.length > 0 && (
            <div className="roles-filter-pills">
              {departments.map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`roles-filter-pill ${d.toLowerCase() === dept.toLowerCase() ? 'active' : ''}`}
                  onClick={() => setDept(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          )}

          {/* Job Rows List */}
          <div className="roles-jobs-list">
            {jobsLoading ? (
              <div className="roles-empty-state" role="status">
                <p>Loading open positions...</p>
              </div>
            ) : jobsLoadError ? (
              <div className="roles-empty-state" role="alert">
                <p>We’re unable to load open positions right now. Please try again later.</p>
              </div>
            ) : jobsList.length === 0 ? (
              <div className="roles-empty-state">
                <p>There are no open positions right now. Please check back soon.</p>
              </div>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.slug} className="role-card-exact">
                  <div className="role-card-main">
                    <h3 className="role-card-title">{job.title}</h3>
                    <div className="role-card-meta">
                      <span className={`role-tag role-tag--${job.department.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                        {job.department}
                      </span>
                      <span className="role-dot">·</span>
                      <span className="role-type">{job.type}</span>
                      <span className="role-dot">·</span>
                      <span className="role-posted">{job.posted}</span>
                    </div>
                  </div>

                  <div className="role-card-right">
                    <span className="role-loc">
                      <span className="role-pin">📍</span> {job.location}
                    </span>
                    <Link to={`/careers/${job.slug}`} className="role-apply-btn">
                      Apply →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="roles-empty-state">
                <p>No roles found matching "{query}" in {dept}.</p>
                <button
                  type="button"
                  onClick={() => { setDept('All Departments'); setQuery('') }}
                  className="roles-reset-btn"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2 Offices in Pune */}
      <section className="section section--dark why-offices">
        <div className="container why-offices__container">
          <SectionHead
            title="2 Offices in Pune · Innovating for the World"
            sub="Our core technology and engineering hubs operate out of Pune, Maharashtra, India."
            dark
          />
          <div className="why-offices__map">
            <iframe
              title="Map centered on Encegen's Wagholi office"
              src="https://maps.google.com/maps?q=BA+HUB,+Office+no+03,+Sambhaji+Nagar,+Wagholi,+Pune+412207&ll=18.5806299,73.9833099&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="why-offices__locations">
            <article className="why-offices__location">
              <span className="why-offices__pin" aria-hidden="true">●</span>
              <div>
                <h3>Wagholi Office</h3>
                <p>
                  BA HUB, Office no : 03, Sambhaji Nagar (Baif road), Near BA Varmont Society, Wagholi, Pune-412207
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=BA+HUB,+Office+no+03,+Sambhaji+Nagar,+Wagholi,+Pune+412207"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions ↗
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="Milestones & Validation"
            title="Proven Solutions Across Domains"
            sub="Real platforms, products, and client partnerships built since incorporation."
          />
          <div className="award-cards">
            {CLIENT_RECOGNITION.map((a) => (
              <div key={a.by + a.title} className="award-card">
                <strong>{a.by}</strong>
                <span>
                  {a.title} · {a.year}
                </span>
                <em>✓</em>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        trusted={['Flairnetic Advocates', 'EasyHunt', 'Varasa', 'Pramay Agro', 'Fx Algo']}
        trustedLabel="trusted by 5,000+ enterprises"
        line1="This is where the story gets interesting."
        line2="And you could be in the next chapter."
        sub="We're not just hiring. We're building a team of people who give a damn about making AI work for the real world."
        primary={{ label: 'View All Open Roles', to: '/careers', variant: 'lavender' }}
        
        checks={['< 48hr response', 'Every CV read by humans', 'Transparent hiring process']}
      />
    </>
  )
}
