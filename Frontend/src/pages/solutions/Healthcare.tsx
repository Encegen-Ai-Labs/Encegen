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
} from '../../components/kit'
import {
  BrainIcon,
  BuildingIcon,
  ClockIcon,
  FactoryIcon,
  FileTextIcon,
  LightbulbIcon,
  RefreshIcon,
  ZapIcon,
} from '../../components/icons'
import './solutions.css'

const CORE_PILLARS = [
  {
    icon: <FileTextIcon size={20} />,
    title: 'Lighten the documentation load',
    desc: 'Turn clinical notes into structured records and draft the paperwork, so clinicians spend less of the day typing and more of it with patients.',
    tag: 'Clinical NLP',
  },
  {
    icon: <RefreshIcon size={20} />,
    title: 'Clean up the revenue cycle',
    desc: 'Check claims before they go out, flag the ones likely to bounce, and pull the missing documentation straight from the record.',
    tag: 'Clean Claims',
  },
  {
    icon: <ClockIcon size={20} />,
    title: 'Take the wait out of prior authorisation',
    desc: 'Gather the documentation, check it against payer criteria, and prepare the packet — compressing days of back-and-forth into hours.',
    tag: 'Fast Auth',
  },
]

const CAPABILITIES = [
  {
    icon: <BrainIcon size={20} />,
    title: 'Clinical Context & EHR Structuring',
    desc: 'Reads unstructured physician notes, lab summaries, and referral letters and maps them cleanly into structured EHR fields and ICD/CPT codes.',
    tag: 'Structured',
  },
  {
    icon: <LightbulbIcon size={20} />,
    title: 'Pre-Submission Claim Scrubbing',
    desc: 'Pinpoints missing modifiers, medical-necessity gaps, and payer-specific edits before a claim is ever submitted — preventing avoidable denials.',
    tag: 'Preventive',
  },
  {
    icon: <ZapIcon size={20} />,
    title: 'Automated Prior-Auth Packet Assembly',
    desc: 'Cross-checks payer clinical guidelines against patient chart history and assembles a complete, evidence-backed authorization packet.',
    tag: 'Accelerated',
  },
  {
    icon: <RefreshIcon size={20} />,
    title: 'Human-in-the-Loop Clinical Guardrails',
    desc: 'Every clinical summary, code suggestion, and payer packet is staged for rapid clinician or billing-specialist sign-off with source citations.',
    tag: 'Safe & Verified',
  },
]

