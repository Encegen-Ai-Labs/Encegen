import {
  Btn,
  ClosingCTA,
  LiveDot,
  MockPanel,
  PageHero,
  SectionHead,
} from '../../components/kit'
import './company.css'

import logoEasyHunt from '../../assets/easyhunt.png'
import logoPramay from '../../assets/pramay.png'
import logoVarasa from '../../assets/varasa.png'
import logoFxAlgo from '../../assets/fxalgo.png'

const MILESTONES = [
  {
    year: '24 May 2025',
    title: 'Encegen AI Labs Pvt. Ltd. Is Incorporated',
    desc: 'The journey officially begins. Incorporated with a clear vision: to build technology that combines Artificial Intelligence, automation, and software engineering to solve real-world business problems.',
  },
  {
    year: '2025',
    title: 'First Major Client — Flairnetic Advocates',
    desc: "Our first major step into the market. Delivered complete legal workflow IT solutions tailored around real advocacy operations, establishing our core principle: technology must solve real problems, not just demo capability.",
  },
  {
    year: '05 Dec 2025',
    title: 'EasyHunt — Our First Product',
    desc: 'From service provider to product builder. Conceived and engineered as specialized software for property Title Search and due diligence across Maharashtra land records, combining AI, OCR document intelligence, and automated indexing.',
  },
  {
    year: '2026',
    title: 'Expanding Into AI & Intelligent Automation',
    desc: 'Software was no longer enough. Expanded focus toward Generative AI, AI agents, conversational AI, voice agents, OCR document intelligence, and AI-powered business applications.',
  },
  {
    year: '2026',
    title: 'Building Intelligent Business Systems',
    desc: 'Engineering tailored digital platforms and intelligent systems across diverse sectors: from Varasa’s heritage conservation documentation & scholarships to Pramay Agro’s fertilizer/pesticides e-commerce and Fx Algo’s algorithmic trading.',
  },
  {
    year: 'Today',
    title: 'Engineering What Comes Next',
    desc: 'Evolved into a fast-growing AI and software engineering venture. We build technology that thinks, assists, automates, and creates measurable impact.',
  },
]

const PHILOSOPHY = [
  {
    num: '01',
    title: 'Intelligence',
    desc: 'Understanding information deeply and empowering better, faster decisions across enterprise workflows.',
    bg: '#4c2e91',
  },
  {
    num: '02',
    title: 'Engineering',
    desc: 'Transforming ideas and prototypes into robust, secure, and production-ready scalable technology.',
    bg: '#14295e',
  },
  {
    num: '03',
    title: 'Generation',
    desc: 'Using modern Generative AI to create, automate, and accelerate what businesses can accomplish.',
    bg: '#14532d',
  },
]

const REAL_WORLD_SOLUTIONS = [
  {
    title: 'EasyHunt (Title Search Software)',
    desc: 'Specialized software designed for property title search, keyword discovery, and OCR document intelligence across Maharashtra land records for advocates like Flairnetic Advocates.',
  },
  {
    title: 'Pramay Agro (Fertilizers & Pesticides E-Commerce)',
    desc: 'End-to-end e-commerce platform and inventory distribution portal for fertilizers, pesticides, and agricultural inputs with automated ordering and tracking.',
  },
  {
    title: 'Fx Algo (Algorithmic Trading Systems)',
    desc: 'High-speed, low-latency execution engines, algorithmic strategy pipelines, and real-time quantitative intelligence for modern fintech markets.',
  },
  {
    title: 'Varasa (Heritage Conservation & Scholarships)',
    desc: 'Digital preservation, excavation documentation, ancient material cataloging, and academic research scholarship grant management for students.',
  },
]

const STATS = [
  { value: '24 May 2025', label: 'Incorporated Date' },
  { value: '11–50', label: 'Team Members' },
  { value: 'Pune, India', label: 'Headquarters' },
  { value: '100%', label: 'Practical Applied AI' },
]

