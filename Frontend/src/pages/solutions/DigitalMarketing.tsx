import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Btn,
  ClosingCTA,
  GradBand,
  PageHero,
  ResultBar,
  SectionHead,
  StepFlow,
  TestimonialCard,
} from '../../components/kit'
import ContactModal from '../../components/ContactModal'
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
    tag: 'D2C BRAND SCALE-UP',
    color: '#22c55e',
    title: 'D2C Brand Scale-Up',
    desc: 'AI-powered paid media and email automation that took a D2C fashion brand from $200k to $1.2M MRR in 9 months.',
    metric: '6.4× ROAS',
  },
  {
    tag: 'SAAS LEAD GENERATION',
    color: '#8b78ff',
    title: 'SaaS Lead Generation',
    desc: 'Content and paid search strategy that grew organic qualified leads by 340% while reducing CAC by 65%.',
    metric: '340% lead growth',
  },
  {
    tag: 'E-COMMERCE REVENUE',
    color: '#f59e0b',
    title: 'E-commerce Revenue',
    desc: 'Email automation and conversion optimisation that added 40% to monthly revenue with zero additional ad spend.',
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
  const [showContact, setShowContact] = useState(false)

  return (
    <>
      <PageHero
        className="ai-research-hero digital-marketing-hero phero--digital-marketing"
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
            <Btn onClick={() => setShowContact(true)} variant="white">Start growing →</Btn>
            <Btn to="/insights" variant="outline-light">See case studies</Btn>
          </>
        }
        trusted={['EasyHunt', 'Varasa', 'Pramay Agro', 'FxAlgo']}
        trustedLabel="— build for"
      />

      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />

      <GradBand
        stats={[
          { value: '6.4×', label: 'Avg ROAS' },
          { value: '65%', label: 'Lower CAC' },
          { value: '3×', label: 'Qualified Leads' },
          { value: '40%', label: 'Retention' },
        ]}
      />

      {/* Problem */}
      <section className="section section--light dm-problem-section">
        <div className="container">
          <SectionHead
            eyebrow="The Problem"
            title="Most agencies run ads. Very few build a growth system."
          />
          <div className="split dm-split dm-problem-split">
            <div className="dm-split__copy">
              <span className="dm-problem-chapter">CHAPTER 1 · THE PROBLEM</span>
              <p className="dm-problem-p">
                <strong>In the old way:</strong> your agency reports vanity metrics (impressions, clicks,
                reach) that don't correlate to revenue. Campaigns are siloed (paid, SEO, email) and
                attribution is opaque. You can't see which audiences are driving real value, and decisions
                are made on gut feel rather than data.
              </p>
              <p className="dm-problem-p">
                <strong>With Encegen:</strong> you get a full-funnel growth system where every channel
                works together. AI optimisation runs continuously, and CRM integration gives you a single
                source of truth. You see exactly which audiences are converting, which messages are
                working, and which levers to pull next.
              </p>

              {/* Comparison Pill flow */}
              <div className="dm-compare-pills">
                <span className="dm-pill-before">1.2× ROAS, no attribution</span>
                <span className="dm-pill-arrow">→</span>
                <span className="dm-pill-after">5.4× ROAS, 31% bounce</span>
              </div>
              <p className="dm-pills-sub">
                71% of marketers say attribution is their biggest challenge — and it's the first thing to break when campaigns scale.
              </p>

              <ul className="dm-check-list-s1">
                <li><span className="dm-check-icon">✓</span> Full-funnel attribution across paid, SEO, email and CRM</li>
                <li><span className="dm-check-icon">✓</span> AI-powered optimisation running continuously (24/7)</li>
                <li><span className="dm-check-icon">✓</span> CRM integration for audience ownership and unified reporting</li>
                <li><span className="dm-check-icon">✓</span> Weekly performance reports and ongoing A/B testing</li>
              </ul>
            </div>

            {/* Campaign Performance Comparison Card */}
            <div className="dm-compare-card">
              <div className="dm-compare-head">
                <span className="dm-compare-title">CAMPAIGN PERFORMANCE COMPARISON</span>
              </div>

              {/* TYPICAL AGENCY GROUP */}
              <div className="dm-compare-group">
                <div className="dm-compare-badge dm-compare-badge--before">TYPICAL AGENCY</div>
                <div className="dm-compare-rows">
                  <div className="dm-compare-row">
                    <div className="dm-compare-row-left">
                      <span className="dm-row-num">01</span>
                      <span className="dm-row-label">ROAS</span>
                    </div>
                    <span className="dm-row-chip dm-row-chip--red">1.2×</span>
                  </div>
                  <div className="dm-compare-row">
                    <div className="dm-compare-row-left">
                      <span className="dm-row-num">02</span>
                      <span className="dm-row-label">CAC</span>
                    </div>
                    <span className="dm-row-chip dm-row-chip--red">$128</span>
                  </div>
                  <div className="dm-compare-row">
                    <div className="dm-compare-row-left">
                      <span className="dm-row-num">03</span>
                      <span className="dm-row-label">Conversion Rate</span>
                    </div>
                    <span className="dm-row-chip dm-row-chip--red">1.9%</span>
                  </div>
                  <div className="dm-compare-row">
                    <div className="dm-compare-row-left">
                      <span className="dm-row-num">04</span>
                      <span className="dm-row-label">Agency response time</span>
                    </div>
                    <span className="dm-row-chip dm-row-chip--red">6-7 days</span>
                  </div>
                </div>
                <div className="dm-compare-stat-summary dm-compare-stat-summary--red">
                  ROAS: 1.2× · CAC: $128 · Conversion rate: 1.9%
                </div>
              </div>

              {/* WITH ENCEGEN GROUP */}
              <div className="dm-compare-group dm-compare-group--after">
                <div className="dm-compare-badge dm-compare-badge--after">WITH ENCEGEN</div>
                <div className="dm-compare-rows">
                  <div className="dm-compare-row">
                    <div className="dm-compare-row-left">
                      <span className="dm-row-num">01</span>
                      <span className="dm-row-label">ROAS</span>
                    </div>
                    <span className="dm-row-chip dm-row-chip--green">2.8×</span>
                  </div>
                  <div className="dm-compare-row">
                    <div className="dm-compare-row-left">
                      <span className="dm-row-num">02</span>
                      <span className="dm-row-label">CAC</span>
                    </div>
                    <span className="dm-row-chip dm-row-chip--green">$84</span>
                  </div>
                  <div className="dm-compare-row">
                    <div className="dm-compare-row-left">
                      <span className="dm-row-num">03</span>
                      <span className="dm-row-label">Conversion Rate</span>
                    </div>
                    <span className="dm-row-chip dm-row-chip--green">5.4%</span>
                  </div>
                  <div className="dm-compare-row">
                    <div className="dm-compare-row-left">
                      <span className="dm-row-num">04</span>
                      <span className="dm-row-label">Agency response time</span>
                    </div>
                    <span className="dm-row-chip dm-row-chip--green">Same-day</span>
                  </div>
                </div>
                <div className="dm-compare-stat-summary dm-compare-stat-summary--green">
                  ROAS: 2.8× · CAC: $84 · Conversion rate: 5.4%
                </div>
              </div>

              <div className="dm-compare-footer">
                2.4× higher ROAS · Based on 50+ Encegen campaign systems
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship */}
      <section className="section section--lavender dm-flagship-section">
        <div className="container">
          <SectionHead
            eyebrow="Flagship Service"
            title="Paid Media That Compounds — Not Just Converts."
          />
          <div className="split dm-split dm-flagship-split">
            <div className="dm-split__copy">
              <h3 className="dm-flagship-title">
                Most ad agencies optimise for clicks. We optimise for LTV.
              </h3>
              <p className="dm-flagship-copy">
                Every campaign we run is designed around one question: what is the real cost of
                acquiring a customer who stays? We build full-funnel paid media systems connected to
                your CRM, optimised by AI, and measured against lifetime revenue — not surface-level
                vanity metrics.
              </p>
              <ul className="dm-flagship-list">
                <li>
                  <span className="dm-check-icon">✓</span>
                  <div>
                    <strong>Full-funnel attribution from ad to revenue</strong>
                    <span>Track every dollar from click to close.</span>
                  </div>
                </li>
                <li>
                  <span className="dm-check-icon">✓</span>
                  <div>
                    <strong>AI-powered bid optimisation running 24/7</strong>
                    <span>Continuous improvement without manual fatigue.</span>
                  </div>
                </li>
                <li>
                  <span className="dm-check-icon">✓</span>
                  <div>
                    <strong>Connected to your CRM and e-commerce data</strong>
                    <span>Unified decisioning across channels.</span>
                  </div>
                </li>
                <li>
                  <span className="dm-check-icon">✓</span>
                  <div>
                    <strong>Weekly performance reports with full transparency</strong>
                    <span>No black boxes — you own the data and the model.</span>
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: 26 }}>
                <Link to="/insights" className="dm-flagship-btn">
                  See our paid media approach →
                </Link>
              </div>
            </div>

            {/* Campaign Performance Dashboard Mock Panel */}
            <div className="dm-dash-card">
              <div className="dm-dash-head">
                <span className="dm-dash-title">CAMPAIGN PERFORMANCE DASHBOARD</span>
              </div>

              <div className="dm-dash-metrics">
                {/* Metric 1 */}
                <div className="dm-dash-metric">
                  <div className="dm-dash-metric-top">
                    <span className="dm-dash-metric-label">ROAS</span>
                    <span className="dm-dash-metric-val dm-dash-metric-val--purple">6.4×</span>
                  </div>
                  <div className="dm-dash-bar-track">
                    <div className="dm-dash-bar-fill dm-dash-bar-fill--purple" style={{ width: '92%' }} />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="dm-dash-metric">
                  <div className="dm-dash-metric-top">
                    <span className="dm-dash-metric-label">CAC Reduction</span>
                    <span className="dm-dash-metric-val dm-dash-metric-val--green">-65%</span>
                  </div>
                  <div className="dm-dash-bar-track">
                    <div className="dm-dash-bar-fill dm-dash-bar-fill--green" style={{ width: '82%' }} />
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="dm-dash-metric">
                  <div className="dm-dash-metric-top">
                    <span className="dm-dash-metric-label">Conversion Rate</span>
                    <span className="dm-dash-metric-val dm-dash-metric-val--green">+3.2×</span>
                  </div>
                  <div className="dm-dash-bar-track">
                    <div className="dm-dash-bar-fill dm-dash-bar-fill--green" style={{ width: '74%' }} />
                  </div>
                </div>
              </div>

              {/* White glowing pill */}
              <div className="dm-dash-pill">
                <span>Industry benchmark: 1.8× ROAS → Encegen: 6.4× ROAS</span>
              </div>

              {/* Recent Activity */}
              <div className="dm-dash-activity">
                <div className="dm-dash-activity-title">RECENT ACTIVITY</div>
                <div className="dm-dash-activity-rows">
                  <div className="dm-dash-activity-row">
                    <span className="dm-dash-activity-time">09:12</span>
                    <span className="dm-dash-activity-desc">Bid optimisation model updated</span>
                    <span className="dm-dash-activity-check">✓</span>
                  </div>
                  <div className="dm-dash-activity-row">
                    <span className="dm-dash-activity-time">08:45</span>
                    <span className="dm-dash-activity-desc">Audience sync completed</span>
                    <span className="dm-dash-activity-check">✓</span>
                  </div>
                  <div className="dm-dash-activity-row">
                    <span className="dm-dash-activity-time">07:30</span>
                    <span className="dm-dash-activity-desc">Weekly report generated</span>
                    <span className="dm-dash-activity-check">✓</span>
                  </div>
                </div>
              </div>
            </div>
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
      <section className="section section--light dm-use-cases-section">
        <div className="container">
          <SectionHead
            eyebrow="USE CASES"
            title="Growth systems built for real businesses."
          />
          <div className="cards-3 dm-cases-grid">
            {USE_CASES.map((u) => (
              <article
                key={u.title}
                className="dm-case-card hover-lift"
                style={{ ['--case-color' as string]: u.color }}
              >
                <div className="dm-case-card__top-bar" />
                <div className="dm-case-card__tag">{u.tag}</div>
                <p className="dm-case-card__desc">{u.desc}</p>
                <div className="dm-case-card__foot">
                  <span className="dm-case-card__metric">{u.metric}</span>
                </div>
              </article>
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
      <section className="section section--lavender ai-research-proof">
        <div className="container">
          <SectionHead
            eyebrow="Chapter 4 · The Proof"
            title="Growth our clients are building their businesses on."
          />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.tag} {...t} outlineStars />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        eyebrow="LET’S BUILD"
        line1="Your growth story starts with the"
        line2="right data."
        sub="Tell us your current cost of acquisition, your revenue goal, and your biggest bottleneck. We'll build the system to close the gap."
        primary={{ label: 'Start growing →', to: '/contact' }}
        secondary={{ label: 'View case studies', to: '/insights' }}
        checks={['30-day support', '2-week setup', 'Fixed-price engagement']}
      />
    </>
  )
}
