import {
  Avatar,
  Btn,
  ClosingCTA,
  LiveDot,
  MockPanel,
  PageHero,
  SectionHead,
} from '../../components/kit'
import './company.css'

const MILESTONES = [
  {
    year: '2019',
    title: 'The Spark',
    desc: 'Two founders watched a $4M AI pilot fail in real time. They left their corporate jobs that week to build differently.',
  },
  {
    year: '2020',
    title: 'First Clients',
    desc: 'Shipped the Encegen platform to 3 pilot clients. Delivered 40% efficiency gains in under 90 days.',
  },
  {
    year: '2022',
    title: 'Series A',
    desc: 'Raised $18M. Expanded to London, Singapore, and Dubai. Crossed 50 enterprise clients.',
  },
  {
    year: '202x',
    title: 'Global Scale',
    desc: 'Serving 200+ clients in 18 countries. $2B+ in value created for enterprise partners worldwide.',
  },
]

const TEAM = [
  { initials: 'AR', name: 'Alex Rivera', role: 'CEO & Co-Founder', desc: 'Built and scaled AI-first products for Fortune 500 operations.', hue: 255 },
  { initials: 'PN', name: 'Priya Nair', role: 'CTO', desc: 'Architected enterprise AI platforms with reliability and explainability.', hue: 150 },
  { initials: 'MB', name: 'Marcus Böhm', role: 'Chief AI Officer', desc: 'Led AI research and deployment across finance and operations.', hue: 215 },
  { initials: 'SC', name: 'Sophia Chen', role: 'Chief Revenue Officer', desc: 'Scaled go-to-market for AI-first enterprise software.', hue: 30 },
]

const VALUES = [
  { title: 'Honesty over hype', desc: 'We will tell you when AI is the wrong answer.', bg: '#4c2e91' },
  { title: 'Speed with integrity', desc: 'We move fast and we never cut corners.', bg: '#14295e' },
  { title: 'Client obsession', desc: 'Your success is our only KPI.', bg: '#14532d' },
  { title: 'Radical clarity', desc: 'No jargon. No confusion. Just results.', bg: '#6b2020' },
  { title: 'Built to last', desc: 'We build for 10 years, not the next demo.', bg: '#4d3f10' },
  { title: 'Human first', desc: 'AI should amplify people, never replace them.', bg: '#4a2478' },
]

const STATS = [
  { value: '200+', label: 'Clients Transformed' },
  { value: '$2B+', label: 'in Value Created' },
  { value: '50+', label: 'AI Models in Production' },
  { value: '18', label: 'Countries' },
]

const CLIENT_LOGOS = ['Acme Corp', 'Northwind', 'Globex', 'Initech', 'Umbrella', 'Stark Ind', 'Wayne Ent', 'Massimo', 'Soylent', 'Hooli']

