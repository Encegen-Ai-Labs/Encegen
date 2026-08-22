import { useEffect } from 'react'
import {
  Btn,
  ClosingCTA,
  GradBand,
  MockPanel,
  PageHero,
  SectionHead,
  StepFlow,
} from '../../components/kit'
import './products.css'

const STAT_TILES = [
  { value: '42%', label: 'increase in agent daily operational throughput' },
  { value: '99.4%', label: 'SLA compliance across high-volume pipelines' },
  { value: '0 Missed', label: 'automated follow-up callback reminders' },
  { value: '< 200ms', label: 'real-time KPI calculation and telemetry' },
]

const HOW = [
  {
    num: '01',
    title: 'Ingest & Distribute',
    desc: 'Ingest leads, inquiries, or work items from any source and intelligently route them to qualified agents based on load, skill, and performance.',
  },
  {
    num: '02',
    title: 'Execute & Track',
    desc: 'Empower operational managers, team leaders, and agents with unified queues, structured call logs, callback reminders, and live KPI tracking.',
  },
  {
    num: '03',
    title: 'Analyze & Optimize',
    desc: 'Gain real-time visibility into conversion funnels, agent performance metrics, team benchmarks, and operational bottlenecks.',
  },
]

const CAPABILITIES = [
  { icon: '🎯', title: 'Intelligent Workload Distribution', desc: 'Dynamic load-balancing algorithms that distribute tasks and customer leads to active team members.' },
  { icon: '👥', title: 'Multi-Tier Hierarchy Control', desc: 'Granular permissions and view scopes for Super Admins, Operations Managers, Team Leaders, and Agents.' },
  { icon: '⏰', title: 'Automated Callback & Follow-up Engine', desc: 'Proactive reminder notifications ensure no client callback or deadline is overlooked.' },
  { icon: '📊', title: 'Real-Time KPI Dashboards', desc: 'Live operational metrics tracking conversion velocity, contact rates, ticket resolution, and agent utilization.' },
  { icon: '⚡', title: 'Audit Trail & Compliance', desc: 'Immutable activity logs recording all status changes, communications, edits, and administrative overrides.' },
  { icon: '🔌', title: 'Seamless Enterprise Integrations', desc: 'Pre-built connectors for telephony systems, CRMs, ERPs, webhooks, and database pipelines.' },
]

const STAKEHOLDERS = [
  { icon: '💼', title: 'Operations Leaders', desc: 'Monitor end-to-end departmental efficiency and remove workflow bottlenecks in real-time.' },
  { icon: '👔', title: 'Team Leaders & Supervisors', desc: 'Review team queues, reassign priority tasks, and coach agents on performance trends.' },
  { icon: '🎧', title: 'Operations & Sales Agents', desc: 'Execute daily pipelines with streamlined cards, clear reminders, and zero distractions.' },
  { icon: '📈', title: 'Executive Management', desc: 'Access high-level summaries, revenue attribution, and growth forecasts across all teams.' },
]

const FAQ = [
  {
    q: 'What is Encegen CBMS?',
    a: 'Encegen CBMS (Call Back Management System ) is an enterprise operational control plane designed to streamline team management, lead distribution, agent workflows, and live performance analytics across high-throughput business teams.',
  },
  {
    q: 'How does CBMS handle multi-level team permissions?',
    a: 'CBMS provides strict role-based access control (RBAC) with tailored interfaces for Super Admins, Operations Managers (OM), Team Leaders (TL), and Field/Desk Agents.',
  },
  {
    q: 'Can CBMS integrate with existing CRM and telephony platforms?',
    a: 'Yes. CBMS provides REST APIs, webhooks, and pre-built connectors to integrate with existing CRM databases, dialers, and custom enterprise tools.',
  },
  {
    q: 'Is CBMS suitable for high-security enterprise deployments?',
    a: 'Absolutely. CBMS features full encryption at rest and in transit, complete audit trails, session timeout controls, and compliance-ready data management.',
  },
]

export default function CBMS() {
  useEffect(() => {
    document.title = 'CBMS — Call Back Management System | Encegen AI Labs'
  }, [])

  return (
    <>
      <PageHero
        badge="Enterprise Operations Platform"
        title={
          <>
            Precision Operations.
            <br />
            <span className="accent-purple">Unified Execution.</span>
          </>
        }
        sub="An intelligent operations and team management platform that unites lead routing, agent workflows, callback reminders, and live KPI dashboards into a high-performance system."
        actions={[
          <Btn key="1" to="/platform#explore-platform" variant="white">
            Request CBMS Walkthrough &rarr;
          </Btn>,
          <Btn key="2" to="/solutions/use-cases" variant="outline-light">
            Explore Use Cases
          </Btn>,
        ]}
        trusted={['Multi-Tier Hierarchy', 'Live KPI Telemetry', 'Zero-Miss Follow-ups']}
        trustedLabel="engineered for scale"
      />

      <GradBand stats={STAT_TILES} />

      {/* Process Steps */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="How It Works"
            title="Accelerate operations from intake to resolution"
            sub="A structured operational pipeline engineered for consistency and speed."
          />
          <StepFlow steps={HOW} />
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead
            eyebrow="Capabilities"
            title="Built for high-velocity business teams"
            dark
          />
          <div className="dcard-grid">
            {CAPABILITIES.map((c) => (
              <article key={c.title} className="dcard">
                <span className="dcard__icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="Built For"
            title="Empowering every level of your organization"
          />
          <div className="cards-3">
            {STAKEHOLDERS.map((s) => (
              <article key={s.title} className="fcard">
                <span className="fcard__icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Mock Panel */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Operations Console"
            title="Live team telemetry and pipeline velocity"
          />
          <div style={{ maxWidth: 880, margin: '2rem auto 0' }}>
            <MockPanel
              title="Enterprise Operations — Team Alpha Live Queue"
              right="Live Telemetry"
              rows={[
                { label: 'Active Pipeline Records', sub: 'In progress across 18 agents', value: '1,240 Records', chip: '99.4% SLA' },
                { label: 'Scheduled Callbacks Today', sub: 'Automated queue dispatch active', value: '184 Completed', chip: '0 Overdue' },
                { label: 'Avg. First Response Time', sub: 'Inbound lead touchpoint', value: '4.2 Minutes', chip: '62% Faster' },
                { label: 'Team Conversion Index', sub: 'Current weekly benchmark', value: '28.6%', chip: '+4.8% vs Target' },
              ]}
              footer="Encegen CBMS Enterprise Control Suite v5.0 • Live Socket Connected"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="faq__content">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        dark
        line1="Supercharge your enterprise operations."
        sub="Experience how Encegen CBMS gives your management team complete clarity and execution speed."
        primary={{ label: 'Schedule a Platform Demo', to: '/platform#explore-platform' }}
        checks={['Custom Workflow Logic', 'Role-Based Permissions', 'REST API & Webhooks']}
      />
    </>
  )
}
