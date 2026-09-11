import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Btn } from '../../components/kit'
import ContactModal from '../../components/ContactModal'
import logoEasyHunt from '../../assets/easyhunt.png'
import logoPramay from '../../assets/pramay.png'
import logoVarasa from '../../assets/varasa.png'
import logoFxAlgo from '../../assets/fxalgo.png'

import photoSaurabh from '../../assets/Saurabh Gite.png'
import photoSwamini from '../../assets/Swamini Hirolikar.png'
import photoChaitanya from '../../assets/team/chaitanya-pimpre.png'
import photoRutuja from '../../assets/team/rutuja-jadhav.jpeg'
import photoNayana from '../../assets/Nayana Visapute.png'
import photoShruti from '../../assets/shruti Jadhav.png'
import photopoonam from '../../assets/team/poonam-harikhede.png'
import photoKartik from '../../assets/Kartik.png'
import photoPriya from '../../assets/priya.png'
import photoAditya from '../../assets/aditya nalla.png'
import photoamar from '../../assets/Amar gite.png'
import photoVishit from '../../assets/Vishit.png'
import photoIshan from '../../assets/ishan.png'
import photoNachiket from '../../assets/team/nachiket-khade.png'

import './CompanyProfile.css'

const STATS = [
  { label: 'Founded', value: '2025' },
  { label: 'Enterprises & Clients', value: '50+' },
  { label: 'AI Model Precision', value: '99.4%' },
]

const VALUES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Transparency',
    desc: 'Clear performance metrics, open communication, and complete visibility into how models make decisions.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Innovation',
    desc: 'Research-grade AI engineering delivering practical, high-impact business outcomes that compound over time.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Customer First',
    desc: 'Fixed-price delivery, full IP ownership, and zero lock-in contracts so your technology remains truly yours.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Integrity',
    desc: 'Rigorous validation, hallucination mitigation, and enterprise-grade data security in every system we ship.',
  },
]

const TEAM_MEMBERS = [
  {
    name: 'Saurabh Gite',
    role: 'Managing Director',
    image: photoSaurabh,
    initials: 'SG',
    bg: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
  },
  {
    name: 'Amar Gite',
    role: 'Co-Founder',
    image: photoamar,
    initials: 'AG',
    
    bg: 'linear-gradient(135deg, #0284c7, #2563eb)',
  },

  {
    name: 'Swamini Hirolikar',
    role: 'HR Executive',
    image: photoSwamini,
    initials: 'SH',
    bg: 'linear-gradient(135deg, #db2777, #9333ea)',
  },
  {
    name: 'Chaitanya Pimpre',
    role: 'Jr. Full Stack Developer',
    image: photoChaitanya,
    initials: 'CP',
    bg: 'linear-gradient(135deg, #6366f1, #3b82f6)',
  },
  {
    name: 'Priya Gawhane',
    role: 'Jr. AI/ML Developer',
    image: photoPriya,
    initials: 'PG',
    bg: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  },
  {
    name: 'Poonam Harinkhede',
    role: 'Jr. AI/ML Developer',
    initials: 'PH',
    image: photopoonam,
    bg: 'linear-gradient(135deg, #ea580c, #d97706)',
  },
  {
    name: 'Rutuja Jadhav',
    role: 'Jr. Software Tester',
    image: photoRutuja,
    initials: 'RJ',
    bg: 'linear-gradient(135deg, #0891b2, #4f46e5)',
  },
  {
    name: 'Nayana Visapute',
    role: 'Jr. Software Tester',
    image: photoNayana,
    initials: 'NV',
    bg: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    name: 'Shruti Jadhav',
    role: 'Jr. Full Stack Developer',
    image: photoShruti,
    initials: 'SJ',
    bg: 'linear-gradient(135deg, #f59e0b, #d97706)',
  },
  {
    name: 'Kartik Ghodake',
    role: 'Jr. UI/UX Designer',
    image: photoKartik,
    initials: 'KG',
    bg: 'linear-gradient(135deg, #6366f1, #a855f7)',
  },
  {
    name: 'Aditya Nalla',
    role: 'AI/ML Developer',
    image: photoAditya,
    initials: 'AN',
    bg: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  },
  {
    name: 'Vishit Jiwane',
    role: 'Jr. AI/ML Developer',
    image: photoVishit,
    initials: 'VJ',
    bg: 'linear-gradient(135deg, #16a34a, #0891b2)',
  },
  {
    name: 'Ishan Kalhe',
    role: 'AI/ML Trainee',
    image: photoIshan,
    initials: 'IK',
    bg: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
  },
  {
    name: 'Nachiket Khade',
    role: 'AI/ML Trainee',
    image: photoNachiket,
    initials: 'NK',
    bg: 'linear-gradient(135deg, #d946ef, #9333ea)',
  },
]

