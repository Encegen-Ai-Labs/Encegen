import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  PageHero,
  SectionHead,
} from '../../components/kit'
import ContactModal from '../../components/ContactModal'
import { LightbulbIcon, RefreshIcon, ZapIcon } from '../../components/icons'
import './solutions.css'

function GaugeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <path d="m12 14 3-3" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}

const CAPABILITIES = [
  {
    icon: <GaugeIcon size={20} />,
    title: 'Process Discovery',
    desc: 'AI automatically maps every process variant from raw event data – no manual modeling required.',
    tag: 'AUTONOMOUS',
  },
  {
    icon: <LightbulbIcon size={20} />,
    title: 'Root Cause Analysis',
    desc: 'AI pinpoints exactly why processes break down – tracing issues through thousands of upstream steps in milliseconds.',
    tag: 'INTELLIGENT',
  },
  {
    icon: <ZapIcon size={20} />,
    title: 'Recommended Actions',
    desc: 'AI generates prioritized, executable recommendations for each process gap – ranked by business impact.',
    tag: 'PROACTIVE',
  },
  {
    icon: <RefreshIcon size={20} />,
    title: 'Continuous Optimization',
    desc: 'AI monitors processes 24/7, adapts to change, and automatically refines recommendations as your business evolves.',
    tag: 'ADAPTIVE',
  },
]

const WITHOUT = [
  {
    title: 'Decisions made on stale data',
    desc: 'Teams act on reports that are weeks-old, missing critical process deviations.',
    chip: '3-4 week lag',
  },
  {
    title: 'Exceptions handled manually',
    desc: 'Every process exception requires human intervention - slowing operations and burning resources.',
    chip: '70% manual',
  },
  {
    title: 'No visibility across systems',
    desc: 'SAP, Salesforce, and ServiceNow data all in silos - no unified view of what is actually happening.',
    chip: '12+ systems',
  },
  {
    title: 'Reactive, not proactive',
    desc: 'Problems are discovered after they cause damage - not before they escalate.',
    chip: '5× more costly',
  },
]

const WITH = [
  {
    title: 'Real-time process visibility',
    desc: 'AI maps every process variant the moment it happens - no sampling, no delays, no assumptions.',
    chip: 'Live data',
  },
  {
    title: 'Automated exception handling',
    desc: 'AI detects, routes, and resolves process exceptions automatically - directly inside your systems.',
    chip: '87% automated',
  },
  {
    title: 'Unified intelligence layer',
    desc: 'One connected view across SAP, Salesforce, ServiceNow and any other system in your stack.',
    chip: '1 platform',
  },
  {
    title: 'Predictive, not reactive',
    desc: 'AI identifies problems before they occur, recommending action days ahead of impact.',
    chip: '3.2× faster',
  },
]

const PROCESSES = [
  { label: 'Order-to-Cash', id: 'order-to-cash' },
  { label: 'Purchase-to-Pay' },
  { label: 'Accounts Payable', id: 'accounts-payable' },
  { label: 'Logistics & Fulfillment' },
  { label: 'IT Service Management', id: 'it-service-management' },
  { label: 'HR Service Delivery' },
]

