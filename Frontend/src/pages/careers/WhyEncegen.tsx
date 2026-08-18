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
import { DEPT_COLORS, JOBS } from '../../data/jobs'
import './careers.css'
import '../company/company.css'

const BENEFITS = [
  { icon: '📈', title: 'Equity for all', desc: 'Every full-time employee gets equity. We win together, period.' },
  { icon: '🌍', title: 'Remote-first', desc: 'Work from wherever you think best. We have hubs in London, Berlin and Singapore.' },
  { icon: '📚', title: 'Learning & growth', desc: '$3,000 annual stipend for courses, books and conferences.' },
  { icon: '🏥', title: 'Healthcare', desc: 'Comprehensive health cover for you and your family, globally.' },
  { icon: '🧘', title: 'No meeting days', desc: 'Wednesdays are sacred. Deep work protected by design.' },
  { icon: '✈️', title: 'Team offsites', desc: 'Twice a year, the whole team together. Barcelona, Lisbon, Tokyo.' },
]

const PEOPLE_STATS = [
  { value: '9 years', label: 'Average experience' },
  { value: '40+', label: 'Companies represented' },
  { value: '12', label: 'Countries' },
]

const DEPT_CARDS = [
  {
    title: 'AI & Research',
    count: '4 open roles',
    desc: "Building the models and systems that power Encegen's intelligence layer.",
    chips: ['ML Engineer', 'Research Scientist', 'AI Lead'],
    color: '#6553ee',
  },
  {
    title: 'Engineering',
    count: '3 open roles',
    desc: 'Full-stack, systems, infrastructure. We ship fast and we ship real.',
    chips: ['Backend Engineer', 'Platform Engineer', 'Solutions Architect'],
    color: '#22d3ee',
  },
  {
    title: 'Product',
    count: '2 open roles',
    desc: 'Turning complex AI capabilities into experiences enterprises actually want to use.',
    chips: ['Product Manager', 'Product Designer'],
    color: '#22c55e',
  },
  {
    title: 'Go-to-Market',
    count: '3 open roles',
    desc: "Sales, marketing, and solutions for a team that's scaling globally.",
    chips: ['Account Executive', 'Growth Marketing', 'Sales Engineer'],
    color: '#f59e0b',
  },
]

const VOICES = [
  {
    initials: 'PN',
    name: 'Priya N.',
    role: 'Principal AI Engineer',
    quote: "I shipped a model that went live in 48 hours. At my last company, that would've taken 6 months of approvals.",
    hue: 150,
  },
  {
    initials: 'MB',
    name: 'Marcus B.',
    role: 'Solutions Architect',
    quote: 'The deep work culture here is real. I have actual focus time every day. It changed how I think about work.',
    hue: 215,
  },
  {
    initials: 'SC',
    name: 'Sophia C.',
    role: 'Senior PM',
    quote: 'I own the whole product area. Not a feature, not a roadmap item – the whole area. That kind of ownership is rare.',
    hue: 330,
  },
]

const CITIES = [
  { name: 'London', sub: 'UK · Hub office', top: '32%', left: '46%' },
  { name: 'Berlin', sub: 'Germany · Hub office', top: '30%', left: '51%' },
  { name: 'Singapore', sub: 'SG · Hub office', top: '62%', left: '76%' },
  { name: 'New York', sub: 'US · Hub office', top: '38%', left: '27%' },
  { name: 'San Francisco', sub: 'US · Remote hub', top: '42%', left: '15%' },
]

const AWARDS = [
  { by: 'Glassdoor', title: 'Best Places to Work', year: '2025' },
  { by: 'Forbes', title: 'AI 50', year: '2024' },
  { by: 'Gartner', title: 'Cool Vendor', year: '2024' },
  { by: 'Deloitte', title: 'Fast 500', year: '2024' },
  { by: 'G2', title: 'Top 50 AI Products', year: '2025' },
]

