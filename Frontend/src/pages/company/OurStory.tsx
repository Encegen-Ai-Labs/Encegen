import {
  Btn,
  ClosingCTA,
  LiveDot,
  MockPanel,
  PageHero,
  SectionHead,
} from '../../components/kit'
import './company.css'

const STORY_PILLARS = [
  {
    pill: '2024',
    title: 'We Founded Encegen',
    desc: 'Born with a clear vision: technology must solve real problems, not just demo capability.',
  },
  {
    pill: '12',
    title: 'First 10+ Deployments',
    desc: 'Delivered legal workflow IT and OCR solutions for advocacy and title search operations.',
  },
  {
    pill: '14 Weeks',
    title: 'First Live AI Agents',
    desc: 'From service provider to product builder with EasyHunt, document agents, and low-latency algorithms.',
  },
  {
    pill: 'Zero',
    title: 'Zero Vaporware',
    desc: 'We build technology that thinks, assists, automates, and creates measurable enterprise impact.',
  },
]

const TEAM_MEMBERS = [
  {
    initials: 'SG',
    name: 'Saurabh Gite',
    role: 'MANAGING DIRECTOR',
    quote: 'Talk to us about the real business problems, not marketing buzzwords.',
    color: '#7c3aed',
  },
  {
    initials: 'AG',
    name: 'Amar Gite',
    role: 'CO-FOUNDER',
    quote: 'Building practical applied AI systems that solve genuine business challenges.',
    color: '#2563eb',
  },
  {
    initials: 'NK',
    name: 'Nachiket Khade',
    role: 'AI/ML ENGINEER',
    quote: 'Architecting enterprise AI that meets actual reliability, speed, and security bars.',
    color: '#059669',
  },
  {
    initials: 'SJ',
    name: 'Shruti Jadhav',
    role: 'FULL STACK DEVELOPER',
    quote: 'Ensuring every solution is intuitive, production-ready, and delivers clear ROI.',
    color: '#d97706',
  },
]

const VALUES = [
  {
    num: '01',
    title: 'Honesty over hype',
    desc: "We don't sell vaporware. No BS demo magic.",
    bg: '#3b1c6e',
  },
  {
    num: '02',
    title: 'Speed with integrity',
    desc: '14-week delivery guarantee without cutting corners.',
    bg: '#1e3a8a',
  },
  {
    num: '03',
    title: 'Client obsession',
    desc: 'Your real-world business outcome is our only success metric.',
    bg: '#065f46',
  },
  {
    num: '04',
    title: 'Radical clarity',
    desc: 'No black boxes. You own every model, pipeline, and output.',
    bg: '#78350f',
  },
  {
    num: '05',
    title: 'Built to last',
    desc: 'Production-grade, secure, scalable, and enterprise-compliant.',
    bg: '#1f2937',
  },
  {
    num: '06',
    title: 'Human-first',
    desc: 'AI that assists and empowers human teams rather than replaces them.',
    bg: '#701a75',
  },
]

const STATS = [
  { value: '24 May 2025', label: 'Incorporated Date' },
  { value: '11–50', label: 'Team Members' },
  { value: 'Pune, India', label: 'Headquarters' },
  { value: '100%', label: 'Practical Applied AI' },
]

const CLIENT_TAGS = [
  'EasyHunt',
  'Pramay Agro',
  'Varasa',
  'Fx Algo',
  'Flairnetic',
  'Title Search AI',
  'Agri E-Commerce',
  'OCR Engine',
  'Quant Pipeline',
  'Land Records AI',
]