const CLIENT_ITEMS = [
  { name: 'EasyHunt', logo: logoEasyHunt, tag: 'Title Search Software', desc: 'Software for Land Records & Title Search' },
  { name: 'Pramay Agro', logo: logoPramay, tag: 'Agri E-Commerce', desc: 'Fertilizers & Pesticides Marketplace' },
  { name: 'Varasa', logo: logoVarasa, tag: 'Heritage & Academic', desc: 'Ancient Artifacts & Student Scholarships' },
  { name: 'Fx Algo', logo: logoFxAlgo, tag: 'Algorithmic Trading', desc: 'Low-Latency Quantitative Trading Systems' },
  { name: 'Flairnetic Advocates', logo: null, tag: 'Major Legal Client', desc: 'Primary Legal Client for EasyHunt Software' },
]

export default function OurStory() {
  return (
    <>
      <PageHero
        badge="Our Origin & Journey"
        title={
          <>
            We don't just build software.
            <br />
            <span className="accent-purple">We engineer what comes next.</span>
          </>
        }
        sub="Encegen AI Labs Pvt. Ltd. was founded with a simple belief: the future of business belongs to companies that can turn technology into real-world intelligence."
        actions={
          <>
            <Btn to="/values" variant="white">
              Our values →
            </Btn>
            <Btn to="/culture" variant="outline-light">
              Our culture
            </Btn>
          </>
        }
      />

      {/* Chapter 01 — Origin */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">The Origin of Encegen AI Labs</p>
            <h2 className="left-title">
              Bridging the gap between business problems and intelligent technology.
            </h2>
            <p className="left-copy">
              The journey began by observing a recurring problem across businesses—technology was everywhere,
              but meaningful automation and artificial intelligence were still difficult to implement.
              Companies had data, software, teams, and processes, yet many everyday decisions and repetitive
              tasks continued to depend heavily on manual effort.
            </p>
            <p className="left-copy">
              We saw an opportunity to change that. Encegen AI Labs was born to bridge that exact gap.
              From the beginning, our vision was not to build technology simply because it was possible.
              We wanted to build solutions that solved genuine business challenges—whether that meant creating
              a smarter digital platform, automating repetitive workflows, improving how teams operate, or
              using AI to make complex processes faster and more intelligent.
            </p>
          </div>
          <div className="truth">
            <div className="truth__head">
              <span className="truth__title">Our Approach</span>
              <span className="truth__note">Problem-first engineering</span>
            </div>
            <div className="truth__cols">
              <div className="truth__col truth__col--promise">
                <h4>Traditional Software</h4>
                <ul>
                  <li>Static dashboards & manual data entry</li>
                  <li>Rigid, disconnected workflows</li>
                  <li>Technology looking for a problem</li>
                </ul>
              </div>
              <div className="truth__col truth__col--reality">
                <h4>Encegen Intelligent Systems</h4>
                <ul>
                  <li>AI agents that understand & take action</li>
                  <li>Automated end-to-end business execution</li>
                  <li>Engineered specifically for the problem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 02 — Milestone timeline */}
      <section className="section section--dark">
        <div className="container">
          <div className="shead shead--dark">
            <p className="shead__eyebrow" style={{ color: 'var(--purple-400)' }}>
              Our Journey
            </p>
            <h2 className="shead__title" style={{ maxWidth: 860, marginInline: 'auto' }}>
              "The future isn't just about using AI. It's about engineering businesses around intelligence."
            </h2>
            <p className="shead__sub" style={{ color: 'var(--purple-300)', fontWeight: 600 }}>
              – ENCEGEN AI LABS PVT. LTD. · PUNE, INDIA
            </p>
          </div>
          <div className="milestones">
            {MILESTONES.map((m) => (
              <div key={m.year + m.title} className="milestone">
                <span className="milestone__year">{m.year}</span>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 03 — Why Encegen Philosophy */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Why 'Encegen'?"
            title="Intelligence. Engineering. Generation."
            sub="The name Encegen represents our philosophy. We believe great AI solutions are created at the intersection of these three ideas."
          />
          <div className="cards-3">
            {PHILOSOPHY.map((p) => (
              <div key={p.num} className="fcard fcard--top-accent" style={{ background: '#fff' }}>
                <span className="shead__eyebrow" style={{ fontSize: 13, color: 'var(--purple-600)' }}>
                  {p.num}
                </span>
                <h3 style={{ marginTop: 10, fontSize: 20, fontWeight: 700 }}>{p.title}</h3>
                <p style={{ marginTop: 8, color: 'var(--ink-600)', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 04 — Building for the Real World */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Building for the Real World</p>
            <h2 className="left-title">
              We don't believe every problem needs AI.
              <br />
              We believe the right problem deserves the right technology.
            </h2>
            <p className="left-copy">
              From intelligent recruitment and resume analysis to AI-powered voice agents, property intelligence,
              business automation, custom software, and digital platforms, our focus remains the same:
            </p>
            <p className="left-copy" style={{ fontWeight: 600, color: 'var(--ink-900)' }}>
              Find a difficult or repetitive business problem. Understand it deeply. Then engineer technology that makes it simpler, faster, and smarter.
            </p>
            <p className="left-copy">
              Sometimes that means a powerful software platform. Sometimes it means automation.
              Sometimes it means an AI agent that works alongside a human team. And sometimes it means combining all of them into one intelligent ecosystem.
            </p>
          </div>
          <MockPanel
            title="Encegen Intelligence Stack"
            right={<LiveDot label="Active" />}
            rows={[
              { label: 'EasyHunt: Land Records OCR & Search', value: 'Live', chip: 'Flairnetic Advocates' },
              { label: 'Pramay Agro: Fertilizer E-Commerce Portal', value: 'Active', chip: 'Agri E-Commerce', chipColor: '#22d3ee' },
              { label: 'Fx Algo: High-Throughput Trading Engine', value: 'Live', chip: '<5ms Latency', chipColor: '#a99cff' },
              { label: 'Varasa: Heritage Exploration & Grant System', value: 'Running', chip: '10k+ Artifacts' },
              { label: 'Document Intelligence & Multilingual OCR', value: 'Running', chip: '99.4% accuracy', chipColor: '#22d3ee' },
              { label: 'Voice AI & Autonomous Agent Pipelines', value: 'Active', chip: '<400ms latency', chipColor: '#a99cff' },
            ]}
            footer={
              <>
                <span>● Practical AI & Engineering In Production</span>
                <span>Encegen AI Labs</span>
              </>
            }
          />
        </div>
      </section>

      {/* Chapter 05 — The Vision Ahead */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead
            eyebrow="The Vision Ahead"
            title="Their software understands their business."
            sub="We envision a future where businesses don't simply use software. It can process information, communicate with customers, assist employees, identify opportunities, automate workflows, and continuously help organizations operate more efficiently."
            dark
          />
          <div className="cards-2" style={{ marginTop: 36 }}>
            {REAL_WORLD_SOLUTIONS.map((s) => (
              <div key={s.title} className="fcard" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ color: '#fff' }}>{s.title}</h3>
                <p style={{ color: '#a8a5cb', marginTop: 10, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Trusted Clients */}
      <section className="section section--light">
        <div className="container">
          <div className="tstat-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {STATS.map((s) => (
              <div key={s.label} className="tstat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 52 }}>
            <SectionHead
              eyebrow="Products & Key Clients"
              title="Built for Real-World Industry Impact"
              sub="From proprietary products to transformative enterprise platforms across agriculture, legal tech, finance, and heritage conservation."
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginTop: 32 }}>
              {CLIENT_ITEMS.map((item) => (
                <div key={item.name} className="fcard" style={{ padding: 24, textAlign: 'center', background: '#fff' }}>
                  <div style={{ height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    {item.logo ? (
                      <img src={item.logo} alt={item.name} style={{ maxHeight: 42, maxWidth: 130, objectFit: 'contain' }} />
                    ) : (
                      <span style={{ fontSize: '2rem' }}>⚖</span>
                    )}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink-900)' }}>{item.name}</h4>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--purple-600)', display: 'block', marginTop: 4 }}>
                    {item.tag}
                  </span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--gray-600)', marginTop: 8, lineHeight: 1.45 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        trusted={['Flairnetic Advocates', 'EasyHunt', 'Varasa', 'Pramay Agro', 'Fx Algo']}
        line1="We don't just build software."
        line2="We engineer what comes next."
        sub="Whether you're looking for custom AI agents, automated workflows, intelligent software, or product innovation — let's build together."
        primary={{ label: 'Explore Our Solutions', to: '/solutions/ai-agents' }}
        secondary={{ label: 'Explore Open Roles', to: '/careers' }}
        checks={['Incorporated 24 May 2025', '11–50 Team Members', 'Pune Headquarters']}
      />
    </>
  )
}
