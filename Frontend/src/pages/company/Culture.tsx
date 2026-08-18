import { Btn, ClosingCTA, PageHero, SectionHead } from '../../components/kit'
import './company.css'

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

const ENCEGEN_WAY_STEPS = [
  { step: '01', title: 'Understand', desc: 'Understand the problem deeply.' },
  { step: '02', title: 'Experiment', desc: 'Explore the possibilities.' },
  { step: '03', title: 'Build', desc: 'Turn the idea into reliable technology.' },
  { step: '04', title: 'Test', desc: 'Challenge what we’ve built.' },
  { step: '05', title: 'Improve', desc: 'Make it better and faster.' },
  { step: '06', title: 'Deliver', desc: 'Create measurable business value.' },
]

const STATS = [
  { value: '24 May 2025', label: 'Incorporated' },
  { value: '11–50', label: 'Team Members' },
  { value: 'Pune, India', label: 'Headquarters' },
  { value: '100%', label: 'Problem Ownership' },
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
        badge="Our culture"
        title="Curious enough to explore. Practical enough to build."
        sub="We are a lean, evolving technology company based in Pune. We keep the team agile, the focus clear, and the culture centered on engineering real intelligence that solves real problems."
        actions={
          <>
            <Btn to="/careers" variant="white">
              View Open Roles →
            </Btn>
            <Btn to="/values" variant="outline-light">
              Our Values
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
            “At Encegen AI Labs, our values are not statements written on a wall. They are reflected in how we approach problems, build products, work with clients, and make decisions every day.”
            <cite>– Encegen AI Labs Team · Pune, India</cite>
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

      {/* The Encegen Way */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead
            eyebrow="The Encegen Way"
            title="Understand → Experiment → Build → Test → Improve → Deliver"
            sub="At the heart of everything we do is a simple, repeatable cycle of excellence."
            dark
          />
          <div className="cards-3" style={{ marginTop: 40 }}>
            {ENCEGEN_WAY_STEPS.map((s) => (
              <div key={s.step} className="fcard" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--purple-400)' }}>{s.step}</span>
                <h3 style={{ color: '#fff', marginTop: 8 }}>{s.title}</h3>
                <p style={{ color: '#a8a5cb', marginTop: 6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team stats */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="The Team"
            title="A focused team of builders in Pune, India."
          />
          <div className="tstat-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {STATS.map((s) => (
              <div key={s.label} className="tstat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Inside Encegen" title="What makes a day at Encegen different?" />
          <div className="cards-3">
            {VOICES.map((v) => (
              <div key={v.name + v.role} className="voice">
                <span className="voice__mark">❝</span>
                <p>{v.quote}</p>
                <strong>{v.name}</strong>
                <span>{v.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        line1="Curious to build with us?"
        sub="If moving fast, taking real ownership, and building practical AI solutions that reach real users sounds right to you, we'd love to connect."
        primary={{ label: 'See open roles', to: '/careers' }}
        secondary={{ label: 'Our Story', to: '/our-story' }}
        checks={['Pune Headquarters & Flexible', '11–50 Team Members', 'Problem-First Culture']}
      />
    </>
  )
}