const USE_CASES = [
  {
    tags: ['Clinical NLP', 'EHR'],
    color: '#22c55e',
    title: 'Ambient Clinical Documentation',
    desc: 'Transforms visit transcripts and raw notes into structured SOAP notes, discharge summaries, and coding-ready EHR entries with clinician review.',
    metric: '55% less charting time',
    compare: '2+ hours saved per clinician daily',
  },
  {
    tags: ['Revenue Cycle', 'Claims'],
    color: '#3b82f6',
    title: 'First-Pass Claim Denial Prevention',
    desc: 'Audits outbound claims against payer policy rules, flags missing clinical attachments, and attaches supporting chart evidence automatically.',
    metric: '42% fewer claim denials',
    compare: '96.8% clean first-pass rate',
  },
  {
    tags: ['Prior Auth', 'Payer Ops'],
    color: '#8b5cf6',
    title: 'Prior Authorization Automation',
    desc: 'Matches ordered procedures against payer criteria, pulls relevant labs and imaging reports, and submits complete authorization packets.',
    metric: 'Days cut to <2 hours',
    compare: '78% faster auth turnaround',
  },
  {
    tags: ['Patient Flow', 'Operations'],
    color: '#22d3ee',
    title: 'Patient Intake & Referral Triage',
    desc: 'Extracts incoming faxed/PDF referrals, verifies insurance eligibility, and routes patients to the right specialty schedule without manual queues.',
    metric: '3.2× faster referral scheduling',
    compare: 'Zero lost referral packets',
  },
  {
    tags: ['Coding', 'Compliance'],
    color: '#f59e0b',
    title: 'Autonomous Medical Coding Assist',
    desc: 'Suggests accurate ICD-10 and CPT codes with highlighted chart sentences so medical coders verify instead of hunting through records.',
    metric: '99.1% coding accuracy',
    compare: '2.4× coder throughput',
  },
  {
    tags: ['Appeals', 'RCM'],
    color: '#ec4899',
    title: 'Automated Denial Appeals Drafting',
    desc: 'When a payer denies a claim, AI analyses the denial code, extracts clinical justification from the chart, and drafts the appeal letter.',
    metric: '64% appeal overturn rate',
    compare: '80% faster appeal submission',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Connect EHR & RCM',
    meta: 'Step 1',
    desc: 'Integrate securely with Epic, Cerner, HL7/FHIR feeds, clearinghouses, and revenue-cycle platforms.',
    chips: ['HL7 / FHIR', 'Zero PHI leakage'],
  },
  {
    num: '02',
    title: 'Extract & Structure',
    meta: 'Step 2',
    desc: 'Parse clinical notes, referrals, and payer policies into structured records with direct chart citations.',
    chips: ['Clinical NLP', 'Source-linked'],
  },
  {
    num: '03',
    title: 'Validate Against Payer Rules',
    meta: 'Step 3',
    desc: 'Check medical necessity, coding completeness, and prior-auth criteria before submission.',
    chips: ['Pre-bill scrub', 'Payer criteria'],
  },
  {
    num: '04',
    title: 'Human Sign-Off & Submit',
    meta: 'Step 4',
    desc: 'Clinicians and billing teams approve with one click — keeping humans in the loop where it counts.',
    chips: ['Human-in-the-loop', 'Audit logged'],
  },
]

