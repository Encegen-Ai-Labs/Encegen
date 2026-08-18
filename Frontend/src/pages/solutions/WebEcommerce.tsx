import {
  ArtTile,
  Btn,
  ClosingCTA,
  GradBand,
  MockPanel,
  PageHero,
  ResultBar,
  SectionHead,
  StepFlow,
  TestimonialCard,
} from '../../components/kit'
import './solutions.css'

const PRODUCTS = [
  {
    tag: 'Marketing Website',
    title: 'Marketing Websites',
    desc: 'Fast landing pages and brand sites built for speed, search, and conversion.',
    meta: '98/100 PageSpeed avg',
    art: 'purple',
  },
  {
    tag: 'E-commerce',
    title: 'E-commerce Platforms',
    desc: 'Full online stores — cart, checkout, inventory, and AI-driven product recommendations.',
    meta: '3× conversion lift',
    art: 'orange',
  },
  {
    tag: 'Custom Web App',
    title: 'Custom Web Apps',
    desc: 'Dashboards, portals, and internal tools shaped to your workflow and your users.',
    meta: '2-week starter',
    art: 'cyan',
  },
]

const STEPS = [
  { num: '01', title: 'Brief & Strategy', meta: 'Wk 1', desc: 'Goals, audience, conversion strategy, and content planning.' },
  { num: '02', title: 'Design & Prototype', meta: 'Wk 2-3', desc: 'High-fidelity screens and a clickable prototype for your sign-off.' },
  { num: '03', title: 'Build & Test', meta: 'Wk 4-6', desc: 'Performance-first code, tested across devices and tuned for conversion.' },
  { num: '04', title: 'Launch & Grow', meta: 'Wk 7+', desc: 'Go live with analytics and SEO in place, plus 30 days of support.' },
]

const STACK = [
  { name: 'Next.js', role: 'Frontend' },
  { name: 'React', role: 'Frontend' },
  { name: 'TypeScript', role: 'Frontend' },
  { name: 'TailwindCSS', role: 'Styling' },
  { name: 'Shopify Plus', role: 'E-commerce' },
  { name: 'WooCommerce', role: 'E-commerce' },
  { name: 'Medusa.js', role: 'E-commerce' },
  { name: 'Stripe', role: 'Payments' },
  { name: 'Vercel', role: 'Cloud' },
  { name: 'Cloudflare', role: 'CDN' },
  { name: 'AWS', role: 'Cloud' },
  { name: 'Lighthouse CI', role: 'Performance' },
  { name: 'Sanity CMS', role: 'Content' },
  { name: 'Contentful', role: 'Content' },
  { name: 'Figma', role: 'Design' },
  { name: 'Google Analytics', role: 'Analytics' },
]

const TESTIMONIALS = [
  {
    tag: 'Startup Client',
    color: '#22c55e',
    quote: 'Our new site converted 3× better from day one. The design was stunning and the engineering was bulletproof. Our users love it.',
    initials: 'HM',
    name: 'Head of Marketing',
    role: 'D2C Brand',
    metric: '3× conversion lift',
    hue: 150,
  },
  {
    tag: 'Retail Client',
    color: '#3b82f6',
    quote: 'They handled our Black Friday sale with 10,000 concurrent users and zero downtime. Incredible engineering.',
    initials: 'CT',
    name: 'CTO',
    role: 'Online Retailer',
    metric: '10k concurrent users',
    hue: 215,
  },
  {
    tag: 'SaaS Client',
    color: '#f59e0b',
    quote: 'We went live in 11 days. The custom portal they built saves every team member 4 hours a week. Zero bugs at launch.',
    initials: 'FS',
    name: 'Founder',
    role: 'SaaS Startup',
    metric: '11-day delivery',
    hue: 30,
  },
]

