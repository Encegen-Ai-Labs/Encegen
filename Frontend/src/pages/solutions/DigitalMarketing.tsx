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
  UseCaseCard,
} from '../../components/kit'
import { CapabilityArt } from '../../components/CapabilityArt'
import '../../components/CapabilityArt.css'
import './solutions.css'

const CHANNELS = [
  {
    tag: 'SEO & Content',
    title: 'Search & Content Marketing',
    desc: "Technical SEO and content built to compound, so you're building traffic you actually own.",
    meta: '65% avg lower CAC',
    note: 'Organic',
    art: 'green',
  },
  {
    tag: 'Paid Advertising',
    title: 'Paid Media Management',
    desc: 'Google, Meta, and LinkedIn campaigns run for return, with AI handling the bid optimisation.',
    meta: '6.4× avg ROAS',
    note: 'Paid',
    art: 'orange',
  },
  {
    tag: 'Email & Automation',
    title: 'Email & Marketing Automation',
    desc: 'Sequences that nurture leads, hold on to customers, and bring them back to buy again.',
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
    desc: 'AI-run paid media and email automation that take a growing D2C brand from early traction to serious monthly revenue.',
    metric: '6.4× ROAS',
  },
  {
    tags: ['SaaS', 'Lead Generation'],
    color: '#3b82f6',
    title: 'SaaS Lead Generation',
    desc: 'A content and paid-search system that grows qualified organic leads while pulling the cost of acquisition down.',
    metric: '340% lead growth',
  },
  {
    tags: ['E-commerce', 'Revenue'],
    color: '#f59e0b',
    title: 'E-commerce Revenue',
    desc: 'Email automation and conversion work that add real monthly revenue without a rupee more in ad spend.',
    metric: '+40% revenue',
  },
]

const STEPS = [
  { num: '01', title: 'Audit & Strategy', meta: 'Wk 1-2', desc: 'A full marketing audit, a look at the competition, and a growth roadmap worth following.' },
  { num: '02', title: 'Setup & Launch', meta: 'Wk 2-4', desc: 'Tracking, attribution, automation, and the first campaigns live.' },
  { num: '03', title: 'Optimise', meta: 'Wk 5-8', desc: 'A/B testing, bid tuning, and creative iteration on what the data shows.' },
  { num: '04', title: 'Scale', meta: 'Wk 9+', desc: 'Put budget behind what works, expand to new channels, and keep the ROI high.' },
]

const TESTIMONIALS = [
  {
    tag: 'Pramay Agro',
    color: '#22c55e',
    quote: 'Encegen’s targeted digital campaigns and automated re-order funnels lowered our customer acquisition costs significantly while multiplying agricultural repeat orders.',
    initials: 'PA',
    name: 'Operations Director',
    role: 'Pramay Agro (Fertilizers & Pesticides E-Commerce)',
    metric: '6.4× ROAS',
    hue: 150,
  },
  {
    tag: 'Varasa',
    color: '#3b82f6',
    quote: 'Our scholarship grant applications and outreach expanded across hundreds of academic institutions thanks to Encegen’s precise digital distribution and SEO systems.',
    initials: 'VR',
    name: 'Research & Conservation Head',
    role: 'Varasa (Heritage Conservation & Scholarship)',
    metric: '340% lead growth',
    hue: 215,
  },
  {
    tag: 'EasyHunt',
    color: '#f59e0b',
    quote: 'Targeted acquisition for property title search advocates and legal practitioners made EasyHunt the default title verification solution across multiple districts.',
    initials: 'EH',
    name: 'Product & Research Lead',
    role: 'EasyHunt Title Search Software',
    metric: '+40% revenue',
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
            Growth you can trace back
            <br />
            to the rupee that made it.
          </>
        }
        sub="From AI-driven SEO to full-funnel paid media, we build growth systems that acquire, convert, and keep customers — and show you exactly which channel did the work."
        actions={
          <>
            <Btn to="/insights" variant="outline-light">See case studies →</Btn>
          </>
        }
        trusted={['EasyHunt', 'Varasa', 'Pramy Agro', 'FxAlgo']}
        trustedLabel="trusted by"
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
            title="Most agencies run ads. Very few build a growth system."
          />
          <div className="split" style={{ marginTop: 56 }}>
            <div>
              <p className="left-copy">
                <strong>The old way:</strong> you get a report full of impressions, clicks, and
                reach — numbers that feel like progress but never tie back to revenue. Channels run
                in separate silos, attribution is a black box, and the big calls get made on gut
                feel.
              </p>
              <p className="left-copy">
                <strong>With Encegen:</strong> every channel works off the same system. AI
                optimisation runs around the clock, your CRM becomes the single source of truth, and
                you can see exactly which audiences convert, which messages land, and which lever to
                pull next.
              </p>
              <ul className="check-list">
                <li>Full-funnel attribution across paid, SEO, email, and CRM</li>
                <li>AI-driven optimisation running continuously, not campaign to campaign</li>
                <li>CRM integration so you own the audience and the reporting</li>
                <li>Weekly performance reviews and always-on A/B testing</li>
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
                Most agencies optimise for the click. We optimise for the customer who stays.
              </h3>
              <p className="left-copy">
                Every campaign we run answers one question: what does it really cost to acquire a
                customer who sticks around? We build full-funnel paid media wired to your CRM, tuned
                by AI, and measured against lifetime value — not the vanity numbers that look good in
                a slide.
              </p>
              <ul className="check-list">
                <li>
                  <strong>Attribution from the ad all the way to closed revenue</strong> — every
                  rupee tracked
                </li>
                <li>
                  <strong>AI bid optimisation running around the clock</strong>, without the manual
                  grind
                </li>
                <li>
                  <strong>Wired into your CRM and commerce data</strong> for one connected view
                </li>
                <li>
                  <strong>Weekly reporting with nothing hidden</strong> — you own the data and the
                  model
                </li>
              </ul>
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
          <SectionHead eyebrow="Chapter 2 · How We Grow You" title="Three growth channels. One system behind them." />
          <div className="cards-3">
            {CHANNELS.map((c) => (
              <article key={c.title} className="disc-card">
                <CapabilityArt id={c.art} className="disc-card__art" />
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
          <SectionHead eyebrow="Chapter 3 · The Process" title="From a strategy to growth that compounds." />
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
        trusted={['EasyHunt', 'Varasa', 'Pramy Agro', 'FxAlgo']}
        line1="Your growth story starts with the"
        line2="right data."
        sub="Tell us your current cost of acquisition, your revenue goal, and your biggest bottleneck. We'll build the system to close the gap."
        secondary={{ label: 'View case studies', to: '/insights' }}
        checks={['30-day support', '2-week setup', 'Fixed-price engagement']}
      />
    </>
  )
}
