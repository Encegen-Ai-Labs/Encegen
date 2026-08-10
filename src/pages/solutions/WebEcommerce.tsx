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
    desc: 'High-performance landing pages and brand sites built for speed, SEO, and conversion.',
    meta: '98/100 PageSpeed avg',
    art: 'purple',
  },
  {
    tag: 'E-commerce',
    title: 'E-commerce Platforms',
    desc: 'Full-scale online stores with cart, checkout, inventory, and AI-powered product recommendations.',
    meta: '3× conversion lift',
    art: 'orange',
  },
  {
    tag: 'Custom Web App',
    title: 'Custom Web Apps',
    desc: 'Bespoke dashboards, portals, and tools tailored precisely to your workflow and users.',
    meta: '2-week starter',
    art: 'cyan',
  },
]

const STEPS = [
  { num: '01', title: 'Brief & Strategy', meta: 'Wk 1', desc: 'Goals, target audience, conversion strategy, and content planning' },
  { num: '02', title: 'Design & Prototype', meta: 'Wk 2-3', desc: 'High-fidelity screens and an interactive prototype for your sign-off' },
  { num: '03', title: 'Build & Test', meta: 'Wk 4-6', desc: 'Performance-first code, cross-device testing, and conversion optimisation' },
  { num: '04', title: 'Launch & Grow', meta: 'Wk 7+', desc: 'Go live with analytics, SEO setup, and 30 days of dedicated support' },
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
            Websites That Convert.
            <br />
            Stores That Scale.
          </>
        }
        sub="From high-performance marketing sites to full-scale e-commerce platforms – we build digital experiences that drive measurable, compounding growth."
        actions={
          <>
            <Btn variant="white">Get a website →</Btn>
            <Btn variant="outline-light">See case studies</Btn>
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
            title="Every week, your team loses hours to a website that was built to look good - not to perform."
          />
          <div className="split" style={{ marginTop: 56 }}>
            <div>
              <p className="left-copy">
                <strong>In the old way:</strong> your potential customer lands on your site, waits 6
                seconds for it to load, struggles to find what they need, and clicks away. You never
                know why. Your team rebuilds the same page three times. The agency is already
                working on the next project.
              </p>
              <p className="left-copy">
                <strong>With Encegen:</strong> your site loads in under 1.8 seconds, every page is
                designed around a specific conversion goal, and you see exactly what is working –
                with weekly performance reports and ongoing A/B testing.
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
                <li>Sub-2 second load times - industry-leading performance</li>
                <li>Conversion-rate optimised from first wireframe</li>
                <li>Built-in analytics, A/B testing, and weekly reports</li>
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
            title="Performance-optimised websites built for revenue, not just awards."
          />
          <div className="split" style={{ marginTop: 56 }}>
            <div>
              <h3 className="left-title" style={{ fontSize: 24 }}>
                We design every page with one obsession - getting visitors to take action.
              </h3>
              <p className="left-copy">
                Most websites look good in screenshots. Ours perform in production. Every layout,
                every load-time millisecond, every CTA is engineered for conversion.
              </p>
              <ul className="check-list">
                <li>
                  <strong>Conversion-rate optimised from wireframe one</strong> — every element
                  placed for maximum action
                </li>
                <li>
                  <strong>Sub-2 second load times guaranteed</strong> — 98/100 PageSpeed engineered
                  from day one
                </li>
                <li>
                  <strong>Built-in A/B testing and analytics</strong> — data-driven iteration from
                  launch day
                </li>
                <li>
                  <strong>SEO-ready at the foundation</strong> — technical SEO baked in, not bolted
                  on
                </li>
              </ul>
              <div style={{ marginTop: 30 }}>
                <Btn variant="lavender">Explore our approach →</Btn>
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
            title="Three types of digital products. One conversion-obsessed team."
            sub="High-performance marketing sites, full-scale e-commerce platforms, and bespoke web apps."
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
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="How We Deliver"
            title="From a conversation to a live, converting website."
            sub="A clear, transparent process with no surprises — from your first brief to a live site that performs."
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
            title="Conversion-optimised technologies. Proven in production."
            sub="We choose every tool in your stack specifically for web performance, e-commerce reliability, and conversion rate optimisation - not just what is popular."
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
            Platform chosen based on your business model - Shopify for scalable stores, headless for
            custom experiences, WooCommerce for content-first brands.
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
        sub="Tell us what you need to build. We will design it, build it, and make sure it performs."
        primary={{ label: 'Get a website →' }}
        secondary={{ label: 'See case studies' }}
        checks={['30-day support', '2-week delivery', 'Fixed-price engagement']}
      />
    </>
  )
}
