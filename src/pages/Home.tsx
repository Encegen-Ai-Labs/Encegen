import { Link } from 'react-router-dom'
import { ArtTile, Btn, PageHero, SectionHead, TestimonialCard } from '../components/kit'
import './Home.css'

const LOGOS = ['IBM', 'Airbus', 'Uber', 'Siemens', 'Vodafone', 'Celanese', 'Coca-Cola', 'Wipro']

const FACTS = [
  { value: '2019', label: 'Founded', sub: 'Built from enterprise AI research' },
  { value: '3,500+', label: 'Team', sub: 'Engineers, scientists & operators' },
  { value: '30+', label: 'Global offices', sub: 'Across North America, Europe & APAC' },
]

const CAPABILITIES = [
  {
    icon: '◎',
    title: 'Real-Time Process Mining',
    desc: 'Discover and visualize every process variant as it actually runs, not how you think it runs.',
  },
  {
    icon: '✦',
    title: 'AI-Powered Recommendations',
    desc: 'Surface the highest-value improvement opportunities across your entire operation.',
  },
  {
    icon: '⚡',
    title: 'Execution Engine',
    desc: 'Automate fixes and embed intelligence directly into SAP, Salesforce, and ServiceNow.',
  },
]

const INDUSTRIES = [
  { icon: '⚙', title: 'Manufacturing', desc: 'Optimize production cycles and supply chain resilience.' },
  { icon: '🏦', title: 'Financial Services', desc: 'Streamline risk management and order-to-cash workflows.' },
  { icon: '🛍', title: 'Retail', desc: 'Enhance inventory turnover and omnichannel experiences.' },
  { icon: '🏥', title: 'Healthcare', desc: 'Improve patient throughput and billing accuracy.' },
  { icon: '⚡', title: 'Utilities', desc: 'Manage grid operations and customer service processes.' },
  { icon: '🚗', title: 'Automotive', desc: 'Accelerate time-to-market for next-gen vehicle production.' },
]

const STATS = [
  { value: '5,000+', label: 'Enterprise customers' },
  { value: '$2.4T', label: 'Business value delivered' },
  { value: '98%', label: 'Customer satisfaction' },
  { value: '300%', label: 'Avg. ROI within 12 months' },
]

const STORIES = [
  {
    tag: 'Siemens',
    color: '#22c55e',
    quote:
      'Encegen gave us end-to-end visibility we never thought possible - transforming how we run global operations.',
    initials: 'AM',
    name: 'Anna Müller',
    role: 'VP Supply Chain, Siemens AG',
    metric: '90% fewer invoice exceptions',
    hue: 150,
  },
  {
    tag: 'Uber',
    color: '#3b82f6',
    quote:
      'The AI recommendations were actionable from day one. Finance closes the books 5 days faster every single month.',
    initials: 'JP',
    name: 'James Park',
    role: 'Head of Finance Ops, Uber',
    metric: '40% faster invoice processing',
    hue: 215,
  },
  {
    tag: 'Airbus',
    color: '#f59e0b',
    quote:
      'Process intelligence is now central to our digital transformation - deployed across 14 countries.',
    initials: 'MD',
    name: 'Marie Dubois',
    role: 'Chief Digital Officer, Airbus',
    metric: '94% process compliance',
    hue: 30,
  },
]

const RESOURCES = [
  { tag: 'Research', title: 'The 2026 Process Intelligence Report', meta: '8 min read', art: 'purple' },
  { tag: 'Masterclass', title: 'AI at Scale: A CEO Masterclass', meta: 'Available On-Demand', art: 'cyan' },
  { tag: 'Technical Paper', title: 'Download the EMS technical paper', meta: 'Download PDF', art: 'magenta' },
]

