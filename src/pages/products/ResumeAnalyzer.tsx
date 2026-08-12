import {
  Btn,
  ClosingCTA,
  GradBand,
  MockPanel,
  PageHero,
  SectionHead,
  TestimonialCard,
} from '../../components/kit'
import './products.css'

const STAT_TILES = [
  { value: '5x', desc: 'faster shortlisting process' },
  { value: '99%', desc: 'accuracy in parsing data fields' },
  { value: '1000+', desc: 'resumes processed per minute' },
  { value: '0', desc: 'manual data entry required' },
]

const HOW = [
  {
    num: '01',
    title: 'Upload Bulk Resumes',
    desc: 'Drag and drop hundreds of resumes in various formats (PDF, DOCX). The system processes them instantly.',
  },
  {
    num: '02',
    title: 'AI Parsing & Scoring',
    desc: 'Our AI extracts key details and scores each candidate against your specific job requirements.',
  },
  {
    num: '03',
    title: 'Review Top Matches',
    desc: 'Get a ranked list of the most suitable candidates, ready for interview scheduling.',
  },
]

const PLATFORM = [
  { icon: '🧠', title: 'Deep Context AI', desc: 'Understands context, not just keywords, to evaluate true candidate potential.' },
  { icon: '📊', title: 'Objective Scoring', desc: 'Removes bias by evaluating candidates strictly against job criteria.' },
  { icon: '🔄', title: 'Seamless Integration', desc: 'Connects easily with your existing HR workflows and ATS platforms.' },
  { icon: '📈', title: 'Skill Gap Analysis', desc: 'Identifies missing skills instantly for each applicant.' },
  { icon: '📑', title: 'Format Agnostic', desc: 'Parses complex layouts, columns, and varied resume structures flawlessly.' },
  { icon: '⚡', title: 'Real-time Analytics', desc: 'Track hiring metrics and candidate quality in one dashboard.' },
]

const TESTIMONIALS = [
  {
    color: '#f59e0b',
    quote: "Resume Analyzer completely transformed our hiring pipeline. We find the right people much faster now.",
    initials: 'AM',
    name: 'Anita Menon',
    role: 'Talent Acquisition Head',
    hue: 30,
  },
  {
    color: '#8b5cf6',
    quote: 'The accuracy of the AI parser is incredible. It handles even the most poorly formatted resumes.',
    initials: 'JD',
    name: 'James Doe',
    role: 'HR Director',
    hue: 260,
  },
  {
    color: '#10b981',
    quote: 'We cut our time-to-hire in half thanks to the automated candidate scoring features.',
    initials: 'SJ',
    name: 'Samuel Johnson',
    role: 'Recruiting Lead',
    hue: 160,
  },
  {
    color: '#3b82f6',
    quote: 'The seamless ATS integration means we didn\'t have to change our core workflow at all.',
    initials: 'RK',
    name: 'Ravi Kumar',
    role: 'VP Human Resources',
    hue: 215,
  },
]

export default function ResumeAnalyzer() {
  return (
    <>
      <PageHero
        badge="AI-Powered Candidate Screening"
        title={
          <>
            Find the perfect candidate
            <br />
            in seconds, not days.
          </>
        }
        sub="Automate your screening process with our intelligent Resume Analyzer. Extract, score, and rank candidates with unparalleled speed and precision."
        actions={
          <>
            <Btn to="#how-it-works" variant="white">How it works</Btn>
            <Btn to="#features" variant="outline-light">View Features</Btn>
          </>
        }
      >
        <div className="analyzer-console">
          <div className="analyzer-stats-row">
            <div className="analyzer-stat-box">
              <div className="analyzer-stat-val">500</div>
              <div className="analyzer-stat-label">Processed</div>
            </div>
            <div className="analyzer-stat-box">
              <div className="analyzer-stat-val highlight">12</div>
              <div className="analyzer-stat-label">Shortlisted</div>
            </div>
            <div className="analyzer-stat-box">
              <div className="analyzer-stat-val">98%</div>
              <div className="analyzer-stat-label">Avg Match</div>
            </div>
            <div className="analyzer-stat-box">
              <div className="analyzer-stat-val highlight">1.2s</div>
              <div className="analyzer-stat-label">Parse Time</div>
            </div>
          </div>
          <div className="analyzer-list">
            <div className="analyzer-row match-high">
              <div>
                <div className="analyzer-name">John Smith</div>
                <div className="analyzer-role">Senior Full-Stack Engineer</div>
              </div>
              <div>
                <div style={{ color: '#2fe08e', fontSize: '12px', textAlign: 'right', marginBottom: '4px' }}>95% Match</div>
                <div className="analyzer-score-bar">
                  <div className="analyzer-score-fill" style={{ width: '95%', background: '#2fe08e' }}></div>
                </div>
              </div>
            </div>
            <div className="analyzer-row match-med">
              <div>
                <div className="analyzer-name">Emily Chen</div>
                <div className="analyzer-role">Frontend Developer</div>
              </div>
              <div>
                <div style={{ color: '#22d3ee', fontSize: '12px', textAlign: 'right', marginBottom: '4px' }}>82% Match</div>
                <div className="analyzer-score-bar">
                  <div className="analyzer-score-fill" style={{ width: '82%', background: '#22d3ee' }}></div>
                </div>
              </div>
            </div>
            <div className="analyzer-row match-low">
              <div>
                <div className="analyzer-name">Michael Lee</div>
                <div className="analyzer-role">Junior Backend Developer</div>
              </div>
              <div>
                <div style={{ color: '#f59e0b', fontSize: '12px', textAlign: 'right', marginBottom: '4px' }}>68% Match</div>
                <div className="analyzer-score-bar">
                  <div className="analyzer-score-fill" style={{ width: '68%', background: '#f59e0b' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageHero>

      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Chapter 01</p>
            <h2 className="left-title">Screening shouldn't be a bottleneck.</h2>
            <p className="left-copy">
              Stop manually reviewing hundreds of resumes. Let our AI handle the heavy lifting, giving you back time to focus on engaging with the best talent.
            </p>
          </div>
          <div className="stat-tiles">
            {STAT_TILES.map((s) => (
              <div key={s.value} className="stat-tile">
                <strong>{s.value}</strong>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradBand tone="orange" quote="Hire better, hire faster with AI-driven insights." />

      <section id="how-it-works" className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Workflow" title="How Analyzer works" />
          <div className="cards-3">
            {HOW.map((h) => (
              <article key={h.num} className="numcard">
                <span className="numcard__num">{h.num}</span>
                <span className="numcard__icon">◎</span>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Capabilities" title="Advanced Parsing & Matching" dark />
          <div className="dcard-grid">
            {PLATFORM.map((p) => (
              <article key={p.title} className="dcard">
                <span className="dcard__icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Testimonials" title="Trusted by HR Leaders" />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        line1="Transform your hiring process."
        sub="Explore our advanced parsing capabilities."
        primary={{ label: 'View Features', to: '#features' }}
      />
    </>
  )
}
