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
  UseCaseCard,
} from '../../components/kit'
import './solutions.css'

const CHANNELS = [
  {
    tag: 'SEO & Content',
    title: 'Search & Content Marketing',
    desc: 'Data-driven content strategies and technical SEO that compound over time – building traffic you own.',
    meta: '65% avg lower CAC',
    note: 'Organic',
    art: 'green',
  },
  {
    tag: 'Paid Advertising',
    title: 'Paid Media Management',
    desc: 'Google, Meta, LinkedIn campaigns managed for maximum ROAS with AI-powered bid optimisation.',
    meta: '6.4× avg ROAS',
    note: 'Paid',
    art: 'orange',
  },
  {
    tag: 'Email & Automation',
    title: 'Email & Marketing Automation',
    desc: 'Automated sequences that nurture leads, retain customers, and drive repeat purchases.',
    meta: '40% higher retention',
    note: 'Automation',
    art: 'cyan',
  },
]

const USE_CASES = [
  {
    tags: ['D2C', 'Brand Scale-Up'],
    color: '#22c55e',
    title: 'D2C Brand Scale-Up',
    desc: 'AI-paid media and email automation that took a D2C fashion brand from $200k to $1.2M MRR in 9 months.',
    metric: '6.4× ROAS',
  },
  {
    tags: ['SaaS', 'Lead Generation'],
    color: '#3b82f6',
    title: 'SaaS Lead Generation',
    desc: 'Content and paid search strategy that grew organic qualified leads by 340% while reducing CAC by 65%.',
    metric: '340% lead growth',
  },
  {
    tags: ['E-commerce', 'Revenue'],
    color: '#f59e0b',
    title: 'E-commerce Revenue',
    desc: 'Email automation and conversion optimisation that added 40% to monthly revenue with zero additional ad spend.',
    metric: '+40% revenue',
  },
]

const STEPS = [
  { num: '01', title: 'Audit & Strategy', meta: 'Wk 1-2', desc: 'Full marketing audit, competitor analysis, growth roadmap' },
  { num: '02', title: 'Setup & Launch', meta: 'Wk 2-4', desc: 'Tracking, attribution, campaign launch, automation setup' },
  { num: '03', title: 'Optimise', meta: 'Wk 5-8', desc: 'A/B testing, bid optimisation, creative iteration' },
  { num: '04', title: 'Scale', meta: 'Wk 9+', desc: 'Scale winning campaigns, expand channels, compound results' },
]

const TESTIMONIALS = [
  {
    tag: 'D2C Brand',
    color: '#22c55e',
    quote: 'Encegen scaled our ROAS from 1.8× to 6.4× in 90 days. Our CAC dropped 65% while revenue tripled.',
    initials: 'CM',
    name: 'CMO',
    role: 'D2C Fashion Brand',
    metric: '6.4× ROAS',
    hue: 150,
  },
  {
    tag: 'SaaS Company',
    color: '#3b82f6',
    quote: 'Our organic traffic grew 340% in 6 months. We now get more qualified leads from SEO than paid ads.',
    initials: 'HG',
    name: 'Head of Growth',
    role: 'B2B SaaS',
    metric: '340% traffic growth',
    hue: 215,
  },
  {
    tag: 'E-commerce',
    color: '#f59e0b',
    quote: 'Email automation alone added 40% to our monthly revenue. The setup paid for itself in week one.',
    initials: 'FO',
    name: 'Founder',
    role: 'Online Store',
    metric: '40% revenue lift',
    hue: 30,
  },
]

