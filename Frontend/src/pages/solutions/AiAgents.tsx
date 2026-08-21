import {
  ClosingCTA,
  GradBand,
  LiveDot,
  MockPanel,
  PageHero,
  ResultBar,
  SectionHead,
  StepFlow,
  TestimonialCard,
  UseCaseCard,
} from '../../components/kit'
import { CapabilityArt } from '../../components/CapabilityArt'
import '../../components/CapabilityArt.css'
import './solutions.css'

const AGENTS = [
  { icon: '🧾', title: 'AP Exception Agent', desc: 'Clears accounts-payable exceptions before they ever reach a human queue.', tag: 'Finance', art: 'purple' },
  { icon: '🔁', title: 'Invoice Matching', desc: 'Runs three-way matches across any ERP, automatically, every time.', tag: 'AP', art: 'blue' },
  { icon: '🧑‍💼', title: 'Onboarding Agent', desc: 'Gets a new hire fully set up across HR, IT, and facilities on day one.', tag: 'HR', art: 'green' },
  { icon: '🎧', title: 'Support Ticket Agent', desc: 'Reads, sorts, routes, and resolves incoming tickets without a hand-off.', tag: 'Support', art: 'cyan' },
  { icon: '🛡', title: 'Compliance Monitor', desc: 'Watches every transaction and flags a breach before it becomes one.', tag: 'Compliance', art: 'orange' },
  { icon: '📈', title: 'Demand Planning', desc: 'Reads the signals and adjusts your inventory forecast daily, not quarterly.', tag: 'Planning', art: 'magenta' },
]

const USE_CASES = [
  {
    tags: ['NLP', 'Finance'],
    color: '#22c55e',
    title: 'Accounts Payable',
    desc: 'Catch and resolve invoice exceptions before they escalate — reconcile mismatches, validate vendors, and route approvals on their own.',
    metric: '73% fewer exceptions',
    compare: 'Manual: 17% → AI: 73%',
  },
  {
    tags: ['Vision', 'Support'],
    color: '#3b82f6',
    title: 'Customer Support',
    desc: 'Triage and resolve tickets without manual routing — read intent, pull context, and answer in the moment.',
    metric: '45% auto-resolution',
    compare: 'Manual: 17% → AI: 83%',
  },
  {
    tags: ['ML', 'HR'],
    color: '#8b5cf6',
    title: 'HR & Onboarding',
    desc: 'Stand up a new hire across HR, IT, and facilities — accounts created, policies assigned, teams notified, no checklist required.',
    metric: '3× faster onboarding',
    compare: 'Manual: 1× → AI: 5×',
  },
  {
    tags: ['NLP', 'Supply Chain'],
    color: '#22d3ee',
    title: 'Supply Chain',
    desc: 'Track demand signals and adjust forecasts daily — read the market, spot the anomaly, update the plan.',
    metric: '91% forecast accuracy',
    compare: 'Baseline: 80% → AI: 91%',
  },
  {
    tags: ['Vision', 'Compliance'],
    color: '#f59e0b',
    title: 'Compliance',
    desc: 'Watch every transaction in real time — surface risk, flag deviations, and keep the audit trail current on its own.',
    metric: 'Zero manual audits',
    compare: 'Manual: 3/day → AI: 0',
  },
  {
    tags: ['ML', 'Finance'],
    color: '#ec4899',
    title: 'Financial Close',
    desc: 'Reconcile accounts and flag anomalies automatically — match transactions, validate journals, close the books sooner.',
    metric: '2× faster close',
    compare: 'Manual: 1× → AI: 2×',
  },
]

