import { Link } from 'react-router-dom'
import {
  Btn,
  ClosingCTA,
  GradBand,
  LiveDot,
  MockPanel,
  PageHero,
  ResultBar,
  SectionHead,
  StepFlow,
  UseCaseCard,
} from '../../components/kit'
import {
  BrainIcon,
  FactoryIcon,
  FileTextIcon,
  HeartPulseIcon,
  LightbulbIcon,
  RefreshIcon,
  ShieldIcon,
  ZapIcon,
} from '../../components/icons'
import './solutions.css'

const CORE_PILLARS = [
  {
    icon: <ShieldIcon size={20} />,
    title: 'Catch fraud as it moves',
    desc: 'Read transaction patterns in real time, flag the anomaly before it clears, and cut the false positives that bury your review team.',
    tag: 'Real-Time Risk',
  },
  {
    icon: <FileTextIcon size={20} />,
    title: 'Make compliance less manual',
    desc: 'Monitor transactions, assemble the documentation, and keep the audit trail current — so reporting stops eating the week.',
    tag: 'Audit-Ready',
  },
  {
    icon: <ZapIcon size={20} />,
    title: 'Speed the decisions that wait on people',
    desc: 'Pull and check the documents behind onboarding, KYC, and credit so the judgment calls reach a human faster.',
    tag: 'Fast KYC & Credit',
  },
]

const CAPABILITIES = [
  {
    icon: <BrainIcon size={20} />,
    title: 'Sub-5ms Transaction Intelligence',
    desc: 'Evaluates payment flows, behavioral signals, and counterparty graphs in real time to block anomalous transfers before settlement.',
    tag: 'Low-Latency',
  },
  {
    icon: <LightbulbIcon size={20} />,
    title: 'Explainable Regulatory Lineage',
    desc: 'Every model score, document extraction, and policy check records a complete, regulator-ready audit trail with zero manual logging.',
    tag: 'Explainable',
  },
  {
    icon: <ZapIcon size={20} />,
    title: 'Autonomous Document & KYC Triage',
    desc: 'Extracts, cross-verifies, and reconciles identity filings, financial statements, and sanctions lists in seconds.',
    tag: 'Automated',
  },
  {
    icon: <RefreshIcon size={20} />,
    title: 'Continuous Reconciliation Loop',
    desc: 'Matches Nostro/Vostro ledgers, payment gateways, and ERP entries continuously so month-end close stops being a fire drill.',
    tag: 'Continuous',
  },
]

const USE_CASES = [
  {
    tags: ['Risk AI', 'Payments'],
    color: '#22c55e',
    title: 'Real-Time Fraud & Anomaly Detection',
    desc: 'Scores wire, card, and instant-payment streams in milliseconds — stopping sophisticated fraud while cutting false-positive review queues.',
    metric: '68% fewer false positives',
    compare: 'Sub-5ms scoring latency',
  },
  {
    tags: ['KYC / AML', 'Onboarding'],
    color: '#3b82f6',
    title: 'Automated KYC & Commercial Onboarding',
    desc: 'Ingests corporate registries, beneficial ownership docs, and sanctions screens to assemble a verified analyst packet automatically.',
    metric: '4.5× faster onboarding',
    compare: 'Days compressed into minutes',
  },
  {
    tags: ['Compliance', 'RegTech'],
    color: '#8b5cf6',
    title: 'Continuous AML & Regulatory Reporting',
    desc: 'Monitors cross-border activity, flags suspicious structures, and drafts SAR/compliance narratives with linked evidence trails.',
    metric: '100% audit traceability',
    compare: '75% less manual compliance prep',
  },
  {
    tags: ['Credit', 'Underwriting'],
    color: '#f59e0b',
    title: 'Intelligent Credit & Loan Underwriting',
    desc: 'Parses tax returns, bank statements, and covenant history to surface cash-flow risks and speed underwriting decisions to human approvers.',
    metric: '60% faster credit decisions',
    compare: 'Zero manual data re-keying',
  },
  {
    tags: ['Treasury', 'Finance Ops'],
    color: '#22d3ee',
    title: 'Automated Ledger & Trade Reconciliation',
    desc: 'Reconciles multi-currency settlement feeds, fee schedules, and general ledger entries continuously across core banking systems.',
    metric: '87% auto-reconciled',
    compare: '2× faster financial close',
  },
  {
    tags: ['Legal', 'Due Diligence'],
    color: '#ec4899',
    title: 'Property & Collateral Title Intelligence',
    desc: 'Extracts encumbrances, chain-of-title records, and legal covenants across thousands of multi-language filings in minutes.',
    metric: '90% faster title review',
    compare: 'Proven across enterprise legal teams',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Connect Core & Feeds',
    meta: 'Step 1',
    desc: 'Integrate payment rails, core banking ledgers, document vaults, and KYC providers via encrypted APIs.',
    chips: ['Core Banking', 'ISO 20022 / SWIFT'],
  },
  {
    num: '02',
    title: 'Verify & Score Live',
    meta: 'Step 2',
    desc: 'Run ensemble risk models and document verification checks in real time against your risk appetite and policy rules.',
    chips: ['<5ms inference', 'Policy guardrails'],
  },
  {
    num: '03',
    title: 'Route High-Context Decisions',
    meta: 'Step 3',
    desc: 'Clear clean transactions autonomously and hand complex edge cases to analysts with a pre-built evidence packet.',
    chips: ['Human-in-the-loop', 'Smart triage'],
  },
  {
    num: '04',
    title: 'Lock the Audit Trail',
    meta: 'Step 4',
    desc: 'Write immutable decision logs, rationales, and regulatory filings back into your compliance system of record.',
    chips: ['Regulator-ready', 'Full lineage'],
  },
]

