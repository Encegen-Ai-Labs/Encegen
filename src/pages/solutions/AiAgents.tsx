import {
  ArtTile,
  Btn,
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
import './solutions.css'

const AGENTS = [
  { icon: '🧾', title: 'AP Exception Agent', desc: 'Resolves every AP exception before your team sees it.', tag: 'Finance', art: 'purple' },
  { icon: '🔁', title: 'Invoice Matching', desc: 'Matches invoices 3-way across any ERP, automatically.', tag: 'AP', art: 'blue' },
  { icon: '🧑‍💼', title: 'Onboarding Agent', desc: 'Gets new hires fully set up across HR, IT and facilities.', tag: 'HR', art: 'green' },
  { icon: '🎧', title: 'Support Ticket Agent', desc: 'Reads, categorizes, routes and resolves support tickets.', tag: 'Support', art: 'cyan' },
  { icon: '🛡', title: 'Compliance Monitor', desc: 'Watches every transaction for violations before they happen.', tag: 'Compliance', art: 'orange' },
  { icon: '📈', title: 'Demand Planning', desc: 'Reads market signals and adjusts inventory forecasts daily.', tag: 'Planning', art: 'magenta' },
]

const USE_CASES = [
  {
    tags: ['NLP', 'Finance'],
    color: '#22c55e',
    title: 'Accounts Payable',
    desc: 'Auto-resolve invoice exceptions before they escalate – reconcile discrepancies, validate vendors, and route approvals.',
    metric: '73% fewer exceptions',
    compare: 'Manual: 17% → AI: 73%',
  },
  {
    tags: ['Vision', 'Support'],
    color: '#3b82f6',
    title: 'Customer Support',
    desc: 'Auto-triage and resolve tickets without human routing – classify intent, fetch context, and send answers instantly.',
    metric: '45% auto-resolution',
    compare: 'Manual: 17% → AI: 83%',
  },
  {
    tags: ['ML', 'HR'],
    color: '#8b5cf6',
    title: 'HR & Onboarding',
    desc: 'Fully set up new hires across HR, IT, and facilities – create accounts, assign policies, and notify teams automatically.',
    metric: '3× faster onboarding',
    compare: 'Manual: 1× → AI: 5×',
  },
  {
    tags: ['NLP', 'Supply Chain'],
    color: '#22d3ee',
    title: 'Supply Chain',
    desc: 'Monitor demand signals and adjust forecasts daily – read market data, detect anomalies, and update inventory plans.',
    metric: '91% forecast accuracy',
    compare: 'Baseline: 80% → AI: 91%',
  },
  {
    tags: ['Vision', 'Compliance'],
    color: '#f59e0b',
    title: 'Compliance',
    desc: 'Watch every transaction for violations in real time – detect anomalies, flag risks, and keep audit trails current.',
    metric: 'Zero manual audits',
    compare: 'Manual: 3/day → AI: 0',
  },
  {
    tags: ['ML', 'Finance'],
    color: '#ec4899',
    title: 'Financial Close',
    desc: 'Reconcile accounts and flag anomalies automatically – match transactions, validate journals, and close books faster.',
    metric: '2× faster close',
    compare: 'Manual: 1× → AI: 2×',
  },
]

const STEPS = [
  { num: '01', title: 'Trigger', meta: 'Step 1', desc: 'Webhook, schedule, or system event', chips: ['Event detected', 'Instant'] },
  { num: '02', title: 'Context', meta: 'Step 2', desc: 'ERP, CRM, and system data gathered', chips: ['Data fetched', 'Cross-system'] },
  { num: '03', title: 'Decide', meta: 'Step 3', desc: 'AI reasoning engine chooses action', chips: ['Model inference', 'Policy check'] },
  { num: '04', title: 'Execute', meta: 'Step 4', desc: 'Takes action directly in your system', chips: ['Action taken', 'Logged'] },
  { num: '05', title: 'Verify', meta: 'Step 5', desc: 'Confirms outcome and notifies team', chips: ['Audit trail', 'Notification'] },
]

const TESTIMONIALS = [
  {
    tag: 'Siemens',
    color: '#22c55e',
    quote: 'Our AP team used to spend Mondays clearing the exception queue. Now they spend Mondays on strategy.',
    initials: 'AM',
    name: 'Anna Müller',
    role: 'VP Supply Chain, Siemens AG',
    metric: '73% fewer exceptions',
    hue: 150,
  },
  {
    tag: 'Vodafone',
    color: '#3b82f6',
    quote: 'The agents went live on a Tuesday. By Thursday, 83% of our support tickets were resolving themselves.',
    initials: 'PS',
    name: 'Priya Shah',
    role: 'Head of Support Ops, Vodafone',
    metric: '83% auto-resolution',
    hue: 215,
  },
  {
    tag: 'Airbus',
    color: '#f59e0b',
    quote: 'Three people used to review compliance logs. Now one person oversees a dashboard the agent keeps current in real time.',
    initials: 'MD',
    name: 'Marc Dubois',
    role: 'Compliance Lead, Airbus',
    metric: 'Zero manual audits',
    hue: 30,
  },
]

export default function AiAgents() {
  return (
    <>
      <PageHero
        badge={<>● Encegen AI Labs · Agent Automation</>}
        title="Your team is stuck doing work a machine should do."
        sub="Every day, thousands of process exceptions pile up. Your best people are buried in manual reviews, chasing approvals, copy-pasting between systems – when they could be solving real problems."
        actions={
          <>
            <Btn variant="white">See how AI agents fix this →</Btn>
            <Btn variant="outline-light">Watch the demo</Btn>
          </>
        }
        trusted={['IBM', 'Siemens', 'Vodafone', 'Airbus', 'Wipro']}
      />

      <GradBand quote="But what if every exception resolved itself?" />

      {/* Turning point */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="Chapter 2 · The Turning Point"
            title="Imagine waking up and finding everything already done."
          />
          <div className="split" style={{ marginTop: 56 }}>
            <div>
              <p className="left-copy">
                At 3:47am, an invoice arrives with a discrepancy. <strong>In the old world:</strong>{' '}
                it sits in a queue until morning. Someone manually reviews it, emails the vendor,
                waits for a reply.
              </p>
              <p className="left-copy">
                <strong>With Encegen AI Agents:</strong> the exception is caught in milliseconds.
                The agent cross-references your ERP, checks the purchase order, queries the vendor
                system, reconciles the discrepancy – and resolves it. All before your team's first
                coffee.
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
            title="Meet your new team. They never sleep, never miss, never quit."
            sub="6 specialized AI agents, each trained for a specific mission in your operations."
          />
          <div className="cards-3">
            {AGENTS.map((a) => (
              <article key={a.title} className="agent-card">
                <ArtTile variant={a.art} className="agent-card__art" />
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
          <SectionHead eyebrow="Use Cases" title="AI solving the problems that matter." dark />
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
            title="From the moment it triggers to the moment it's resolved."
            sub="A structured path from trigger to resolution – with clear milestones and measurable outcomes."
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
        trusted={['Siemens', 'Vodafone', 'Airbus', 'IBM']}
        line1="Your story starts with"
        line2="one agent."
        sub="No generic tools. No off-the-shelf models. Just enterprise-grade AI agents built precisely for your operational challenge – deployed in 24 hours."
        primary={{ label: 'Deploy an agent →' }}
        secondary={{ label: 'Talk to an expert' }}
        checks={['SOC 2 protected', 'Live in 24 hrs', 'No lock-in contract']}
      />
    </>
  )
}
