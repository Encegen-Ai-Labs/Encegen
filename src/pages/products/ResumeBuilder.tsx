import {
  Btn,
  ClosingCTA,
  GradBand,
  PageHero,
  SectionHead,
  TestimonialCard,
} from '../../components/kit'
import './products.css'

const STAT_TILES = [
  { value: '10x', desc: 'faster resume creation compared to manual editing' },
  { value: '95%', desc: 'ATS compatibility across all major platforms' },
  { value: '50+', desc: 'professional templates to choose from' },
  { value: 'Zero', desc: 'formatting headaches or alignment issues' },
]

const HOW = [
  {
    num: '01',
    title: 'Input Details',
    desc: 'Easily add your experience, skills, and education. Our smart form guides you to highlight the most relevant information.',
  },
  {
    num: '02',
    title: 'Select Template',
    desc: 'Choose from a variety of professionally designed, ATS-friendly templates tailored for different industries.',
  },
  {
    num: '03',
    title: 'Export & Apply',
    desc: 'Download your perfectly formatted resume in PDF or Word format, ready to impress recruiters instantly.',
  },
]

const PLATFORM = [
  { icon: '✨', title: 'Smart AI Suggestions', desc: 'Get AI-powered phrasing and bullet points based on your job title and industry.' },
  { icon: '🎯', title: 'ATS Optimized', desc: 'Ensures your resume passes through Applicant Tracking Systems flawlessly.' },
  { icon: '🎨', title: 'Customizable Designs', desc: 'Easily tweak colors, fonts, and layouts without breaking the format.' },
  { icon: '⚡', title: 'Instant Preview', desc: 'See your changes in real-time as you build your resume.' },
  { icon: '🔒', title: 'Privacy First', desc: 'Your data is secure and never shared without your permission.' },
  { icon: '📄', title: 'Multiple Formats', desc: 'Export to PDF, DOCX, or plain text with a single click.' },
]

const TESTIMONIALS = [
  {
    color: '#22c55e',
    quote: "The Resume Builder helped me land my dream job. The ATS optimization feature is a game changer.",
    initials: 'SK',
    name: 'Sarah Khan',
    role: 'Software Engineer',
    hue: 150,
  },
  {
    color: '#3b82f6',
    quote: 'I used to spend hours fixing formatting issues. Now I can update my resume in minutes.',
    initials: 'DP',
    name: 'David Patel',
    role: 'Marketing Manager',
    hue: 215,
  },
  {
    color: '#f59e0b',
    quote: 'Absolutely the best builder out there. The design choices are pristine.',
    initials: 'JL',
    name: 'Jessica Lee',
    role: 'Product Designer',
    hue: 45,
  },
  {
    color: '#8b5cf6',
    quote: 'It caught mistakes my previous ATS parser missed. Highly recommend to any job seeker.',
    initials: 'MW',
    name: 'Mark Watson',
    role: 'Financial Analyst',
    hue: 260,
  },
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
            <Btn to="#features" variant="outline-light">See Features</Btn>
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
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Chapter 01</p>
            <h2 className="left-title">Stop wrestling with formatting.</h2>
            <p className="left-copy">
              Focus on your achievements, not adjusting margins. Our Resume Builder handles all the design work, ensuring your resume looks perfect on every screen and prints flawlessly.
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

      <GradBand tone="purple" quote="A great career deserves a great resume. Make yours count." />

      <section id="how-it-works" className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="How It Works" title="Simple. Fast. Effective." />
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

      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="Success Stories" title="Hear from our users" />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
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