export default function FinancialServices() {
  return (
    <>
      <PageHero
        badge="Industry Solutions · Financial Services"
        title={
          <>
            AI That Moves Fast and <span className="accent-blue">Leaves a Clean Audit Trail</span>
          </>
        }
        sub="In finance, every workflow runs under a regulator's eye and a fraud team's clock. AI has to move fast and leave a clean trail — Encegen builds for both."
        actions={
          <>
            <Btn to="/platform" variant="white">
              Explore the platform →
            </Btn>
            <Btn to="/solutions/use-cases" variant="outline-light">
              All use cases
            </Btn>
          </>
        }
        trusted={['EasyHunt', 'Varasa', 'Pramay Agro', 'FxAlgo']}
      />

      <GradBand
        stats={[
          { value: '<5ms', label: 'Real-time risk scoring' },
          { value: '68%', label: 'Fewer false-positive alerts' },
          { value: '4.5×', label: 'Faster KYC & onboarding' },
          { value: '100%', label: 'Explainable audit lineage' },
        ]}
      />

      {/* Core Financial Services Block (Matching Reference Card + Expanded Context) */}
      <section className="section section--light">
        <div className="container">
          <div className="industry-block" style={{ marginTop: 0 }}>
            <span className="disc-card__tag">Financial Services</span>
            <h2 className="left-title">Financial Services</h2>
            <p className="left-copy">
              In finance, every workflow runs under a regulator&apos;s eye and a fraud team&apos;s
              clock. AI has to move fast and leave a clean trail — we build for both.
            </p>
            <div className="cards-3">
              {CORE_PILLARS.map((p) => (
                <article className="fcard" key={p.title}>
                  <span className="fcard__icon">{p.icon}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <span className="disc-card__tag" style={{ marginTop: 16 }}>
                    {p.tag}
                  </span>
                </article>
              ))}
            </div>
            <p className="industry-block__foot">
              <strong>Where it starts:</strong> Fraud and document automation tend to show returns
              first — high volume, clear before-and-after — which makes them the natural place to
              prove value.
            </p>
          </div>
        </div>
      </section>

      {/* Live Risk & Compliance Split */}
      <section className="section section--lavender">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Precision + Compliance</p>
            <h2 className="left-title">
              Built for high-throughput risk, underwriting, and regulatory rigor.
            </h2>
            <p className="left-copy">
              Static rule engines drown analysts in false positives, while black-box AI fails
              regulatory scrutiny. Encegen combines low-latency anomaly detection with deterministic
              policy guardrails and complete document lineage.
            </p>
            <div className="proc-list">
              <span>✓ Explainable decision logs for every transaction, KYC check, and credit file</span>
              <span>✓ Sub-5ms execution pipelines proven in algorithmic & financial workflows</span>
              <span>✓ Human-in-the-loop escalation with pre-assembled compliance packets</span>
            </div>
          </div>

          <MockPanel
            title="Financial Risk & Compliance Engine"
            right={<LiveDot label="Live Stream" />}
            rows={[
              {
                label: 'Wire Stream · TXN-994821',
                sub: 'Cross-border velocity anomaly scored in 3.8ms · Placed on smart hold',
                chip: 'Flagged · 3.8ms',
                chipColor: '#f59e0b',
              },
              {
                label: 'Corporate KYC · Entity #4029',
                sub: 'UBO registry, tax filings & sanctions verified across 14 documents',
                chip: 'Cleared · Auto',
                chipColor: '#2fe08e',
              },
              {
                label: 'Credit Packet · SME Facility',
                sub: '36-month cash-flow & covenant ratios extracted · Ready for underwriter',
                chip: 'Packet ready',
                chipColor: '#22d3ee',
              },
              {
                label: 'Regulatory Audit Trail',
                sub: '100% of model inferences & policy rules logged to immutable ledger',
                chip: 'Compliant',
                chipColor: '#2fe08e',
              },
            ]}
            footer={
              <>
                <span>Guardrails: AML / KYC · SOC 2 · ISO 27001</span>
                <span>False-Positive Reduction: 68%</span>
              </>
            }
          />
        </div>
      </section>

      {/* 2x2 AI Capabilities */}
      <section className="section section--light uc-cap-section">
        <div className="container">
          <SectionHead
            eyebrow="Financial AI Capabilities"
            title="Four ways Encegen modernizes financial operations."
          />
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

      {/* Dark Use Cases Grid */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead
            eyebrow="Financial Services Use Cases"
            title="Intelligence engineered for risk, treasury, and client operations."
            dark
          />
          <div className="cards-3">
            {USE_CASES.map((u) => (
              <UseCaseCard key={u.title} {...u} />
            ))}
          </div>
        </div>
      </section>

      {/* StepFlow */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="How It Runs"
            title="From raw transaction or filing to regulator-ready action."
            sub="Every step is policy-checked, encrypted, and written to an auditable trail your compliance officers can inspect anytime."
          />
          <StepFlow steps={STEPS} />
          <ResultBar
            left="87% of routine KYC and reconciliation exceptions cleared without manual rework"
            chips={['Full decision explainability', 'Deploys inside your VPC or cloud perimeter']}
            action={<Btn to="/platform" variant="white">Explore security & governance →</Btn>}
          />
        </div>
      </section>

      {/* Cross-Industry Navigation */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="Explore Other Industries"
            title="See how Encegen AI runs across other sectors."
          />
          <div className="cards-2">
            <Link to="/solutions/manufacturing" className="fcard" style={{ textDecoration: 'none' }}>
              <span className="fcard__icon">
                <FactoryIcon size={22} />
              </span>
              <h3>Manufacturing →</h3>
              <p>
                Keep production lines moving, spot supply chain disruptions early, and catch
                micro-defects at line speed with computer vision.
              </p>
            </Link>
            <Link to="/solutions/healthcare" className="fcard" style={{ textDecoration: 'none' }}>
              <span className="fcard__icon">
                <HeartPulseIcon size={22} />
              </span>
              <h3>Healthcare →</h3>
              <p>
                Lighten clinical documentation loads, clean up revenue-cycle claims before they
                bounce, and compress prior authorizations from days into hours.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <ClosingCTA
        eyebrow="Encegen AI for Financial Services"
        trusted={['EasyHunt', 'Varasa', 'Pramay Agro', 'FxAlgo']}
        line1="Ready to cut false positives"
        line2="and automate document-heavy workflows?"
        sub="Start with fraud scoring or KYC/document automation and prove measurable ROI in weeks — with full regulatory lineage from day one."
      
        secondary={{ label: 'Explore all use cases', to: '/solutions/use-cases', variant: 'outline-dark' }}
        checks={['Explainable AI trails', 'Bank-grade encryption', 'Zero data leakage']}
      />
    </>
  )
}