export default function OurStory() {
  return (
    <>
      <PageHero
        title={
          <>
            We didn't build
            <br />
            an AI company.
            <br />
            We built a better future.
          </>
        }
        sub="Encegen was born from a simple frustration – that most enterprise software talks about AI, but very few actually deliver it."
        actions={
          <>
            <Btn to="#chapter-01" variant="white">Read the story →</Btn>
            <Btn to="/values" variant="outline-light">
              Our values
            </Btn>
          </>
        }
      />

      {/* Chapter 01 */}
      <section id="chapter-01" className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Chapter 01</p>
            <p className="shead__eyebrow" style={{ color: '#ef4444', marginTop: 8 }}>
              The Frustration
            </p>
            <h2 className="left-title">
              Most enterprise software promises transformation.
              <br />
              Most delivers dashboards.
            </h2>
            <p className="left-copy">
              We've all been there: the demo is slick, the slides are convincing, and the ROI model
              looks too good to be true. But when the pilot starts, the reality sets in: brittle
              models, broken workflows, and decisions delayed by weeks.
            </p>
            <p className="left-copy">
              The gap between AI hype and real enterprise value isn't a technology problem – it's a
              trust problem. We built Encegen to close that gap with a different kind of AI: one
              that runs operations, not just reports them.
            </p>
          </div>
          <div className="truth">
            <div className="truth__head">
              <span className="truth__title">The Truth</span>
              <span className="truth__note">Reality vs. promise</span>
            </div>
            <div className="truth__cols">
              <div className="truth__col truth__col--promise">
                <h4>The Promise</h4>
                <ul>
                  <li>AI that automates everything</li>
                  <li>10x ROI in 30 days</li>
                  <li>Zero integration effort</li>
                </ul>
              </div>
              <div className="truth__col truth__col--reality">
                <h4>The Reality</h4>
                <ul>
                  <li>Models that break in production</li>
                  <li>ROI measured in dashboards</li>
                  <li>Months of "integration" work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 02 — quote + timeline */}
      <section className="section section--dark">
        <div className="container">
          <div className="shead shead--dark">
            <h2 className="shead__title" style={{ maxWidth: 860, marginInline: 'auto' }}>
              "We sat in a boardroom watching a $4M AI pilot fail in real time. That was the day we
              decided to build differently."
            </h2>
            <p className="shead__sub" style={{ color: 'var(--purple-400)', fontWeight: 600 }}>
              – ALEX RIVERA, CEO &amp; CO-FOUNDER, 2019
            </p>
          </div>
          <div className="milestones">
            {MILESTONES.map((m) => (
              <div key={m.year} className="milestone">
                <span className="milestone__year">{m.year}</span>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 03 */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Chapter 03</p>
            <h2 className="left-title">We build AI that actually runs your business.</h2>
            <ul className="check-list" style={{ marginTop: 30 }}>
              <li>
                <strong>No black boxes. Only outcomes.</strong>
                <br />
                We measure success by decisions made, not models trained.
              </li>
              <li>
                <strong>Deployed in weeks, not years.</strong>
                <br />
                We ship fast, iterate fast, and improve fast – without breaking workflows.
              </li>
              <li>
                <strong>Your data never leaves your walls.</strong>
                <br />
                We run where you need us: on-prem, in your cloud, or in a secure enclave.
              </li>
            </ul>
          </div>
          <MockPanel
            title="AI Deployment Status"
            right={<LiveDot label="Live" />}
            rows={[
              { label: 'Anomaly Detection', value: 'Active', chip: '99.2% accuracy' },
              { label: 'Forecasting Engine', value: 'Live', chip: '1.5ms latency', chipColor: '#22d3ee' },
              { label: 'Compliance Monitor', value: 'Running', chip: '0 violations', chipColor: '#a99cff' },
              { label: 'Document Intelligence', value: 'Active', chip: '847 docs/day' },
              { label: 'Risk Scoring Engine', value: 'Live', chip: '2.3ms response', chipColor: '#22d3ee' },
              { label: 'Supplier Validation', value: 'Running', chip: '12,400 vendors', chipColor: '#a99cff' },
              { label: 'Data Reconciliation', value: 'Active', chip: '99.99% match' },
              { label: 'NLP Classification', value: 'Live', chip: '94.7% confidence', chipColor: '#22d3ee' },
            ]}
            footer={
              <>
                <span>● 99.9% uptime · All systems operational</span>
                <span>Updated just now</span>
              </>
            }
          />
        </div>
      </section>

      {/* Chapter 04 — team */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Chapter 04"
            title="Built by people who've sat in your seat."
            sub="Our team comes from the operations, finance, and technology floors of the companies we serve. We know what bad data costs."
          />
          <div className="cards-4">
            {TEAM.map((t) => (
              <article key={t.initials} className="team-card">
                <Avatar text={t.initials} hue={t.hue} size={48} />
                <h3>{t.name}</h3>
                <span className="role">{t.role}</span>
                <p>{t.desc}</p>
              </article>
            ))}
          </div>
          <div className="rule-bar">
            <strong>
              We have one rule at Encegen: if you wouldn't bet your own career on it, we don't ship
              it.
            </strong>
            <span className="rule-bar__avatars">
              {TEAM.map((t) => (
                <Avatar key={t.initials} text={t.initials} hue={t.hue} size={36} />
              ))}
              <Avatar text="JD" hue={330} size={36} />
            </span>
          </div>
        </div>
      </section>

      {/* Chapter 05 — values */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead title="What we stand for." dark />
          <div className="value-tiles">
            {VALUES.map((v, i) => (
              <div key={v.title} className="value-tile" style={{ background: v.bg }}>
                <em>{String(i + 1).padStart(2, '0')}</em>
                <strong>{v.title}</strong>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + logos */}
      <section className="section section--light">
        <div className="container">
          <div className="tstat-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {STATS.map((s) => (
              <div key={s.label} className="tstat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="logo-wall">
            {CLIENT_LOGOS.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        trusted={['Siemens', 'Vodafone', 'Airbus', 'IBM']}
        line1="This story isn't over."
        line2="It's just getting started."
        sub="Whether you're a client, a partner, or someone who wants to build the future of enterprise AI – there's a place for you in this story."
        primary={{ label: 'Join the Team', to: '/careers' }}
        secondary={{ label: 'Partner with Us' }}
        checks={['5,000+ users daily', '99.9% uptime', 'SOC 2 certified']}
      />
    </>
  )
}