export default function WebEcommerce() {
  return (
    <>
      <PageHero
        badge={<>● Encegen AI Labs · Web Development · E-commerce · Performance-First</>}
        title={
          <>
            Websites that convert.
            <br />
            Stores that scale.
          </>
        }
        sub="From high-performance marketing sites to full-scale commerce platforms, we build digital experiences that drive measurable, compounding growth — not just ones that photograph well."
        actions={
          <>
            <Btn variant="white">Get a website →</Btn>
            <Btn to="/insights" variant="outline-light">See case studies</Btn>
          </>
        }
        trusted={['IBM', 'Siemens', 'Vodafone', 'Airbus', 'Wipro']}
      />

      <GradBand
        stats={[
          { value: '3×', label: 'Avg Conversion' },
          { value: '98/100', label: 'Performance Score' },
          { value: '2 weeks', label: 'Starter Delivery' },
          { value: '100%', label: 'Mobile-First' },
        ]}
      />

      {/* Problem */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="The Problem"
            title="Every week, a site built to look good — not to perform — quietly costs you customers."
          />
          <div className="split" style={{ marginTop: 56 }}>
            <div>
              <p className="left-copy">
                <strong>The old way:</strong> a visitor lands, waits for a slow page, can't find what
                they came for, and leaves. You never learn why. Your team rebuilds the same page a
                third time while the agency has already moved on to the next client.
              </p>
              <p className="left-copy">
                <strong>With Encegen:</strong> the page loads fast, every screen is built around a
                clear action, and you can see exactly what's working — backed by real analytics and
                A/B testing that never stops.
              </p>
              <div className="sol-chip-row">
                <span className="sol-chip">6-sec load, 2% conversion</span>
                <span className="sol-chip sol-chip--green">Sub-2s, 3× conversion</span>
              </div>
              <p className="left-copy" style={{ fontSize: 14 }}>
                73% of website visitors leave after 3 seconds of load time – your site speed is
                costing you customers
              </p>
              <ul className="check-list">
                <li>Fast load times — performance engineered in, not bolted on</li>
                <li>Conversion-focused from the first wireframe</li>
                <li>Analytics, A/B testing, and weekly reporting built in</li>
              </ul>
            </div>
            <MockPanel
              title="Website Performance Comparison"
              rows={[
                { label: 'TYPICAL AGENCY SITE', chip: 'Before', chipColor: '#ef4444' },
                { label: 'Page loads', chip: '6.2 sec avg', chipColor: '#ef4444' },
                { label: 'Visitor finds CTA', chip: '3+ clicks', chipColor: '#ef4444' },
                { label: 'Conversion attempt', chip: '1.8% site avg', chipColor: '#ef4444' },
                { label: 'Agency responds to issue', chip: '5-7 days', chipColor: '#ef4444' },
                { label: 'WITH ENCEGEN', chip: 'After', chipColor: '#2fe08e' },
                { label: 'Page loads', chip: '1.6 sec', chipColor: '#2fe08e' },
                { label: 'Visitor finds CTA', chip: 'Clear path', chipColor: '#2fe08e' },
                { label: 'Conversion attempt', chip: '5.4% site avg', chipColor: '#2fe08e' },
                { label: 'Issue flagged + fixed', chip: 'Same day', chipColor: '#2fe08e' },
              ]}
              footer={<span>3× higher conversion rate · Based on 50+ Encegen-built websites</span>}
            />
          </div>
        </div>
      </section>

      {/* Flagship */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Flagship Service"
            title="Sites built for revenue, not for the awards shelf."
          />
          <div className="split" style={{ marginTop: 56 }}>
            <div>
              <h3 className="left-title" style={{ fontSize: 24 }}>
                We design every page around one obsession — getting the visitor to act.
              </h3>
              <p className="left-copy">
                Plenty of sites look great in a screenshot. Ours perform in production. Every layout,
                every millisecond of load time, every call to action is engineered to move someone
                one step closer to buying.
              </p>
              <ul className="check-list">
                <li>
                  <strong>Conversion-optimised from wireframe one</strong> — every element earns its
                  place
                </li>
                <li>
                  <strong>Fast load times engineered from day one</strong>, not patched in later
                </li>
                <li>
                  <strong>A/B testing and analytics built in</strong>, so you iterate on evidence
                </li>
                <li>
                  <strong>Technical SEO in the foundation</strong>, not bolted on at the end
                </li>
              </ul>
              <div style={{ marginTop: 30 }}>
                <Btn to="#how-we-deliver" variant="lavender">See our approach →</Btn>
              </div>
            </div>
            <MockPanel
              title="Performance Scoreboard"
              rows={[
                { label: 'PageSpeed Score', chip: '98', chipColor: '#2fe08e' },
                { label: 'Conversion Rate', chip: '+3.2×', chipColor: '#2fe08e' },
                { label: 'Mobile Score', chip: '97', chipColor: '#2fe08e' },
                { label: '08:12 · Optimised hero CTA', chip: '✓', chipColor: '#2fe08e' },
                { label: '09:19 · Deployed A/B test', chip: '✓', chipColor: '#2fe08e' },
                { label: '09:54 · Sent weekly report', chip: '✓', chipColor: '#2fe08e' },
              ]}
              footer={<span>Industry avg: 62/100 → Encegen avg: 98/100</span>}
            />
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="What We Build"
            title="Three kinds of build. One conversion-obsessed team."
            sub="Fast marketing sites, full-scale commerce platforms, and custom web apps."
          />
          <div className="cards-3">
            {PRODUCTS.map((p) => (
              <article key={p.title} className="disc-card">
                <ArtTile variant={p.art} className="disc-card__art" />
                <div className="disc-card__body">
                  <span className="disc-card__tag">{p.tag}</span>
                  <h3 style={{ marginTop: 14 }}>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="disc-card__meta">
                    <span className="sol-chip sol-chip--green" style={{ fontSize: 11.5, padding: '5px 12px' }}>
                      ● {p.meta}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="how-we-deliver" className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="How We Deliver"
            title="From a first conversation to a live site that performs."
            sub="A clear, no-surprises process — from the brief to a site that actually pulls its weight."
          />
          <div style={{ marginTop: 60 }}>
            <StepFlow steps={STEPS} />
          </div>
          <ResultBar
            left="2-week starter delivery · 6-week full build · Based on 50+ website projects delivered"
            chips={['FIXED-PRICE']}
          />
        </div>
      </section>

      {/* Stack */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead
            eyebrow="Our Web & E-commerce Stack"
            title="Tools chosen for speed, reliability, and conversion."
            sub="We pick every tool in your stack for web performance, commerce reliability, and conversion — not because it's the name of the month."
            dark
          />
          <div className="stack-grid">
            {STACK.map((s) => (
              <div key={s.name} className="stack-chip">
                <strong>{s.name}</strong>
                <span>{s.role}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 30, textAlign: 'center', fontSize: 13.5, color: '#8f8ab8' }}>
            The platform fits the business — a scalable store on Shopify, a headless build for
            something custom, WooCommerce for a content-first brand.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="The Proof" title="Websites our clients built their growth on." />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.tag} {...t} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        trusted={['D2C Brands', 'Retailers', 'SaaS', 'Enterprises']}
        line1="Your website story starts with"
        line2="one conversation."
        sub="Tell us what you need to build. We'll design it, build it, and make sure it performs."
        primary={{ label: 'Get a website →' }}
        secondary={{ label: 'See case studies', to: '/insights' }}
        checks={['30-day support', '2-week delivery', 'Fixed-price engagement']}
      />
    </>
  )
}
