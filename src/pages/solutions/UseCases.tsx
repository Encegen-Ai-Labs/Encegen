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
    desc: 'AI automatically maps every process variant from raw event data - no manual modeling required.',
    tag: 'Automated',
  },
  {
    icon: '💡',
    title: 'Root Cause Analysis',
    desc: 'AI pinpoints exactly why processes break down - tracing issues through thousands of upstream steps in milliseconds.',
    tag: 'Intelligent',
  },
  {
    icon: '⚡',
    title: 'Recommended Actions',
    desc: 'AI generates prioritized, executable recommendations for each process gap - ranked by business impact.',
    tag: 'Proactive',
  },
  {
    icon: '🔄',
    title: 'Continuous Optimization',
    desc: 'AI monitors processes 24/7, adapts to change and automatically refines recommendations as your business evolves.',
    tag: 'Adaptive',
  },
]

const WITHOUT = [
  {
    title: 'Decisions made on stale data',
    desc: 'Teams act on reports that are weeks old, missing critical process deviations.',
    chip: '4-6 week lag',
  },
  {
    title: 'Exceptions handled manually',
    desc: 'Every process exception requires human intervention - slowing operations and burning out teams.',
    chip: '70% manual',
  },
  {
    title: 'No visibility across systems',
    desc: 'SAP, Salesforce, and ServiceNow data sit in silos - no unified view of what is actually happening.',
    chip: '12+ systems',
  },
  {
    title: 'Reactive, not proactive',
    desc: 'Problems are discovered after they cause damage - not before they even happen.',
    chip: '$4.3M avg cost',
  },
]

const WITH = [
  {
    title: 'Real-time process visibility',
    desc: 'AI maps every process variant the moment it happens - no sampling, no delays, no assumptions.',
    chip: 'Live data',
  },
  {
    title: 'Automated exception handling',
    desc: 'AI detects, routes, and resolves process exceptions automatically before they escalate.',
    chip: '87% automated',
  },
  {
    title: 'Unified intelligence layer',
    desc: 'One connected view across SAP, Salesforce, and any other system in your stack.',
    chip: '1 platform',
  },
  {
    title: 'Predictive, not reactive',
    desc: 'AI identifies problems before they occur, recommending action days ahead of impact.',
    chip: '3.2× faster',
  },
]

const PROCESSES = [
  'Order-to-Cash',
  'Purchase-to-Pay',
  'Accounts Payable',
  'Logistics & Fulfillment',
  'IT Service Management',
  'HR Service Delivery',
]

const USE_CASES = [
  {
    tags: ['Finance'],
    color: '#22c55e',
    title: 'Accounts Payable Automation',
    desc: 'AI identifies bottlenecks, flags duplicates, and auto-routes exceptions – reducing AP cycle time by up to 65%.',
    metric: '65% faster',
  },
  {
    tags: ['Supply Chain'],
    color: '#22d3ee',
    title: 'Supply Chain Resilience',
    desc: 'AI monitors supply chain in real time, predicts disruptions, and recommends re-routing actions.',
    metric: '99.4% on-time',
  },
  {
    tags: ['Finance'],
    color: '#8b5cf6',
    title: 'Order-to-Cash Excellence',
    desc: 'AI detects revenue leakage in the O2C cycle, identifies at-risk orders, and triggers automatic remediation.',
    metric: '40% DSO reduction',
  },
  {
    tags: ['IT Ops'],
    color: '#3b82f6',
    title: 'IT Service Management',
    desc: 'AI auto-resolves routine tickets, predicts service degradation, optimizes ITSM workflows end-to-end.',
    metric: '3× faster resolution',
  },
  {
    tags: ['Manufacturing'],
    color: '#f59e0b',
    title: 'Manufacturing Operations',
    desc: 'AI monitors production processes, flags compliance deviations, and optimizes throughput in real time.',
    metric: '22% OEE improvement',
  },
  {
    tags: ['Procurement'],
    color: '#ec4899',
    title: 'Procurement Intelligence',
    desc: 'AI surfaces savings opportunities, flags maverick spend, and ensures compliance automatically.',
    metric: '$2.4M avg savings',
  },
]

const TESTIMONIALS = [
  {
    tag: 'Siemens',
    color: '#22c55e',
    quote: 'Encegen AI reduced our invoice exception rate by 92% in the first quarter — results we never thought possible with this quality.',
    initials: 'AM',
    name: 'Anna Müller',
    role: 'VP Supply Chain, Siemens AG',
    metric: '92% fewer exceptions',
    hue: 150,
  },
  {
    tag: 'Uber',
    color: '#3b82f6',
    quote: 'The AI recommendations were actionable from day one. Our finance team closed the books 5 days faster last month.',
    initials: 'JP',
    name: 'James Park',
    role: 'Head of Finance Ops, Uber',
    metric: '5 days faster',
    hue: 215,
  },
  {
    tag: 'Airbus',
    color: '#f59e0b',
    quote: "Encegen AI gave us process visibility at a scale we couldn't achieve manually — and it acts on what it finds.",
    initials: 'MD',
    name: 'Marie Dubois',
    role: 'Chief Digital Officer, Airbus',
    metric: '94% compliance',
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
            Put AI to Work Across <span className="accent-blue">Every Business Process</span>
          </>
        }
        sub="Encegen AI doesn't just surface insights - it acts. Embed intelligent automation directly into your SAP, Salesforce, and ServiceNow workflows."
      />

      {/* AI understands */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Process Intelligence + AI</p>
            <h2 className="left-title">AI that understands your business - not just your data.</h2>
            <p className="left-copy">
              Most AI tools analyze data in isolation. Encegen AI understands full process context,
              identifies breakdowns, and triggers automated fixes directly in operational systems.
            </p>
            <div className="proc-list">
              <a href="#">Trained on real process event data, not static rules</a>
              <a href="#">Connects AI insights directly to system actions</a>
              <a href="#">Continuously learns with every process cycle</a>
            </div>
            <div style={{ marginTop: 32 }}>
              <Btn variant="lavender">Learn how it works →</Btn>
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
          <SectionHead eyebrow="AI Capabilities" title="Four ways AI transforms your operations." />
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
            title="Most enterprises are running blind. Encegen fixes that."
            sub="Your operational data holds the answers - but without process intelligence, it stays locked in your systems. Encegen unlocks it."
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
            action={<Btn variant="white">See how it works →</Btn>}
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
                <a key={p} href="#">
                  {p}
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
          <SectionHead eyebrow="Use Cases" title="AI-powered solutions for your most critical processes." dark />
          <div className="cards-3">
            {USE_CASES.map((u) => (
              <UseCaseCard key={u.title} {...u} />
            ))}
          </div>
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
        trusted={['Siemens', 'Uber', 'Airbus']}
        trustedLabel="join 5,000+ companies transforming their operations"
        line1="Ready to put AI to work?"
        sub="See how Encegen AI can transform your highest-priority processes in 30 days."
        primary={{ label: 'Get AI demo →' }}
        secondary={{ label: 'Download the AI guide' }}
        checks={['70+ industries', '300% avg ROI', '$2.4T business value']}
      />
    </>
  )
}
