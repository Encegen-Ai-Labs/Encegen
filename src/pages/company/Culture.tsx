import { Btn, ClosingCTA, PageHero, SectionHead } from '../../components/kit'
import './company.css'

const PRINCIPLES = [
  {
    title: 'Curiosity Over Certainty',
    desc: "We ask questions that haven't been asked. We explore paths that haven't been mapped. Certainty is comfortable; curiosity is how we grow.",
  },
  {
    title: 'Ownership Without Ego',
    desc: 'Every person here owns their work end to end. We celebrate results, not titles. The best idea wins – regardless of who said it.',
  },
  {
    title: 'Build in the Open',
    desc: "We share early, iterate publicly, and welcome scrutiny. Transparency isn't a policy – it's how we think.",
  },
  {
    title: 'Speed with Intention',
    desc: 'We move fast but never recklessly. Every shortcut we skip today saves us a month tomorrow.',
  },
  {
    title: 'Human-Centered AI',
    desc: "Technology serves people, not the other way around. Every feature we ship must make someone's life genuinely better.",
  },
]

const DAY = [
  { time: '09:00', title: 'Morning Sync', desc: 'Async standup in Slack. No forced calls - just context sharing.', color: '#6553ee' },
  { time: '10:30', title: 'Deep Work Block', desc: '3 hours uninterrupted. Calendar blocked, Slack paused. This is when magic happens.', color: '#3b82f6' },
  { time: '12:00', title: 'Lunch & Learn', desc: 'Bi-weekly sessions: GPU optimization to pottery. Anything goes.', color: '#22c55e' },
  { time: '14:00', title: 'Collaboration Hour', desc: 'Pair programming, design reviews, research discussions. Intentional, not performative.', color: '#f59e0b' },
  { time: '16:00', title: 'Ship It', desc: 'Deploy to production daily. Small, safe, incremental.', color: '#22d3ee' },
  { time: '17:30', title: 'Wind Down', desc: 'Push your branch, close the laptop. Work hard, rest harder.', color: '#ec4899' },
]

const STATS = [
  { value: '12', label: 'Nationalities' },
  { value: '60%', label: 'Engineers' },
  { value: '40%', label: 'from Top AI Labs' },
]

const VOICES = [
  {
    quote: 'I left Google Brain because Encegen felt like the early days of DeepMind — small team, impossible ambition, zero politics.',
    name: 'Dr. Priya Sharma',
    role: 'AI Research Lead',
  },
  {
    quote: "The codebase is the cleanest I've ever worked in. That tells you everything about the culture.",
    name: 'Marcus Chen',
    role: 'Staff Engineer',
  },
  {
    quote: "I've never had a manager who actually blocked their calendar so I could have deep work time. That's Encegen.",
    name: 'Sarah Williams',
    role: 'Product Designer',
  },
]

export default function Culture() {
  return (
    <>
      <PageHero
        badge="Our Culture"
        title="We don't just build AI. We raise it."
        sub="At Encegen, intelligence isn't manufactured — it's cultivated. Every model, every agent, every system is built with intention, care, and relentless curiosity."
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
          <SectionHead eyebrow="Our Principles" title="What guides us every day" />
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
            “These aren't posters on a wall. They're how we make decisions, resolve disagreements,
            and choose what to build next.”
            <cite>– Encegen Leadership Team</cite>
          </div>
        </div>
      </section>

      {/* A day at Encegen */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="A Day at Encegen"
            title="A rhythm of focus and flow"
            sub="How we optimize for meaningful work."
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

      {/* Team stats */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="The Team"
            title="Built by 47 extraordinary humans across 3 continents."
          />
          <div className="tstat-row">
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
          <SectionHead eyebrow="Voices" title="Don't take our word for it" />
          <div className="cards-3">
            {VOICES.map((v) => (
              <div key={v.name} className="voice">
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
        line1="Ready to do the best work of your life?"
        sub="We're not for everyone — and that's the point. If this resonates, we'd love to meet you."
        primary={{ label: 'View Open Roles →', to: '/careers' }}
        secondary={{ label: 'Our Story', to: '/our-story' }}
        checks={['Remote-first', '14 open roles', 'Backed by Sequoia & Accel']}
      />
    </>
  )
}
