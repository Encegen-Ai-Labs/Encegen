import {
  ArtTile,
  Btn,
  ClosingCTA,
  GradBand,
  LiveDot,
  PageHero,
  ResultBar,
  SectionHead,
  StepFlow,
  TestimonialCard,
  UseCaseCard,
} from '../../components/kit'
import './solutions.css'

const FLAGSHIP_ITEMS = [
  {
    title: 'Domain-specific training data curation',
    desc: 'We curate the exact data your model needs to learn your domain.',
    chips: ['8% factor in model accuracy', '2.3× better than generic', '<2 wks curation avg'],
  },
  {
    title: 'Proprietary context injection',
    desc: 'We inject your workflows, terminology and business rules into the model.',
    chips: ['Business-rule grounding', 'Terminology alignment'],
  },
  {
    title: 'Hallucination elimination techniques',
    desc: 'We reduce false positives and ensure outputs are grounded in evidence.',
    chips: ['<0.5% error rate achieved', 'RLHF + RAG combined', 'Production-tested method'],
  },
  {
    title: 'Continuous learning pipelines',
    desc: 'Models stay up-to-date as your business evolves and new data arrives.',
    chips: ['+1.2% accuracy per month', 'Auto-retraining triggers', 'Zero downtime updates'],
  },
]

const DISCIPLINES = [
  { title: 'LLM Fine-Tuning', desc: 'Custom language models trained on your domain data, documentation and decisions.', tag: 'Language', art: 'purple' },
  { title: 'Computer Vision', desc: 'Visual inspection, document parsing, and image classification for your workflows.', tag: 'Vision', art: 'cyan' },
  { title: 'Predictive Intelligence', desc: 'Forecasting and anomaly detection trained on your operational time-series data.', tag: 'Forecasting', art: 'orange' },
  { title: 'NLP & Understanding', desc: 'Extract, classify, and reason over contracts, emails, tickets, and reports.', tag: 'Text AI', art: 'blue' },
  { title: 'Reinforcement Learning', desc: 'Agents that learn optimal actions in your environment through guided exploration.', tag: 'Agents', art: 'green' },
  { title: 'Multimodal AI', desc: 'AI that understands text, images, tables, and structured data together – as humans do.', tag: 'Multimodal', art: 'magenta' },
]

const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    meta: 'Week 1-2',
    desc: 'Stakeholder workshops, problem framing, data landscape audit, feasibility scoring and ROI estimation.',
    chips: ['Problem brief', 'Data audit report'],
  },
  {
    num: '02',
    title: 'Data Strategy',
    meta: 'Week 3-5',
    desc: 'Data sourcing, cleaning pipeline, annotation guidelines, synthetic data generation, and train/test split design.',
    chips: ['Clean dataset', 'Labeling schema'],
  },
  {
    num: '03',
    title: 'Architecture',
    meta: 'Week 6-7',
    desc: 'Foundation model selection, fine-tuning strategy, evaluation framework design, and baseline experiment runs.',
    chips: ['Model blueprint', 'Baseline metrics'],
  },
  {
    num: '04',
    title: 'Training & Validate',
    meta: 'Week 8-11',
    desc: 'Iterative training runs, hyperparameter tuning, RLHF alignment, red-teaming, and benchmark validation against targets.',
    chips: ['Validated model', 'Eval scorecard'],
  },
  {
    num: '05',
    title: 'Deployment',
    meta: 'Week 12-14',
    desc: 'API integration, monitoring setup, A/B testing, team handover, documentation, and 30-day support period.',
    chips: ['Live in production', 'Full documentation'],
  },
]

const USE_CASES = [
  {
    tags: ['NLP', 'Finance'],
    color: '#22c55e',
    title: 'Financial Document Intelligence',
    desc: 'Custom NLP model reads 50,000+ contracts, extracts key clauses, flags anomalies – 98% accuracy vs 72% with generic models.',
    metric: '98% accuracy',
    compare: 'Generic GPT: 72% → Encegen: 98%',
  },
  {
    tags: ['Vision', 'Manufacturing'],
    color: '#3b82f6',
    title: 'Manufacturing Defect Detection',
    desc: 'Computer vision model trained on 2M+ product images detects micro-defects invisible to standard models. Zero false negatives.',
    metric: '0.2% miss rate',
    compare: 'Generic: 5.2% → Encegen: 0.2%',
  },
  {
    tags: ['ML', 'Supply Chain'],
    color: '#f59e0b',
    title: 'Demand Forecasting AI',
    desc: 'LSTM model trained on 9 years of client-specific supply chain data outperforms generic forecasting by 3× on out-of-distribution events.',
    metric: '3× accuracy uplift',
    compare: 'Generic: 1× → Encegen: 3×',
  },
]

const TESTIMONIALS = [
  {
    tag: 'Siemens',
    color: '#22c55e',
    quote: 'The Encegen team built a document intelligence system that outperformed everything we tested – including GPT-4. Truly purpose-built AI.',
    initials: 'AM',
    name: 'Andreas Müller',
    role: 'Head of AI, Siemens AG',
    metric: '98% accuracy',
    hue: 150,
  },
  {
    tag: 'Vodafone',
    color: '#3b82f6',
    quote: 'We went from proof-of-concept to production in 11 weeks. The fine-tuning quality was exceptional – our support AI now resolves 83% of tickets automatically.',
    initials: 'PS',
    name: 'Priya Shah',
    role: 'AI Lead, Vodafone',
    metric: '83% auto-resolution',
    hue: 215,
  },
  {
    tag: 'Airbus',
    color: '#f59e0b',
    quote: 'Their RL agent reduced our production scheduling time by 67%. It learned our exact constraints and keeps improving with every production cycle.',
    initials: 'MD',
    name: 'Marc Dubois',
    role: 'Operations Director, Airbus',
    metric: '67% time reduction',
    hue: 30,
  },
]

