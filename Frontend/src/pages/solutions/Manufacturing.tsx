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
  CpuIcon,
  FactoryIcon,
  LayersIcon,
  LightbulbIcon,
  RefreshIcon,
  ShieldIcon,
  TrendingUpIcon,
  ZapIcon,
} from '../../components/icons'
import './solutions.css'

const CORE_PILLARS = [
  {
    icon: <FactoryIcon size={20} />,
    title: 'Keep production moving',
    desc: 'Watch every line in real time, catch the deviation as it happens, and flag the fix before it becomes a stoppage.',
    tag: 'Live Telemetry',
  },
  {
    icon: <LayersIcon size={20} />,
    title: 'See the whole supply chain',
    desc: 'Read demand signals, spot the disruption early, and re-plan inventory before a shortage reaches the line.',
    tag: 'End-to-End',
  },
  {
    icon: <ShieldIcon size={20} />,
    title: 'Hold the quality line',
    desc: 'Vision models trained on your own product images catch the micro-defects standard checks wave through — the ones that reach the customer.',
    tag: 'Computer Vision',
  },
]

const CAPABILITIES = [
  {
    icon: <BrainIcon size={20} />,
    title: 'Predictive Equipment Intelligence',
    desc: 'Analyzes PLC telemetry, vibration sensors, and cycle variance to surface maintenance needs days before unplanned failure.',
    tag: 'Predictive',
  },
  {
    icon: <LightbulbIcon size={20} />,
    title: 'Automated Root-Cause Tracing',
    desc: 'Correlates batch scrap spikes with upstream raw-material lots, machine calibration shifts, and environmental data in seconds.',
    tag: 'Diagnostic',
  },
  {
    icon: <ZapIcon size={20} />,
    title: 'Autonomous Schedule Re-Balancing',
    desc: 'Dynamically re-allocates work orders across lines when a bottleneck or supplier delay is detected — keeping OEE on target.',
    tag: 'Autonomous',
  },
  {
    icon: <RefreshIcon size={20} />,
    title: 'Closed-Loop ERP & MES Sync',
    desc: 'Writes production updates, material consumption, and quality holds straight back into SAP, Oracle, and shop-floor MES systems.',
    tag: 'Synchronized',
  },
]

const USE_CASES = [
  {
    tags: ['OEE', 'Shop Floor'],
    color: '#f59e0b',
    title: 'Throughput & Line Balancing',
    desc: 'AI monitors station cycle times across every shift, flags micro-stoppages, and re-sequences work orders to eliminate line starvation.',
    metric: '+22% OEE improvement',
    compare: 'Unplanned downtime cut by 41%',
  },
  {
    tags: ['Vision AI', 'QA'],
    color: '#22c55e',
    title: 'Zero-Defect Visual Inspection',
    desc: 'High-speed edge vision models inspect surface finish, weld integrity, and assembly tolerances in real time on the moving line.',
    metric: '99.4% defect capture',
    compare: 'Manual: 84% → Encegen AI: 99.4%',
  },
  {
    tags: ['Supply Chain', 'Inventory'],
    color: '#22d3ee',
    title: 'Multi-Tier Component Readiness',
    desc: 'Tracks tier-1 and tier-2 shipment telemetry against production schedules, triggering alternate sourcing before safety stock runs dry.',
    metric: '38% lower buffer stock',
    compare: '99.2% on-time line feed',
  },
  {
    tags: ['Maintenance', 'IoT'],
    color: '#8b5cf6',
    title: 'Predictive Asset Maintenance',
    desc: 'Detects bearing wear, thermal drift, and spindle anomalies from live sensor streams and schedules service during planned changeovers.',
    metric: '3.4× longer asset life',
    compare: '52% fewer emergency repairs',
  },
  {
    tags: ['Procurement', 'ERP'],
    color: '#3b82f6',
    title: 'Automated BOM & PO Reconciliation',
    desc: 'Reconciles bill-of-materials revisions, supplier lead times, and goods receipts automatically across SAP and plant floor systems.',
    metric: '70% faster MRP cycles',
    compare: 'Zero manual BOM mismatches',
  },
  {
    tags: ['Energy', 'Sustainability'],
    color: '#ec4899',
    title: 'Energy & Scrap Optimization',
    desc: 'Optimizes furnace, press, and line power draw against batch schedules while minimizing raw material off-cuts and rework.',
    metric: '18% scrap reduction',
    compare: '$1.8M avg annual plant savings',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Connect Plant & ERP',
    meta: 'Week 1',
    desc: 'Ingest live streams from SCADA, MES, PLC historians, and SAP/Oracle without halting production.',
    chips: ['SCADA / MES', 'SAP / Oracle'],
  },
  {
    num: '02',
    title: 'Map Real Line Flow',
    meta: 'Week 2',
    desc: 'Reconstruct every batch, station handoff, rework loop, and quality hold as it actually runs on the floor.',
    chips: ['Bottleneck map', 'Cycle telemetry'],
  },
  {
    num: '03',
    title: 'Train Domain Models',
    meta: 'Week 3–4',
    desc: 'Calibrate defect-vision and anomaly models on your own equipment signatures and product specs.',
    chips: ['Vision QA', 'Failure prediction'],
  },
  {
    num: '04',
    title: 'Automate Floor Actions',
    meta: 'Ongoing',
    desc: 'Trigger maintenance tickets, line re-routing, and supplier alerts directly inside your operational tools.',
    chips: ['Closed-loop', '24/7 monitoring'],
  },
]

