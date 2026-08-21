import {
  Btn,
  ClosingCTA,
  GradBand,
  MockPanel,
  PageHero,
  ResultBar,
  SectionHead,
  StepFlow,
  TestimonialCard,
} from '../../components/kit'
import { CapabilityArt } from '../../components/CapabilityArt'
import '../../components/CapabilityArt.css'
import './solutions.css'

const PRODUCTS = [
  {
    tag: 'Talent Management',
    title: 'TalentBridge',
    desc: 'An AI-powered internship and placement platform that matches candidates, corporates, and placement teams — and tracks every step in one place.',
    meta: '3-6 months delivery',
    note: 'Enterprise',
    art: 'purple',
  },
  {
    tag: 'Property & Search',
    title: 'Easy Hunt',
    desc: 'A property search and document platform that turns sprawling land records into something you can actually search, sort, and act on.',
    meta: 'Live in 6 weeks',
    note: 'Startup',
    art: 'cyan',
  },
  {
    tag: 'Hostel Mgmt',
    title: 'HMS',
    desc: 'An AI-assisted hostel management system: room allocation, student onboarding, and occupancy — handled in one platform.',
    meta: 'Enterprise-grade',
    note: 'Enterprise',
    art: 'green',
  },
]

const STEPS = [
  { num: '01', title: 'Discovery', meta: 'Wk 1-2', desc: 'Requirements, user research, and honest technical scoping before anything gets built.' },
  { num: '02', title: 'Architecture', meta: 'Wk 3-4', desc: 'System design, stack decisions, and the API contracts everything else hangs on.' },
  { num: '03', title: 'Design', meta: 'Wk 5-6', desc: 'Interface and experience design, prototyped and tested with real users.' },
  { num: '04', title: 'Build', meta: 'Wk 7-10', desc: 'Agile sprints on a proper CI/CD pipeline, with QA in the loop from the start.' },
  { num: '05', title: 'Test', meta: 'Wk 11-12', desc: "Load testing, a security pass, and user acceptance before anyone says 'go'." },
  { num: '06', title: 'Launch', meta: 'Wk 13+', desc: 'Deployment, monitoring, and 30 days of support while it beds in.' },
]

const STACK = [
  { name: 'React', role: 'Frontend' },
  { name: 'Next.js', role: 'Frontend' },
  { name: 'TypeScript', role: 'Frontend' },
  { name: 'Node.js', role: 'Backend' },
  { name: 'Python', role: 'Backend' },
  { name: 'FastAPI', role: 'Framework' },
  { name: 'PostgreSQL', role: 'Database' },
  { name: 'MongoDB', role: 'Database' },
  { name: 'Redis', role: 'Database' },
  { name: 'AWS', role: 'Cloud' },
  { name: 'Azure', role: 'Cloud' },
  { name: 'Docker', role: 'DevOps' },
  { name: 'Kubernetes', role: 'DevOps' },
  { name: 'GraphQL', role: 'API' },
  { name: 'Kafka', role: 'Streaming' },
  { name: 'Terraform', role: 'Infra' },
]

const TESTIMONIALS = [
  {
    tag: 'Pramay Agro',
    color: '#22c55e',
    quote: 'Encegen engineered a custom e-commerce and distribution portal for our fertilizer and pesticide operations, connecting dealer ordering and warehouse dispatch seamlessly.',
    initials: 'PA',
    name: 'Operations Director',
    role: 'Pramay Agro (Fertilizers & Pesticides E-Commerce)',
    metric: '60% time saved',
    hue: 150,
  },
  {
    tag: 'Varasa',
    color: '#3b82f6',
    quote: 'Encegen built our digital platform for archaeological excavations, ancient artifact preservation documentation, and student scholarship research grants.',
    initials: 'VR',
    name: 'Research & Conservation Head',
    role: 'Varasa (Heritage Conservation & Scholarship)',
    metric: '10k+ artifacts archived',
    hue: 215,
  },
  {
    tag: 'Fx Algo',
    color: '#f59e0b',
    quote: 'The custom algorithmic trading engine and data pipelines Encegen built operate with ultra-low latency and zero dropped packets during peak volatility.',
    initials: 'FA',
    name: 'Quantitative Strategist',
    role: 'Fx Algo (Algorithmic Trading Platform)',
    metric: '<5ms latency',
    hue: 30,
  },
]

