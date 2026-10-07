import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Btn,
  GradBand,
  MockPanel,
  PageHero,
  ResultBar,
  SectionHead,
  TestimonialCard,
  UseCaseCard,
} from '../../components/kit'
import ContactModal from '../../components/ContactModal'
import { BrainIcon, LightbulbIcon, RefreshIcon, ZapIcon } from '../../components/icons'
import './solutions.css'

const CAPABILITIES = [
  {
    icon: <BrainIcon size={20} />,
    title: 'Process Discovery',
    desc: 'Maps how work actually flows from raw system data — no manual modelling.',
    tag: 'Automated',
  },
  {
    icon: <LightbulbIcon size={20} />,
    title: 'Root Cause Analysis',
    desc: 'Traces a problem back through the steps that caused it, in seconds not weeks.',
    tag: 'Intelligent',
  },
  {
    icon: <ZapIcon size={20} />,
    title: 'Recommended Actions',
    desc: 'Turns each gap into a ranked, ready-to-run recommendation, ordered by impact.',
    tag: 'Proactive',
  },
  {
    icon: <RefreshIcon size={20} />,
    title: 'Continuous Optimization',
    desc: 'Watches the work around the clock and adjusts as the business changes.',
    tag: 'Adaptive',
  },
]

const WITHOUT = [
  {
    title: 'Decisions made on stale data',
    desc: 'Teams act on reports that are already weeks out of date.',
    chip: '4-6 week lag',
  },
  {
    title: 'Exceptions handled manually',
    desc: 'Every exception needs a person, which slows everything and burns people out.',
    chip: '70% manual',
  },
  {
    title: 'No visibility across systems',
    desc: 'Data sits in silos, so no one sees the whole picture.',
    chip: '12+ systems',
  },
  {
    title: 'Reactive, not proactive',
    desc: "Problems get found after they've done the damage.",
    chip: '$4.3M avg cost',
  },
]

const WITH = [
  {
    title: 'Real-time process visibility',
    desc: 'Work is mapped as it happens — no sampling, no lag.',
    chip: 'Live data',
  },
  {
    title: 'Automated exception handling',
    desc: 'Exceptions get caught, routed, and resolved before they escalate.',
    chip: '87% automated',
  },
  {
    title: 'Unified intelligence layer',
    desc: 'A single picture across every system in your stack.',
    chip: '1 platform',
  },
  {
    title: 'Predictive, not reactive',
    desc: 'Problems get flagged before they land.',
    chip: '3.2× faster',
  },
]

const PROCESSES = [
  { label: 'Order-to-Cash', id: 'order-to-cash' },
  { label: 'Purchase-to-Pay' },
  { label: 'Accounts Payable', id: 'accounts-payable' },
  { label: 'Logistics & Fulfillment' },
  { label: 'IT Service Management', id: 'it-service-management' },
  { label: 'HR Service Delivery' },
]

const USE_CASES = [
  {
    tags: ['Finance'],
    color: '#22c55e',
    title: 'Accounts Payable Automation',
    desc: "AI finds the bottlenecks, flags duplicates, and routes exceptions on its own — so AP stops being a queue.",
    metric: '65% faster',
    id: 'accounts-payable',
  },
  {
    tags: ['Supply Chain'],
    color: '#22d3ee',
    title: 'Supply Chain Resilience',
    desc: 'AI watches the chain in real time, sees the disruption coming, and recommends the re-route.',
    metric: '99.4% on-time',
    id: 'supply-chain',
  },
  {
    tags: ['Finance'],
    color: '#8b5cf6',
    title: 'Order-to-Cash Excellence',
    desc: 'AI catches revenue leaking out of the cycle, spots the at-risk orders, and triggers the fix.',
    metric: '40% DSO reduction',
    id: 'order-to-cash',
  },
  {
    tags: ['IT Ops'],
    color: '#3b82f6',
    title: 'IT Service Management',
    desc: 'AI resolves the routine tickets, predicts the degradation, and tightens the whole workflow.',
    metric: '3× faster resolution',
    id: 'it-service-management',
  },
  {
    tags: ['Manufacturing'],
    color: '#f59e0b',
    title: 'Manufacturing Operations',
    desc: 'AI watches production, flags the deviation, and keeps throughput moving.',
    metric: '22% OEE improvement',
  },
  {
    tags: ['Procurement'],
    color: '#ec4899',
    title: 'Procurement Intelligence',
    desc: 'AI surfaces the savings, flags the off-contract spend, and keeps compliance clean.',
    metric: '$2.4M avg savings',
  },
]

