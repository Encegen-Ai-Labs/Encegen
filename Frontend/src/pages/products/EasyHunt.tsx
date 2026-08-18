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
    title: 'Search',
    desc: 'Type any keyword — owner name, survey number, CTS number, village or remark — and search across the full set of government-sourced records at once.',
  },
  {
    num: '02',
    title: 'Discover',
    desc: 'Easy Hunt pulls up every matching entry and lays out the complete record — ownership details, dates, land details and linked documents — side by side, ready to read.',
  },
  {
    num: '03',
    title: 'Decide',
    desc: 'Export what you need as PDF or Excel, share it with your client or team, and move ahead with a full picture instead of a partial one.',
  },
]

const PLATFORM = [
  { icon: '🔎', title: 'Deep keyword search', desc: 'Search by owner, survey number, CTS, village, document type or remark across the full dataset in one query.' },
  { icon: '🏛', title: 'Government-sourced data', desc: 'Built from official Maharashtra datasets like Bhulekh and Mahabhumi, covering key areas including Pune, Mumbai and Nagpur.' },
  { icon: '✨', title: 'Smart name matching', desc: 'Handles spelling variations and transliterations, so a name spelled two ways still surfaces the right record.' },
  { icon: '⚡', title: 'Full records, not snippets', desc: 'See the complete entry — ownership, survey details, dates and remarks — in one place, without switching files.' },
  { icon: '⚖', title: 'Export to PDF or Excel', desc: 'Turn any search into a clean, shareable report for your client file or internal review in one click.' },
  { icon: '🔐', title: 'Search history', desc: 'Every search is saved, so you can pick up exactly where you left off instead of starting over.' },
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
          <span style={{ background: '#22c55e' }} />
        </span>
        <span className="console__search">
          <SearchIcon size={15} />
          Mumbai Suburbs Survey No. 10424…
        </span>
        <span className="console__btn">Search AI</span>
      </div>
      <div className="console__table-wrap">
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
    </div>
  )
}

export default function EasyHunt() {
  return (
    <>
      <PageHero
        badge="Property search for Maharashtra, powered by AI"
        title={
          <>
            Find any land record
            <br />
            in seconds, not hours.
          </>
        }
        sub="Easy Hunt searches Maharashtra property records the moment you type. Enter an owner name, survey number, CTS number or village and pull up complete matching entries instantly — so title searches and due diligence that used to take an afternoon take a coffee break."
        actions={
          <>
            <Btn variant="white">Book a demo</Btn>
            <Btn to="#how-it-works" variant="outline-light">See how it works</Btn>
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
            <h2 className="left-title">Property research still happens the slow way.</h2>
            <p className="left-copy">
              Lawyers, title consultants and developers still lose hours to the same routine —
              opening scattered PDFs, scrolling messy Excel files, and checking one government
              portal after another. Records get missed. Risks slip through. Decisions wait on
              paperwork that should take seconds.
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
        quote="What if every property check was backed by complete records — pulled up in thirty seconds, not thirty hours?"
      />

      {/* Chapter 02 */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Chapter 02</p>
            <h2 className="left-title">Every land record should be a search away.</h2>
            <p className="left-copy">
              Finding a property record should feel as simple as a web search. Easy Hunt reads the
              government data the way a person would — matching owner names across spelling and
              transliteration differences, linking survey numbers to their history, and pulling
              every related entry into one clean view. You stop hunting through files and start
              reading answers.
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
      <section id="how-it-works" className="section section--lavender">
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
        line1="Search smarter. Decide faster."
        sub="See how much time Easy Hunt takes off a single title search. Book a demo and try it on a real query."
        primary={{ label: 'Book a demo' }}
        secondary={{ label: 'Book a Demo' }}
        checks={['Enterprise Security', '24/7 Support', 'API Access']}
      />
    </>
  )
}
