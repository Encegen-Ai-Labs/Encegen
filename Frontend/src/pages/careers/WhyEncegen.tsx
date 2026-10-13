import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
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
import typicalVsEncegenSvg from '../../assets/generated_panels/typical-vs-encegen-project.svg'
import heroTile1 from '../../assets/figma/figma_6.png'
import heroTile2 from '../../assets/figma/figma_7.png'
import heroTile3 from '../../assets/figma/figma_8.png'
import heroTile4 from '../../assets/figma/figma_9.png'

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
    title: 'AI & Research',
    departmentKey: 'AI Research',
    desc: "Building the models and systems that power Encegen's intelligence layer.",
    chips: ['ML Engineer', 'Research Scientist', 'AI Lead'],
    color: '#6553ee',
  },
  {
    title: 'Engineering',
    departmentKey: 'Engineering',
    desc: 'Full-stack, backend, infrastructure. We ship fast and we ship well.',
    chips: ['Backend Engineer', 'Platform Engineer', 'Solutions Architect'],
    color: '#2573f0',
  },
  {
    title: 'Product',
    departmentKey: 'Product',
    desc: 'Turning complex AI capabilities into experiences enterprises actually want to use.',
    chips: ['Product Manager', 'UX Researcher', 'Product Designer'],
    color: '#09b698',
  },
  {
    title: 'Go-to-Market',
    departmentKey: 'Go-to-Market',
    desc: 'Sales, marketing, and solutions for a team that\'s scaling globally.',
    chips: ['Account Executive', 'Growth Marketing', 'Solutions Architect'],
    color: '#f56e0f',
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
            <span className="why-hero__eyebrow">OUR STORY BEGINS HERE</span>
            <h1>
              We’re not building an AI company.
              <br />
              We’re building a better future.
            </h1>
            <p>
              Join a team of builders, operators, and thinkers solving the hardest problems in enterprise technology.
            </p>
            <div className="why-hero__actions">
              <Btn to="/careers" variant="white">
                Explore Open Roles ↓
              </Btn>
              <Btn to="/culture" variant="outline-light">
                Our Culture
              </Btn>
            </div>
            <div className="why-hero__chips">
              <span className="why-chip--green">50+ team members</span>
              <span className="why-chip--purple">Remote-first</span>
              <span className="why-chip--purple">$18M Series A</span>
            </div>
          </div>
          <div className="why-hero__tiles">
            <div className="why-hero__tile why-hero__tile--one">
              <img src={heroTile1} alt="Encegen Team with Laser Projection" />
            </div>
            <div className="why-hero__tile why-hero__tile--two">
              <img src={heroTile2} alt="Encegen Command Center" />
            </div>
            <div className="why-hero__tile why-hero__tile--three">
              <img src={heroTile3} alt="Encegen Builders" />
            </div>
            <div className="why-hero__tile why-hero__tile--four">
              <img src={heroTile4} alt="Encegen HQ Berlin" />
              <div className="why-hero__tile-badge">ENCEGEN HQ · BERLIN</div>
            </div>
          </div>
        </div>
      </section>

      <GradBand
        className="why-encegen-quote"
        quote="“We exist to make AI the engine behind every great business decision - and we need exceptional people to make it happen.”"
        cite="Encegen Ai Labs"
      />

      {/* The problem */}
      <section className="section section--dark why-problem-section">
        <div className="container split">
          <div className="why-problem-left">
            <span className="why-problem-chapter">CHAPTER 01 · THE PROBLEM</span>
            <p className="why-problem-fails">fails</p>
            <h2 className="why-problem-heading">
              Most enterprise AI fails before it reaches production.
            </h2>
            <p className="why-problem-body">
              We've seen it firsthand – the $4M pilots, the 18-month deployments, the
              dashboards that no one looks at. Encegen was built to fix this.
            </p>
            <ul className="why-problem-list">
              <li>We move fast and we show our work.</li>
              <li>We build for outcomes, not demos.</li>
              <li>We hire for impact, not credentials.</li>
            </ul>
          </div>
          <div className="top-right-panel-frame" style={{ maxWidth: 540, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <img
              src={typicalVsEncegenSvg}
              alt="Typical Project vs Encegen Project"
              className="top-right-panel-img"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 16,
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section--lavender why-benefits-section">
        <div className="container">
          <SectionHead eyebrow="Chapter 02 · Why Here" title="Everything you need to do your best work." />
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
          <div className="dept-cards-grid">
            {DEPT_CARDS.map((d) => {
              const roleCount = jobsList.filter(
                (j) => j.department.toLowerCase().includes(d.departmentKey.toLowerCase()) ||
                  d.departmentKey.toLowerCase().includes(j.department.toLowerCase())
              ).length
              const countLabel = jobsLoading
                ? 'Loading...'
                : roleCount > 0
                  ? `${roleCount} open ${roleCount === 1 ? 'role' : 'roles'}`
                  : 'No open roles'
              return (
                <div key={d.title} className="dept-card" style={{ ['--dept-color' as string]: d.color }}>
                  <h3>{d.title}</h3>
                  <span className={`count${roleCount === 0 && !jobsLoading ? ' count--empty' : ''}`}>{countLabel}</span>
                  <p>{d.desc}</p>
                  {roleCount > 0 && (
                    <div className="dept-card__chips">
                      {d.chips.map((c) => (
                        <span key={c}>{c}</span>
                      ))}
                    </div>
                  )}
                  <Link to="/careers">View roles →</Link>
                </div>
              )
            })}
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

      {/* Where We Work */}
      <section className="section why-where-section">
        <div className="container">
          <div className="why-where__head">
            <span className="why-where__eyebrow">WHERE WE WORK</span>
            <h2 className="why-where__title">Remote-first. Globally connected.</h2>
            <p className="why-where__sub">Our team works from 12 nationalities. These are our hub cities.</p>
          </div>

          {/* World Map SVG */}
          <div className="why-where__map-wrap">
            <svg
              viewBox="0 0 1000 500"
              className="why-where__map-svg"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="World map showing Encegen hub cities"
            >
              <g fill="#2d3554" stroke="#1e2540" strokeWidth="0.8">
                {/* North America */}
                <path d="M80,80 L160,70 L200,90 L220,130 L200,160 L170,180 L140,200 L110,220 L80,210 L60,190 L50,160 L55,120 Z"/>
                <path d="M60,220 L100,230 L130,250 L120,270 L90,280 L70,260 Z"/>
                <path d="M200,90 L240,80 L270,100 L260,130 L230,140 L210,120 Z"/>
                <path d="M220,40 L260,30 L280,50 L270,70 L240,75 L215,60 Z"/>
                {/* South America */}
                <path d="M150,280 L190,270 L210,300 L220,340 L210,380 L190,410 L170,420 L150,400 L135,370 L130,330 L140,300 Z"/>
                {/* Europe */}
                <path d="M420,70 L460,65 L480,80 L475,100 L455,110 L430,105 L415,90 Z"/>
                <path d="M450,100 L480,95 L500,110 L490,130 L465,135 L445,120 Z"/>
                <path d="M410,90 L430,85 L440,100 L425,115 L408,108 Z"/>
                <path d="M395,75 L410,72 L415,85 L405,92 L393,85 Z"/>
                {/* Africa */}
                <path d="M420,130 L470,120 L500,140 L510,180 L505,230 L490,270 L470,300 L445,310 L420,295 L405,260 L400,220 L405,180 L410,150 Z"/>
                <path d="M460,115 L500,108 L520,125 L515,145 L495,155 L465,148 Z"/>
                {/* Asia */}
                <path d="M500,70 L600,55 L700,60 L770,80 L800,110 L790,140 L750,160 L700,170 L650,165 L600,155 L550,145 L520,130 L500,110 Z"/>
                <path d="M600,160 L680,155 L730,170 L740,200 L720,220 L680,225 L640,210 L610,190 Z"/>
                {/* India */}
                <path d="M570,160 L610,155 L625,180 L620,210 L600,230 L580,225 L565,200 L560,175 Z"/>
                {/* SE Asia */}
                <path d="M680,180 L720,175 L740,195 L730,215 L700,220 L675,205 Z"/>
                <path d="M720,210 L750,205 L765,225 L755,240 L725,238 L710,222 Z"/>
                {/* Japan */}
                <path d="M770,100 L795,95 L805,115 L795,130 L770,125 Z"/>
                <path d="M800,110 L825,105 L830,125 L815,135 L798,125 Z"/>
                {/* Australia */}
                <path d="M720,310 L790,300 L830,320 L840,360 L830,400 L800,420 L760,425 L720,410 L700,380 L695,345 L700,315 Z"/>
                <path d="M855,380 L870,375 L875,395 L865,405 L852,398 Z"/>
                {/* Middle East */}
                <path d="M510,130 L550,125 L565,145 L555,165 L530,168 L510,155 Z"/>
                <path d="M550,80 L610,72 L630,90 L620,110 L590,115 L555,105 Z"/>
                {/* Scandinavia */}
                <path d="M440,45 L465,40 L475,58 L460,68 L438,62 Z"/>
                <path d="M460,40 L480,35 L488,52 L470,60 L455,52 Z"/>
              </g>

              {/* Dot: London, UK */}
              <g>
                <circle cx="403" cy="82" r="16" fill="rgba(109,86,255,0.12)" />
                <circle cx="403" cy="82" r="8" fill="rgba(109,86,255,0.30)" />
                <circle cx="403" cy="82" r="3.5" fill="#8b78ff" />
                <text x="413" y="78" fill="#c4b5fd" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="500">London, UK</text>
              </g>

              {/* Dot: Pune, India */}
              <g>
                <circle cx="590" cy="190" r="16" fill="rgba(109,86,255,0.12)" />
                <circle cx="590" cy="190" r="8" fill="rgba(109,86,255,0.30)" />
                <circle cx="590" cy="190" r="3.5" fill="#8b78ff" />
                <text x="600" y="186" fill="#c4b5fd" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="500">Pune, India</text>
              </g>

              {/* Dot: Sydney, Australia */}
              <g>
                <circle cx="790" cy="376" r="16" fill="rgba(109,86,255,0.12)" />
                <circle cx="790" cy="376" r="8" fill="rgba(109,86,255,0.30)" />
                <circle cx="790" cy="376" r="3.5" fill="#8b78ff" />
                <text x="800" y="372" fill="#c4b5fd" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="500">Sydney, Australia</text>
              </g>
            </svg>
          </div>

          {/* 3 Location Cards */}
          <div className="why-where__cards">
            <div className="why-where__card">
              <h3>Pune</h3>
              <span className="why-where__card-region">APAC</span>
              <p>Headquarters</p>
            </div>
            <div className="why-where__card">
              <h3>London</h3>
              <span className="why-where__card-region">EMEA</span>
              <p>Hub office</p>
            </div>
            <div className="why-where__card">
              <h3>Sydney</h3>
              <span className="why-where__card-region">APAC</span>
              <p>Hub office</p>
            </div>
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