export default function DigitalMarketing() {
  return (
    <>
      <PageHero
        badge={<>● Encegen AI Labs · Digital Marketing · SEO · Paid Ads · Growth</>}
        title={
          <>
            Data-Driven Growth Strategies
            <br />
            That Actually Deliver.
          </>
        }
        sub="From AI-powered SEO to full-funnel paid advertising – Encegen builds growth systems that acquire, convert, and retain customers at scale."
        actions={
          <>
            <Btn variant="white">Start growing →</Btn>
            <Btn variant="outline-light">See case studies</Btn>
          </>
        }
        trusted={['D2C Brands', 'SaaS Companies', 'E-commerce', 'Enterprises']}
        trustedLabel="growing"
      />

      <GradBand
        stats={[
          { value: '6.4×', label: 'Avg ROAS' },
          { value: '65%', label: 'Lower CAC' },
          { value: '3×', label: 'Qualified Leads' },
          { value: '40%', label: 'Retention' },
        ]}
      />

      {/* Problem */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="The Problem"
            title="Most agencies run ads. Very few build growth systems."
          />
          <div className="split" style={{ marginTop: 56 }}>
            <div>
              <p className="left-copy">
                <strong>In the old world:</strong> your agency reports vanity metrics (impressions,
                clicks, reach) that don't correlate to revenue. Campaigns are siloed (paid, SEO,
                email) and attribution is opaque. You can't see which audiences are driving real
                value, and decisions are made on gut feel rather than data.
              </p>
              <p className="left-copy">
                <strong>With Encegen:</strong> you get a full-funnel growth system where every
                channel works together. AI optimisation runs continuously, and CRM integration gives
                you a single source of truth. You see exactly which audiences are converting, which
                messages are working, and which levers to pull next.
              </p>
              <ul className="check-list">
                <li>Full-funnel attribution across paid, SEO, email, and CRM</li>
                <li>AI-powered optimisation running continuously (24/7)</li>
                <li>CRM integration for audience ownership and unified reporting</li>
                <li>Weekly performance reports and ongoing A/B testing</li>
              </ul>
            </div>
            <MockPanel
              title="Campaign Performance Comparison"
              rows={[
                { label: 'TYPICAL AGENCY', chip: 'Before', chipColor: '#ef4444' },
                { label: 'ROAS', chip: '1.2×', chipColor: '#ef4444' },
                { label: 'CAC', chip: '$210', chipColor: '#ef4444' },
                { label: 'Conversion Rate', chip: '1.9%', chipColor: '#ef4444' },
                { label: 'Agency response time', chip: '3-7 days', chipColor: '#ef4444' },
                { label: 'WITH ENCEGEN', chip: 'After', chipColor: '#2fe08e' },
                { label: 'ROAS', chip: '6.4×', chipColor: '#2fe08e' },
                { label: 'CAC', chip: '$84', chipColor: '#2fe08e' },
                { label: 'Conversion Rate', chip: '5.4%', chipColor: '#2fe08e' },
                { label: 'Response', chip: 'Same day', chipColor: '#2fe08e' },
              ]}
              footer={<span>2.4× higher ROAS · Based on 50+ Encegen campaign systems</span>}
            />
          </div>
        </div>
      </section>

      {/* Flagship */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Flagship Service"
            title="Paid Media That Compounds — Not Just Converts."
          />
          <div className="split" style={{ marginTop: 56 }}>
            <div>
              <h3 className="left-title" style={{ fontSize: 24 }}>
                Most ad agencies optimise for clicks. We optimise for LTV.
              </h3>
              <p className="left-copy">
                Every campaign we run is designed around one question: what is the real cost of
                acquiring a customer who stays? We build full-funnel paid media systems connected to
                your CRM, optimised by AI, and measured against lifetime revenue — not surface-level
                vanity metrics.
              </p>
              <ul className="check-list">
                <li>
                  <strong>Full-funnel attribution from ad to revenue</strong> — track every dollar
                  from click to close
                </li>
                <li>
                  <strong>AI-powered bid optimisation running 24/7</strong> — continuous improvement
                  without manual fatigue
                </li>
                <li>
                  <strong>Connected to your CRM and e-commerce data</strong> — unified decisioning
                  across channels
                </li>
                <li>
                  <strong>Weekly performance reports with full transparency</strong> — no black
                  boxes; you own the data and the model
                </li>
              </ul>
              <div style={{ marginTop: 30 }}>
                <Btn variant="lavender">See our paid media approach →</Btn>
              </div>
            </div>
            <MockPanel
              title="Campaign Performance Dashboard"
              rows={[
                { label: 'ROAS', chip: '6.4×', chipColor: '#2fe08e' },
                { label: 'CAC Reduction', chip: '-65%', chipColor: '#2fe08e' },
                { label: 'Conversion Rate', chip: '+3.2×', chipColor: '#2fe08e' },
                { label: '09:12 · Bid optimisation model updated', chip: '✓', chipColor: '#2fe08e' },
                { label: '09:45 · Audience sync completed', chip: '✓', chipColor: '#2fe08e' },
                { label: '17:30 · Weekly report generated', chip: '✓', chipColor: '#2fe08e' },
              ]}
              footer={<span>Industry benchmark: 1.8× ROAS → Encegen: 6.4× ROAS</span>}
            />
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="Chapter 2 · How We Grow You" title="Six growth channels. One unified strategy." />
          <div className="cards-3">
            {CHANNELS.map((c) => (
              <article key={c.title} className="disc-card">
                <ArtTile variant={c.art} className="disc-card__art" />
                <div className="disc-card__body">
                  <span className="disc-card__tag">{c.tag}</span>
                  <h3 style={{ marginTop: 14 }}>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="disc-card__meta">
                    <span className="sol-chip sol-chip--green" style={{ fontSize: 11.5, padding: '5px 12px' }}>
                      {c.meta}
                    </span>
                    <span className="disc-card__note">{c.note}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Use Cases" title="Growth systems built for real businesses." dark />
          <div className="cards-3">
            {USE_CASES.map((u) => (
              <UseCaseCard key={u.title} {...u} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="Chapter 3 · The Process" title="From strategy to compounding growth." />
          <div style={{ marginTop: 60 }}>
            <StepFlow steps={STEPS} />
          </div>
          <ResultBar
            left="Results visible in 30 days · Compounding month over month · Full data transparency"
            chips={['FIXED-PRICE']}
          />
        </div>
      </section>

      {/* Proof */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Chapter 4 · The Proof"
            title="Growth our clients are building their businesses on."
          />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.tag} {...t} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        trusted={['D2C Brands', 'SaaS', 'E-commerce', 'Enterprises']}
        line1="Your growth story starts with the"
        line2="right data."
        sub="Tell us your current CAC, revenue goals, and biggest bottleneck. We will build the growth system to get you there."
        primary={{ label: 'Start growing →' }}
        secondary={{ label: 'View case studies' }}
        checks={['30-day support', '2-week setup', 'Fixed-price engagement']}
      />
    </>
  )
}
