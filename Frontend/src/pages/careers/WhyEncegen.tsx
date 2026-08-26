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
  { icon: '🚀', title: 'High-Impact Ownership', desc: 'Work directly on mission-critical AI systems and client solutions. What you build goes into production.' },
  { icon: '📍', title: 'Pune HQ & Hybrid', desc: 'Collaborate at our Pune headquarters with flexible hybrid workflow options.' },
  { icon: '🧠', title: 'Rapid AI Learning', desc: 'Hands-on exposure to cutting-edge Generative AI, AI agents, document intelligence, and modern full-stack engineering.' },
  { icon: '💡', title: 'Direct Client Engagement', desc: 'Understand real business workflows and engineer solutions that solve real challenges for clients.' },
  { icon: '⚡', title: 'Agile Build Sprints', desc: 'Move fast with a startup mindset: Build → Test → Learn → Improve.' },
  { icon: '🤝', title: 'Competitive Growth', desc: 'Work with a dedicated, mission-driven team with direct recognition and growth incentives.' },
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
  return (
    <>
      {/* Hero */}
      <section className="why-hero">
        <div className="container why-hero__grid">
          <div>
            <span className="phero__badge">Our story begins with you</span>
            <h1>
              We don't just build software. We engineer what comes next.
            </h1>
            <p>
              Join a team of builders, operators, and thinkers solving real business problems with
              practical AI and modern engineering.
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
              <span>11–50 team members</span>
              <span>· Pune Headquarters</span>
              <span>· Problem-First Culture</span>
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
            title="A team of curious and practical problem solvers."
            sub="Engineers, designers, and AI developers building intelligent systems from Pune, India."
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
                    <p style={{ margin: 0, color: 'var(--ink-700)', fontSize: '0.93rem', lineHeight: 1.55 }}>“{v.quote}”</p>
                    <strong style={{ marginTop: 8, color: 'var(--ink-900)', display: 'block' }}>
                      {v.name} <span style={{ fontWeight: 600, color: 'var(--purple-600)' }}>· {v.role}</span>
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
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="Chapter 06 · Real Voices" title="Hear from our team." />
          <div className="cards-3">
            {VOICES.map((v) => (
              <div key={v.name} className="voice">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Avatar text={v.initials} hue={v.hue} size={40} />
                  <div>
                    <strong style={{ margin: 0, color: 'var(--ink-900)' }}>{v.name}</strong>
                    <span style={{ color: 'var(--purple-600)', fontWeight: 600 }}>{v.role}</span>
                  </div>
                </div>
                <p style={{ color: 'var(--ink-700)', fontSize: '0.93rem', lineHeight: 1.6 }}>“{v.quote}”</p>
                <Stars />
              </div>
            ))}
          </div>
          <div className="rule-bar">
            <strong>Join 11–50 people building the future of applied AI in Pune</strong>
            <Link to="/careers" style={{ color: 'var(--purple-300)', fontSize: 14, fontWeight: 600 }}>
              → Explore open roles
            </Link>
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
              See all open roles →
            </Btn>
          </div>
        </div>
      </section>

      {/* 2 Offices in Pune */}
      <section className="section section--dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHead
            title="2 Offices in Pune · Innovating for the World"
            sub="Our core technology and engineering hubs operate out of Pune, Maharashtra, India."
            dark
          />
          <div style={{ maxWidth: 700, margin: '32px auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, textAlign: 'left' }}>
            <div style={{ padding: 24, background: 'rgba(255,255,255,0.05)', borderRadius: 14, border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ color: '#fff', fontSize: 18, marginBottom: 8 }}>📍 Wagholi Office</h4>
              <p style={{ color: '#a8a5cb', fontSize: 14, lineHeight: 1.6 }}>
                <a
                  href="https://maps.app.goo.gl/TXjPKk6BFvho6c4R7"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#c4b5fd', textDecoration: 'underline' }}
                >
                  BA HUB, Office no : 03, Sambhaji Nagar (Baif road), Near BA Varmont Society, Wagholi, Pune-412207 ↗
                </a>
              </p>
            </div>
            <div style={{ padding: 24, background: 'rgba(255,255,255,0.05)', borderRadius: 14, border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ color: '#fff', fontSize: 18, marginBottom: 8 }}>📍 Pashan Office</h4>
              <p style={{ color: '#a8a5cb', fontSize: 14, lineHeight: 1.6 }}>
                Legismith Partners LLP, Pashan, Pune
              </p>
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