const TESTIMONIALS = [
  {
    company: 'EasyHunt',
    logo: logoEasyHunt,
    quote:
      'The Encegen team engineered a bilingual OCR and document intelligence model that extracts complex land revenue records with phenomenal accuracy.',
    client: 'Flairnetic Advocates / EasyHunt',
    tag: 'Property Law & Search',
  },
  {
    company: 'Fx Algo',
    logo: logoFxAlgo,
    quote:
      'Encegen designed custom quantitative predictive models tuned on financial microstructure. The execution speed and resilience are remarkable.',
    client: 'Fx Algo Platform',
    tag: 'Algorithmic Trading',
  },
  {
    company: 'Varasa',
    logo: logoVarasa,
    quote:
      'Their computer vision and indexing models allow our researchers to categorize ancient artifacts, catalog excavation sites, and manage grant applications seamlessly.',
    client: 'Varasa Heritage Scholarship',
    tag: 'Heritage & Scholarship',
  },
  {
    company: 'Pramay Agro',
    logo: logoPramay,
    quote:
      'The automated workflow agent and specialized distribution portal Encegen deployed transformed our agricultural fertilizer ordering and warehouse dispatch.',
    client: 'Pramay Agro Operations',
    tag: 'Agri-Tech E-Commerce',
  },
]

