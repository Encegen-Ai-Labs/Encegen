import { useState } from 'react'
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
import ContactModal from '../../components/ContactModal'
import { CapabilityArt } from '../../components/CapabilityArt'
import { BarChartIcon, FileTextIcon } from '../../components/icons'
import '../../components/CapabilityArt.css'
import './solutions.css'

const FLAGSHIP_ITEMS = [
  {
    theme: 'purple',
    title: 'Domain-specific training data curation',
    desc: "We curate the exact data your model needs to learn your world, not the internet's.",
    chips: ['8% factor in model accuracy', '2.3× better than generic', '<2 wks curation avg'],
  },
  {
    theme: 'green',
    title: 'Proprietary context injection',
    desc: 'Your workflows, terminology, and business rules go into the model, so its answers fit your reality.',
    chips: ['Business-rule grounding', 'Terminology alignment'],
  },
  {
    theme: 'amber',
    title: 'Hallucination elimination techniques',
    desc: 'We ground outputs in evidence and cut false positives, combining retrieval with alignment so the model stays honest.',
    chips: ['<0.5% error rate achieved', 'RLHF + RAG combined', 'Production-tested method'],
  },
  {
    theme: 'blue',
    title: 'Continuous learning pipelines',
    desc: 'The model keeps pace as your business changes, with retraining that triggers on its own and no downtime to ship it.',
    chips: ['+1.2% accuracy per month', 'Auto-retraining triggers', 'Zero downtime updates'],
  },
]

const DISCIPLINES = [
  {
    id: 'llm-fine-tuning',
    title: 'LLM Fine-Tuning',
    desc: 'Custom language models trained on your domain data, documentation, and decisions.',
    tag: 'LANGUAGE',
    iconLetter: 'T',
    badgeBg: '#6d28d9',
    tagColor: '#7c3aed',
    tagBg: '#ede9fe',
    art: 'purple',
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    desc: 'Visual inspection, document parsing, and image classification for your workflows.',
    tag: 'VISION',
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    badgeBg: '#0891b2',
    tagColor: '#0891b2',
    tagBg: '#e0f2fe',
    art: 'cyan',
  },
  {
    id: 'predictive-intelligence',
    title: 'Predictive Intelligence',
    desc: 'Forecasting and anomaly detection trained on your specific operational time-series data.',
    tag: 'FORECASTING',
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    badgeBg: '#d97706',
    tagColor: '#d97706',
    tagBg: '#fef3c7',
    art: 'orange',
  },
  {
    id: 'nlp-understanding',
    title: 'NLP & Understanding',
    desc: 'Extract, classify, and reason over contracts, emails, tickets, and reports.',
    tag: 'TEXT AI',
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    badgeBg: '#4f46e5',
    tagColor: '#4f46e5',
    tagBg: '#e0e7ff',
    art: 'blue',
  },
  {
    id: 'reinforcement-learning',
    title: 'Reinforcement Learning',
    desc: 'Agents that learn optimal actions in your environment through guided exploration.',
    tag: 'AGENTS',
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    badgeBg: '#059669',
    tagColor: '#059669',
    tagBg: '#d1fae5',
    art: 'green',
  },
  {
    id: 'multimodal-ai',
    title: 'Multimodal AI',
    desc: 'AI that understands text, images, tables, and structured data together – as humans do.',
    tag: 'MULTIMODAL',
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 22" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    badgeBg: '#db2777',
    tagColor: '#db2777',
    tagBg: '#fce7f3',
    art: 'magenta',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    meta: 'Week 1-2',
    desc: 'Stakeholder workshops, problem framing, a data-landscape audit, and an honest feasibility and ROI read before anyone writes code.',
    chips: ['Problem brief', 'Data audit report'],
  },
  {
    num: '02',
    title: 'Data Strategy',
    meta: 'Week 3-5',
    desc: "Sourcing, a cleaning pipeline, annotation guidelines, synthetic data where it helps, and a train/test split that holds up.",
    chips: ['Clean dataset', 'Labeling schema'],
  },
  {
    num: '03',
    title: 'Architecture',
    meta: 'Week 6-7',
    desc: 'Foundation-model selection, a fine-tuning strategy, an evaluation framework, and baseline runs to measure against.',
    chips: ['Model blueprint', 'Baseline metrics'],
  },
  {
    num: '04',
    title: 'Training & Validate',
    meta: 'Week 8-11',
    desc: 'Iterative training, tuning, alignment, red-teaming, and validation against the targets we agreed on.',
    chips: ['Validated model', 'Eval scorecard'],
  },
  {
    num: '05',
    title: 'Deployment',
    meta: 'Week 12-14',
    desc: 'API integration, monitoring, A/B testing, handover, documentation, and a 30-day support window.',
    chips: ['Live in production', 'Full documentation'],
  },
]

