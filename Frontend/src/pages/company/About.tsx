import { ArtTile, Btn, PageHero, SectionHead } from '../../components/kit'
import './company.css'

import logoEasyHunt from '../../assets/easyhunt.png'
import logoPramay from '../../assets/pramay.png'
import logoVarasa from '../../assets/varasa.png'
import logoFxAlgo from '../../assets/fxalgo.png'

const VALUES = [
  { icon: '🎯', title: 'Problem First', desc: "We don't use AI simply because it's trending. Every project begins with understanding the business challenge." },
  { icon: '⚡', title: 'Move Fast, Learn Faster', desc: "We test ideas quickly, build working prototypes, and continuously refine solutions based on real feedback." },
  { icon: '🤝', title: 'Own the Outcome', desc: "We don't just write code—we take full ownership of solving the client's problem properly and reliably." },
  { icon: '🔬', title: 'Continuous Learning', desc: 'We stay close to emerging AI models, agent architectures, and automation tools to engineer what comes next.' },
]

const CLIENT_STORIES = [
  {
    outlet: 'Flairnetic Advocates',
    logo: logoEasyHunt,
    role: 'Major Legal Client for EasyHunt Software',
    quote: 'Encegen engineered EasyHunt to streamline our property title search and document intelligence turnaround from days to minutes across Maharashtra records.',
  },
  {
    outlet: 'Varasa',
    logo: logoVarasa,
    role: 'Heritage Conservation & Academic Scholarships',
    quote: 'Encegen AI Labs built the digital exploration and preservation platform for our ancient artifact documentation and student research grant programs.',
  },
  {
    outlet: 'Pramay Agro',
    logo: logoPramay,
    role: 'Fertilizers & Pesticides E-Commerce',
    quote: 'Their team built our dedicated agricultural e-commerce platform for fertilizers and pesticides with automated order dispatch and real-time inventory synchronization.',
  },
  {
    outlet: 'Fx Algo',
    logo: logoFxAlgo,
    role: 'Algorithmic Trading Platform',
    quote: 'Precision and ultra-low latency are non-negotiable in algorithmic trading. Encegen engineered a high-throughput execution backend that consistently excels.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        badge="Who we are"
        title={
          <>
            We don't just build software.
            <br />
            <span className="accent-purple">We engineer what comes next.</span>
          </>
        }
        sub="Encegen AI Labs Pvt. Ltd. is a Pune-based AI technology and software engineering company. We bridge the gap between business challenges and intelligent technology—turning Generative AI, AI agents, document intelligence, and custom software into measurable business value."
        trusted={['Incorporated 24 May 2025', '11–50 Team Members', 'Pune Headquarters']}
        trustedLabel="at a glance"
      />

      {/* Mission */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Our Mission</p>
            <h2 className="left-title">Turning technology into real-world business intelligence.</h2>
            <p className="left-copy">
              The journey of Encegen AI Labs began with observing a recurring problem across businesses:
              technology was everywhere, but meaningful automation and artificial intelligence were still difficult to implement.
              Companies had data, software, teams, and processes, yet many everyday decisions and repetitive tasks continued to depend heavily on manual effort.
            </p>
            <p className="left-copy">
              We founded Encegen AI Labs to change that. Our vision is to help businesses transition from traditional software
              to intelligent systems capable of understanding, reasoning, communicating, and taking action.
            </p>
          </div>
          <ArtTile variant="blue" className="about-photo" />
        </div>
      </section>

      {/* Values */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Our Values" title="Values in Practice" sub="How we build products, work with clients, and make decisions every day." />
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

      {/* Careers band */}
      <section className="section section--light">
        <div className="container">
          <div className="careers-band">
            <div>
              <p className="shead__eyebrow" style={{ color: 'var(--purple-400)' }}>
                Careers & Culture
              </p>
              <h2>Come build the future with us.</h2>
              <p>We're a fast-growing, agile team in Pune, hiring across AI engineering, full-stack software development, product, and solutions. If you like turning hard problems into working intelligence, we'd love to meet you.</p>
              <div className="careers-band__chips">
                <span>AI Engineer</span>
                <span>Full-Stack Developer</span>
                <span>Product & Solutions</span>
              </div>
              <div style={{ marginTop: 28 }}>
                <Btn to="/careers" variant="white">
                  See open roles
                </Btn>
              </div>
            </div>
            <div className="careers-band__facts">
              <span>Incorporated 2025</span>
              <span>11–50 Team Members</span>
              <span>Pune Headquarters</span>
              <span>Problem-First Culture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Endorsements */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Client Validation"
            title="Real businesses. Real impact."
            sub="How our key clients and partners turn technology into measurable intelligence."
          />
          <div className="cards-4" style={{ marginTop: 36 }}>
            {CLIENT_STORIES.map((p) => (
              <article key={p.outlet} className="press" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div style={{ height: 40, display: 'flex', alignItems: 'center' }}>
                    {p.logo ? (
                      <img src={p.logo} alt={p.outlet} style={{ maxHeight: 36, maxWidth: 110, objectFit: 'contain' }} />
                    ) : (
                      <span style={{ fontSize: '1.5rem' }}>⚖</span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', borderRadius: 999, background: 'rgba(34, 197, 94, 0.1)', color: '#16a34a', border: '1px solid rgba(34, 197, 94, 0.25)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a' }} />
                    Verified
                  </span>
                </div>
                <strong>{p.outlet}</strong>
                <span style={{ fontSize: 12, color: 'var(--purple-600)', fontWeight: 600, display: 'block', marginTop: 4 }}>{p.role}</span>
                <p style={{ marginTop: 12, fontSize: '0.9rem', lineHeight: 1.55, flex: 1 }}>“{p.quote}”</p>
                <div style={{ marginTop: 14, paddingTop: 10, borderTop: '1px solid #f1f0fa', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--gray-500)' }}>Client Partner</span>
                  <span style={{ color: 'var(--purple-600)', fontSize: '0.85rem', fontWeight: 700 }}>★★★★★</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient CTA */}
      <section className="about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to engineer intelligent systems for your business?</h2>
          <div style={{ display: 'flex', gap: 18, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
            <Btn to="/solutions/ai-agents" variant="white">Explore AI Solutions →</Btn>
            <Btn to="/careers" variant="outline-light">Join Our Team</Btn>
          </div>
        </div>
      </section>
    </>
  )
}
