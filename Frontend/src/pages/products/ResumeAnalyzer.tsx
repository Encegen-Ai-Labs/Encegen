import {
  Btn,
  ClosingCTA,
  GradBand,
  PageHero,
  SectionHead,
} from '../../components/kit'
import './products.css'

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
        <div className="container">
          <span className="product-pill">Chapter 01</span>
          <h2 className="left-title" style={{ marginTop: '0.75rem' }}>Screening shouldn't be a bottleneck.</h2>
          <p className="left-copy">
            Stop manually reviewing hundreds of resumes. Let our AI handle the heavy lifting, giving you back time to focus on engaging with the best talent.
          </p>
        </div>
      </section>

      <GradBand tone="purple" quote="Hire better, hire faster with AI-driven insights." />

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

      <ClosingCTA
        line1="Transform your hiring process."
        sub="Explore our advanced parsing capabilities."
        primary={{ label: 'View Features', to: '#features' }}
      />
    </>
  )
}