const USE_CASES = [
  {
    tag: 'FINANCE',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
    title: 'Accounts Payable Automation',
    desc: 'AI identifies bottlenecks, flags duplicates, and auto-routes exceptions — reducing AP cycle time by up to 65%.',
    metric: '65% faster',
    id: 'accounts-payable',
  },
  {
    tag: 'SUPPLY CHAIN',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14v10Z" />
        <circle cx="17" cy="18.5" r="2.5" />
        <circle cx="7" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Supply Chain Resilience',
    desc: 'AI monitors supply chain in real time, predicts disruptions, and recommends re-routing actions.',
    metric: '99.4% on-time',
    id: 'supply-chain',
  },
  {
    tag: 'REVENUE',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    title: 'Order-to-Cash Excellence',
    desc: 'AI detects revenue leakage in O2C cycle, identifies at-risk orders, and triggers automatic remediation.',
    metric: '40% DSO reduction',
    id: 'order-to-cash',
  },
  {
    tag: 'IT OPS',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" x2="20" y1="19" y2="19" />
      </svg>
    ),
    title: 'IT Service Management',
    desc: 'AI auto-resolves routine tickets, predicts service degradation, optimizes ITSM workflows end-to-end.',
    metric: '3× faster resolution',
    id: 'it-service-management',
  },
  {
    tag: 'MANUFACTURING',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1" />
        <path d="M12 18h1" />
        <path d="M7 18h1" />
      </svg>
    ),
    title: 'Manufacturing Operations',
    desc: 'AI monitors production processes, flags compliance deviations, and optimizes throughput in real time.',
    metric: '22% OEE improvement',
  },
  {
    tag: 'PROCUREMENT',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
    title: 'Procurement Intelligence',
    desc: 'AI surfaces savings opportunities, flags maverick spend, and ensures compliance across procurement.',
    metric: '$2.4M avg savings',
  },
]

const TESTIMONIALS = [
  {
    brand: 'EASYHUNT',
    quote: 'The Encegen team engineered a bilingual OCR and document intelligence platform that extracts complex land revenue records with phenomenal accuracy for title search.',
    name: 'Flarnetics Advocate',
    role: '',
    metric: '99.4% OCR precision',
  },
  {
    brand: 'VARASA',
    quote: 'Encegen AI Labs transformed our heritage exploration platform, ancient artifact preservation documentation, and student scholarship grant tracking.',
    name: 'Research & Conservation Head',
    role: 'VP CONSERVATION, VARASA HERITAGE',
    metric: '10,000+ artifacts documented',
  },
  {
    brand: 'PRAMAY AGRO',
    quote: 'The specialized e-commerce platform and inventory workflows Encegen built allow our team to manage fertilizer and pesticide distribution seamlessly.',
    name: 'Operations Director',
    role: 'OPERATIONS DIRECTOR, PRAMAY AGRO',
    metric: '5× faster distribution',
  },
]

function ArrowRightExact({ size = 16, color = '#6366f1' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TraditionalVsEncegenCard() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 480,
        background: '#070C24',
        borderRadius: 20,
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
        padding: '28px 28px 24px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Traditional AI Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div
          style={{
            padding: '3px 10px',
            borderRadius: 6,
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#8b949e',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          TRADITIONAL AI
        </div>
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#ef4444',
            boxShadow: '0 0 8px #ef4444',
          }}
        />
      </div>

      {/* Traditional AI Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '18px' }}>
        {[
          { title: 'Siloed data analysis', desc: 'Works on snapshots, misses process context' },
          { title: 'Static rule-based alerts', desc: "Flags issues but can't explain why they happen" },
          { title: 'Manual hand-off required', desc: 'Insights sit in dashboards, never reach systems' },
          { title: 'Reactive by design', desc: "Detects problems only after they've already occurred" },
        ].map((item) => (
          <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid #ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '1px',
              }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700, lineHeight: 1.25 }}>
                {item.title}
              </span>
              <span style={{ color: '#8896ab', fontSize: '11px', fontWeight: 400, marginTop: '2px', lineHeight: 1.35 }}>
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Traditional AI Impact Bar */}
      <div style={{ marginTop: '16px' }}>
        <div style={{ width: '100%', height: 3.5, background: 'rgba(255, 255, 255, 0.08)', borderRadius: 2 }}>
          <div style={{ width: '15%', height: '100%', background: '#ef4444', borderRadius: 2 }} />
        </div>
        <div style={{ color: '#ef4444', fontSize: '10.5px', fontWeight: 600, marginTop: '5px' }}>
          Process Impact: Low
        </div>
      </div>

      {/* Center Divider & VS Pill */}
      <div style={{ position: 'relative', margin: '20px 0 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', width: '100%', height: 1, background: 'rgba(255, 255, 255, 0.08)' }} />
        <div
          style={{
            position: 'relative',
            background: '#6366f1',
            color: '#ffffff',
            fontSize: '10px',
            fontWeight: 800,
            padding: '2.5px 13px',
            borderRadius: 9999,
            boxShadow: '0 0 12px rgba(99, 102, 241, 0.4)',
            letterSpacing: '0.04em',
          }}
        >
          VS
        </div>
      </div>

      {/* Encegen AI Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div
          style={{
            padding: '3px 10px',
            borderRadius: 6,
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            color: '#38bdf8',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          ENCEGEN AI
        </div>
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 8px #10b981',
          }}
        />
      </div>

      {/* Encegen AI Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '18px' }}>
        {[
          { title: 'End-to-end process intelligence', desc: 'Understands full context, not just data points' },
          { title: 'AI-powered root cause analysis', desc: 'Pinpoints exactly why each process fails' },
          { title: 'Direct system action', desc: 'Pushes fixes into SAP, Salesforce, ServiceNow automatically' },
          { title: 'Continuously proactive', desc: 'Prevents issues before they impact the business' },
        ].map((item) => (
          <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '1px',
              }}
            >
              <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                <path d="M1.5 3.5L3.5 5.5L7.5 1.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700, lineHeight: 1.25 }}>
                {item.title}
              </span>
              <span style={{ color: '#8896ab', fontSize: '11px', fontWeight: 400, marginTop: '2px', lineHeight: 1.35 }}>
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Encegen AI Impact Bar */}
      <div style={{ marginTop: '16px' }}>
        <div style={{ width: '100%', height: 3.5, background: 'rgba(255, 255, 255, 0.08)', borderRadius: 2 }}>
          <div
            style={{
              width: '78%',
              height: '100%',
              background: 'linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)',
              borderRadius: 2,
            }}
          />
        </div>
        <div style={{ color: '#06b6d4', fontSize: '10.5px', fontWeight: 600, marginTop: '5px' }}>
          Process Impact: High
        </div>
      </div>
    </div>
  )
}