export default function CustomSoftware() {
  return (
    <>
      <PageHero
        badge={<>● Encegen AI Labs · Custom Software · AI-Native · Enterprise Scale</>}
        title={
          <>
            Enterprise software built for
            <br />
            how you actually work.
          </>
        }
        sub="We design and build scalable, AI-native platforms that fit your operation — not software you have to bend your operation around. Delivered in months, not years."
        actions={
          <>
            <Btn to="/insights" variant="outline-light">See case studies →</Btn>
          </>
        }
        trusted={['EasyHunt', 'Varasa', 'Pramy Agro', 'FxAlgo']}
      />

      <GradBand
        stats={[
          { value: '20+', label: 'Products Shipped' },
          { value: '3-6 months', label: 'Avg to Launch' },
          { value: '99.9%', label: 'Uptime SLA' },
          { value: '50+', label: 'Enterprise Clients' },
        ]}
      />

      {/* Problem */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="Chapter 1 · The Problem"
            title="Every week, your team works around software that was never built for them."
          />
          <div className="split" style={{ marginTop: 56 }}>
            <div>
              <p className="left-copy">
                <strong>The old way:</strong> open a system that predates half the team, export a
                CSV, paste it into a spreadsheet, format it by hand, email three people, and wait
                days for sign-off. Every single week.
              </p>
              <p className="left-copy">
                <strong>With custom software from Encegen:</strong> that whole chain becomes one
                button. Data moves on its own, approvals happen in the flow, and your team spends its
                time on the work that actually needs a human.
              </p>
              <div className="sol-chip-row">
                <span className="sol-chip">4-day process</span>
                <span className="sol-chip sol-chip--green">Done in seconds</span>
              </div>
              <p className="left-copy" style={{ fontSize: 14 }}>
                72% of enterprise workflows can be fully automated with purpose-built software
              </p>
              <ul className="check-list">
                <li>Full IP ownership — the code is yours, no lock-in, ever</li>
                <li>Fixed-price delivery — the number we quote is the number you pay</li>
                <li>Built for adoption — tools your team actually wants to open</li>
              </ul>
            </div>
            <MockPanel
              title="Workflow Comparison"
              rows={[
                { label: 'BEFORE Automation', chip: 'Manual', chipColor: '#ef4444' },
                { label: '1 · Export from ERP', chip: '45 min', chipColor: '#ef4444' },
                { label: '2 · Format in Excel', chip: '2 hrs', chipColor: '#ef4444' },
                { label: '3 · Email approvals', chip: '4 days', chipColor: '#ef4444' },
                { label: '4 · Re-enter data', chip: '1 hr', chipColor: '#ef4444' },
                { label: 'WITH ENCEGEN', chip: 'Automated', chipColor: '#2fe08e' },
                { label: '1 · Click Submit', chip: '< 1 sec', chipColor: '#2fe08e' },
                { label: '2 · Auto-routed', chip: '2-4 min', chipColor: '#2fe08e' },
                { label: '3 · Approved and synced', chip: '8-10 min', chipColor: '#2fe08e' },
                { label: '4 · Done', chip: '0 manual steps', chipColor: '#2fe08e' },
              ]}
              footer={
                <>
                  <span>Total waste before: 4 days 3 hours</span>
                  <span>Operational time: 12 minutes automated</span>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="What We Build" title="Platforms that run the business, not just report on it." />
          <div className="cards-3">
            {PRODUCTS.map((p) => (
              <article key={p.title} className="disc-card">
                <CapabilityArt id={p.art} className="disc-card__art" />
                <div className="disc-card__body">
                  <span className="disc-card__tag">{p.tag}</span>
                  <h3 style={{ marginTop: 14 }}>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="disc-card__meta">
                    <span className="sol-chip sol-chip--green" style={{ fontSize: 11.5, padding: '5px 12px' }}>
                      {p.meta}
                    </span>
                    <span className="disc-card__note">{p.note}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we build */}
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="How We Build" title="From brief to production, on a schedule you can plan around." />
          <div style={{ marginTop: 60 }}>
            <StepFlow steps={STEPS} />
          </div>
          <ResultBar
            left="3-6 month average from kickoff to production · Based on 20+ successful deliveries"
            chips={['FIXED-PRICE']}
          />
        </div>
      </section>

      {/* Stack */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Our Stack" title="Modern tools, chosen because they hold up in production." dark />
          <div className="stack-grid">
            {STACK.map((s) => (
              <div key={s.name} className="stack-chip">
                <strong>{s.name}</strong>
                <span>{s.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Customer Stories" title="Products our clients love." />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.tag} {...t} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        trusted={['EasyHunt', 'Varasa', 'Pramy Agro', 'FxAlgo']}
        line1="Ready to build software that fits"
        line2="your business perfectly?"
        sub="Tell us what you need. We'll scope it, design it, and ship it — on a fixed price and a timeline you can hold us to."
        secondary={{ label: 'See case studies', to: '/insights' }}
        checks={['Full IP transfer', '3-6 month delivery', 'Fixed-price engagement']}
      />
    </>
  )
}
