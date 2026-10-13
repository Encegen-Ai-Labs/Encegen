import {
  Btn,
  ClosingCTA,
  GradBand,
  PageHero,
  ResultBar,
  SectionHead,
  StepFlow,
  TestimonialCard,
  UseCaseCard,
} from '../../components/kit'
import { CapabilityArt } from '../../components/CapabilityArt'
import {
  BarChartIcon,
  EyeIcon,
  FileTextIcon,
  MessageSquareIcon,
  RefreshIcon,
  ShieldIcon,
  TrendingUpIcon,
  UsersIcon,
} from '../../components/icons'
import '../../components/CapabilityArt.css'
import './solutions.css'

const AGENTS = [
  { icon: <FileTextIcon size={20} />, title: 'AP Exception Agent', desc: 'Clears accounts-payable exceptions before they ever reach a human queue.', tag: 'Finance', art: 'purple' },
  { icon: <RefreshIcon size={20} />, title: 'Invoice Matching', desc: 'Runs three-way matches across any ERP, automatically, every time.', tag: 'AP', art: 'blue' },
  { icon: <UsersIcon size={20} />, title: 'Onboarding Agent', desc: 'Gets a new hire fully set up across HR, IT, and facilities on day one.', tag: 'HR', art: 'green' },
  { icon: <MessageSquareIcon size={20} />, title: 'Support Ticket Agent', desc: 'Reads, sorts, routes, and resolves incoming tickets without a hand-off.', tag: 'Support', art: 'cyan' },
  { icon: <ShieldIcon size={20} />, title: 'Compliance Monitor', desc: 'Watches every transaction and flags a breach before it becomes one.', tag: 'Compliance', art: 'orange' },
  { icon: <TrendingUpIcon size={20} />, title: 'Demand Planning', desc: 'Reads the signals and adjusts your inventory forecast daily, not quarterly.', tag: 'Planning', art: 'magenta' },
]

const USE_CASES = [
  {
    tags: ['NLP', 'Finance'],
    color: '#10b981',
    icon: <FileTextIcon size={18} />,
    title: 'Accounts Payable',
    desc: 'Auto-resolve invoice exceptions before they escalate — reconcile discrepancies, validate vendors, and route approvals.',
    metric: '73% fewer escalations',
    compare: 'Manual: 27% → AI: 73%',
  },
  {
    tags: ['Vision', 'Support'],
    color: '#3b82f6',
    icon: <EyeIcon size={18} />,
    title: 'Customer Support',
    desc: 'Auto-triage and resolve tickets without human routing — classify intent, fetch context, and send answers instantly.',
    metric: '83% auto-resolution',
    compare: 'Manual: 17% → AI: 83%',
  },
  {
    tags: ['ML', 'HR'],
    color: '#f59e0b',
    icon: <BarChartIcon size={18} />,
    title: 'HR & Onboarding',
    desc: 'Fully set up new hires across HR, IT, and Facilities — create accounts, assign policies, and notify teams automatically.',
    metric: '5× faster onboarding',
    compare: 'Manual: 1× → AI: 5×',
  },
  {
    tags: ['NLP', 'Supply Chain'],
    color: '#10b981',
    icon: <FileTextIcon size={18} />,
    title: 'Supply Chain',
    desc: 'Monitor demand signals and adjust forecasts daily — read market data, detect anomalies, and update inventory plans.',
    metric: '91% forecast accuracy',
    compare: 'Baseline: 80% → AI: 91%',
  },
  {
    tags: ['Vision', 'Compliance'],
    color: '#3b82f6',
    icon: <EyeIcon size={18} />,
    title: 'Compliance',
    desc: 'Watch every transaction for violations in real time — detect anomalies, flag risks, and keep audit trails current.',
    metric: 'Zero manual audits',
    compare: 'Manual: 3/day → AI: 0',
  },
  {
    tags: ['ML', 'Finance'],
    color: '#f59e0b',
    icon: <BarChartIcon size={18} />,
    title: 'Financial Close',
    desc: 'Reconcile accounts and flag anomalies automatically — match transactions, validate journals, and close books faster.',
    metric: '2× faster close',
    compare: 'Manual: 1× → AI: 2×',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Trigger',
    meta: 'Step 1',
    desc: 'Webhook, schedule, or system event',
    chips: ['⚡ Event detected', '⏱ Instant'],
  },
  {
    num: '02',
    title: 'Context',
    meta: 'Step 2',
    desc: 'Reads SAP, CRM, ERP data',
    chips: ['🗄 Data fetched', '↔ Cross-system'],
  },
  {
    num: '03',
    title: 'Decide',
    meta: 'Step 3',
    desc: 'AI reasoning engine chooses action',
    chips: ['✳ Model inference', '☑ Policy check'],
  },
  {
    num: '04',
    title: 'Execute',
    meta: 'Step 4',
    desc: 'Takes action directly in your system',
    chips: ['✔ Action taken', '📋 Logged'],
  },
  {
    num: '05',
    title: 'Verify',
    meta: 'Step 5',
    desc: 'Confirms outcome and notifies team',
    chips: ['💳 Audit trail', '🔔 Notification'],
  },
]

