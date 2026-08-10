import {
  Btn,
  ClosingCTA,
  GradBand,
  MockPanel,
  PageHero,
  SectionHead,
  TestimonialCard,
} from '../../components/kit'
import { SearchIcon } from '../../components/icons'
import './products.css'

const STAT_TILES = [
  { value: '4-6 Hours', desc: 'spent on a single title search manually' },
  { value: '75%', desc: 'of property records are never cross-verified' },
  { value: '15+', desc: 'fragmented government portals to search' },
  { value: '₹2.4L', desc: 'average cost of a missed encumbrance' },
]

const HOW = [
  {
    num: '01',
    title: 'SEARCH',
    desc: 'Enter any keyword — owner name, survey number, CTS number, village name, or litigation reference across millions of government-sourced records instantly.',
  },
  {
    num: '02',
    title: 'DISCOVER',
    desc: 'AI retrieves, ranks, and cross-references matching property records. View complete ownership history, encumbrances, mutations, and linked documents in one place.',
  },
  {
    num: '03',
    title: 'DECIDE',
    desc: 'Assess risk, verify titles, and make confident property decisions backed by comprehensive, AI-verified intelligence.',
  },
]

const PLATFORM = [
  { icon: '🔎', title: 'Intelligent Keyword Search', desc: 'Search by owner, survey number, CTS, village, document type, or litigation reference across millions of records.' },
  { icon: '🏛', title: 'Government-Sourced Data', desc: 'Verified records sourced directly from official government datasets, registries, and land record portals.' },
  { icon: '✨', title: 'AI-Powered Matching', desc: 'Smart fuzzy matching handles transliterations, spelling variations, and partial matches across languages.' },
  { icon: '⚡', title: 'Instant Due Diligence', desc: 'Complete property intelligence retrieved in seconds — ownership history, encumbrances, mutations, litigation.' },
  { icon: '⚖', title: 'Legal Risk Detection', desc: 'Automatically identify title defects, pending litigations, disputed ownership, and encumbrance flags.' },
  { icon: '🔐', title: 'Enterprise Security', desc: 'SOC 2 compliant, end-to-end encryption, role-based access, audit trails, and data residency compliance.' },
]

const STAKEHOLDERS = [
  { icon: '⚖', title: 'Property Lawyers & Advocates', desc: 'Accelerate title searches and legal verification with AI-powered due diligence.' },
  { icon: '📋', title: 'Title Search Consultants', desc: 'Complete due diligence reports 10x faster with comprehensive property intelligence.' },
  { icon: '🏗', title: 'Real Estate Developers', desc: 'Assess land records, ownership history, and risks before land acquisition.' },
  { icon: '🏦', title: 'Banks & NBFCs', desc: 'Verify property titles instantly for mortgage underwriting and loan approvals.' },
  { icon: '🏛', title: 'Government Departments', desc: 'Streamline land records management, queries, and inter-departmental verification.' },
  { icon: '🗺', title: 'Land Acquisition Teams', desc: 'Research ownership history, encumbrances, and litigation at scale across regions.' },
]

const TESTIMONIALS = [
  {
    color: '#22c55e',
    quote: "Easy Hunt reduced our title search time from 4 hours to 15 minutes. It's transformed how our firm operates.",
    initials: 'RS',
    name: 'Advocate Rekha Sharma',
    role: 'Property Law, Mumbai',
    hue: 150,
  },
  {
    color: '#3b82f6',
    quote: 'The AI matching is incredibly accurate. It catches transliteration variations that we would have missed manually.',
    initials: 'PN',
    name: 'Priya Nair',
    role: 'Title Search Consultant, Pune',
    hue: 215,
  },
  {
    color: '#f59e0b',
    quote: 'For our mortgage verification team, Easy Hunt is now indispensable. We process 3x more applications with the same team.',
    initials: 'RK',
    name: 'Rajesh Kulkarni',
    role: 'VP Risk, National Housing Bank',
    hue: 30,
  },
]

const FAQ = [
  {
    q: 'What is Easy Hunt?',
    a: 'Easy Hunt is an AI-powered Property Intelligence Platform that helps professionals search and analyze property records from government-sourced datasets.',
  },
  {
    q: 'Who is Easy Hunt for?',
    a: 'Property lawyers, title search consultants, real estate developers, banks, NBFCs, government departments, and land acquisition teams.',
  },
  {
    q: 'How accurate is the data?',
    a: 'Our data is sourced directly from official government registries and verified using AI-powered cross-referencing.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. Easy Hunt is SOC 2 compliant with end-to-end encryption, role-based access control, and audit trails.',
  },
  {
    q: 'How do I get started?',
    a: 'Sign up for a free trial at easyhunt.in and start searching property records instantly.',
  },
]