export default function AiResearch() {
  return (
    <>
      <PageHero
        badge={<>● Encegen AI Labs · Custom AI Research &amp; Engineering</>}
        title={
          <>
            AI Built for the Exact Problem
            <br />
            No One Else Will Solve
          </>
        }
        sub="Off-the-shelf AI solves generic problems. We build custom AI – fine-tuned on your data, designed for your workflows, grounded in your business context."
        actions={
          <>
            <Btn variant="white">Start a project →</Btn>
            <Btn variant="outline-light">Explore capabilities →</Btn>
          </>
        }
        trusted={['IBM', 'Siemens', 'Vodafone', 'Airbus', 'Wipro']}
      />

      <GradBand
        stats={[
          { value: '94%', label: 'Accuracy Avg' },
          { value: '12 wks', label: 'To Production' },
          { value: '3×', label: 'vs Generic AI' },
          { value: '40%', label: 'Cost Reduction' },
        ]}
      />

      {/* Flagship */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="Flagship Capability"
            title="LLM Fine-Tuning That Actually Understands Your Business."
          />
          <div className="split" style={{ marginTop: 56, alignItems: 'start' }}>
            <div>
              <h3 className="left-title" style={{ fontSize: 24 }}>
                From generic to domain-expert in 12 weeks.
              </h3>
              <p className="left-copy">
                Most language models know everything about nothing specific. We fine-tune foundation
                models on your proprietary data – contracts, tickets, SOPs, transaction history –
                until they understand your business as well as your best employees.
              </p>
              <div className="flag-list">
                {FLAGSHIP_ITEMS.map((f) => (
                  <div key={f.title} className="flag-item">
                    <strong>✓ {f.title}</strong>
                    <p>{f.desc}</p>
                    <div className="flag-item__chips">
                      {f.chips.map((c) => (
                        <span key={c}>{c}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mock">
              <div className="mock__head">
                <span className="mock__title">Model Performance</span>
                <span className="mock__right">
                  <LiveDot label="Live" />
                </span>
              </div>
              <div className="mock-big">
                <strong>95.4%</strong>
                <em>Overall Accuracy</em>
                <span>+1.2% vs baseline</span>
              </div>
              {[
                { label: 'Financial Document Extraction', tag: 'NLP', value: '96.2%', width: '96%' },
                { label: 'Contract Clause Classification', tag: 'NLP', value: '94.8%', width: '95%' },
                { label: 'Anomaly Detection Precision', tag: 'ML', value: '97.1%', width: '97%' },
              ].map((b) => (
                <div key={b.label} className="mock-bar">
                  <span className="mock-bar__label">{b.label}</span>
                  <span className="mock-bar__tag">{b.tag}</span>
                  <span className="mock-bar__track">
                    <span className="mock-bar__fill" style={{ width: b.width }} />
                  </span>
                  <span className="mock-bar__value">{b.value}</span>
                </div>
              ))}
              <div className="mock__footer">
                <span>Without custom AI: 71.3% (generic GPT-4)</span>
                <span>With Encegen: 96.2% (+25%)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="All Capabilities"
            title="Six research disciplines. One expert team."
            sub="Built to solve the problems generic models cannot touch."
          />
          <div className="cards-3">
            {DISCIPLINES.map((d) => (
              <article key={d.title} className="disc-card">
                <ArtTile variant={d.art} className="disc-card__art" />
                <div className="disc-card__body">
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                  <div className="disc-card__meta">
                    <span className="disc-card__tag">{d.tag}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="Our Process"
            title="Research to production in 14 weeks."
            sub="A structured path from problem definition to deployed AI – with clear milestones and measurable outcomes."
          />
          <div style={{ marginTop: 60 }}>
            <StepFlow steps={STEPS} />
          </div>
          <ResultBar
            left="14 weeks avg from kickoff to production"
            chips={['20+ enterprise AI deployments completed']}
            action={
              <Btn variant="purple">
                ↓ Download our AI project checklist
              </Btn>
            }
          />
        </div>
      </section>

      {/* Use cases */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Use Cases" title="AI solving the problems that matter." dark />
          <div className="cards-3">
            {USE_CASES.map((u) => (
              <UseCaseCard key={u.title} {...u} />
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Customer Proof" title="What our clients are building." />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        trusted={['Siemens', 'Vodafone', 'Airbus', 'IBM']}
        line1="Tell us your problem."
        line2="We'll build the AI."
        sub="No generic tools. No off-the-shelf models. Just research-grade custom AI built precisely for your business challenge – delivered in 14 weeks."
        primary={{ label: 'Start a project →' }}
        secondary={{ label: 'Talk to a researcher' }}
        checks={['NDA-protected engagements', '14-week delivery guarantee', 'No lock-in contract']}
      />
    </>
  )
}
