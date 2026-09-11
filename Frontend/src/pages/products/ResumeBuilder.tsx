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
    title: 'Import or Start Fresh',
    desc: 'Upload an existing PDF/Word resume to let our parser extract your data instantly, or build a new one from scratch using our guided forms.',
  },
  {
    num: '02',
    title: 'Choose a Template',
    desc: 'Select from our library of recruiter-tested, ATS-optimized templates, or let our AI recommend the perfect design based on your industry.',
  },
  {
    num: '03',
    title: 'Enhance & Optimize',
    desc: 'Fill in your details and use our AI tools to rewrite weak bullet points, fix formatting, and dramatically improve your overall ATS score.',
  },
  {
    num: '04',
    title: 'Export to PDF',
    desc: 'Download your pixel-perfect, ATS-friendly PDF in one click and start applying to your dream jobs with confidence.',
  },
]

const PLATFORM = [
  { icon: '✨', title: 'Context-Aware AI Phrasing', desc: 'Stop staring at a blank page. Our AI generates highly tailored bullet points based on your specific industry, seniority, and role.' },
  { icon: '🎯', title: 'Enterprise ATS Optimization', desc: 'We structure the underlying PDF metadata so parsers like Workday, Taleo, and Greenhouse extract your experience with 100% accuracy.' },
  { icon: '🎨', title: 'Recruiter-Tested Designs', desc: 'Every template is strictly designed to pass the "6-second recruiter skim test" using optimal visual hierarchy and typography.' },
  { icon: '⚡', title: 'Real-time Canvas Rendering', desc: 'No loading screens. Watch your resume re-render instantly on our dynamic canvas as you tweak fonts, margins, and content.' },
  { icon: '🚀', title: 'Metric Magic Rewriter', desc: 'Weak bullet points get rejected. Our AI coaches you to quantify achievements using the industry-standard "Action + Metric + Result" formula.' },
  { icon: '📄', title: 'Multi-Format Exporting', desc: 'Download in ATS-friendly PDF, editable DOCX, or plain text format. Your layout stays perfectly locked in place every time.' },
  { icon: '✍️', title: 'Smart Repetition Guard', desc: 'Say goodbye to overused words. Our engine flags repetitive action verbs (like using "managed" 5 times) and fixes inconsistencies instantly.' },
  { icon: '🛡️', title: 'Zero-Retention Privacy', desc: 'Your career data belongs to you. We use enterprise-grade encryption and never sell or train public models on your personal information.' },
  { icon: '✉️', title: '1-Click Cover Letters', desc: 'Automatically generate a highly personalized cover letter that matches the exact visual design, fonts, and colors of your chosen resume template.' },
]

export default function ResumeBuilder() {
  return (
    <>
      <PageHero
        badge="Next-Gen Resume Creation"
        title={
          <>
            Build a professional resume
            <br />
            in minutes, not hours.
          </>
        }
        sub="Create stunning, ATS-optimized resumes effortlessly. Stand out to recruiters and land your next big opportunity with our intuitive Resume Builder."
        actions={
          <>
            <Btn to="#how-it-works" variant="white">How it works</Btn>
          </>
        }
      >
        <div className="builder-console">
          <div className="builder-sidebar">
            <div className="builder-tool active">✓ Personal Info</div>
            <div className="builder-tool active">✓ Experience</div>
            <div className="builder-tool active">✓ Skills</div>
            <div className="builder-tool">◎ Education</div>
            <div className="builder-tool">◎ Projects</div>
          </div>
          <div className="builder-doc">
            <div className="builder-header-mock"></div>
            <div style={{ marginTop: '20px' }}>
              <div className="builder-line medium"></div>
              <div className="builder-line medium"></div>
              <div className="builder-line"></div>
              <div className="builder-line"></div>
              <div className="builder-line short"></div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <div className="builder-line medium"></div>
              <div className="builder-line"></div>
              <div className="builder-line"></div>
              <div className="builder-line short"></div>
            </div>
            <div className="builder-ai-sparkle">✨ AI Optimizing...</div>
          </div>
        </div>
      </PageHero>

      <section className="section section--light">
        <div className="container">
          <span className="product-pill">Chapter 01</span>
          <h2 className="left-title" style={{ marginTop: '0.75rem' }}>Stop wrestling with formatting.</h2>
          <p className="left-copy">
            Focus on your achievements, not adjusting margins. Our Resume Builder handles all the design work, ensuring your resume looks perfect on every screen and prints flawlessly.
          </p>
        </div>
      </section>

      <GradBand tone="purple" quote="A great career deserves a great resume. Make yours count." />

      <section id="how-it-works" className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="How It Works" title="Simple. Fast. Effective." />
          <div className="cards-4">
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
          <SectionHead eyebrow="Features" title="Everything you need to stand out" dark />
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
        dark
        line1="Ready to land your dream job?"
        sub="Discover how our intelligent features optimize your professional profile."
        primary={{ label: 'See Features', to: '#features' }}
      />
    </>
  )
}