export default function CompanyProfile() {
  const [showContact, setShowContact] = useState(false)

  return (
    <div className="company-profile-page">
      {/* Hero Section */}
      <section className="cp-hero">
        <div className="container cp-hero__inner">
          <span className="cp-badge">OUR MISSION</span>
          <h1 className="cp-hero__title">
            We Believe Every Process <br />
            <span className="cp-hero__gradient">Should Be Understood</span>
          </h1>
          <p className="cp-hero__sub">
            Encegen was founded on a simple idea: that if you could see how your business really runs,
            you could fix anything that slows it down and engineer what comes next.
          </p>

          <div className="cp-pills">
            {STATS.map((s) => (
              <div key={s.label} className="cp-pill">
                <strong>{s.label}</strong>
                <span>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="cp-section cp-section--light">
        <div className="container cp-split">
          <div className="cp-split__left">
            <span className="cp-eyebrow">OUR VISION</span>
            <h2 className="cp-title">Making processes transparent for the world.</h2>
            <p className="cp-text">
              We started with a vision to build the operations layer that unlocks true efficiency and
              resilience for modern enterprises. By combining custom AI, cognitive agents, deep
              process intelligence, and scalable software, we make the hidden accessible and actionable.
            </p>
            <p className="cp-text">
              From AI fine-tuning to autonomous business execution, we turn operational complexity into
              lasting competitive advantage.
            </p>
          </div>

          <div className="cp-split__right">
            <div className="cp-graphic-card">
              <div className="cp-graphic-card__header">
                <span className="cp-dot cp-dot--red" />
                <span className="cp-dot cp-dot--yellow" />
                <span className="cp-dot cp-dot--green" />
                <span className="cp-graphic-card__label">Encegen Global Operations Room</span>
              </div>
              <div className="cp-graphic-card__body">
                <div className="cp-graphic-grid">
                  <div className="cp-graphic-stat">
                    <span className="cp-graphic-stat__num">99.4%</span>
                    <span className="cp-graphic-stat__lbl">Extraction Accuracy</span>
                  </div>
                  <div className="cp-graphic-stat">
                    <span className="cp-graphic-stat__num">50+</span>
                    <span className="cp-graphic-stat__lbl">Enterprise Systems</span>
                  </div>
                  <div className="cp-graphic-stat">
                    <span className="cp-graphic-stat__num">&lt;5ms</span>
                    <span className="cp-graphic-stat__lbl">Trading Latency</span>
                  </div>
                  <div className="cp-graphic-stat">
                    <span className="cp-graphic-stat__num">100%</span>
                    <span className="cp-graphic-stat__lbl">IP Ownership</span>
                  </div>
                </div>
                <div className="cp-graphic-bar">
                  <span>Pune HQ · Wagholi &amp; Pashan Technology Hubs</span>
                  <span className="cp-live-tag">● LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="cp-section cp-section--lavender">
        <div className="container">
          <div className="cp-head">
            <span className="cp-eyebrow">OUR VALUES</span>
            <h2 className="cp-title">What we stand for</h2>
            <p className="cp-sub">The principles that guide our research, our engineering, and our client partnerships.</p>
          </div>

          <div className="cp-values-grid">
            {VALUES.map((v) => (
              <div key={v.title} className="cp-value-card">
                <div className="cp-value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="cp-section cp-section--light">
        <div className="container">
          <div className="cp-head cp-head--left cp-head--leadership">
            <h2 className="cp-title">Meet our leadership</h2>
            <span className="cp-eyebrow">LEADERSHIP</span>
            <p className="cp-sub">A dedicated team combining deep AI research with enterprise-grade engineering execution.</p>
          </div>

          <div className="cp-leader-grid">
            {TEAM_MEMBERS.map((m) => (
              <div key={m.name} className="cp-leader-card">
                {m.image ? (
                  <img src={m.image} alt={m.name} className="cp-leader-photo" />
                ) : (
                  <div className="cp-leader-avatar" style={{ background: m.bg }}>
                    {m.initials}
                  </div>
                )}
                <div className="cp-leader-info">
                  <h3>{m.name}</h3>
                  <span>{m.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="cp-careers-band">
        <div className="container cp-careers-inner">
          <div className="cp-careers-left">
            <span className="cp-careers-badge">JOIN US</span>
            <h2>Help us transform the way the world works.</h2>
            <p>We are always seeking talented AI researchers, full-stack engineers, and product strategists.</p>
            <div className="cp-role-pills">
              <span>AI Research</span>
              <span>Full-Stack Engineering</span>
              <span>Product &amp; Design</span>
              <span>All Open Roles</span>
            </div>
            <div style={{ marginTop: 24 }}>
              <Btn to="/careers" variant="white">
                View all positions →
              </Btn>
            </div>
          </div>

          <div className="cp-careers-stats">
            <div className="cp-stat-box">
              <strong>100%</strong>
              <span>Problem Ownership</span>
            </div>
            <div className="cp-stat-box">
              <strong>Fixed Price</strong>
              <span>Delivery Model</span>
            </div>
            <div className="cp-stat-box">
              <strong>Global</strong>
              <span>Enterprise Standards</span>
            </div>
            <div className="cp-stat-box">
              <strong>High Growth</strong>
              <span>Career Acceleration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="cp-section cp-section--lavender">
        <div className="container">
          <div className="cp-head">
            <span className="cp-eyebrow">OUR CLIENTS</span>
            <h2 className="cp-title">What people are saying about Encegen</h2>
          </div>

          <div className="cp-testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.company} className="cp-testimonial-card">
                <div className="cp-testimonial-head">
                  <span className="cp-tag-badge">{t.company}</span>
                  <span className="cp-stars">★★★★★</span>
                </div>
                <p className="cp-testimonial-quote">“{t.quote}”</p>
                <div className="cp-testimonial-client">
                  <strong>{t.client}</strong>
                  <span>{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="cp-cta">
        <div className="container cp-cta__inner">
          <h2>Ready to join the process intelligence revolution?</h2>
          <p>Let's engineer the AI systems and scalable platforms that make your operations unstoppable.</p>
          <div className="cp-cta__buttons">
            <button
              type="button"
              className="cp-cta-btn cp-cta-btn--primary"
              onClick={() => setShowContact(true)}
            >
              Get in Touch
            </button>
            <Link to="/platform" className="cp-cta-btn cp-cta-btn--secondary">
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Contact modal */}
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </div>
  )
}