function Console() {
  return (
    <div className="console">
      <div className="console__bar">
        <span className="console__dots">
          <span style={{ background: '#ef4444' }} />
          <span style={{ background: '#f59e0b' }} />
          <span style={{ background: '#22c55e' }} />
        </span>
        <span className="console__search">
          <SearchIcon size={15} />
          Mumbai Suburbs Survey No. 10424…
        </span>
        <span className="console__btn">Search AI</span>
      </div>
      <table className="console__table">
        <thead>
          <tr>
            <th>Owner Name</th>
            <th>Survey / CTS No.</th>
            <th>Village</th>
            <th>Document Type</th>
            <th>Confidence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Godrej Properties Ltd</td>
            <td>Survey 10A/A</td>
            <td>Vikhroli</td>
            <td>Mutation Entry (Partial)</td>
            <td>
              <span className="console__match">98% Match</span>
            </td>
          </tr>
          <tr>
            <td>Ramesh J. Mehta &amp; Ors</td>
            <td>CTS 4629</td>
            <td>Bandra</td>
            <td>Index II Registry</td>
            <td>
              <span className="console__match">89% Match</span>
            </td>
          </tr>
          <tr>
            <td>Tata Housing Development</td>
            <td>Survey 22/1/B</td>
            <td>Mulund</td>
            <td>Litigation Clearance</td>
            <td>
              <span className="console__match">84% Match</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default function EasyHunt() {
  return (
    <>
      <PageHero
        badge="✦ AI-Powered Property Intelligence"
        title={
          <>
            Transform Property Research
            <br />
            into Intelligent Decisions
          </>
        }
        sub="Easy Hunt centralizes fragmented property data into a single intelligent platform — search by owner name, survey number, CTS number, village name, or litigation reference and retrieve complete property records within seconds."
        actions={
          <>
            <Btn variant="white">Start Searching →</Btn>
            <Btn variant="outline-light">Book a Demo</Btn>
          </>
        }
        trusted={['SBI Legal', 'National Housing Bank', 'HDFC Law', 'Shardul Amarchand', 'AZB & Partners', 'JSA Law']}
        trustedLabel="trusted by 500+ property professionals across India"
      >
        <Console />
      </PageHero>

      {/* Chapter 01 */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Chapter 01</p>
            <h2 className="left-title">Most property research still happens the hard way</h2>
            <p className="left-copy">
              Every day, property lawyers, title search consultants, and real estate developers
              spend hours manually searching across scattered PDFs, Excel files, and government
              portals. Critical records get buried. Legal risks go unnoticed. Decisions get delayed.
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

      <GradBand
        tone="orange"
        quote="What if every property decision was backed by complete intelligence — retrieved in 30 seconds, not 30 hours?"
      />

      {/* Chapter 02 */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Chapter 02</p>
            <h2 className="left-title">We believe every property record should be instantly accessible</h2>
            <p className="left-copy">
              Property intelligence should be as fast and reliable as a Google search. Unlike
              traditional methods, Easy Hunt uses AI to understand context, not just keywords –
              matching owner names across transliterations, connecting survey numbers to historical
              records, and surfacing litigation risks automatically.
            </p>
          </div>
          <MockPanel
            title="AI Property Profile"
            right="✓ AI Verified"
            rows={[
              { label: '2024', sub: 'Godrej Properties (Current Owner)', chip: 'Current', chipColor: '#2fe08e' },
              { label: '2018', sub: 'Acquired from Mehta Family Trust', chip: 'Transfer', chipColor: '#22d3ee' },
              { label: '1995', sub: 'Original Allotment – Govt of Maharashtra', chip: 'Origin', chipColor: '#a99cff' },
            ]}
            footer={
              <>
                <span>LITIGATION &amp; ENCUMBRANCE RISK</span>
                <span>Low Risk</span>
              </>
            }
          />
        </div>
      </section>

      {/* How it works */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="How It Works" title="Search. Discover. Decide." />
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

      {/* Platform */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Platform" title="Everything you need in one intelligent platform" dark />
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

      {/* Stakeholders */}
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="Built For" title="Trusted by every stakeholder in the property ecosystem" />
          <div className="cards-3">
            {STAKEHOLDERS.map((s) => (
              <article key={s.title} className="fcard">
                <span className="fcard__icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GradBand
        stats={[
          { value: '10L+', label: 'Property Records Indexed' },
          { value: '500+', label: 'Organizations Trust Us' },
          { value: '30 Sec', label: 'Average Search Time' },
          { value: '99.9%', label: 'Platform Uptime' },
        ]}
      />

      {/* Testimonials */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="What Users Say" title="Trusted by India's leading property professionals" />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        dark
        line1="This is just the beginning"
        sub="Join 500+ organizations transforming property research with AI-powered intelligence. Start your free trial today."
        primary={{ label: 'Start Free Trial →' }}
        secondary={{ label: 'Book a Demo' }}
        checks={['Enterprise Security', '24/7 Support', 'API Access']}
      />
    </>
  )
}
