import {
  ClosingCTA,
  MockPanel,
  PageHero,
  SectionHead,
  TestimonialCard,
} from '../../components/kit'
import './products.css'

const CAPABILITIES = [
  { icon: '📄', title: 'Smart Resume Parsing', desc: 'AI extracts skills, experience, and qualifications from any resume format in seconds.' },
  { icon: '🎯', title: 'Intelligent Job Matching', desc: 'Our algorithm matches candidates to roles based on 50+ compatibility factors.' },
  { icon: '⚙', title: 'Automated Screening', desc: 'AI-powered pre-screening ranks candidates by fit, saving hours of manual review.' },
  { icon: '📊', title: 'Real-Time Analytics', desc: 'Track pipeline health, time-to-hire and conversion rates with live dashboards.' },
]

const CHALLENGES = [
  {
    title: 'Manual Screening',
    desc: 'Recruiters spend an average of 23 hours screening resumes for a single hire.',
  },
  {
    title: 'The Black Hole',
    desc: '75% of qualified resumes are never seen by a human due to primitive keyword filters.',
  },
  {
    title: 'Stagnant Pipeline',
    desc: 'Slow response times cause the best candidates to accept offers elsewhere.',
  },
]

const FIXES = [
  {
    title: '3 Min Automated Screen',
    desc: 'AI comprehensively reviews and ranks every applicant based on deep semantic understanding.',
    chip: '100% evaluated',
  },
  {
    title: 'Zero Missing Talent',
    desc: 'No resume falls into a black hole; our AI analyzes contextual capabilities, suggesting alternative roles when needed.',
    chip: 'Full coverage',
  },
  {
    title: '12 Days Time-to-Hire',
    desc: 'Automated scheduling and instant feedback loops keep candidates engaged and pipelines moving.',
    chip: '77% speed improvement',
  },
]

const SEEKER_POINTS = [
  'AI-powered job recommendations tailored to your profile',
  'One-click apply to hundreds of matching roles',
  'Real-time application status tracking',
  'Salary insights and market intelligence',
  'Interview preparation powered by AI',
]

const EMPLOYER_TILES = [
  { icon: '💻', title: 'Tech Hiring', desc: 'Scale backend, frontend, ML Ops and research teams with targeted skill vetting.' },
  { icon: '👔', title: 'Executive Search', desc: 'Find senior executives mapped to operational leadership metrics.' },
  { icon: '🎓', title: 'Campus Recruitment', desc: 'Filter and hire graduates from 300+ global universities.' },
  { icon: '📝', title: 'Contract Staffing', desc: 'Spin up vetted contract specialists in hours, fully compliant.' },
  { icon: '📦', title: 'Bulk Hiring', desc: 'Deploy parallelized throughput assessment for volume hiring drives.' },
  { icon: '🤝', title: 'Diversity Hiring', desc: 'Remove subconscious bias with programmatic blind evaluation profiles.' },
]

const TESTIMONIALS = [
  {
    tag: 'Siemens',
    color: '#22c55e',
    quote: 'EasyHunt reduced our engineering hiring time by 50% in the first quarter — results we never thought possible with this quality.',
    initials: 'AM',
    name: 'Anna Müller',
    role: 'Head of Talent, Siemens',
    metric: '50% faster hiring',
    hue: 150,
  },
  {
    tag: 'Uber',
    color: '#3b82f6',
    quote: 'The AI matches were accurate from day one. Our development team secured 5 critical architectural hires in under 2 weeks.',
    initials: 'JP',
    name: 'James Park',
    role: 'Engineering Director, Uber',
    metric: '5 key hires in 2 weeks',
    hue: 215,
  },
  {
    tag: 'Airbus',
    color: '#f59e0b',
    quote: "EasyHunt gave us precise visibility and vetting capability at a scale we couldn't achieve manually — and it acts on what it finds.",
    initials: 'MD',
    name: 'Marie Dubois',
    role: 'VP People, Airbus',
    metric: '95% match precision',
    hue: 30,
  },
]