export default function Healthcare() {
  return (
    <>
      <PageHero
        badge="Industry Solutions · Healthcare"
        title={
          <>
            Take the Administrative Weight <span className="accent-blue">Off Patient Care</span>
          </>
        }
        sub="In healthcare, the administrative load pulls people away from patients. Encegen AI takes the repeatable weight off the back office — with a human always in the loop where it counts."
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
          { value: '55%', label: 'Less documentation time' },
          { value: '42%', label: 'Reduction in claim denials' },
          { value: '<2 hrs', label: 'Prior-auth packet turnaround' },
          { value: '100%', label: 'Human-in-the-loop safety' },
        ]}
      />

      {/* Core Healthcare Block (Matching Reference Card + Expanded Context) */}
      <section className="section section--light">
        <div className="container">
          <div className="industry-block" style={{ marginTop: 0 }}>
            <span className="disc-card__tag">Healthcare</span>
            <h2 className="left-title">Healthcare</h2>
            <p className="left-copy">
              In healthcare, the administrative load pulls people away from patients. AI takes the
              repeatable weight off the back office — with a human always in the loop where it
              counts.
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
              <strong>Where it starts:</strong> Documentation and revenue-cycle work score highest
              on volume, measurability, and safety — errors get caught by a human before they ever
              reach care — which is why most teams start there.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical & Revenue-Cycle Split */}
      <section className="section section--lavender">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Clinical + Administrative Intelligence</p>
            <h2 className="left-title">
              More time with patients. Fewer bounced claims and authorization delays.
            </h2>
            <p className="left-copy">
              Clinicians spend nearly two hours on EHR paperwork for every hour of direct patient
              care, while billing teams chase missing documentation across siloed records. Encegen
              connects clinical notes, payer rules, and revenue-cycle workflows into one safe,
              source-linked layer.
            </p>
            <div className="proc-list">
              <span>✓ Every AI-drafted note or claim edit links directly to the source chart line</span>
              <span>✓ Catches missing modifiers and payer-specific documentation before submission</span>
              <span>✓ HIPAA-ready architecture with strict role-based access and human sign-off</span>
            </div>
          </div>

          <MockPanel
            title="Clinical & Revenue Cycle Hub"
            right={<LiveDot label="Active Guardrails" />}
            rows={[
              {
                label: 'Clinical Note · Encounter #8841',
                sub: 'SOAP note & discharge summary structured · ICD-10 citations attached',
                chip: 'Ready for MD sign-off',
                chipColor: '#2fe08e',
              },
              {
                label: 'Prior Auth · MRI Lumbar Spine',
                sub: '6-week PT history & conservative care notes matched to payer policy',
                chip: 'Packet assembled',
                chipColor: '#22d3ee',
              },
              {
                label: 'Pre-Bill Claim Scrub · CLM-3092',
                sub: 'Missing modifier -25 flagged & supporting chart note linked pre-submission',
                chip: 'Denial prevented',
                chipColor: '#a99cff',
              },
              {
                label: 'Referral Intake Queue',
                sub: 'Insurance eligibility verified · Routed to Cardiology within 90 seconds',
                chip: 'Auto-triaged',
                chipColor: '#2fe08e',
              },
            ]}
            footer={
              <>
                <span>Standards: HL7 FHIR · ICD-10 / CPT · HIPAA Ready</span>
                <span>Clean Claim Rate: 96.8%</span>
              </>
            }
          />
        </div>
      </section>

      {/* 2x2 AI Capabilities */}
      <section className="section section--light uc-cap-section">
        <div className="container">
          <SectionHead
            eyebrow="Healthcare AI Capabilities"
            title="Four ways Encegen supports care and revenue teams."
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

      {/* Use Cases */}
      <section className="section section--light healthcare-use-cases">
        <div className="container">
          <SectionHead
            eyebrow="Healthcare Use Cases"
            title="High-volume back-office and clinical workflows, handled safely."
          />
          <div className="cards-3 dm-cases-grid">
            {USE_CASES.map((u) => (
              <article
                key={u.title}
                className="dm-case-card"
                style={{ ['--case-color' as string]: u.color }}
              >
                <div className="dm-case-card__top-bar" />
                <div className="dm-case-card__tag">{u.tags.join(' · ')}</div>
                <h3 className="dm-case-card__title">{u.title}</h3>
                <p className="dm-case-card__desc">{u.desc}</p>
                <div className="dm-case-card__foot">
                  <span className="dm-case-card__metric">{u.metric}</span>
                  <span className="dm-case-card__compare">{u.compare}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* StepFlow */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Safe Clinical Workflow"
            title="Built with a human in the loop at every critical decision."
            sub="AI does the heavy lifting of gathering, structuring, and checking against payer criteria — your clinicians and billing specialists make the final call."
          />
          <StepFlow steps={STEPS} />
          <ResultBar
            left="96.8% first-pass clean claim rate across automated revenue-cycle workflows"
            chips={['2+ hours saved per clinician daily', 'Prior-auth turnaround cut from days to hours']}
            action={<Btn to="/platform" variant="white">See how it integrates →</Btn>}
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
            <Link to="/solutions/financial-services" className="fcard" style={{ textDecoration: 'none' }}>
              <span className="fcard__icon">
                <BuildingIcon size={22} />
              </span>
              <h3>Financial Services →</h3>
              <p>
                Catch fraud in real time, automate regulatory compliance trails, and accelerate
                onboarding, KYC, and credit decisions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <ClosingCTA
        eyebrow="Encegen AI for Healthcare"
        trusted={['EasyHunt', 'Varasa', 'Pramay Agro', 'FxAlgo']}
        line1="Ready to lighten the documentation load"
        line2="and clean up your revenue cycle?"
        sub="Start with clinical documentation or pre-submission claim scrubbing — high volume, measurable ROI, and human-verified safety from day one."
       
        secondary={{ label: 'Explore all use cases', to: '/solutions/use-cases', variant: 'outline-dark' }}
        checks={['Human-in-the-loop by design', 'HL7 / FHIR compatible', 'Strict PHI privacy controls']}
      />
    </>
  )
}
