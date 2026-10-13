import { useEffect, useRef } from 'react'
import { Btn, ClosingCTA, GradBand, PageHero, SectionHead } from '../../components/kit'
import { ShieldIcon } from '../../components/icons'
import './company.css'

function TimelineFill() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return
      const parent = lineRef.current.parentElement
      if (!parent) return

      // Measure how far the parent container has been scrolled into view
      const rect = parent.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Start filling when the top of the timeline is 50% down the screen
      const start = rect.top - viewportHeight * 0.5
      // Finish filling when the bottom of the timeline reaches 50% of the screen
      const totalDist = rect.height

      let progress = 0
      if (start < 0) {
        progress = Math.min(1, Math.max(0, -start / totalDist))
      }

      lineRef.current.style.height = `${progress * 100}%`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial call
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div className="day-timeline__fill" ref={lineRef} />
}

import imgCuriosity from '../../assets/values/curiosity.jpg'
import imgVelocity from '../../assets/values/velocity.jpg'
import imgOpen from '../../assets/values/open.jpg'
import imgIntention from '../../assets/values/intention.jpg'
import imgHuman from '../../assets/values/human.jpg'
import imgBuiltToLast from '../../assets/values/built-to-last.jpg'

const CORE_PRINCIPLES = [
  {
    num: '01',
    title: 'Curiosity Over Certainty',
    desc: 'We admit quickly when we have the wrong answer. We chase the truth relentlessly even when it challenges our assumptions.',
    image: imgCuriosity,
  },
  {
    num: '02',
    title: 'Delivering Without Ego',
    desc: 'We move fast with love for our craft. Velocity without compromise, shipping quality at speed.',
    image: imgVelocity,
  },
  {
    num: '03',
    title: 'Build in the Open',
    desc: 'Your success is our only KPI. Deep partnership over transactional delivery.',
    image: imgOpen,
  },
  {
    num: '04',
    title: 'Speak with Intention',
    desc: 'No jargon. No confusion. Just results. Every word earns its place.',
    image: imgIntention,
  },
  {
    num: '05',
    title: 'Human-Centered AI',
    desc: 'AI should amplify people, never replace them. Technology serves humanity.',
    image: imgHuman,
  },
  {
    num: '06',
    title: 'Built to Last',
    desc: 'We build for 10 years, not the next demo. Durable architecture, sustainable growth.',
    image: imgBuiltToLast,
  },
]

const PRACTICES = [
  { time: '09:30 AM', title: 'Start With Priorities', desc: 'Reviewing what is being built, what needs delivery, what is blocked, and aligning on key priorities.', color: '#6553ee' },
  { time: '10:00 AM', title: 'Build & Solve', desc: 'Developers execute on product features, APIs, interfaces, databases, AI integrations, and client requirements.', color: '#3b82f6' },
  { time: '12:00 PM', title: 'AI Exploration', desc: 'Testing new models, prompts, OCR approaches, agent workflows, and automation strategies.', color: '#22c55e' },
  { time: '02:00 PM', title: 'Client & Business Context', desc: 'Connecting technical execution with actual business objectives through client feedback and operational insights.', color: '#f59e0b' },
  { time: '03:00 PM', title: 'Test, Break, Improve', desc: 'Challenging assumptions, evaluating AI outputs, testing workflows, and uncovering edge cases.', color: '#22d3ee' },
  { time: '05:00 PM', title: 'Review & Refine', desc: 'Reviewing daily progress, identifying what needs refinement, and removing blockers for tomorrow.', color: '#a855f7' },
  { time: '06:00 PM', title: 'The Next Idea', desc: 'Brainstorming new automations, better solutions for client challenges, and next-gen AI capabilities.', color: '#ec4899' },
]

import logoEasyHunt from '../../assets/easyhunt.png'
import logoPramay from '../../assets/pramay.png'
import logoVarasa from '../../assets/varasa.png'
import logoFxAlgo from '../../assets/fxalgo.png'

const TEAM_SHOWCASE = [
  { value: '12', label: 'Nationalities' },
  { value: '60%', label: 'Engineers' },
  { value: '40%', label: 'from Top AI Labs' },
]

const STATS = [
  { value: '24 May 2025', label: 'Incorporated' },
  { value: '11–50', label: 'Team Members' },
  { value: 'Pune, India', label: 'Headquarters' },
  { value: '100%', label: 'Problem-First Engineering' },
]

const VOICES = [
  {
    logo: logoVarasa,
    quote: 'Encegen AI Labs engineered our digital platform for archaeological explorations, ancient artifact preservation documentation, and student scholarship research grants.',
    name: 'Research & Conservation Head',
    role: 'Varasa (Heritage Conservation & Academic Scholarship)',
  },
  {
    logo: logoPramay,
    quote: 'Encegen built our dedicated agricultural e-commerce platform for fertilizers, pesticides, and agro-inputs with automated ordering and real-time inventory synchronization.',
    name: 'Operations Director',
    role: 'Pramay Agro (Fertilizers & Pesticides E-Commerce)',
  },
  {
    logo: logoFxAlgo,
    quote: 'In algorithmic finance, latency and precision are paramount. Encegen engineered an ultra-reliable, high-throughput execution backend that consistently exceeds our execution benchmarks.',
    name: 'Quantitative Strategist',
    role: 'Fx Algo (Algorithmic Trading Platform)',
  },
  {
    logo: logoEasyHunt,
    quote: 'EasyHunt transformed our property title search process across Maharashtra land records, cutting research turnaround from days to minutes with high OCR precision.',
    name: 'Senior Legal Partner',
    role: 'Flairnetic Advocates (Major Client for EasyHunt Software)',
  },
]