export default function HrPortal() {
  return (
    <>
      <PageHero
        badge="AI-Powered Recruitment"
        title={
          <>
            Find the Right Talent. Land the
            <br />
            Right Job. Powered by AI.
          </>
        }
        sub="EasyHunt uses intelligent matching, automated screening, and real-time analytics to connect the best candidates with the best opportunities – 10x faster than traditional hiring."
        trusted={['TCS', 'Infosys', 'Wipro', 'HCL', 'Accenture', 'Deloitte']}
        trustedLabel="trusted by 2,000+ companies worldwide"
      >
        <div style={{ width: '100%', maxWidth: 680, marginTop: 56 }}>
          <MockPanel
            title="EasyHunt Console — Senior AI Engineer Match Pipeline"
            right="Active Batch"
            rows={[
              { label: 'Sarah Jenkins', sub: 'ML Platform · 8 yrs · San Francisco', chip: '98% Match', chipColor: '#2fe08e' },
              { label: 'David Chen', sub: 'LLM Infra · 6 yrs · Remote', chip: '89% Match', chipColor: '#22d3ee' },
              { label: 'Amelia Rodriguez', sub: 'Applied Research · 7 yrs · NYC', chip: '84% Match', chipColor: '#a99cff' },
            ]}
            footer={
              <>
                <span>412 Resumes Processed</span>
                <span>95% Screening Accuracy</span>
                <span>12 Days Avg Time to Hire</span>
              </>
            }
          />
        </div>
      </PageHero>

      {/* How it works */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="How It Works"
            title="AI that understands talent — not just keywords."
            sub="Traditional recruitment relies on primitive keyword searches, missing top candidates. EasyHunt evaluates semantic skill layers, cultural parameters, and real capabilities."
          />
          <div className="split" style={{ marginTop: 56 }}>
            <div>
              <h3 className="left-title" style={{ fontSize: 24 }}>
                The next generation of recruitment intelligence
              </h3>
              <p className="left-copy">
                EasyHunt translates resumes, online portfolios, and experience summaries into a
                high-dimensional skills matrix. Our neural matching model accurately predicts
                candidate success and role compatibility before the first interview.
              </p>
              <ul className="check-list">
                <li>
                  <strong>Semantic Skill Assessment</strong> — real, demonstrated competencies
                  instead of keyword matching
                </li>
                <li>
                  <strong>Experience Context Modeling</strong> — understands the scale and scope of
                  previous environments (enterprise vs startup)
                </li>
                <li>
                  <strong>Intent &amp; Growth Analysis</strong> — predicts career progression
                  vectors to align candidate aspirations with company growth
                </li>
              </ul>
            </div>
            <MockPanel
              title="AI Compatibility Match Evaluation"
              right="Contacted"
              rows={[
                { label: 'Elena Rostova', sub: 'Principal Product Designer', chip: '97.2% Compatibility', chipColor: '#2fe08e' },
                { label: 'Technical Competence', chip: '98%', chipColor: '#2fe08e' },
                { label: 'Craft Versatility', chip: '96%', chipColor: '#22d3ee' },
                { label: 'Leadership Signals', chip: '94%', chipColor: '#a99cff' },
                { label: 'Culture Alignment', chip: '97%', chipColor: '#2fe08e' },
              ]}
              footer={<span>→ Passed background verification · 6h ago</span>}
            />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Platform Capabilities"
            title="Four ways AI transforms your hiring."
            sub="Unleash an autonomous pipeline that screens, validates, ranks, and coordinates candidates instantly."
          />
          <div className="cards-2">
            {CAPABILITIES.map((c) => (
              <article key={c.title} className="fcard">
                <span className="fcard__icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="The Challenge"
            title="Most companies are still hiring blind. EasyHunt fixes that."
            sub="In a rapid market, traditional applicant tracking systems act as digital filing cabinets. EasyHunt provides operational execution."
          />
          <div className="cards-2" style={{ alignItems: 'start' }}>
            <div className="compare-col">
              {CHALLENGES.map((c) => (
                <div key={c.title} className="compare-item compare-item--bad">
                  <span className="compare-item__mark">✕</span>
                  <div>
                    <strong>{c.title}</strong>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="compare-col">
              {FIXES.map((f) => (
                <div key={f.title} className="compare-item compare-item--good">
                  <span className="compare-item__mark">✓</span>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                  <span className="compare-item__chip">{f.chip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job seekers */}
      <section className="section section--dark">
        <div className="container split">
          <div>
            <p className="shead__eyebrow" style={{ color: 'var(--purple-400)' }}>
              For Job Seekers
            </p>
            <h2 className="left-title" style={{ color: '#fff' }}>
              Your dream job, found by AI.
            </h2>
            <p className="left-copy" style={{ color: '#a8a5cb' }}>
              Stop pasting resumes into generic portals. EasyHunt continuously acts on your behalf –
              analyzing, suggesting, and facilitating direct connections with premier technical
              teams.
            </p>
            <ul className="check-list check-list--dark">
              {SEEKER_POINTS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <MockPanel
            title="Candidate Dashboard"
            right="LiveProfile"
            rows={[
              { label: 'Backend Architect', sub: 'Sr · San Francisco / Remote', chip: '97% Compatible', chipColor: '#2fe08e' },
              { label: 'Full Stack Engineer', sub: 'TechCorp · NYC', chip: '94%', chipColor: '#22d3ee' },
              { label: 'DevRel Engineer', sub: 'StartupX · Remote', chip: '91%', chipColor: '#a99cff' },
            ]}
            footer={<span>✓ Interview scheduled — Metadata team, SF at 2:00 PM</span>}
          />
        </div>
      </section>

      {/* Employers */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="For Employers"
            title="Hire smarter. Hire faster."
            sub="Manage thousands of applications, pinpoint immediate fits, and collaborate across departments with a unified AI platform."
          />
          <div className="cards-3">
            {EMPLOYER_TILES.map((t) => (
              <article key={t.title} className="fcard">
                <span className="fcard__icon">{t.icon}</span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Success Stories"
            title="Real companies. Real results. Real hires."
            sub="See how top global enterprises deploy EasyHunt to streamline hiring operations."
          />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        dark
        line1="Ready to transform your hiring?"
        sub="Join thousands of global companies securing elite industry talent using EasyHunt's cognitive pipeline. Deployed in under 30 days."
        checks={['2,000+ companies using EasyHunt', '95% satisfaction', 'SOC 2 certified']}
      />
    </>
  )
}