const TESTIMONIALS = [
  {
    tag: 'Fx Algo',
    color: '#22c55e',
    quote: 'Encegen built an autonomous algorithmic agent that analyzes streaming market metrics, detects quantitative signals, and executes orders in milliseconds.',
    initials: 'FA',
    name: 'Quantitative Strategist',
    role: 'Fx Algo (Algorithmic Trading Platform)',
    metric: '99.9% real-time accuracy',
    hue: 150,
  },
  {
    tag: 'Pramay Agro',
    color: '#3b82f6',
    quote: 'The automated workflow agent Encegen deployed handles fertilizer and pesticide order validation and stock reconciliation with zero manual intervention.',
    initials: 'PA',
    name: 'Operations Director',
    role: 'Pramay Agro (Fertilizers & Pesticides E-Commerce)',
    metric: '85% auto-reconciled',
    hue: 215,
  },
  {
    tag: 'Flairnetic Advocates',
    color: '#f59e0b',
    quote: 'EasyHunt title search software and Encegen’s document intelligence agents extract land records across thousands of Maharashtra pages instantaneously.',
    initials: 'FL',
    name: 'Senior Legal Partner',
    role: 'Flairnetic Advocates (Major Client for EasyHunt)',
    metric: 'Zero manual transcription',
    hue: 30,
  },
]