export default function Manufacturing() {
  return (
    <>
      <PageHero
        badge="Industry Solutions · Manufacturing"
        title={
          <>
            AI Built for the <span className="accent-blue">Modern Factory Floor</span>
          </>
        }
        sub="On a factory floor, the cost of a problem is measured in downtime, scrap, and missed shipments. Encegen AI closes the gap between 'something went wrong' and 'it's already handled.'"
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
          { value: '+22%', label: 'Average OEE gain' },
          { value: '41%', label: 'Less unplanned downtime' },
          { value: '99.4%', label: 'Visual QA accuracy' },
          { value: '<14 days', label: 'Time to first line insight' },
        ]}
      />

      {/* Core Manufacturing Block (Matching Reference Card + Expanded Context) */}
      <section className="section section--light">
        <div className="container">
          <div className="industry-block" style={{ marginTop: 0 }}>
            <span className="disc-card__tag">Manufacturing</span>
            <h2 className="left-title">Manufacturing</h2>
            <p className="left-copy">
              On a factory floor, the cost of a problem is measured in downtime, scrap, and missed
              shipments. AI closes the gap between &apos;something went wrong&apos; and &apos;it&apos;s
              already handled.&apos;
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
              <strong>Where it starts:</strong> Most manufacturers begin with the highest-volume,
              most-measurable process — usually supply chain visibility or quality inspection — and
              expand from there.
            </p>
          </div>
        </div>
      </section>

      {/* Live Plant Intelligence Split */}
      <section className="section section--lavender">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Real-Time Plant Telemetry</p>
            <h2 className="left-title">
              From raw sensor and ERP signals to autonomous shop-floor action.
            </h2>
            <p className="left-copy">
              Traditional manufacturing dashboards only tell you what broke yesterday. Encegen
              connects your MES, PLC telemetry, vision cameras, and ERP inventory into one continuous
              execution loop that spots drift and acts before throughput drops.
            </p>
            <div className="proc-list">
              <span>✓ Sub-second anomaly detection across assembly and packaging lines</span>
              <span>✓ Automated supplier & safety-stock re-balancing inside SAP / Oracle</span>
              <span>✓ Edge-ready computer vision that inspects 100% of units at line speed</span>
            </div>
          </div>

          <MockPanel
            title="Plant Floor Execution Console · Line 04"
            right={<LiveDot label="Live Telemetry" />}
            rows={[
              {
                label: 'Station 03 · CNC Spindle Drift',
                sub: 'Thermal variance +1.8°C detected · Maintenance work order queued',
                chip: 'Auto-scheduled',
                chipColor: '#2fe08e',
              },
              {
                label: 'Optical QA · Batch #M-4092',
                sub: '1,420 units inspected · 2 micro-surface defects isolated automatically',
                chip: '99.86% pass',
                chipColor: '#22d3ee',
              },
              {
                label: 'Tier-1 Raw Material Feed',
                sub: 'resin-lot-88 delayed 6h · Alternate safety buffer allocated in SAP',
                chip: 'Re-routed',
                chipColor: '#a99cff',
              },
              {
                label: 'Shift OEE Performance',
                sub: 'Line running at 94.2% availability · Zero unplanned stoppages',
                chip: '+22% vs baseline',
                chipColor: '#2fe08e',
              },
            ]}
            footer={
              <>
                <span>Connected: SAP S/4HANA · Siemens MES · Edge Vision</span>
                <span>Latency: 12ms</span>
              </>
            }
          />
        </div>
      </section>

      {/* 2x2 AI Capabilities */}
      <section className="section section--light uc-cap-section">
        <div className="container">
          <SectionHead
            eyebrow="Manufacturing AI Capabilities"
            title="Four ways Encegen transforms plant operations."
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
            eyebrow="Manufacturing Use Cases"
            title="High-impact automation across the production lifecycle."
            dark
          />
          <div className="cards-3">
            {USE_CASES.map((u) => (
              <UseCaseCard key={u.title} {...u} />
            ))}
          </div>
        </div>
      </section>

      {/* Rollout StepFlow */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="How Deployment Works"
            title="Stand up your first production line in weeks, not quarters."
            sub="We start with your highest-volume, most-measurable workflow and scale across plants once the ROI is proven."
          />
          <StepFlow steps={STEPS} />
          <ResultBar
            left="Average manufacturing deployment payback: under 90 days"
            chips={['Zero production downtime during integration', 'Works with existing MES & ERP stacks']}
            action={<Btn to="/platform" variant="white">See platform architecture →</Btn>}
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
            <Link to="/solutions/financial-services" className="fcard" style={{ textDecoration: 'none' }}>
              <span className="fcard__icon">
                <TrendingUpIcon size={22} />
              </span>
              <h3>Financial Services →</h3>
              <p>
                Catch fraud in real time, automate regulatory compliance trails, and accelerate
                onboarding, KYC, and credit decisions.
              </p>
            </Link>
            <Link to="/solutions/healthcare" className="fcard" style={{ textDecoration: 'none' }}>
              <span className="fcard__icon">
                <CpuIcon size={22} />
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
        eyebrow="Encegen AI for Manufacturing"
        trusted={['EasyHunt', 'Varasa', 'Pramay Agro', 'FxAlgo']}
        line1="Ready to eliminate unplanned downtime"
        line2="and hold the quality line?"
        sub="Tell us how your lines and supply chain run today — we'll show you where Encegen AI delivers measurable OEE and quality gains first."
       
        secondary={{ label: 'Explore all use cases', to: '/solutions/use-cases', variant: 'outline-dark' }}
        checks={['No rip-and-replace', 'SOC 2 & ISO 27001 ready', 'Live in under 30 days']}
      />
    </>
  )
}
