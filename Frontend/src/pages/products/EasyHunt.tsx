import {
  Btn,
  ClosingCTA,
  GradBand,
  MockPanel,
  PageHero,
  SectionHead,
  TestimonialCard,
} from '../../components/kit'
import { SearchIcon, ShieldIcon } from '../../components/icons'
import './products.css'
import logoEasyHunt from '../../assets/easy.png'

const STAT_TILES = [
  { value: '4-6 Hours', desc: 'spent on a single title search manually' },
  { value: '75%', desc: 'of property records are never cross-verified' },
  { value: '15+', desc: 'fragmented government portals to navigate' },
  { value: '₹2.4L', desc: 'average cost of a missed encumbrance' },
]

const HOW = [
  {
    num: '01',
    title: 'SEARCH',
    desc: 'Enter any keyword — owner name, survey number, CTS number, village name, litigation reference. Our AI searches across millions of government-sourced records instantly.',
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
  { icon: '⚡', title: 'Full records, not snippets', desc: 'See the complete entry — ownership, survey details, dates and remarks — in one place, without switching files.' },
  { icon: '⚖', title: 'Export to Word', desc: 'Turn any search into a clean, shareable report for your client file or internal review in one click.' },
  { icon: '🔐', title: 'Search history & audit trail', desc: 'Every search is saved, so you can pick up exactly where you left off instead of starting over.' },
]

const STAKEHOLDERS = [
  { icon: '⚖', title: 'Lawyers & advocates', desc: 'Move through title searches and verification far faster during due diligence.' },
  { icon: '📋', title: 'Title search consultants', desc: 'Complete reports in a fraction of the time with full records in one view.' },
  { icon: '🏗', title: 'Real estate & developers', desc: 'Check ownership history and land details before committing to a deal.' },
  { icon: '🏦', title: 'Banks & NBFCs', desc: 'Speed up property checks for mortgage and loan verification.' },
  { icon: '🏛', title: 'Investors & consultants', desc: 'Spot what needs a closer look before money changes hands.' },
  { icon: '🗺', title: 'Verification agencies', desc: 'Handle high volumes of property checks without adding hours.' },
]

const TESTIMONIALS = [
  {
    color: '#22c55e',
    quote: "EasyHunt reduced our property document intelligence and title search turnaround from days to minutes across Maharashtra datasets. It has transformed our legal due diligence.",
    initials: 'FA',
    name: 'Advocate & Legal Consultant',
    role: 'Flairnetic Advocates, Pune',
    hue: 150,
  },
  {
    color: '#3b82f6',
    quote: 'The keyword search across Bhulekh and Mahabhumi records is instantaneous. It catches transliteration and spelling variations that manual review easily misses.',
    initials: 'PN',
    name: 'Title Search Consultant',
    role: 'Property Verification, Pune & Mumbai',
    hue: 215,
  },
  {
    color: '#f59e0b',
    quote: 'For property due diligence and title search verification, EasyHunt is indispensable. We process multiple reports in a fraction of the time with full confidence.',
    initials: 'AD',
    name: 'Senior Property Advocate',
    role: 'Legal Practice, Maharashtra',
    hue: 30,
  },
]

const FAQ = [
  {
    q: 'What is Easy Hunt?',
    a: "A keyword search platform for Maharashtra land records, built from government datasets like Bhulekh and Mahabhumi. Type any term — owner name, survey number, village — and get the full matching records in seconds. It's made for quick discovery, not official verification.",
  },
  {
    q: 'How is it different from government portals?',
    a: 'Portals like IGR, Bhulekh and Mahabhumi show one record at a time and have no keyword search. Easy Hunt scans the bulk data instantly and shows complete matching entries at once — cutting the time on a title search dramatically.',
  },
  {
    q: 'What data does it cover?',
    a: 'Maharashtra property records — owner names, survey numbers, CTS details, villages, dates and remarks — sourced from public government datasets. Coverage is strongest in areas like Pune, Mumbai and Nagpur, and is expanding.',
  },
  {
    q: 'Is the data official or legally valid?',
    a: 'No — it\'s research data from government sources, meant for fast discovery. Always confirm any match on the official portals (IGR eSearch, Mahabhumi) before using it for legal purposes. Easy Hunt helps you find what to check, quickly.',
  },
  {
    q: 'Who is it for?',
    a: 'Lawyers, real estate agents, brokers, investors, banks and NBFCs, and anyone running property title searches or due diligence in Maharashtra.',
  },
]

function Console() {
  return (
    <div className="console">
      <div className="console__bar">
        <span className="console__dots">
          <span style={{ background: '#ef4444' }} />
          <span style={{ background: '#f59e0b' }} />
          <span style={{ background: '#10b981' }} />
        </span>
        <span className="console__search">
          <SearchIcon size={14} color="#64748b" />
          Mumbai Suburbs Survey No. 104/A…
        </span>
        <button type="button" className="console__btn">Search AI</button>
      </div>
      <div className="console__table-wrap">
        <table className="console__table">
          <thead>
            <tr>
              <th>OWNER NAME</th>
              <th>SURVEY / CTS NO</th>
              <th>VILLAGE</th>
              <th>DOCUMENT TYPE</th>
              <th>CONFIDENCE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Godrej Properties Ltd</td>
              <td>Survey 104/A</td>
              <td>Vikhroli</td>
              <td>Mutation Entry (Ferfar)</td>
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
                <span className="console__match">95% Match</span>
              </td>
            </tr>
            <tr>
              <td>Tata Housing Development</td>
              <td>Survey 22/1/B</td>
              <td>Mulund</td>
              <td>Litigation Clearance</td>
              <td>
                <span className="console__match">99% Match</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function EasyHunt() {
  return (
    <>
      <PageHero
        badge={
          <>
            <span style={{ color: '#fbbf24', marginRight: 6 }}>⚡</span>
            AI-POWERED PROPERTY INTELLIGENCE
          </>
        }
        title={
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <img src={logoEasyHunt} alt="EasyHunt" style={{ height: 60, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 4px 16px rgba(101, 83, 238, 0.4))' }} />
            <span>Find any land record in seconds, not hours.</span>
          </div>
        }
        sub="Easy Hunt centralizes fragmented property data into a single intelligent platform — search by owner name, survey number, CTS number, village name, or litigation reference and retrieve complete property records within seconds."
        actions={[
          <Btn key="1" to="https://easyhunt.in/" newTab variant="purple">Start Searching →</Btn>,
          
        ]}
        trusted={['Flairnetic Advocates', 'National Housing Bank', 'HDFC Law', 'Shardul Amarchand', 'AZB & Partners', 'JSA Law']}
        trustedLabel="TRUSTED BY 500+ PROPERTY PROFESSIONALS ACROSS INDIA"
      >
        <Console />
      </PageHero>

      {/* Chapter 01 */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <div className="chapter-eyebrow">
              <span className="chapter-bar" />
              <span>CHAPTER 01</span>
            </div>
            <h2 className="left-title" style={{ marginTop: '0.5rem' }}>Most property research still happens the hard way</h2>
            <p className="left-copy">
              Every day, property lawyers, title search consultants, and real estate developers spend hours manually searching across scattered PDFs, Excel files, and government portals. Critical records get buried. Legal risks go unnoticed. Decisions get delayed.
            </p>
          </div>
          <div className="stat-tiles-exact">
            {STAT_TILES.map((s) => (
              <div key={s.value} className="stat-tile-exact">
                <strong>{s.value}</strong>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner (Orange) */}
      <GradBand
        tone="orange"
        quote="&quot;What if every property decision was backed by complete intelligence — retrieved in 30 seconds, not 30 hours?&quot;"
      />

      {/* Chapter 02 */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <div className="chapter-eyebrow">
              <span className="chapter-bar" />
              <span>CHAPTER 02</span>
            </div>
            <h2 className="left-title" style={{ marginTop: '0.5rem' }}>We believe every property record should be instantly accessible</h2>
            <p className="left-copy">
              Property intelligence should be as fast and reliable as a Google search. Unlike traditional methods, Easy Hunt uses AI to understand context, not just keywords — matching owner names across transliterations, connecting survey numbers to historical records, and surfacing litigation risks automatically.
            </p>
          </div>
          <MockPanel
            title="AI Property Profile"
            right={
              <span style={{ background: 'rgba(99, 102, 241, 0.18)', color: '#818cf8', border: '1px solid rgba(99, 102, 241, 0.35)', borderRadius: 999, padding: '3px 10px', fontSize: 11, fontWeight: 700 }}>
                ★ AI Verified
              </span>
            }
            rows={[
              { label: '2024', sub: 'Godrej Properties (Current Owner)', chipColor: '#818cf8' },
              { label: '2018', sub: 'Acquired from Mehta Family Trust', chipColor: '#818cf8' },
              { label: '1995', sub: 'Original Allotment - Govt of Maharashtra', chipColor: '#818cf8' },
            ]}
            footer={
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: '#8f9bb3', textTransform: 'uppercase', marginBottom: 8 }}>
                  <span>LITIGATION &amp; ENCUMBRANCE RISK</span>
                  <span style={{ color: '#10b981' }}>Low Risk</span>
                </div>
                <div style={{ width: '100%', height: 6, background: 'rgba(255, 255, 255, 0.1)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: '24%', height: '100%', background: '#10b981', borderRadius: 3 }} />
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section section--lavender">
        <div className="container hiw-wrap">
          <span className="hiw-pill">HOW IT WORKS</span>
          <h2 className="hiw-title">Search. Discover. Decide.</h2>
          <div className="hiw-cards-3">
            {HOW.map((h) => (
              <article key={h.num} className="hiw-card">
                <div className="hiw-card__top">
                  <span className="hiw-card__num">{h.num}</span>
                  <span className="hiw-card__icon">⊗</span>
                </div>
                <h3 className="hiw-card__title">{h.title}</h3>
                <p className="hiw-card__desc">{h.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="section section--dark">
        <div className="container platform-wrap">
          <span className="platform-pill">PLATFORM</span>
          <h2 className="platform-title">Everything you need in one intelligent platform</h2>
          <div className="dcard-grid" style={{ textAlign: 'left', marginTop: 40 }}>
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

      {/* Testimonials */}
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="Latest Insights" title="Trusted by India's leading property professionals" />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* GradBand Stats */}
      <GradBand
        tone="purple"
        stats={[
          { value: '10L+', label: 'Property Records Indexed' },
          { value: '500+', label: 'Organizations Trust Us' },
          { value: '30 Sec', label: 'Average Search Time' },
          { value: '99.9%', label: 'Platform Uptime' },
        ]}
      />

      {/* FAQ */}
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="faq__content">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        dark
        line1="This is just the beginning"
        sub="Join 500+ organizations transforming property research with AI-powered intelligence. Start your free trial today."
        primary={{ label: 'Start Free Trial →', to: 'https://easyhunt.in/', newTab: true, variant: 'purple' }}
       
        checks={[
          { text: 'Enterprise Security', icon: <ShieldIcon size={14} style={{ color: '#818cf8' }} /> },
          { text: '24/7 Support', icon: <ShieldIcon size={14} style={{ color: '#818cf8' }} /> },
          { text: 'API Access', icon: <ShieldIcon size={14} style={{ color: '#818cf8' }} /> },
        ]}
        note="5,000+ searches daily | 99.9% uptime | SOC 2 certified"
      />
    </>
  )
}