const STEPS = [
  { num: '01', title: 'Trigger', meta: 'Step 1', desc: 'A webhook, a schedule, or a system event sets it off.', chips: ['Event detected', 'Instant'] },
  { num: '02', title: 'Context', meta: 'Step 2', desc: 'The agent gathers what it needs from your ERP, CRM, and connected systems.', chips: ['Data fetched', 'Cross-system'] },
  { num: '03', title: 'Decide', meta: 'Step 3', desc: 'The reasoning engine weighs the options and picks the right action against your rules.', chips: ['Model inference', 'Policy check'] },
  { num: '04', title: 'Execute', meta: 'Step 4', desc: 'It acts directly in your system — no export, no hand-off.', chips: ['Action taken', 'Logged'] },
  { num: '05', title: 'Verify', meta: 'Step 5', desc: 'It confirms the outcome, writes the audit trail, and notifies the team.', chips: ['Audit trail', 'Notification'] },
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
        badge={<>● Encegen AI Labs · Agent Automation</>}
        title="Your team is doing work a machine should have finished hours ago."
        sub="Every day, exceptions pile up — approvals waiting, records re-keyed between systems, queues that only move when a person clears them. That's your best people spending their hours on work an agent can own end to end."
        trusted={['EasyHunt', 'Varasa', 'Pramy Agro', 'FxAlgo']}
      />

      <GradBand quote="What if the exception cleared itself before anyone opened the queue?" />

      {/* Turning point */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="Chapter 2 · The Turning Point"
            title="Imagine the work being done before you're even in the room."
          />
          <div className="split" style={{ marginTop: 56 }}>
            <div>
              <p className="left-copy">
                An invoice lands overnight with a mismatch. <strong>The old way:</strong>{' '}
                it waits in a queue until morning, gets reviewed by hand, bounced to the vendor, and
                sits there until someone follows up.
              </p>
              <p className="left-copy">
                <strong>With an Encegen agent:</strong> the mismatch is caught the moment it arrives.
                The agent checks the purchase order, reconciles against your ERP, queries the vendor
                system, and closes the exception — cleanly, with a full trail — before the first
                login of the day.
              </p>
              <div className="sol-chip-row">
                <span className="sol-chip">3:47am — exception detected</span>
                <span className="sol-chip">3:47am — resolved autonomously</span>
              </div>
              <div className="sol-chip-row">
                <span className="sol-chip sol-chip--green">87% of all exceptions resolved this way</span>
              </div>
            </div>
            <MockPanel
              title="Live Agent Activity"
              right={<LiveDot label="Live" />}
              rows={[
                { label: '03:47:00', sub: 'Exception detected', chip: 'INV-2847', chipColor: '#ef4444' },
                { label: '03:47:02', sub: 'ERP check', chip: 'PO-10293 matched', chipColor: '#2fe08e' },
                { label: '03:47:04', sub: 'Vendor query', chip: 'Response received', chipColor: '#22d3ee' },
                { label: '03:47:08', sub: 'Resolved', chip: 'No human required', chipColor: '#2fe08e' },
              ]}
              footer={
                <>
                  <span>Resolved in 8 seconds</span>
                  <span>Autonomy: 100%</span>
                </>
              }
            />
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
      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Use Cases" title="Agents pointed at the work that actually costs you." dark />
          <div className="cards-2">
            {USE_CASES.map((u) => (
              <UseCaseCard key={u.title} {...u} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="The Moment"
            title="From the trigger to the resolution, here's the whole path."
            sub="Five clean steps from the event firing to the outcome confirmed — every one logged, every one measurable."
          />
          <div style={{ marginTop: 60 }}>
            <StepFlow steps={STEPS} />
          </div>
          <ResultBar
            left="Average resolution time: 8.3 seconds"
            chips={['87% resolved autonomously', '+ ZERO HUMAN INTERVENTION REQUIRED']}
          />
        </div>
      </section>

      {/* Proof */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Customer Proof" title="Real enterprises. Real results. Real stories." />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        trusted={['EasyHunt', 'Varasa', 'Pramy Agro', 'FxAlgo']}
        line1="Your story starts with"
        line2="one agent."
        sub="No generic tool, no off-the-shelf model. One agent, built for your exact bottleneck, live in days — then a second, then a team."
        checks={['SOC 2 protected', 'Live in 24 hrs', 'No lock-in contract']}
      />
    </>
  )
}
