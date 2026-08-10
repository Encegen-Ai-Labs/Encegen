import { ArtTile, Btn, ClosingCTA, GradBand, PageHero, SectionHead } from '../../components/kit'
import './company.css'

const VALUES = [
  {
    num: '01',
    title: 'Integrity over hype',
    desc: "We'll tell you when AI isn't the right tool. We'd rather lose a sale than oversell one.",
    art: 'blue',
  },
  {
    num: '02',
    title: "The customer's problem comes first",
    desc: "We start with what the client actually needs, not with what we happen to have built.",
    art: 'magenta',
  },
  {
    num: '03',
    title: 'Quality is the baseline',
    desc: "We ship things we're willing to put our name on. Solid beats flashy, every time.",
    art: 'cyan',
  },
  {
    num: '04',
    title: 'Responsible by default',
    desc: "We build AI that respects the people using it and the people it affects. That's not a feature — it's the floor.",
    art: 'purple',
  },
  {
    num: '05',
    title: 'Curiosity keeps us honest',
    desc: "We keep learning, keep questioning, and keep testing our own assumptions before a client has to.",
    art: 'green',
  },
  {
    num: '06',
    title: 'Better together',
    desc: "The best work here comes from people sharing early, disagreeing openly, and building on each other's ideas.",
    art: 'orange',
  },
]

const PRACTICES = [
  { time: '09:00', title: 'Honest Retrospectives', desc: 'We reflect on every sprint with radical candor – no blame, only learning.', color: '#6553ee' },
  { time: '10:00', title: 'Deep Work Blocks', desc: 'Wednesdays are protected for focus. No meetings get in the way of meaningful work.', color: '#3b82f6' },
  { time: '14:00', title: 'Client-First Prioritization', desc: 'We prioritize by business impact, not internal convenience.', color: '#22c55e' },
  { time: '16:00', title: 'Open Architecture Reviews', desc: 'We share early, iterate publicly, and welcome scrutiny.', color: '#f59e0b' },
  { time: '17:00', title: 'Ship It Fridays', desc: 'We ship working software every week, no matter how small.', color: '#22d3ee' },
  { time: '18:00', title: 'Team Reflection', desc: 'We close the day by reflecting on what we learned together.', color: '#ec4899' },
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

export default function Values() {
  return (
    <>
      <PageHero
        badge="Our values"
        title="What we stand for."
        sub="A handful of principles shape how we research, how we build, and how we work with the people who trust us. They're not decoration — they're how we make calls when the answer isn't obvious."
        actions={
          <>
            <Btn to="/our-story" variant="white">
              Our Story →
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
          <SectionHead eyebrow="Core Principles" title="What guides us every day" />
          <div className="cards-2">
            {VALUES.map((v) => (
              <article key={v.num} className="disc-card" style={{ borderRadius: 14 }}>
                <ArtTile variant={v.art} className="disc-card__art" />
                <div className="disc-card__body">
                  <span className="shead__eyebrow" style={{ fontSize: 12 }}>
                    {v.num}
                  </span>
                  <h3 style={{ marginTop: 8, fontSize: 19, fontWeight: 700, color: 'var(--ink-900)' }}>
                    {v.title}
                  </h3>
                  <p>{v.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GradBand
        quote={
          <>
            "We have one rule at Encegen: if you wouldn't bet your own career on the performance of
            our software, we do not ship it."
          </>
        }
        cite="ALEX RIVERA, CEO & CO-FOUNDER"
      />

      {/* Values in practice */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Values in Practice" title="A rhythm of focus and flow" />
          <div className="day-timeline">
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
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="The Team"
            title="Built by 67 extraordinary humans across 3 continents."
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
      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Voices" title="Don't take our word for it" dark />
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
        trusted={['Enterprise Scale', '99.9% Uptime', 'Operational Integrity']}
        trustedLabel="built with absolute operational integrity"
        line1="Live these values with us."
        line2="Join our engineering team."
        sub="We are actively looking for researchers, developers, and operators who are exhausted by tech vaporware and want to ship real, durable enterprise value."
        primary={{ label: 'Explore Open Roles', to: '/careers' }}
        secondary={{ label: 'Talk to Our Founders' }}
      />
    </>
  )
}