export default function OurStory() {
  return (
    <>
      {/* Section 1: Hero */}
      <PageHero
        badge="Our Origin & Journey"
        title={
          <>
            We didn't build an AI company.
            <br />
            <span className="accent-purple">We built a better future.</span>
          </>
        }
        sub="Encegen was born from a simple frustration — that every enterprise software talks about AI, but very few actually deliver it."
        actions={
          <>
            <Btn to="#chapter-01" variant="white">
              Read the story ↓
            </Btn>
            <Btn to="/values" variant="outline-light">
              Our Values
            </Btn>
          </>
        }
      />

      {/* Section 2: Chapter 01 — Origin & The Truth Card */}
      <section id="chapter-01" className="section section--light">
        <div className="container split">
          <div>
            <span className="chapter-badge">Chapter 01</span>
            <p className="shead__eyebrow">The Origin of Encegen AI Labs</p>
            <h2 className="left-title">
              Most enterprise software promises transformation,
              <br />
              Most delivers dashboards.
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

      {/* Section 3: Boardroom Quote & Founding Pillars (Cyan Box) */}
      <section className="section section--dark">
        <div className="container">
          <div className="shead shead--dark" style={{ textAlign: 'center' }}>
            <h2 className="shead__title" style={{ maxWidth: 860, marginInline: 'auto' }}>
              "We sat in a boardroom watching a $4M AI pilot fail in real time.
              <br />
              That was the day we decided to build differently."
            </h2>
            <p className="shead__sub" style={{ color: 'var(--purple-300)', fontWeight: 600 }}>
              — OUR FOUNDING STORY & PHILOSOPHY, 2024
            </p>
          </div>
          <div className="story-pillars">
            {STORY_PILLARS.map((p) => (
              <div key={p.pill + p.title} className="story-pillar">
                <span className="story-pillar__pill">{p.pill}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Chapter 02 — How We Build (1440 Fill x 640 Hug) */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <span className="chapter-badge">Chapter 02</span>
            <p className="shead__eyebrow">Building for the Real World</p>
            <h2 className="left-title">
              We don't believe every problem needs AI.
              <br />
              We believe the right problem deserves the right technology.
            </h2>
            <div className="story-bullets">
              <div className="story-bullet">
                <span className="story-bullet__dot" />
                <div className="story-bullet__content">
                  <h4>Not just hours. Deliver outcomes.</h4>
                  <p>Software is useless if it doesn't solve what real teams need. We engineer for bottom-line business results.</p>
                </div>
              </div>
              <div className="story-bullet">
                <span className="story-bullet__dot" />
                <div className="story-bullet__content">
                  <h4>Deployed in weeks, not years.</h4>
                  <p>Agile, research-grade engineering from kickoff to production deployment in 14 weeks average.</p>
                </div>
              </div>
              <div className="story-bullet">
                <span className="story-bullet__dot" />
                <div className="story-bullet__content">
                  <h4>Your data never leaves your walls.</h4>
                  <p>Enterprise security, on-premise or private VPC deployments with strict NDA protection and zero lock-in.</p>
                </div>
              </div>
            </div>
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

      {/* Section 5: Chapter 03 — Built by people who've sat in your seat */}
      <section className="section section--lavender">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="chapter-badge">Chapter 03</span>
            <SectionHead
              eyebrow="Leadership & Experience"
              title="Built by people who've sat in your seat."
              sub="Our team comes from enterprise, startup, and research backgrounds. We engineer technology that solves what business leaders actually deal with every day."
            />
          </div>
          <div className="team-cards-4">
            {TEAM_MEMBERS.map((m) => (
              <div key={m.name} className="team-card">
                <span className="team-card__avatar" style={{ background: m.color }}>
                  {m.initials}
                </span>
                <h3>{m.name}</h3>
                <span className="role">{m.role}</span>
                <p>"{m.quote}"</p>
              </div>
            ))}
          </div>
          <div className="rule-bar">
            <strong>We have one rule at Encegen: if you wouldn't bet your own career on it, we don't ship it.</strong>
            <div className="rule-bar__avatars">
              {TEAM_MEMBERS.map((m) => (
                <span key={m.initials} className="avatar" style={{ background: m.color }}>
                  {m.initials}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: What we stand for (Colored Value Tiles) */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead
            eyebrow="OUR VALUES"
            title="What we stand for."
            dark
          />
          <div className="value-tiles">
            {VALUES.map((v) => (
              <div key={v.num} className="value-tile" style={{ background: v.bg }}>
                <em>{v.num}</em>
                <strong>{v.title}</strong>
                <p>"{v.desc}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Stats and Logo Wall */}
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
          <div className="logo-wall">
            {CLIENT_TAGS.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Closing CTA (No bottom border, meets footer seamlessly) */}
      <ClosingCTA
        trusted={['Flairnetic Advocates', 'EasyHunt', 'Varasa', 'Pramay Agro', 'Fx Algo']}
        trustedLabel="trusted by our enterprise partners & clients"
        line1="This story isn't over."
        line2="It's just getting started."
        sub="Whether you're a client, a partner, or someone who wants to build the future of enterprise AI — there's a place for you in this story."
        primary={{ label: 'Join the team', to: '/careers' }}
        secondary={{ label: 'Partner with us', to: '/contact' }}
        checks={['Incorporated 24 May 2025', '11–50 Team Members', 'Pune Headquarters']}
      />
    </>
  )
}