const CULTURE_VOICES = [
  {
    quote: 'At Encegen, roles aren\u2019t rigid boxes. A developer investigates an AI model, a client discussion turns into a new product feature, and you actually see your work create value.',
    name: 'Engineering Team',
    role: 'Encegen AI Labs',
  },
  {
    quote: 'The rhythm here is fast and grounded in reality. We build real AI systems for real clients\u2014from EasyHunt to custom business automations.',
    name: 'AI & Systems Builder',
    role: 'Encegen AI Labs',
  },
  {
    quote: 'We don\u2019t build technology for hype. Every project is focused on making complex operations simpler, faster, and smarter for our partners.',
    name: 'Solutions & Product Lead',
    role: 'Encegen AI Labs',
  },
]

export default function Values() {
  return (
    <>
      <PageHero
        className="phero--values"
        badge="Our values"
        title="What we stand for."
        sub="At Encegen AI Labs, our values are not statements written on a wall. They are reflected in how we approach problems, build products, work with clients, and make decisions every day."
        actions={
          <>
            <Btn to="/our-story" variant="white">
              Our Story &rarr;
            </Btn>
            <Btn to="/culture" variant="outline-light">
              Our Culture
            </Btn>
          </>
        }
      />

      {/* Core principles */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="Core Principles"
            title="What guides us every day"
            sub="The foundational beliefs and operating standards behind how we engineer technology and partner with clients."
          />
          <div className="cards-2" style={{ marginTop: 40, gap: '28px' }}>
            {CORE_PRINCIPLES.map((v) => (
              <article key={v.num} className="value-principle-card">
                <div className="value-principle-card__media">
                  <img src={v.image} alt={v.title} loading="lazy" />
                </div>
                <div className="value-principle-card__body">
                  <div className="value-principle-card__header">
                    <span className="value-principle-card__num">{v.num}</span>
                    <span className="value-principle-card__dot" />
                  </div>
                  <h3 className="value-principle-card__title">{v.title}</h3>
                  <p className="value-principle-card__desc">{v.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GradBand
        quote={
          <>
            &ldquo;We don&rsquo;t just build software. We engineer what comes next.&rdquo;
          </>
        }
        cite="ENCEGEN AI LABS PVT. LTD."
      />

      {/* Values in practice */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Values in Practice" title="A Day at Encegen" sub="How we balance focus, exploration, and practical execution." />
          <div className="day-timeline">
            <TimelineFill />
            {PRACTICES.map((p) => (
              <div key={p.title} className="day-row">
                <span className="day-row__time">{p.time}</span>
                <div className="day-row__card" style={{ ['--day-color' as string]: p.color }}>
                  <strong>{p.title}</strong>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team stats */}
      <section className="section section--light culture-team-section">
        <div className="container">
          <div className="team-showcase">
            <div className="team-showcase__intro">
              <span className="team-showcase__eyebrow">THE TEAM</span>
              <h2>Built by 67 extraordinary humans across 3 continents.</h2>
            </div>

            <div className="team-showcase__stats">
              {TEAM_SHOWCASE.map((s, idx) => (
                <div
                  key={s.label}
                  className="team-showcase__stat"
                  style={{ ['--stat-idx' as string]: idx }}
                >
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="section culture-voices-section">
        <div className="container">
          <SectionHead eyebrow="VOICES" title="Don't take our word for it" dark />
          <div className="cards-3 culture-voices-grid">
            {CULTURE_VOICES.map((v, idx) => (
              <div
                key={v.name + v.role}
                className="culture-voice-card"
                style={{ ['--voice-idx' as string]: idx }}
              >
                <div className="culture-voice-card__icon" aria-hidden="true">
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3.5H4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3.25 7.5V14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path className="voice-line voice-line--1" d="M8.5 3.5H16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path className="voice-line voice-line--2" d="M8.5 9H19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path className="voice-line voice-line--3" d="M8.5 14.5H19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="culture-voice-card__quote">&ldquo;{v.quote}&rdquo;</p>
                <div className="culture-voice-card__footer">
                  <strong>{v.name}</strong>
                  <span>{v.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        trusted={['Flairnetic Advocates', 'EasyHunt', 'Varasa', 'Paramya Agro', 'Fx Algo']}
        trustedLabel="trusted by modern businesses"
        line1="Live these values with us."
        line2="Join our engineering &amp; AI team."
        sub="We are actively looking for builders, developers, and problem solvers who want to ship real, durable intelligence."
        primary={{ label: 'Explore Open Roles', to: '/careers' }}
        secondary={{ label: 'Our Story', to: '/our-story' }}
        checks={['Incorporated 24 May 2025', '11–50 Team Members', 'Pune Headquarters']}
      />
    </>
  )
}
