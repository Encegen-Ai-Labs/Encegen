import {
  ArtTile,
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
import './solutions.css'

const PRODUCTS = [
  {
    tag: 'Talent Management',
    title: 'TalentBridge',
    desc: 'AI-powered internship & placement platform connecting interns, corporates, and TPOs with intelligent matching and tracking.',
    meta: '3-6 months delivery',
    note: 'Enterprise',
    art: 'purple',
  },
  {
    tag: 'Property & Search',
    title: 'Easy Hunt',
    desc: 'Document bifurcation and property search platform — organize large data sheets and annotate documents with intelligent search.',
    meta: 'Live in 6 weeks',
    note: 'Startup',
    art: 'cyan',
  },
  {
    tag: 'Hostel Mgmt',
    title: 'HMS',
    desc: 'AI-powered hostel management system — room allocation, student onboarding, and occupancy optimization in one platform.',
    meta: 'Enterprise-grade',
    note: 'Enterprise',
    art: 'green',
  },
]

const STEPS = [
  { num: '01', title: 'Discovery', meta: 'Wk 1-2', desc: 'Requirements, user research, technical scoping' },
  { num: '02', title: 'Architecture', meta: 'Wk 3-4', desc: 'System design, stack decisions, API contracts' },
  { num: '03', title: 'Design', meta: 'Wk 5-6', desc: 'UI/UX design, prototyping, user testing' },
  { num: '04', title: 'Build', meta: 'Wk 7-10', desc: 'Agile sprints, CI/CD pipeline, QA testing' },
  { num: '05', title: 'Test', meta: 'Wk 11-12', desc: 'Load testing, security audit, UAT' },
  { num: '06', title: 'Launch', meta: 'Wk 13+', desc: 'Deployment, monitoring, 30-day support' },
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
    tag: 'Enterprise Client',
    color: '#22c55e',
    quote: 'TalentBridge replaced 3 legacy HR systems and cut our HR processing time by 60%. The integration was seamless.',
    initials: 'CH',
    name: 'CHRO',
    role: '5,000-person Enterprise',
    metric: '60% time saved',
    hue: 150,
  },
  {
    tag: 'Startup Client',
    color: '#3b82f6',
    quote: 'They shipped our MVP in 6 weeks. The UX was better than what we could have designed ourselves. Our users love it.',
    initials: 'CE',
    name: 'CEO',
    role: 'SaaS Startup',
    metric: '6-week MVP delivery',
    hue: 215,
  },
  {
    tag: 'Healthcare Client',
    color: '#f59e0b',
    quote: 'HMS went live in 3-6 months. Zero downtime. Our entire clinical staff adopted it in the first week – the UX was that intuitive.',
    initials: 'CT',
    name: 'CTO',
    role: 'Regional Hospital',
    metric: '3-6 month delivery',
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
            Enterprise Software Built for
            <br />
            How You Actually Work
          </>
        }
        sub="We design and build scalable, AI-native software platforms that fit your exact operational needs – not the other way around. Delivered in months, not years."
        actions={
          <>
            <Btn variant="white">Start a project →</Btn>
            <Btn variant="outline-light">See case studies</Btn>
          </>
        }
        trusted={['IBM', 'Siemens', 'Vodafone', 'Airbus', 'Wipro']}
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
            title="Every day your team works around software that was never built for them."
          />
          <div className="split" style={{ marginTop: 56 }}>
            <div>
              <p className="left-copy">
                <strong>In the old world:</strong> your team opens a 15-year-old system, exports a
                CSV, pastes it into Excel, formats it manually, emails it to 3 people, and waits 4
                days for approvals. Every. Single. Week.
              </p>
              <p className="left-copy">
                <strong>With Encegen custom software:</strong> that entire process becomes a single
                button. Data flows automatically, approvals are instant, and your team finally
                focuses on work that actually matters.
              </p>
              <div className="sol-chip-row">
                <span className="sol-chip">4-day process</span>
                <span className="sol-chip sol-chip--green">Done in seconds</span>
              </div>
              <p className="left-copy" style={{ fontSize: 14 }}>
                72% of enterprise workflows can be fully automated with purpose-built software
              </p>
              <ul className="check-list">
                <li>Full IP ownership - no vendor lock-in, ever</li>
                <li>Fixed-price delivery - no budget surprises</li>
                <li>3× higher team adoption vs generic tools</li>
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
          <SectionHead eyebrow="What We Build" title="Platforms that run businesses." />
          <div className="cards-3">
            {PRODUCTS.map((p) => (
              <article key={p.title} className="disc-card">
                <ArtTile variant={p.art} className="disc-card__art" />
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
          <SectionHead eyebrow="How We Build" title="From brief to production in 3-6 months." />
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
          <SectionHead eyebrow="Our Stack" title="Modern technologies. Battle-tested in production." dark />
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
        trusted={['Siemens', 'Vodafone', 'Airbus', 'IBM']}
        line1="Ready to build software that fits"
        line2="your business perfectly?"
        sub="Tell us what you need to build. We'll scope it, design it, and deliver it – in 3-6 months."
        primary={{ label: 'Start a project →' }}
        secondary={{ label: 'See case studies' }}
        checks={['Full IP transfer', '3-6 month delivery', 'Fixed-price engagement']}
      />
    </>
  )
}
