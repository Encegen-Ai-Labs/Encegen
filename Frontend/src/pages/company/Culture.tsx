import { Btn, ClosingCTA, PageHero, SectionHead } from '../../components/kit'
import './company.css'

const PRINCIPLES = [
  {
    title: 'Curiosity over certainty',
    desc: "We ask the awkward questions early, while they're still cheap to answer.",
  },
  {
    title: 'Ownership without ego',
    desc: 'You own your work end to end. The best idea wins, whoever it comes from.',
  },
  {
    title: 'Build in the open',
    desc: "We share early and welcome the tough feedback. It's how the work gets better.",
  },
  {
    title: 'Speed with intention',
    desc: "We move fast, but we don't cut the corners that come back to bite us.",
  },
  {
    title: 'Human-centered AI',
    desc: "Every feature has to make someone's actual day better. If it doesn't, we don't ship it.",
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
        badge="Our culture"
        title="Small team. Real ownership. Work that ships."
        sub="Encegen is a place where the person who has the idea gets to build it. We keep the team small, the layers few, and the focus on work that actually reaches people."
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
        line1="Like the sound of this?"
        sub="We're not for everyone, and that's the point. If small teams, real ownership and shipping work you're proud of sounds right, come see what we're hiring for."
        primary={{ label: 'See open roles', to: '/careers' }}
        secondary={{ label: 'Our Story', to: '/our-story' }}
        checks={['Remote-first', '14 open roles', 'Backed by Sequoia & Accel']}
      />
    </>
  )
}