export default function UseCases() {
  const [showContact, setShowContact] = useState(false)

  return (
    <>
      <PageHero
        className="phero--use-cases"
        badge="ENCEGEN AI"
        title={
          <>
            Put AI to Work Across{' '}
            <span className="accent-blue">
              Every Business
              <br />
              Process
            </span>
          </>
        }
        sub="Encegen AI doesn't just surface insights - it acts. Embed intelligent automation directly into your SAP, Salesforce, and ServiceNow workflows."
      />

      {/* AI understands */}
      <section className="section section--light use-cases-intro">
        <div className="container split use-cases-intro__layout" style={{ alignItems: 'center' }}>
          <div className="use-cases-intro__copy" style={{ maxWidth: 580, width: '100%' }}>
            <p
              className="shead__eyebrow"
              style={{
                color: '#6366f1',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: '13px',
                marginBottom: '14px',
              }}
            >
              PROCESS INTELLIGENCE + AI
            </p>
            <h2
              className="left-title use-cases-intro__title"
              style={{
                marginTop: 0,
                fontFamily: "'Gabarito', sans-serif",
                fontSize: 'clamp(2.35rem, 3.5vw, 48px)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#0b0f19',
                letterSpacing: '-0.025em',
                maxWidth: 580,
              }}
            >
              AI that understands&nbsp;your<br />
              business - not just&nbsp;your<br />
              data.
            </h2>
            <p
              className="left-copy"
              style={{
                marginTop: '18px',
                fontSize: '1.02rem',
                lineHeight: 1.65,
                color: '#64748b',
                maxWidth: 500,
              }}
            >
              Most AI tools analyze data in isolation. Encegen AI understands full
              process context, identifies breakdowns, and triggers automated fixes
              directly in operational systems.
            </p>
            <div
              className="proc-list"
              style={{
                marginTop: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1e293b', fontWeight: 500, fontSize: '0.95rem' }}>
                <ArrowRightExact size={16} color="#6366f1" />
                <span>Trained on real process event data, not static rules</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1e293b', fontWeight: 500, fontSize: '0.95rem' }}>
                <ArrowRightExact size={16} color="#6366f1" />
                <span>Connects AI insights directly to system actions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1e293b', fontWeight: 500, fontSize: '0.95rem' }}>
                <ArrowRightExact size={16} color="#6366f1" />
                <span>Continuously learns with every process cycle</span>
              </div>
            </div>
           
          </div>
          <div className="top-right-panel-frame" style={{ maxWidth: 480, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <TraditionalVsEncegenCard />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section uc-cap-section">
        <div className="container">
          <SectionHead eyebrow="AI CAPABILITIES" title="Four ways AI transforms your operations." />
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

      {/* The Problem We Solve */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="THE PROBLEM WE SOLVE"
            title="Most enterprises are running blind. Encegen fixes that."
            sub="Your operational data holds the answers – but without process intelligence, it stays locked in your systems. Encegen unlocks it."
          />
          <div className="use-cases-compare-wrap" style={{ marginTop: 48 }}>
            <div className="use-cases-comparison-layout">
              <div className="compare-col">
                <div style={{ marginBottom: 16 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#ef4444', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    WITHOUT ENCEGEN
                  </span>
                </div>
                {WITHOUT.map((w) => (
                  <div key={w.title} className="uc-comp-card uc-comp-card--bad">
                    <span className="uc-comp-mark uc-comp-mark--bad">✕</span>
                    <div className="uc-comp-body">
                      <strong>{w.title}</strong>
                      <p>{w.desc}</p>
                    </div>
                    <span className="uc-comp-chip uc-comp-chip--bad">{w.chip}</span>
                  </div>
                ))}
              </div>

              <div className="uc-comp-vs">
                <span>vs</span>
              </div>

              <div className="compare-col">
                <div style={{ marginBottom: 16 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#10b981', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    WITH ENCEGEN
                  </span>
                </div>
                {WITH.map((w) => (
                  <div key={w.title} className="uc-comp-card uc-comp-card--good">
                    <span className="uc-comp-mark uc-comp-mark--good">✓</span>
                    <div className="uc-comp-body">
                      <strong>{w.title}</strong>
                      <p>{w.desc}</p>
                    </div>
                    <span className="uc-comp-chip uc-comp-chip--good">{w.chip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* 87% Metric Banner */}
          <div className="uc-metric-banner">
            <div className="uc-metric-banner__left">
              <strong className="uc-metric-banner__big-stat">87%</strong>
              <span className="uc-metric-banner__big-label">
                of AI recommendations are actioned within 24<br />hours
              </span>
            </div>

            <div className="uc-metric-banner__divider" aria-hidden="true" />

            <div className="uc-metric-banner__middle">
              <div className="uc-metric-banner__row">
                <strong className="uc-metric-banner__stat">3.2×</strong>
                <span className="uc-metric-banner__label">faster response to process disruptions</span>
              </div>
              <div className="uc-metric-banner__row">
                <strong className="uc-metric-banner__stat">5,000+</strong>
                <span className="uc-metric-banner__label">enterprise deployments worldwide</span>
              </div>
            </div>

            <div className="uc-metric-banner__action">
              <Link to="/platform" className="uc-metric-banner__btn">
                See how it works &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Processes */}
      <section className="section section--light use-cases-process">
        <div className="container use-cases-process__container">
          <div className="use-cases-process__heading">
            <h2>Optimize the processes that matter most.</h2>
            <span className="use-cases-process__underline" aria-hidden="true" />
            <p>By Process</p>
          </div>
          <div className="proc-grid use-cases-process__list">
            {PROCESSES.map((p) => (
              <a key={p.label} href={p.id ? `#${p.id}` : '#'} className="proc-card">
                <span className="proc-card__arrow" aria-hidden="true">→</span>
                <span>{p.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section section--dark uc-cases-section">
        <div className="container">
          <div className="uc-cases-header">
            <span className="uc-cases-eyebrow">USE CASES</span>
            <h2 className="uc-cases-title">AI-powered solutions for your most critical processes.</h2>
          </div>
          <div className="uc-cases-grid">
            {USE_CASES.map((u) => (
              <div key={u.title} id={u.id} className="uc-card">
                <div className="uc-card__top">
                  <div className="uc-card__icon">{u.icon}</div>
                  <span className="uc-card__tag">{u.tag}</span>
                </div>
                <h3 className="uc-card__title">{u.title}</h3>
                <p className="uc-card__desc">{u.desc}</p>
                <div className="uc-card__metric">{u.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Impact */}
      <section className="uc-impact-section">
        <div className="container">
          <div className="uc-impact-header">
            <span className="uc-impact-eyebrow">PROVEN IMPACT</span>
            <h2 className="uc-impact-title">Real results from real deployments.</h2>
          </div>
          <div className="uc-impact-grid">
            <div className="uc-impact-tile">
              <strong>40%</strong>
              <span>avg process improvement</span>
            </div>
            <div className="uc-impact-tile">
              <strong>$2.4T</strong>
              <span>business value unlocked</span>
            </div>
            <div className="uc-impact-tile">
              <strong>10B+</strong>
              <span>events daily</span>
            </div>
            <div className="uc-impact-tile">
              <strong>5,000+</strong>
              <span>enterprise customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="section section--light uc-stories-section">
        <div className="container">
          <div className="uc-stories-header">
            <span className="uc-stories-eyebrow">CUSTOMER STORIES</span>
            <h2 className="uc-stories-title">Enterprises running smarter with Encegen AI.</h2>
          </div>
          <div className="uc-stories-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="uc-story-card">
                <div className="uc-story-brand">{t.brand}</div>
                <p className="uc-story-quote">“{t.quote}”</p>
                <div className="uc-story-author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
                <div className="uc-story-metric-wrap">
                  <span className="uc-story-metric">{t.metric}</span>
                </div>
              </div>
            ))}
          </div>
        
        </div>
      </section>

      {/* 3-Part Closing Stack (Ready / Stats / Find Solution) */}
      <div className="uc-bottom-stack">
        {/* Part 1: Ready to put AI to work? */}
        <section className="uc-bottom-card uc-bottom-card--ready">
          <div className="container uc-bottom-card__inner">
            <h2 className="uc-bottom-card__title">Ready to put AI to work?</h2>
            <p className="uc-bottom-card__sub">
              See how Encegen AI can transform your highest-priority processes in 30 days.
            </p>
            <div className="uc-bottom-card__actions">
              <Link to="/platform" className="uc-neu-pill">
                Explore AI Platform &rarr;
              </Link>
              <Link to="/resources" className="uc-neu-pill">
                Explore AI Resources
              </Link>
            </div>
          </div>
        </section>

        {/* Part 2: Join 5,000+ companies dark stats band */}
        <section className="uc-bottom-stats">
          <div className="container uc-bottom-stats__inner">
            <h2 className="uc-bottom-stats__title">
              Join 5,000+ companies transforming their operations.
            </h2>
            <p className="uc-bottom-stats__eyebrow">STATS</p>

            <div className="uc-bottom-stats__grid">
              <div className="uc-bottom-stats__item">
                <strong>70+</strong>
                <span>INDUSTRIES</span>
              </div>
              <div className="uc-bottom-stats__item">
                <strong>300%</strong>
                <span>AVG ROI</span>
              </div>
              <div className="uc-bottom-stats__item">
                <strong>$2.4T</strong>
                <span>BUSINESS VALUE</span>
              </div>
            </div>

            <div className="uc-bottom-stats__logos" aria-label="Enterprise clients">
              <span>EasyHunt</span>
              <span>Varasa</span>
              <span>Pramay Agro</span>
            </div>
          </div>
        </section>

        {/* Part 3: Find your solution. */}
        <section className="uc-bottom-card uc-bottom-card--solution">
          <div className="container uc-bottom-card__inner">
            <h2 className="uc-bottom-card__title uc-bottom-card__title--sm">
              Find your solution.
            </h2>
            <div className="uc-bottom-card__actions">
              <button
                type="button"
                className="uc-neu-pill"
                onClick={() => setShowContact(true)}
              >
                Talk to an expert &rarr;
              </button>
              <Link to="/platform" className="uc-neu-pill">
                Browse all solutions
              </Link>
            </div>
          </div>
        </section>
      </div>

      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  )
}