const TESTIMONIALS = [
  {
    tag: 'Varasa',
    color: '#6553ee',
    quote: 'Encegen AI Labs transformed our heritage exploration platform, ancient artifact preservation documentation, and student scholarship grant tracking.',
    initials: 'VR',
    name: 'Research & Conservation Head',
    role: 'Varasa (Heritage Conservation & Scholarship)',
    metric: '10,000+ artifacts documented',
    metricIcon: '⚡',
    hue: 255,
  },
  {
    tag: 'Pramay Agro',
    color: '#059669',
    quote: 'The specialized e-commerce platform and inventory workflows Encegen built allow our team to manage fertilizer and pesticide distribution seamlessly.',
    initials: 'PA',
    name: 'Operations Director',
    role: 'Pramay Agro (Fertilizers & Pesticides E-Commerce)',
    metric: '5× faster distribution',
    metricIcon: '🚀',
    hue: 155,
  },
  {
    tag: 'Fx Algo',
    color: '#2563eb',
    quote: "Encegen engineered algorithmic intelligence and high-throughput pipelines that execute trading strategies with sub-5 millisecond latency.",
    initials: 'FA',
    name: 'Quantitative Strategist',
    role: 'Fx Algo (Algorithmic Trading Platform)',
    metric: '<5ms latency',
    metricIcon: '✓',
    hue: 215,
  },
]