const USE_CASES = [
  {
    tags: ['NLP', 'Finance'],
    color: '#22c55e',
    icon: <FileTextIcon size={16} />,
    title: 'Financial Document Intelligence',
    desc: 'A custom NLP model reads through contracts at scale, pulls the clauses that matter, and flags the anomalies a generic model walks straight past.',
    metric: '98% accuracy',
    compare: 'Generic GPT: 72% → Encegen: 98%',
  },
  {
    tags: ['Vision', 'Manufacturing'],
    color: '#3b82f6',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Manufacturing Defect Detection',
    desc: 'A vision model trained on your product images catches the micro-defects standard models miss — the ones that reach the customer.',
    metric: '0.2% miss rate',
    compare: 'Generic: 5.2% → Encegen: 0.2%',
  },
  {
    tags: ['ML', 'Supply Chain'],
    color: '#f59e0b',
    icon: <BarChartIcon size={16} />,
    title: 'Demand Forecasting AI',
    desc: 'A model trained on your own supply-chain history holds up where generic forecasting falls apart: the odd events, the edge cases, the days that actually cost you.',
    metric: '3× accuracy uplift',
    compare: 'Generic: 1× → Encegen: 3×',
  },
]

const TESTIMONIALS = [
  {
    tag: 'EasyHunt',
    color: '#22c55e',
    quote: 'The Encegen team engineered a bilingual OCR and document intelligence model that extracts complex land revenue records with phenomenal accuracy for title search.',
    initials: 'EH',
    name: 'Product & Research Lead',
    role: 'EasyHunt Title Search Software',
    metric: '99.4% OCR precision',
    hue: 150,
  },
  {
    tag: 'Fx Algo',
    color: '#3b82f6',
    quote: 'Encegen designed custom quantitative predictive models tuned on financial microstructure. The execution speed and resilience are remarkable.',
    initials: 'FA',
    name: 'Quantitative Strategist',
    role: 'Fx Algo (Algorithmic Trading Platform)',
    metric: '3× accuracy uplift',
    hue: 215,
  },
  {
    tag: 'Varasa',
    color: '#f59e0b',
    quote: 'Their computer vision and indexing models allow our researchers to categorize ancient artifacts, catalog excavation sites, and manage grant applications seamlessly.',
    initials: 'VR',
    name: 'Research & Conservation Head',
    role: 'Varasa (Heritage Conservation & Scholarship)',
    metric: '10,000+ artifacts indexed',
    hue: 30,
  },
]