export default function AiAgents() {
  return (
    <>
      <PageHero
        className="ai-research-hero phero--ai-agents"
        badge={<>● Encegen AI Labs · Agent Automation</>}
        title="Your team is stuck doing work a machine should do."
        sub="Every day, exceptions pile up — approvals waiting, records re-keyed between systems, queues that only move when a person clears them. That's your best people spending their hours on work an agent can own end to end."
        actions={
          <>
           
            <Btn variant="outline-light" to="#turning-point">
              See how it works
            </Btn>
          </>
        }
        trustedLabel="trusted by"
        trusted={['EasyHunt', 'Varasa', 'Pramay Agro', 'FxAlgo']}
      />

      <GradBand
        className="gband--magenta-purple"
        quote="But what if every exception resolved itself?"
      />

      {/* Turning point - Chapter 2 (Exact Figma Design Match) */}
      <section className="tp-turning-point" id="turning-point">
        <div className="container">
          <p className="tp-eyebrow">CHAPTER 2 · THE TURNING POINT</p>
          <h2 className="tp-title">Imagine waking up and finding everything already done.</h2>

          <div className="tp-split">
            <div className="tp-left-content">
              <p className="tp-copy">
                At 3:47am, an invoice arrives with a discrepancy. <strong>In the old world:</strong> it
                sits in a queue until morning. Someone manually reviews it, emails the vendor, waits
                for a reply.
              </p>
              <p className="tp-copy">
                <strong>With Encegen AI Agents:</strong> the exception is caught in milliseconds. The
                agent cross-references your ERP, checks the purchase order, queries the vendor system,
                reconciles the discrepancy - and resolves it. All before your team's first coffee.
              </p>
              <div className="tp-chips-group">
                <div className="tp-chips-row">
                  <span className="tp-pill">
                    <strong>3:47am</strong> exception detected
                  </span>
                  <span className="tp-pill">
                    <strong>3:47am</strong> resolved automatically
                  </span>
                </div>
                <div className="tp-chips-row">
                  <span className="tp-pill">
                    <strong>87%</strong> of all exceptions resolved this way
                  </span>
                </div>
              </div>
            </div>

            <div className="tp-live-card">
              <div className="tp-live-card__header">LIVE AGENT ACTIVITY</div>
              <div className="tp-live-card__rows">
                <div className="tp-live-row">
                  <span className="tp-live-time">03:47:00</span>
                  <span className="tp-live-action">Exception detected</span>
                  <span className="tp-text-red">INV-2947</span>
                  <span className="tp-status-dot" aria-label="Exception alert"></span>
                </div>
                <div className="tp-live-row">
                  <span className="tp-live-time">03:47:02</span>
                  <span className="tp-live-action">ERP check</span>
                  <span className="tp-text-cyan">PO-10290 matched</span>
                  <span className="tp-status-check">✓</span>
                </div>
                <div className="tp-live-row">
                  <span className="tp-live-time">03:47:04</span>
                  <span className="tp-live-action">Vendor query</span>
                  <span className="tp-text-cyan">Response received</span>
                  <span className="tp-status-check">✓</span>
                </div>
                <div className="tp-live-row">
                  <span className="tp-live-time">03:47:08</span>
                  <span className="tp-live-action">Resolved</span>
                  <span className="tp-text-green">No human required</span>
                  <span className="tp-status-square-check">✓</span>
                </div>
              </div>
              <div className="tp-live-card__footer">
                <span>Resolved in 8 seconds</span>
                <span>Autonomy: 100%</span>
              </div>
            </div>
          </div>

          {/* Operations Team Exceptions (Full Width Card) */}
          <div className="tp-ops-card">
            <div className="tp-ops-card__header">
              <span className="tp-ops-card__title">
                A typical operations team - overwhelmed by process exceptions that never end.
              </span>
              <span className="tp-live-badge">LIVE</span>
            </div>
            <div className="tp-ops-grid">
              <div>
                <div className="tp-ops-col-head">
                  <span className="tp-ops-col-title">Exceptions queue</span>
                  <span className="tp-ops-col-badge">1,247 pending</span>
                </div>
                <div className="tp-ops-item">
                  <span className="tp-item-id">INV-2947</span>
                  <span className="tp-text-red">Discrepancy</span>
                </div>
                <div className="tp-ops-item">
                  <span className="tp-item-id">PO-10290</span>
                  <span className="tp-text-red">Approval</span>
                </div>
                <div className="tp-ops-item">
                  <span className="tp-item-id">VND-771</span>
                  <span className="tp-text-red">Vendor</span>
                </div>
              </div>

              <div>
                <div className="tp-ops-col-head">
                  <span className="tp-ops-col-title">Team alerts</span>
                  <span className="tp-ops-col-badge">12 urgent</span>
                </div>
                <div className="tp-alert-item">
                  <span className="tp-alert-dot"></span>
                  <span>Vendor reply missing</span>
                </div>
                <div className="tp-alert-item">
                  <span className="tp-alert-dot"></span>
                  <span>Approval timeout</span>
                </div>
                <div className="tp-alert-item">
                  <span className="tp-alert-dot"></span>
                  <span>Queue growing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Chapter 3 · The Team"
            title="Meet the team that clocks in at every hour and never drops a task."
            sub="Specialised agents, each built for one job in your operation — and each accountable for finishing it."
          />
          <div className="cards-3">
            {AGENTS.map((a) => (
              <article key={a.title} className="agent-card">
                <CapabilityArt id={a.art} className="agent-card__art" />
                <div className="agent-card__body">
                  <span className="agent-card__icon">{a.icon}</span>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <span className="agent-card__tag">{a.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section section--light ai-research-use-cases ai-agents-use-cases">
        <div className="container">
          <SectionHead eyebrow="Use Cases" title="AI solving the problems that matter." />
          <div className="cards-2 ai-agents-usecase-grid">
            {USE_CASES.map((u) => (
              <UseCaseCard key={u.title} {...u} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--light ai-research-process ai-agents-process">
        <div className="container ai-research-process__container">
          <SectionHead
            eyebrow="The Moment"
            title={
              <>
                From the moment it triggers to the
                <br />
                moment it's resolved.
              </>
            }
            sub="A structured path from trigger to resolution — with clear milestones and measurable outcomes."
          />
          <div className="ai-research-process__steps">
            <StepFlow steps={STEPS} />
          </div>
          <ResultBar
            className="ai-research-process__result ai-agents-process__result"
            left="Average resolution time: 8.3 seconds"
            chips={['87% resolved autonomously']}
            action={
              <button type="button" className="ai-agents-result-btn">
                &rarr; ZERO HUMAN INTERVENTION REQUIRED
              </button>
            }
          />
        </div>
      </section>

      {/* Proof */}
      <section className="section section--lavender ai-research-proof">
        <div className="container">
          <SectionHead eyebrow="Customer Proof" title="Real enterprises. Real results. Real stories." />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} outlineStars />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        trusted={['EasyHunt', 'Varasa', 'Pramay Agro', 'FxAlgo']}
        line1="Your story starts with"
        line2="one agent."
        sub="No generic tool, no off-the-shelf model. One agent, built for your exact bottleneck, live in days — then a second, then a team."
        checks={['SOC 2 protected', 'Live in 24 hrs', 'No lock-in contract']}
      />
    </>
  )
}