export default function WhyEncegen() {
  return (
    <>
      {/* Hero */}
      <section className="why-hero">
        <div className="container why-hero__grid">
          <div>
            <span className="phero__badge">Our story begins with you</span>
            <h1>
              We're not building an AI company. We're building a better future.
            </h1>
            <p>
              Join a team of builders, operators, and thinkers solving the hardest problems in
              enterprise technology.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
              <Btn to="/careers" variant="white">
                Explore Open Roles →
              </Btn>
              <Btn to="/culture" variant="outline-light">
                Our Culture
              </Btn>
            </div>
            <div className="why-hero__chips">
              <span>30+ team members</span>
              <span>· Remote-first</span>
              <span>· $18M Series A</span>
            </div>
          </div>
          <div className="why-hero__tiles">
            <ArtTile variant="purple" />
            <ArtTile variant="magenta" />
            <ArtTile variant="blue" />
          </div>
        </div>
      </section>

      <GradBand
        quote="We exist to make AI the engine behind every great business decision - and we need exceptional people to make it happen."
        cite="Alex Rivera, CEO"
      />

      {/* The problem */}
      <section className="section section--dark">
        <div className="container split">
          <div>
            <p className="shead__eyebrow" style={{ color: 'var(--purple-400)' }}>
              Chapter 02 · The Problem
            </p>
            <span className="fail-word">fails</span>
            <h2 className="left-title" style={{ color: '#fff' }}>
              Most enterprise AI fails before it reaches production.
            </h2>
            <p className="left-copy" style={{ color: '#a8a5cb' }}>
              We've seen it firsthand – the $4M pilots, the 18-month deployments, the dashboards
              that no one looks at. Encegen was built to fix this.
            </p>
            <ul className="check-list check-list--dark">
              <li>We move fast and we show our work</li>
              <li>We build for outcomes, not demos</li>
              <li>We hire for impact, not credentials</li>
            </ul>
          </div>
          <div className="fail-panel">
            <div className="fail-panel__head">
              <span>Typical AI Project</span>
              <span>With Encegen</span>
            </div>
            <div className="fail-panel__rows">
              {[
                { bad: '12 mo', label: 'Time to deploy', good: '3 wks' },
                { bad: '$2.4M', label: 'Total cost', good: '$180K' },
                { bad: '3%', label: 'User adoption', good: '74%' },
                { bad: '18 mo', label: 'Time to value', good: '< 30 days' },
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
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Chapter 03 · Why Here" title="Everything you need to do your best work." />
          <div className="cards-3">
            {BENEFITS.map((b) => (
              <div key={b.title} className="benefit">
                <span className="benefit__icon">{b.icon}</span>
                <strong>{b.title}</strong>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="Chapter 04 · The People"
            title="Built by people who've sat in your seat."
            sub="Our team has worked at Siemens, McKinsey, Google, and DeepMind. They left to build something better."
          />
          <div className="split" style={{ marginTop: 56 }}>
            <div className="tstat-row" style={{ gridTemplateColumns: '1fr', marginTop: 0 }}>
              {PEOPLE_STATS.map((s) => (
                <div key={s.label} className="tstat" style={{ textAlign: 'left', display: 'flex', alignItems: 'baseline', gap: 14 }}>
                  <strong>{s.value}</strong>
                  <span style={{ marginTop: 0 }}>{s.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {VOICES.map((v) => (
                <div key={v.initials} className="voice" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <Avatar text={v.initials} hue={v.hue} size={44} />
                  <div>
                    <p style={{ margin: 0 }}>“{v.quote}”</p>
                    <strong style={{ marginTop: 8 }}>
                      {v.name} <span style={{ fontWeight: 400 }}>· {v.role}</span>
                    </strong>
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
          <div className="cards-2">
            {DEPT_CARDS.map((d) => (
              <div key={d.title} className="dept-card" style={{ ['--dept-color' as string]: d.color }}>
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
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="Chapter 06 · Real Voices" title="Hear from the team." />
          <div className="cards-3">
            {VOICES.map((v) => (
              <div key={v.name} className="voice">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Avatar text={v.initials} hue={v.hue} size={40} />
                  <div>
                    <strong style={{ margin: 0 }}>{v.name}</strong>
                    <span>{v.role}</span>
                  </div>
                </div>
                <p>“{v.quote}”</p>
                <Stars />
              </div>
            ))}
          </div>
          <div className="rule-bar">
            <strong>Join 50+ people already building the future of enterprise AI</strong>
            <a href="#" style={{ color: 'var(--purple-300)', fontSize: 14, fontWeight: 600 }}>
              → Read reviews on Glassdoor
            </a>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Chapter 07 · Your Role" title="Where will you make your mark?" />
          <div style={{ marginTop: 40 }}>
            {JOBS.slice(0, 7).map((job) => (
              <div key={job.slug} className="job-row" style={{ ['--group-color' as string]: DEPT_COLORS[job.department] }}>
                <div className="job-row__info">
                  <h3>{job.title}</h3>
                  <div className="job-row__chips">
                    <span>{job.department}</span>
                    <span>{job.type}</span>
                    <span>{job.posted}</span>
                  </div>
                </div>
                <span className="job-row__loc">📍 {job.location}</span>
                <Link to={`/careers/${job.slug}`} className="job-row__apply">
                  Apply →
                </Link>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
            <Btn to="/careers" variant="lavender">
              See all {JOBS.length} open roles →
            </Btn>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead
            title="Remote-first. Globally connected."
            sub="Our team works from 18 countries. These are our hub cities."
            dark
          />
          <div className="world-map">
            {CITIES.map((c) => (
              <span key={c.name} className="world-map__dot" style={{ top: c.top, left: c.left }} />
            ))}
          </div>
          <div className="city-cards">
            {CITIES.map((c) => (
              <div key={c.name} className="city-card">
                <strong>{c.name}</strong>
                <span>{c.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="Recognition"
            title="A great place to build."
            sub={<>“One of the most exciting AI companies in Europe.” – Forbes, 2025</>}
          />
          <div className="award-cards">
            {AWARDS.map((a) => (
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
        dark
        line1="This is where the story gets interesting."
        line2="And you could be in the next chapter."
        sub="We're not just hiring. We're building a team of people who give a damn about making AI work for the real world."
        primary={{ label: 'View All Open Roles', to: '/careers' }}
        secondary={{ label: 'Send an Open Application', to: '/careers' }}
      />
    </>
  )
}
