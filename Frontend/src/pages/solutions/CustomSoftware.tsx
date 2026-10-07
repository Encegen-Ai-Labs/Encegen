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
} from '../../components/kit'
import ContactModal from '../../components/ContactModal'
import { CapabilityArt } from '../../components/CapabilityArt'
import '../../components/CapabilityArt.css'
import './solutions.css'

const PRODUCTS = [
  {
    tag: 'Talent Management',
    title: 'EnciHire',
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

import { CUSTOM_SOFTWARE_TECH_STACK as STACK } from '../../data/techStack'

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

const BEFORE_STEPS = [
  { num: '1', label: 'Export from ERP', chip: '45 min', tone: 'amber' },
  { num: '2', label: 'Format in Excel', chip: '2 hrs', tone: 'red' },
  { num: '3', label: 'Email approvals', chip: '4 days', tone: 'red' },
  { num: '4', label: 'Re-enter data', chip: '1 hr', tone: 'amber' },
]

const AFTER_STEPS = [
  { num: '1', label: 'Click Submit', chip: '< 1 sec' },
  { num: '2', label: 'Auto-routed', chip: '2-4 min' },
  { num: '3', label: 'Approved and synced', chip: '8-10 min' },
  { num: '4', label: 'Done', chip: '0 manual steps' },
]

export default function CustomSoftware() {
  const [showContact, setShowContact] = useState(false)

  return (
    <>
      <PageHero
        className="ai-research-hero custom-software-hero"
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
            <Btn onClick={() => setShowContact(true)} variant="white">Start a project →</Btn>
            <Btn to="/insights" variant="outline-light">See case studies</Btn>
          </>
        }
        trusted={['EasyHunt', 'Varasa', 'Pramay Agro', 'FxAlgo']}
        trustedLabel="trusted by"
      />

      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />

      <GradBand
        className="ai-research-gband"
        stats={[
          { value: '20+', label: 'Products Shipped' },
          { value: '3-6 months', label: 'Avg to Launch' },
          { value: '99.9%', label: 'Uptime SLA' },
          { value: '50+', label: 'Enterprise Clients' },
        ]}
      />

      {/* Problem */}
      <section className="section section--light custom-sw-problem">
        <div className="container">
          <SectionHead
            eyebrow="Chapter 1 · The Problem"
            title={
              <>
                Every week, your team works around
                <br />
                software that was never built for them.
              </>
            }
          />
          <div className="custom-sw-problem__split">
            <div className="custom-sw-problem__left">
              <span className="custom-sw-problem__eyebrow">Chapter 1 · The Problem</span>
              <p className="custom-sw-problem__p">
                <strong>The old way:</strong> open a system that predates half the team, export a
                CSV, paste it into a spreadsheet, format it by hand, email three people, and wait
                days for sign-off. Every single week.
              </p>
              <p className="custom-sw-problem__p">
                <strong>With custom software from Encegen:</strong> that whole chain becomes one
                button. Data moves on its own, approvals happen in the flow, and your team spends its
                time on the work that actually needs a human.
              </p>
              <div className="custom-sw-problem__pills">
                <span className="custom-sw-pill custom-sw-pill--muted">4-day process</span>
                <span className="custom-sw-pill__arrow" aria-hidden="true">→</span>
                <span className="custom-sw-pill custom-sw-pill--purple">Done in seconds</span>
              </div>
              <p className="custom-sw-problem__caption">
                72% of enterprise workflows can be fully automated with purpose-built software
              </p>
              <ul className="custom-sw-problem__checks">
                <li>
                  <span className="custom-sw-check-icon" aria-hidden="true">✓</span>
                  <span>Full IP ownership — the code is yours, no lock-in, ever</span>
                </li>
                <li>
                  <span className="custom-sw-check-icon" aria-hidden="true">✓</span>
                  <span>Fixed-price delivery — the number we quote is the number you pay</span>
                </li>
                <li>
                  <span className="custom-sw-check-icon" aria-hidden="true">✓</span>
                  <span>Built for adoption — tools your team actually wants to open</span>
                </li>
              </ul>
            </div>

            <div className="custom-sw-workflow-card">
              <span className="custom-sw-wf__title">WORKFLOW COMPARISON</span>

              {/* BEFORE block */}
              <div className="custom-sw-wf__block">
                <span className="custom-sw-wf__badge custom-sw-wf__badge--before">
                  BEFORE Automation
                </span>
                <div className="custom-sw-wf__steps">
                  {BEFORE_STEPS.map((s) => (
                    <div key={s.num} className="custom-sw-wf__row">
                      <span className="custom-sw-wf__num custom-sw-wf__num--before">
                        {s.num}
                      </span>
                      <span className="custom-sw-wf__label custom-sw-wf__label--before">
                        {s.label}
                      </span>
                      <span className={`custom-sw-wf__chip custom-sw-wf__chip--${s.tone}`}>
                        {s.chip}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="custom-sw-wf__summary custom-sw-wf__summary--before">
                  <span>Total waste before:</span>
                  <strong>4 days 3 hours</strong>
                </div>
              </div>

              <div className="custom-sw-wf__divider" />

              {/* WITH ENCEGEN block */}
              <div className="custom-sw-wf__block">
                <span className="custom-sw-wf__badge custom-sw-wf__badge--after">
                  WITH ENCEGEN
                </span>
                <div className="custom-sw-wf__steps">
                  {AFTER_STEPS.map((s) => (
                    <div key={s.num} className="custom-sw-wf__row">
                      <span className="custom-sw-wf__num custom-sw-wf__num--after">
                        {s.num}
                      </span>
                      <span className="custom-sw-wf__label custom-sw-wf__label--after">
                        {s.label}
                      </span>
                      <span className="custom-sw-wf__chip custom-sw-wf__chip--green">
                        {s.chip}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="custom-sw-wf__summary custom-sw-wf__summary--after">
                  <span>Operational time:</span>
                  <strong>12 minutes automated</strong>
                </div>
              </div>
            </div>
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
      <section className="section section--light tech-stack-section">
        <div className="container">
          <SectionHead
            eyebrow="OUR TECH STACK"
            title="Modern technologies. Battle-tested in production."
            sub="We choose every tool in our stack specifically for enterprise performance, cloud reliability, and long-term scalability — not just what is popular."
          />
          <div className="stack-grid">
            {STACK.map((s) => (
              <div key={s.name} className="stack-chip">
                <span className="stack-chip__dot" aria-hidden="true" />
                <div className="stack-chip__content">
                  <strong>{s.name}</strong>
                  <span>{s.role}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="stack-note">
            Architecture chosen based on your business model — cloud-native microservices for enterprise
            scale, modular platforms for rapid iteration, and event-driven pipelines for real-time operations.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="section section--lavender ai-research-proof">
        <div className="container">
          <SectionHead eyebrow="Customer Stories" title="Products our clients love." />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.tag} {...t} outlineStars />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        className="custom-software-closing"
        eyebrow="LET'S BUILD"
        line1="Ready to build software that fits"
        line2="your business perfectly?"
        sub="Tell us what you need to build. We'll scope it, design it, and deliver it — in 3-6 months."
        primary={{ label: 'Talk to an expert', to: '/contact' }}
        secondary={{ label: 'See case studies', to: '/insights' }}
        checks={[
          { text: 'Full IP transfer', icon: '🛡️' },
          { text: '3-6 month delivery', icon: '⏱️' },
          { text: 'Fixed-price engagement', icon: '📋' },
        ]}
      />
    </>
  )
}