export default function Home() {
  return (
    <>
      <PageHero
        badge="Process Intelligence Platform"
        title="Turn Every Process Into a Competitive Advantage"
        sub="Encegen gives you the x-ray vision to see, fix, and optimize every business process – in real time, at global scale."
        actions={
          <>
            <Btn to="/platform" variant="white">
              Start for free →
            </Btn>
            <Btn variant="outline-light">Watch demo</Btn>
          </>
        }
        trustedLabel="5,000+ enterprise customers worldwide"
        trusted={[]}
      >
        <div className="home-hero-visual">
          <div className="home-hero-visual__panel">
            <span className="home-hero-visual__stat">
              <em>Confidence</em>
              <strong>94.2%</strong>
            </span>
            <ArtTile variant="purple" className="home-hero-visual__art" />
            <span className="home-hero-visual__stat">
              <em>AI Recommendations</em>
              <strong>Live</strong>
            </span>
          </div>
        </div>
      </PageHero>

      {/* Logo marquee */}
      <section className="home-logos">
        <div className="container">
          <p className="home-logos__label">Trusted by the world's leading companies</p>
          <div className="home-logos__row marquee">
            <div className="marquee__track">
              {[...LOGOS, ...LOGOS].map((l, i) => (
                <span key={`${l}-${i}`}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">About Encegen AI Labs</p>
            <h2 className="left-title">We believe every great business runs on great processes.</h2>
            <p className="left-copy">
              Encegen AI Labs builds process intelligence technology that gives enterprise teams
              real-time visibility into how their operations actually run — not how they think they
              run. Founded by a team of AI researchers and enterprise operators, we are on a mission
              to make every business process transparent, measurable, and continuously improving.
            </p>
          </div>
          <div className="home-facts">
            {FACTS.map((f) => (
              <div key={f.label} className="home-facts__card">
                <strong>
                  {f.value} <span>{f.label}</span>
                </strong>
                <p>{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Capabilities"
            title="Everything you need to achieve process excellence"
          />
          <div className="cards-3">
            {CAPABILITIES.map((c) => (
              <article key={c.title} className="fcard fcard--top-accent">
                <span className="fcard__icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="section section--dark">
        <div className="container split">
          <div>
            <p className="shead__eyebrow" style={{ color: 'var(--purple-400)' }}>
              The Encegen Platform
            </p>
            <h2 className="left-title" style={{ color: '#fff' }}>
              One platform. Every process. Unlimited potential.
            </h2>
            <p className="left-copy" style={{ color: '#a8a5cb' }}>
              From procurement to order-to-cash, Encegen connects every part of your business into a
              single, living process intelligence layer.
            </p>
            <ul className="check-list check-list--dark">
              <li>EMS (Execution Management System)</li>
              <li>Process Analytics &amp; Mining</li>
              <li>Action Flows &amp; Automation</li>
              <li>Live Connected Data</li>
            </ul>
            <div style={{ marginTop: 34 }}>
              <Btn to="/platform" variant="white">
                Explore platform
              </Btn>
            </div>
          </div>
          <div className="home-platform-visual">
            <ArtTile variant="magenta" className="home-platform-visual__art" />
            <div className="home-platform-visual__chips">
              <span>99.8%</span>
              <span>1.2M</span>
              <span>150ms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="Solutions for every industry"
            title={
              <>
                Your Industry. Your Processes. <span className="accent-purple">Our Platform.</span>
              </>
            }
            sub="From finance to manufacturing, Encegen is deployed across 70+ industries to deliver measurable, real-world results."
          />
          <div className="cards-3">
            {INDUSTRIES.map((ind) => (
              <article key={ind.title} className="fcard">
                <span className="fcard__icon">{ind.icon}</span>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
                <Link to="/solutions/use-cases" className="home-ind-link">
                  Explore solution →
                </Link>
              </article>
            ))}
          </div>
          <div className="home-center-cta">
            <Btn to="/solutions/use-cases" variant="lavender">
              See all 70+ industry solutions →
            </Btn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="home-stats">
        <div className="container home-stats__grid">
          {STATS.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Customer stories */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Customer Stories"
            title="Trusted by the brands that run the world"
            sub="Trusted by the world's leading enterprises."
          />
          <div className="tgrid">
            {STORIES.map((s) => (
              <TestimonialCard key={s.name} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section section--light">
        <div className="container">
          <div className="home-res-head">
            <h2 className="left-title">Learn from the experts</h2>
            <Link to="/resources" className="home-ind-link">
              View all resources →
            </Link>
          </div>
          <div className="cards-3">
            {RESOURCES.map((r) => (
              <article key={r.title} className="home-res-card">
                <ArtTile variant={r.art} className="home-res-card__art" />
                <span className="home-res-card__tag">{r.tag}</span>
                <h3>{r.title}</h3>
                <span className="home-res-card__meta">{r.meta}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