export default function AiResearch() {
  const [showContact, setShowContact] = useState(false)

  return (
    <>
      <PageHero
        className="ai-research-hero"
        badge={<>● Encegen AI Labs – Custom AI Research &amp; Engineering</>}
        title={
          <>
            AI Built for the Exact Problem
            <br />
            No One Else Will Solve
          </>
        }
        sub="Off-the-shelf AI solves generic problems. We build custom AI — fine-tuned on your data, designed for your workflows, grounded in your business context."
        actions={
          <>
            <Btn onClick={() => setShowContact(true)} variant="white">Start a project →</Btn>
            <Btn to="#capabilities" variant="outline-light">Explore capabilities ↓</Btn>
          </>
        }
        trusted={['EasyHunt', 'Varasa', 'Pramay Agro', 'FxAlgo']}
        trustedLabel="trusted by"
      />

      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />

      <GradBand
        className="ai-research-gband"
        stats={[
          { value: '94%', label: 'Accuracy Avg' },
          { value: '12 wks', label: 'To Production' },
          { value: '3×', label: 'vs Generic AI' },
          { value: '40%', label: 'Cost Reduction' },
        ]}
      />

      {/* Flagship */}
      <section className="section section--light ai-research-flagship">
        <div className="container">
          <SectionHead
            eyebrow="Flagship Capability"
            title={
              <>
                Language models that actually
                <br />
                understand your business.
              </>
            }
          />
          <div className="ai-research-flagship__split">
            <div className="ai-research-flagship__left">
              <div className="ai-research-flagship__intro">
                <h3 className="ai-research-flagship__subtitle">
                  From generic to domain-expert, on your data.
                </h3>
                <p className="ai-research-flagship__lead">
                  Most models know a little about everything and nothing about you. We fine-tune
                  foundation models on your own material — contracts, tickets, SOPs, transaction
                  history — until the model reads your domain the way your most experienced people do.
                </p>
              </div>
              <div className="ai-research-flag-list">
                {FLAGSHIP_ITEMS.map((f) => (
                  <div
                    key={f.title}
                    className={`ai-research-flag-card ai-research-flag-card--${f.theme}`}
                  >
                    <span className="ai-research-flag-card__check" aria-hidden="true">
                      ✓
                    </span>
                    <div className="ai-research-flag-card__body">
                      <strong>{f.title}</strong>
                      <p>{f.desc}</p>
                      <div className="ai-research-flag-card__chips">
                        {f.chips.map((c) => (
                          <span key={c}>{c}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ai-research-perf-card">
              <div className="ai-perf__head">
                <div className="ai-perf__head-left">
                  <span className="ai-perf__title">MODEL PERFORMANCE</span>
                  <span className="ai-perf__live-dot" aria-hidden="true" />
                  <span className="ai-perf__live-text">· LIVE</span>
                </div>
                <div className="ai-perf__head-right">
                  <span className="ai-perf__version-label">Custom LLM · v2.4.1</span>
                  <span className="ai-perf__version-badge">V2.4.1</span>
                </div>
              </div>

              <div className="ai-perf__hero">
                <div className="ai-perf__hero-left">
                  <div className="ai-perf__big-num">
                    <strong>95.4</strong>
                    <span>%</span>
                  </div>
                  <em className="ai-perf__big-sub">Overall Accuracy</em>
                </div>
                <span className="ai-perf__baseline-pill">↑ +1.2% vs baseline</span>
              </div>

              <div className="ai-perf__divider" />

              <div className="ai-perf__bars">
                {[
                  { label: 'Financial Document Extraction', tag: 'NLP', tagType: 'nlp', value: '96.2%', width: '96.2%' },
                  { label: 'Contract Clause Classification', tag: 'NLP', tagType: 'nlp', value: '94.8%', width: '94.8%' },
                  { label: 'Anomaly Detection Precision', tag: 'ML', tagType: 'ml', value: '97.1%', width: '97.1%' },
                ].map((b) => (
                  <div key={b.label} className="ai-perf__bar-row">
                    <div className="ai-perf__bar-label-group">
                      <span className="ai-perf__bar-label">{b.label}</span>
                      <span className={`ai-perf__bar-tag ai-perf__bar-tag--${b.tagType}`}>
                        {b.tag}
                      </span>
                    </div>
                    <span className="ai-perf__bar-track">
                      <span
                        className={`ai-perf__bar-fill ai-perf__bar-fill--${b.tagType}`}
                        style={{ width: b.width }}
                      />
                    </span>
                    <span className="ai-perf__bar-value">{b.value}</span>
                  </div>
                ))}
              </div>

              <div className="ai-perf__compare">
                <div className="ai-perf__compare-col">
                  <span className="ai-perf__compare-eyebrow">WITHOUT CUSTOM AI</span>
                  <strong className="ai-perf__compare-val ai-perf__compare-val--bad">71.3%</strong>
                  <span className="ai-perf__compare-sub">Generic GPT-4</span>
                </div>
                <span className="ai-perf__compare-arrow" aria-hidden="true">
                  →
                </span>
                <div className="ai-perf__compare-col">
                  <span className="ai-perf__compare-eyebrow ai-perf__compare-eyebrow--good">
                    WITH ENCEGEN
                  </span>
                  <strong className="ai-perf__compare-val ai-perf__compare-val--good">96.2%</strong>
                  <span className="ai-perf__compare-sub">Custom fine-tuned</span>
                </div>
                <span className="ai-perf__compare-pill">+25%</span>
              </div>

              <div className="ai-perf__inferences">
                <span className="ai-perf__inferences-title">RECENT INFERENCES</span>
                <div className="ai-perf__inferences-list">
                  {[
                    { time: '09:41', desc: 'Contract extraction · 2,847 tokens', latency: '124ms' },
                    { time: '09:38', desc: 'Anomaly detection · financial data', latency: '89ms' },
                    { time: '09:35', desc: 'Model evaluation run', latency: '2.1s' },
                  ].map((inf) => (
                    <div key={inf.time} className="ai-perf__inf-row">
                      <span className="ai-perf__inf-time">{inf.time}</span>
                      <span className="ai-perf__inf-desc">{inf.desc}</span>
                      <span className="ai-perf__inf-status">
                        <b aria-hidden="true">✓</b> {inf.latency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section id="capabilities" className="section section--lavender ai-research-capabilities">
        <div className="container ai-research-capabilities__container">
          <SectionHead
            eyebrow="All Capabilities"
            title="Six research disciplines. One expert team."
            sub="Six AI disciplines. One expert team. Built to solve the problems generic models cannot touch."
          />
          <div className="cards-3 ai-research-disciplines">
            {DISCIPLINES.map((d) => (
              <article key={d.title} className="disc-card--styled">
                <CapabilityArt id={d.id} />
                <div className="disc-card__body">
                  <div className="disc-card__header-row">
                    <div
                      className="cap-badge-icon"
                      style={{ background: d.badgeBg }}
                    >
                      {d.iconLetter ? d.iconLetter : d.iconSvg}
                    </div>
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                  <span
                    className="disc-card__tag-pill"
                    style={{
                      color: d.tagColor,
                      backgroundColor: d.tagBg,
                      border: `1px solid ${d.tagColor}40`,
                    }}
                  >
                    {d.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--light ai-research-process">
        <div className="container ai-research-process__container">
          <SectionHead
            eyebrow="Our Process"
            title="Research to production, with milestones you can hold us to."
            sub="A clear path from problem to deployed model — every stage with an outcome you can see."
          />
          <div className="ai-research-process__steps">
            <StepFlow steps={STEPS} />
          </div>
          <ResultBar
            className="ai-research-process__result"
            left="14 weeks avg from kickoff to production"
            chips={['20+ enterprise AI deployments completed']}
          />
        </div>
      </section>

      {/* Use cases */}
      <section className="section section--dark ai-research-use-cases">
        <div className="container ai-research-use-cases__container">
          <SectionHead eyebrow="Use Cases" title="AI solving the problems that matter." dark />
          <div className="cards-3 ai-research-usecase-grid">
            {USE_CASES.map((u) => (
              <UseCaseCard key={u.title} {...u} />
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="section section--lavender ai-research-proof">
        <div className="container">
          <SectionHead eyebrow="Customer Proof" title="What our clients are building." />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} outlineStars />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        className="ai-research-closing"
        trusted={['Flairnetic Advocates', 'EasyHunt', 'Varasa', 'Pramay Agro', 'Fx Algo']}
        trustedLabel="trusted by our enterprise partners & clients"
        line1="Tell us your problem."
        line2="We'll build the AI."
        sub="No generic tools. No off-the-shelf models. Just research-grade custom AI built precisely for your business challenge - delivered in 14 weeks."
        secondary={{ label: 'Talk to an expert', to: '/contact', variant: 'purple' }}
        checks={['NDA-protected engagements', '14-week delivery guarantee', 'No lock-in contracts']}
      />
    </>
  )
}