export default function UseCases() {
  const [showContact, setShowContact] = useState(false)

  return (
    <>
      <PageHero
        badge="Encegen AI"
        title={
          <>
            Put AI to Work Across <span className="accent-blue">Every Part of The Business</span>
          </>
        }
        sub="Encegen AI doesn't stop at insight — it acts. We build intelligent automation into the systems your teams already run on, from finance to operations to support."
      />

      {/* AI understands */}
      <section className="section section--light use-cases-intro">
        <div className="container split use-cases-intro__layout">
          <div className="use-cases-intro__copy">
            <p className="shead__eyebrow">Context + AI</p>
            <h2 className="left-title">AI that understands your business — not just your data.</h2>
            <p className="left-copy">
              Most tools look at data in isolation. Encegen AI reads the full context of how work
              moves, finds where it breaks, and acts to fix it inside the systems you already use.
            </p>
            <div className="proc-list">
              <span>✓ Trained on how your processes really run, not on static rules</span>
              <span>✓ Connects insight directly to action</span>
              <span>✓ Learns a little more with every cycle</span>
            </div>
          </div>
          <MockPanel
            className="use-cases-comparison"
            title="Traditional AI vs Encegen"
            rows={[
              { label: 'Siloed data analysis', sub: 'Works on snapshots, misses process context', chip: '✕', chipColor: '#ef4444' },
              { label: 'Static rule-based alerts', sub: 'High false-positive rates, alert fatigue', chip: '✕', chipColor: '#ef4444' },
              { label: 'Manual hand-off required', sub: 'Insights die in dashboards', chip: '✕', chipColor: '#ef4444' },
              { label: 'End-to-end process intelligence', sub: 'Understands full context, not just data points', chip: '✓', chipColor: '#2fe08e' },
              { label: 'AI-powered root cause analysis', sub: 'Pinpoints exactly why processes break down', chip: '✓', chipColor: '#2fe08e' },
              { label: 'Direct system action', sub: 'Fixes flow into SAP, Salesforce, ServiceNow automatically', chip: '✓', chipColor: '#2fe08e' },
              { label: 'Continuously proactive', sub: 'Prevents issues before they impact the business', chip: '✓', chipColor: '#2fe08e' },
            ]}
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--lavender uc-cap-section">
        <div className="container">
          <SectionHead eyebrow="AI Capabilities" title="Four ways AI changes how you operate." />
          <div className="uc-cap-grid">
            {CAPABILITIES.map((c, idx) => (
              <article
                key={c.title}
                className="uc-cap-card"
                style={{ ['--cap-idx' as string]: idx }}
              >
                <div className="uc-cap-card__main">
                  <span className="uc-cap-card__icon" aria-hidden="true">
                    {c.icon}
                  </span>
                  <div className="uc-cap-card__content">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                </div>
                <div className="uc-cap-card__foot">
                  <span className="uc-cap-card__badge">{c.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Before/after */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="The Problem We Solve"
            title="Most teams are running half-blind. We fix that."
            sub="The answers are already in your systems — they're just locked in. Encegen unlocks them and acts on them."
          />
          <div className="cards-2 use-cases-comparison-grid">
            <div className="compare-col">
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#ef4444', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Without Encegen
              </h3>
              {WITHOUT.map((w) => (
                <div key={w.title} className="compare-item compare-item--bad">
                  <span className="compare-item__mark">✕</span>
                  <div>
                    <strong>{w.title}</strong>
                    <p>{w.desc}</p>
                  </div>
                  <span className="compare-item__chip">{w.chip}</span>
                </div>
              ))}
            </div>
            <div className="compare-col">
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#16a34a', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                With Encegen
              </h3>
              {WITH.map((w) => (
                <div key={w.title} className="compare-item compare-item--good">
                  <span className="compare-item__mark">✓</span>
                  <div>
                    <strong>{w.title}</strong>
                    <p>{w.desc}</p>
                  </div>
                  <span className="compare-item__chip">{w.chip}</span>
                </div>
              ))}
            </div>
          </div>
          <ResultBar
            className="use-cases-resultbar"
            left={
              <>
                <strong>87%</strong>
                <span>of AI recommendations are actioned within 24 hours</span>
              </>
            }
            chips={[
              <>
                <strong>3.2×</strong>
                <span>faster response to process disruptions</span>
              </>,
              <>
                <strong>5,000+</strong>
                <span>enterprise deployments worldwide</span>
              </>,
            ]}
            action={<Btn to="/platform" variant="white">See how it works →</Btn>}
          />
        </div>
      </section>

      {/* Processes */}
      <section className="section section--light use-cases-process">
        <div className="container use-cases-process__container">
          <div className="use-cases-process__heading">
            <h2>Optimize the processes that matter most.</h2>
            <span className="use-cases-process__underline" aria-hidden="true" />
            <p>By Process</p>
          </div>
          <div className="proc-grid use-cases-process__list">
            {PROCESSES.map((p) => (
              <a key={p.label} href={p.id ? `#${p.id}` : '#'} className="proc-card">
                <span className="proc-card__arrow" aria-hidden="true">→</span>
                <span>{p.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Use Cases" title="AI aimed at your most important processes." dark />
          <div className="cards-3">
            {USE_CASES.map((u) => (
              <UseCaseCard key={u.title} {...u} />
            ))}
          </div>
        </div>
      </section>

      <GradBand
        className="use-cases-impact"
        eyebrow="Proven Impact"
        title="Real results from real deployments."
        stats={[
          { value: '40%', label: 'Avg process improvement' },
          { value: '$2.4T', label: 'Business value unlocked' },
          { value: '10B+', label: 'Events daily' },
          { value: '5,000+', label: 'Enterprise customers' },
        ]}
      />

      {/* Proof */}
      <section className="section section--lavender use-cases-proof">
        <div className="container">
          <SectionHead eyebrow="Customer Stories" title="Enterprises running smarter with Encegen AI." />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* 3-Part Closing Section below Customer Stories */}
      <div className="uc-bottom-stack">
        {/* Part 1: Ready to put AI to work? */}
        <section className="uc-bottom-card uc-bottom-card--ready">
          <div className="container uc-bottom-card__inner">
            <h2 className="uc-bottom-card__title">Ready to put AI to work?</h2>
            <p className="uc-bottom-card__sub">
              See how Encegen AI can transform your highest-priority processes in 30 days.
            </p>
            <div className="uc-bottom-card__actions">
              <Link to="/resources" className="uc-neu-pill">
                Explore AI Resources →
              </Link>
            </div>
          </div>
        </section>

        {/* Part 2: Join 5,000+ companies dark stats band */}
        <section className="uc-bottom-stats">
          <div className="container uc-bottom-stats__inner">
            <h2 className="uc-bottom-stats__title">
              Join 5,000+ companies transforming their operations.
            </h2>
            <p className="uc-bottom-stats__eyebrow">STATS</p>

            <div className="uc-bottom-stats__grid">
              <div className="uc-bottom-stats__item">
                <strong>70+</strong>
                <span>INDUSTRIES</span>
              </div>
              <div className="uc-bottom-stats__item">
                <strong>300%</strong>
                <span>AVG ROI</span>
              </div>
              <div className="uc-bottom-stats__item">
                <strong>$2.4T</strong>
                <span>BUSINESS VALUE</span>
              </div>
            </div>

            <div className="uc-bottom-stats__logos" aria-label="Enterprise brands">
              <span>Easyhunt</span>
              <span>Pramay Agro</span>
              <span>Fx Algo</span>
            </div>
          </div>
        </section>

        {/* Part 3: Find your solution. */}
        <section className="uc-bottom-card uc-bottom-card--solution">
          <div className="container uc-bottom-card__inner">
            <h2 className="uc-bottom-card__title uc-bottom-card__title--sm">
              Find your solution.
            </h2>
            <div className="uc-bottom-card__actions">
              <button
                type="button"
                className="uc-neu-pill"
                onClick={() => setShowContact(true)}
              >
                Talk to an expert →
              </button>
              <Link to="/platform" className="uc-neu-pill">
                Browse all solutions
              </Link>
            </div>
          </div>
        </section>
      </div>

      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  )
}
