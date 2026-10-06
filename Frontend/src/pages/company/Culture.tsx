import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Btn, PageHero, SectionHead } from '../../components/kit'
import './company.css'

function TimelineFill() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return
      const parent = lineRef.current.parentElement
      if (!parent) return

      const rect = parent.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      const start = rect.top - viewportHeight * 0.5
      const totalDist = rect.height

      let progress = 0
      if (start < 0) {
        progress = Math.min(1, Math.max(0, -start / totalDist))
      }

      lineRef.current.style.height = `${progress * 100}%`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return <div className="day-timeline__fill" ref={lineRef} />
}

const PRINCIPLES = [
  {
    title: '01 — Build for the Problem, Not the Hype',
    desc: "We don't use AI simply because AI is trending. Every project begins with a question: What problem are we actually trying to solve? Technology comes after understanding.",
  },
  {
    title: '02 — Move Fast, Learn Faster',
    desc: 'Encegen operates with a startup mindset: Build → Test → Learn → Improve. Instead of spending months polishing an unvalidated concept, we test and iterate rapidly.',
  },
  {
    title: '03 — Own the Outcome',
    desc: 'We don’t believe in simply completing assigned tasks. Every team member takes ownership. The question is not "Did we complete it?" but "Did we solve the problem properly?"',
  },
  {
    title: '04 — Client Problems Become Engineering Challenges',
    desc: 'Clients often come with a business requirement rather than a fixed technical specification. We listen, identify bottlenecks, and engineer practical solutions.',
  },
  {
    title: '05 — Experimentation Is Part of the Job',
    desc: 'AI is changing rapidly. We continuously test new models, frameworks, APIs, and agent architectures to evaluate whether they make our solutions faster, cheaper, and more accurate.',
  },
  {
    title: '06 — Keep Learning',
    desc: 'There is no fixed finish line in technology. We encourage curiosity, technical exploration, sharing knowledge, and staying close to emerging technologies.',
  },
]

const DAY = [
  { time: '09:30 AM', title: 'Start With Priorities', desc: 'The day begins by reviewing what needs attention: what is being built, what needs to be delivered, what is blocked, and what needs testing.', color: '#6553ee' },
  { time: '10:00 AM', title: 'Build & Solve', desc: 'Developers execute on product features, APIs, interfaces, databases, AI integrations, automation workflows, and client requirements.', color: '#3b82f6' },
  { time: '12:00 PM', title: 'AI Exploration', desc: 'Testing new models, prompts, OCR approaches, agent workflows, and automation strategies to make systems faster, cheaper, and more accurate.', color: '#22c55e' },
  { time: '02:00 PM', title: 'Client & Business Context', desc: 'Discussions during the day help connect technical execution with the actual business objective and client feedback.', color: '#f59e0b' },
  { time: '03:00 PM', title: 'Test, Break, Improve', desc: 'Features are tested, AI outputs are evaluated, and workflows are challenged. Testing is where assumptions meet reality.', color: '#22d3ee' },
  { time: '05:00 PM', title: 'Review & Refine', desc: 'Reviewing daily progress, identifying what needs improvement, and setting up the team to move forward tomorrow.', color: '#a855f7' },
  { time: '06:00 PM', title: 'The Next Idea', desc: 'Brainstorming a new automation, a better way to solve a client problem, a product improvement, or a new AI capability.', color: '#ec4899' },
]

const TEAM_SHOWCASE = [
  { value: '12', label: 'Nationalities' },
  { value: '60%', label: 'Engineers' },
  { value: '40%', label: 'from Top AI Labs' },
]

const VOICES = [
  {
    quote: 'At Encegen, roles aren’t rigid boxes. A developer investigates an AI model, a client discussion turns into a new product feature, and you actually see your work create value.',
    name: 'Engineering Team',
    role: 'Encegen AI Labs',
  },
  {
    quote: 'The rhythm here is fast and grounded in reality. We build real AI systems for real clients—from EasyHunt to custom business automations.',
    name: 'AI & Systems Builder',
    role: 'Encegen AI Labs',
  },
  {
    quote: 'We don’t build technology for hype. Every project is focused on making complex operations simpler, faster, and smarter for our partners.',
    name: 'Solutions & Product Lead',
    role: 'Encegen AI Labs',
  },
]

export default function Culture() {
  return (
    <>
      <PageHero
        className="culture-hero"
        badge="OUR CULTURE"
        title="We don’t just build AI. We raise it."
        sub="At Encegen, intelligence isn’t manufactured — it’s cultivated. Every model, every agent, every system is built with intention, care, and relentless curiosity."
        actions={
          <>
            <Btn to="/careers" variant="white">
              View Open Roles →
            </Btn>
            <Btn to="/values" variant="outline-light">
              Our Culture
            </Btn>
          </>
        }
      />

      {/* Principles */}
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="Our Principles" title="Values in Practice" sub="How we approach problems, build products, and work with clients every day." />
          <div className="cards-2">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="principle">
                <span className="principle__num">{String(i + 1).padStart(2, '0')}</span>
                <strong>{p.title}</strong>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="quote-box">
            <div className="quote-box__inner">
              “At Encegen AI Labs, our values are not statements written on a wall. They are reflected in how we approach problems, build products, work with clients, and make decisions every day.”
              <cite>– Encegen AI Labs Team · Pune, India</cite>
            </div>
          </div>
        </div>
      </section>

      {/* A day at Encegen */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="A Day at Encegen"
            title="There is no perfectly predictable day — and that's intentional."
            sub="A typical day moves between client discussions, product development, AI experimentation, debugging, research, testing, and new ideas."
          />
          <div className="day-timeline">
            <TimelineFill />
            {DAY.map((d) => (
              <div key={d.time} className="day-row">
                <span className="day-row__time">{d.time}</span>
                <div className="day-row__card" style={{ ['--day-color' as string]: d.color }}>
                  <strong>{d.title}</strong>
                  <p>{d.desc}</p>
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
              <h2>Built by 47 extraordinary humans across 3 continents.</h2>
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
      <section className="section section--lavender culture-voices-section">
        <div className="container">
          <SectionHead eyebrow="Inside Encegen" title="What makes a day at Encegen different?" />
          <div className="cards-3 culture-voices-grid">
            {VOICES.map((v, idx) => (
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
                <p className="culture-voice-card__quote">“{v.quote}”</p>
                <div className="culture-voice-card__footer">
                  <strong>{v.name}</strong>
                  <span>{v.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="culture-join-cta">
        <div className="container culture-join-cta__inner">
          <span className="culture-join-cta__eyebrow">JOIN US</span>
          <h2 className="culture-join-cta__title">Curious to build with us?</h2>
          <p className="culture-join-cta__sub">
            If moving fast, taking real ownership, and building practical AI solutions that reach real users sounds right to you, we'd love to connect.
          </p>

          <div className="culture-join-cta__actions">
            <Link to="/careers" className="culture-join-cta__btn culture-join-cta__btn--primary">
              <span>See open roles</span>
              <span className="culture-join-cta__arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/our-story" className="culture-join-cta__btn culture-join-cta__btn--secondary">
              Our Story
            </Link>
          </div>

          <div className="culture-join-cta__meta">
            <span className="culture-join-cta__globe" aria-hidden="true">🌍</span>
            <span>Pune Headquarters &amp; Flexible</span>
            <span className="culture-join-cta__dot" aria-hidden="true">·</span>
            <span>11–50 Team Members</span>
            <span className="culture-join-cta__dot" aria-hidden="true">·</span>
            <span>Problem-First Culture</span>
          </div>
        </div>
      </section>
    </>
  )
}
