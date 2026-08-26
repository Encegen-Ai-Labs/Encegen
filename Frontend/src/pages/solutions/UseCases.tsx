import {
  Btn,
  ClosingCTA,
  GradBand,
  MockPanel,
  PageHero,
  ResultBar,
  SectionHead,
  TestimonialCard,
  UseCaseCard,
} from '../../components/kit'
import './solutions.css'

const CAPABILITIES = [
  {
    icon: '🔍',
    title: 'Process Discovery',
    desc: 'Maps how work actually flows from raw system data — no manual modelling.',
    tag: 'Automated',
  },
  {
    icon: '💡',
    title: 'Root Cause Analysis',
    desc: 'Traces a problem back through the steps that caused it, in seconds not weeks.',
    tag: 'Intelligent',
  },
  {
    icon: '⚡',
    title: 'Recommended Actions',
    desc: 'Turns each gap into a ranked, ready-to-run recommendation, ordered by impact.',
    tag: 'Proactive',
  },
  {
    icon: '🔄',
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

const INDUSTRIES = [
  {
    id: 'manufacturing',
    tag: 'Manufacturing',
    title: 'Manufacturing',
    intro:
      "On a factory floor, the cost of a problem is measured in downtime, scrap, and missed shipments. AI closes the gap between 'something went wrong' and 'it's already handled.'",
    points: [
      {
        title: 'Keep production moving',
        desc: 'Watch every line in real time, catch the deviation as it happens, and flag the fix before it becomes a stoppage.',
      },
      {
        title: 'See the whole supply chain',
        desc: 'Read demand signals, spot the disruption early, and re-plan inventory before a shortage reaches the line.',
      },
      {
        title: 'Hold the quality line',
        desc: 'Vision models trained on your own product images catch the micro-defects standard checks wave through — the ones that reach the customer.',
      },
    ],
    startsWith:
      'Most manufacturers begin with the highest-volume, most-measurable process — usually supply chain visibility or quality inspection — and expand from there.',
  },
  {
    id: 'financial-services',
    tag: 'Financial Services',
    title: 'Financial Services',
    intro:
      'In finance, every workflow runs under a regulator\'s eye and a fraud team\'s clock. AI has to move fast and leave a clean trail — we build for both.',
    points: [
      {
        title: 'Catch fraud as it moves',
        desc: 'Read transaction patterns in real time, flag the anomaly before it clears, and cut the false positives that bury your review team.',
      },
      {
        title: 'Make compliance less manual',
        desc: 'Monitor transactions, assemble the documentation, and keep the audit trail current — so reporting stops eating the week.',
      },
      {
        title: 'Speed the decisions that wait on people',
        desc: 'Pull and check the documents behind onboarding, KYC, and credit so the judgment calls reach a human faster.',
      },
    ],
    startsWith:
      'Fraud and document automation tend to show returns first — high volume, clear before-and-after — which makes them the natural place to prove value.',
  },
  {
    id: 'healthcare',
    tag: 'Healthcare',
    title: 'Healthcare',
    intro:
      'In healthcare, the administrative load pulls people away from patients. AI takes the repeatable weight off the back office — with a human always in the loop where it counts.',
    points: [
      {
        title: 'Lighten the documentation load',
        desc: 'Turn clinical notes into structured records and draft the paperwork, so clinicians spend less of the day typing and more of it with patients.',
      },
      {
        title: 'Clean up the revenue cycle',
        desc: 'Check claims before they go out, flag the ones likely to bounce, and pull the missing documentation straight from the record.',
      },
      {
        title: 'Take the wait out of prior authorisation',
        desc: 'Gather the documentation, check it against payer criteria, and prepare the packet — compressing days of back-and-forth into hours.',
      },
    ],
    startsWith:
      'Documentation and revenue-cycle work score highest on volume, measurability, and safety — errors get caught by a human before they ever reach care — which is why most teams start there.',
  },
]

const TESTIMONIALS = [
  {
    tag: 'Varasa',
    color: '#22c55e',
    quote: 'Encegen AI Labs transformed our heritage exploration platform, ancient artifact preservation documentation, and student scholarship grant tracking.',
    initials: 'VR',
    name: 'Research & Conservation Head',
    role: 'Varasa (Heritage Conservation & Scholarship)',
    metric: '10,000+ artifacts documented',
    hue: 150,
  },
  {
    tag: 'Pramay Agro',
    color: '#3b82f6',
    quote: 'The specialized e-commerce platform and inventory workflows Encegen built allow our team to manage fertilizer and pesticide distribution seamlessly.',
    initials: 'PA',
    name: 'Operations Director',
    role: 'Pramay Agro (Fertilizers & Pesticides E-Commerce)',
    metric: '5× faster distribution',
    hue: 215,
  },
  {
    tag: 'Fx Algo',
    color: '#f59e0b',
    quote: "Encegen engineered algorithmic intelligence and high-throughput pipelines that execute trading strategies with sub-5 millisecond latency.",
    initials: 'FA',
    name: 'Quantitative Strategist',
    role: 'Fx Algo (Algorithmic Trading Platform)',
    metric: '<5ms latency',
    hue: 30,
  },
]

export default function UseCases() {
  return (
    <>
      <PageHero
        badge="Encegen AI"
        title={
          <>
            Put AI to work across <span className="accent-blue">every part of the business</span>
          </>
        }
        sub="Encegen AI doesn't stop at insight — it acts. We build intelligent automation into the systems your teams already run on, from finance to operations to support."
      />

      {/* AI understands */}
      <section className="section section--light">
        <div className="container split">
          <div>
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
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="AI Capabilities" title="Four ways AI changes how you operate." />
          <div className="cards-2">
            {CAPABILITIES.map((c) => (
              <article key={c.title} className="fcard">
                <span className="fcard__icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span
                  className="disc-card__tag"
                  style={{ display: 'inline-block', marginTop: 16 }}
                >
                  {c.tag}
                </span>
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
          <div className="cards-2" style={{ alignItems: 'start' }}>
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
            left="87% of AI recommendations are actioned within 24 hours"
            chips={['3.2× faster response to process disruptions', '5,000+ enterprise deployments worldwide']}
            action={<Btn to="/platform" variant="white">See how it works →</Btn>}
          />
        </div>
      </section>

      {/* Processes */}
      <section className="section section--lavender">
        <div className="container split">
          <div>
            <h2 className="left-title">Optimize the processes that matter most.</h2>
            <p className="left-copy">By process:</p>
            <div className="proc-list">
              {PROCESSES.map((p) => (
                <a key={p.label} href={p.id ? `#${p.id}` : '#'}>
                  {p.label}
                </a>
              ))}
            </div>
          </div>
          <div />
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

      {/* By Industry */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="By Industry"
            title="Built for the way your industry actually runs."
            sub="The same intelligence layer, shaped to the pressures of your sector — the workflows, the regulation, the margins that don't leave much room for error."
          />
          {INDUSTRIES.map((industry) => (
            <div key={industry.id} id={industry.id} style={{ scrollMarginTop: 100, marginTop: 56 }}>
              <span className="disc-card__tag">{industry.tag}</span>
              <h3 className="left-title" style={{ marginTop: 14 }}>{industry.title}</h3>
              <p className="left-copy" style={{ marginTop: 12 }}>{industry.intro}</p>
              <div className="cards-3" style={{ marginTop: 28 }}>
                {industry.points.map((p) => (
                  <article className="fcard" key={p.title}>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </article>
                ))}
              </div>
              <p className="left-copy" style={{ marginTop: 20, fontSize: 14 }}>
                <strong>Where it starts:</strong> {industry.startsWith}
              </p>
            </div>
          ))}
          <p className="left-copy" style={{ marginTop: 48, textAlign: 'center' }}>
            Don't see your industry? The layer isn't industry-specific — it learns yours. Tell us how you operate and we'll show you where it fits.
          </p>
        </div>
      </section>

      <GradBand
        stats={[
          { value: '40%', label: 'Avg process improvement' },
          { value: '$2.4T', label: 'Business value unlocked' },
          { value: '10B+', label: 'Events daily' },
          { value: '5,000+', label: 'Enterprise customers' },
        ]}
      />

      {/* Proof */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Customer Stories" title="Enterprises running smarter with Encegen AI." />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        trusted={['EasyHunt', 'Varasa', 'Pramay Agro', 'FxAlgo']}
        line1="Ready to put AI to work?"
        sub="See what Encegen AI can do for your highest-priority processes."
        primary={{ label: 'Explore the platform →', to: '/platform' }}
        secondary={{ label: 'See case studies', to: '/insights' }}
        checks={['Enterprise-grade security', 'Fixed-price delivery', 'Measurable ROI']}
      />
    </>
  )
}
