import { ArtTile, Btn, PageHero, SectionHead } from '../../components/kit'
import './company.css'

const VALUES = [
  { icon: '👁', title: 'Transparency', desc: 'We believe radical visibility drives better decisions.' },
  { icon: '💡', title: 'Innovation', desc: "We push boundaries to reimagine what's possible." },
  { icon: '❤', title: 'Customer First', desc: 'Everything we build starts with customer value.' },
  { icon: '🛡', title: 'Integrity', desc: 'We act with honesty in everything we do.' },
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
        badge="Our Story"
        title={
          <>
            We Believe Every Process
            <br />
            <span className="accent-purple">Should Be Understood</span>
          </>
        }
        sub="Encegen was founded on a simple idea: businesses run on processes, and the best businesses are the ones that truly understand theirs."
        trusted={['Founded 2011', '3,500+ Employees', '30+ Global offices']}
        trustedLabel="at a glance"
      />

      {/* Mission */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Our Mission</p>
            <h2 className="left-title">Making processes transparent for the world.</h2>
            <p className="left-copy">
              We are on a mission to reveal how businesses actually operate. By uncovering hidden
              inefficiencies and automating solutions, we help the world's most complex
              organizations become more agile, sustainable, and productive.
            </p>
            <p className="left-copy">
              Process Intelligence isn't just about data; it's about clarity. It's about giving
              leaders the confidence to act based on reality, not assumptions.
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
              <h2>Help us transform the way the world works.</h2>
              <p>Join a fast-growing team of builders, thinkers, and problem solvers.</p>
              <div className="careers-band__chips">
                <span>Software Engineer</span>
                <span>Product Manager</span>
                <span>Enterprise Sales</span>
              </div>
              <div style={{ marginTop: 28 }}>
                <Btn to="/careers" variant="white">
                  View all open roles →
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
