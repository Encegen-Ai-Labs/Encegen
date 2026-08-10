import { ArtTile, Btn, PageHero, SectionHead } from '../../components/kit'
import './company.css'

const VALUES = [
  { icon: '🛡', title: 'Integrity', desc: "We say what's true, price what's fair, and stand behind what we build." },
  { icon: '❤', title: 'Customer first', desc: "Every project starts with the client's problem, not our product catalogue." },
  { icon: '💡', title: 'Quality', desc: "We'd rather ship something solid than something fast and forgettable." },
  { icon: '👁', title: 'Responsibility', desc: 'We build AI that respects the people who use it and the ones it affects.' },
]

const LEADERS = [
  { name: 'Alexander Rinke', role: 'Co-CEO', hue: 255 },
  { name: 'Bastian Nominacher', role: 'Co-CEO', hue: 215 },
  { name: 'Martin Klenk', role: 'CTO', hue: 190 },
  { name: 'Shelly Bhatt', role: 'CPO', hue: 330 },
  { name: 'Lisa Chen', role: 'CFO', hue: 150 },
  { name: 'Raj Patel', role: 'CMO', hue: 30 },
  { name: 'Emma Davis', role: 'CRO', hue: 280 },
  { name: 'Tom Müller', role: 'COO', hue: 100 },
]

const PRESS = [
  { outlet: 'Forbes', quote: 'Encegen is redefining the category of execution management.' },
  { outlet: 'TechCrunch', quote: 'A massive leap forward for enterprise visibility and automation.' },
  { outlet: 'Gartner', quote: 'Named a leader in the Magic Quadrant for Process Mining for the 5th year.' },
  { outlet: 'WSJ', quote: "How Encegen is helping the world's largest firms stay lean." },
]

export default function About() {
  return (
    <>
      <PageHero
        badge="Who we are"
        title={
          <>
            We build AI that
            <br />
            <span className="accent-purple">businesses can actually use.</span>
          </>
        }
        sub="Encegen AI Labs is a Pune-based AI research and software company. We take the promise of artificial intelligence — often loud, rarely practical — and turn it into working software that solves real problems for real businesses."
        trusted={['Founded 2011', '3,500+ Employees', '30+ Global offices']}
        trustedLabel="at a glance"
      />

      {/* Mission */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Our mission</p>
            <h2 className="left-title">Making AI practical for the businesses that need it.</h2>
            <p className="left-copy">
              Most companies hear about AI constantly and see very little of it in their day-to-day.
              We started Encegen to close that gap — to take AI out of the demo and put it into the
              tools people actually work with.
            </p>
            <p className="left-copy">
              We research, design and build custom AI and software: models trained on a client's own
              domain, applications that fit how a team already works, and the digital groundwork
              that makes both run. The goal is simple — technology that earns its place by making
              the work better.
            </p>
          </div>
          <ArtTile variant="blue" className="about-photo" />
        </div>
      </section>

      {/* Values */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Our Values" title="What we stand for" />
          <div className="cards-4">
            {VALUES.map((v) => (
              <article key={v.title} className="fcard fcard--top-accent">
                <span className="fcard__icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section--light">
        <div className="container">
          <div style={{ maxWidth: 640 }}>
            <h2 className="left-title">Meet our leadership</h2>
            <p className="shead__eyebrow" style={{ marginTop: 12 }}>
              Leadership
            </p>
            <p className="left-copy">
              A global team of experts committed to driving process excellence.
            </p>
          </div>
          <div className="leaders">
            {LEADERS.map((l) => (
              <div key={l.name} className="leader">
                <div
                  className="leader__photo"
                  style={{
                    background: `linear-gradient(150deg, hsl(${l.hue} 45% 45%), hsl(${l.hue + 40} 45% 28%))`,
                  }}
                >
                  {l.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3>{l.name}</h3>
                <span>{l.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers band */}
      <section className="section section--light" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="careers-band">
            <div>
              <p className="shead__eyebrow" style={{ color: 'var(--purple-400)' }}>
                Careers
              </p>
              <h2>Come build with us.</h2>
              <p>We're a growing team in Pune, hiring across engineering, sales, design and consulting. If you like turning hard problems into working software, we'd like to meet you.</p>
              <div className="careers-band__chips">
                <span>Software Engineer</span>
                <span>Product Manager</span>
                <span>Enterprise Sales</span>
              </div>
              <div style={{ marginTop: 28 }}>
                <Btn to="/careers" variant="white">
                  See open roles
                </Btn>
              </div>
            </div>
            <div className="careers-band__facts">
              <span>4.5★ Glassdoor</span>
              <span>#1 Best Workplace</span>
              <span>Hybrid-first culture</span>
              <span>35 nationalities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="In The Press" title="What people are saying about Encegen" />
          <div className="cards-4">
            {PRESS.map((p) => (
              <article key={p.outlet} className="press">
                <strong>{p.outlet}</strong>
                <p>“{p.quote}”</p>
                <a href="#">Read article</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient CTA */}
      <section className="about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to join the process intelligence revolution?</h2>
          <div style={{ display: 'flex', gap: 18, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
            <Btn variant="white">Get a demo →</Btn>
            <Btn variant="outline-light">Contact us 📞</Btn>
          </div>
        </div>
      </section>
    </>
  )
}
