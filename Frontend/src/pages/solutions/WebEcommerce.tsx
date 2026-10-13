import { useState } from 'react'
import {
  Btn,
  ClosingCTA,
  GradBand,
  PageHero,
  ResultBar,
  SectionHead,
  StepFlow,
  TestimonialCard,
} from '../../components/kit'
import ContactModal from '../../components/ContactModal'
import { CapabilityArt } from '../../components/CapabilityArt'
import '../../components/CapabilityArt.css'
import './solutions.css'

const PRODUCTS = [
  {
    tag: 'MARKETING WEBSITE',
    tagBg: '#ede9fe',
    tagColor: '#6d28d9',
    title: 'Marketing Websites',
    desc: 'High-performance landing pages and brand sites built for speed, SEO, and conversion.',
    meta: '98/100 PageSpeed avg',
    dotColor: '#10b981',
    art: 'marketing-website',
  },
  {
    tag: 'E-COMMERCE',
    tagBg: '#ffedd5',
    tagColor: '#ea580c',
    title: 'E-commerce Platforms',
    desc: 'Full-scale online stores with cart, checkout, inventory and AI-powered product recommendations.',
    meta: '3× conversion lift',
    dotColor: '#f97316',
    art: 'ecommerce-platform',
  },
  {
    tag: 'CUSTOM WEB APP',
    tagBg: '#dcfce7',
    tagColor: '#16a34a',
    title: 'Custom Web Apps',
    desc: 'Bespoke dashboards, portals, and tools tailored precisely to your workflow and users.',
    meta: '2-week starter',
    dotColor: '#10b981',
    art: 'custom-web-app',
  },
]

const STEPS = [
  { num: '01', title: 'Brief & Strategy', meta: 'Wk 1', desc: 'Goals, audience, conversion strategy, and content planning.' },
  { num: '02', title: 'Design & Prototype', meta: 'Wk 2-3', desc: 'High-fidelity screens and a clickable prototype for your sign-off.' },
  { num: '03', title: 'Build & Test', meta: 'Wk 4-6', desc: 'Performance-first code, tested across devices and tuned for conversion.' },
  { num: '04', title: 'Launch & Grow', meta: 'Wk 7+', desc: 'Go live with analytics and SEO in place, plus 30 days of support.' },
]

import { ECOMMERCE_TECH_STACK as STACK } from '../../data/techStack'

const TESTIMONIALS = [
  {
    tag: 'Pramay Agro',
    color: '#22c55e',
    quote: 'Our specialized e-commerce platform for fertilizers and pesticides converted 3× better from day one. Real-time stock sync, fluid dealer ordering, and instant dispatch management.',
    initials: 'PA',
    name: 'Operations Director',
    role: 'Pramay Agro (Fertilizers & Pesticides E-Commerce)',
    metric: '3× conversion lift',
    hue: 150,
  },
  {
    tag: 'Varasa',
    color: '#3b82f6',
    quote: 'Encegen built our digital platform for archaeological explorations, ancient artifact preservation documentation, and student scholarship grants with seamless responsiveness.',
    initials: 'VR',
    name: 'Research & Conservation Head',
    role: 'Varasa (Heritage Conservation & Scholarship)',
    metric: '99.99% uptime',
    hue: 215,
  },
  {
    tag: 'Flairnetic Advocates',
    color: '#f59e0b',
    quote: 'Using EasyHunt software engineered by Encegen, our legal team saves hours every single day on property title searches and land record verification.',
    initials: 'FL',
    name: 'Senior Legal Partner',
    role: 'Flairnetic Advocates (Major Client for EasyHunt)',
    metric: '4+ hrs/day saved',
    hue: 30,
  },
]

export default function WebEcommerce() {
  const [showContact, setShowContact] = useState(false)

  return (
    <>
      <PageHero
        className="web-ecommerce-hero phero--web-ecommerce"
        badge={<>● Encegen AI Labs – Web Development · E-commerce · Performance-First</>}
        title={
          <>
            Websites That Convert.
            <br />
            Stores That Scale.
          </>
        }
        sub="From high-performance marketing sites to full-scale e-commerce platforms — we build digital experiences that drive measurable, compounding growth."
        actions={
          <>
            <Btn onClick={() => setShowContact(true)} variant="white">Get a website →</Btn>
            <Btn to="/insights" variant="outline-light">See case studies</Btn>
          </>
        }
        trusted={['IBM', 'Siemens', 'Vodafone', 'Airbus', 'Wipro']}
        trustedLabel="— build for"
      />

      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />

      <GradBand
        className="web-ecommerce-stats"
        stats={[
          { value: '3×', label: 'Avg Conversion' },
          { value: '98/100', label: 'Performance Score' },
          { value: '2 weeks', label: 'Starter Delivery' },
          { value: '100%', label: 'Mobile-First' },
        ]}
      />

      {/* Problem */}
      <section className="section section--light web-ecommerce-problem">
        <div className="container web-ecommerce-problem__container">
          <SectionHead
            eyebrow="THE PROBLEM"
            title={
              <>
                Every week, your team loses hours to a website
                <br className="web-ecom-desktop-br" />
                that was built to look good - not to perform.
              </>
            }
          />
          <div className="web-ecommerce-problem__split">
            <div className="web-ecommerce-problem__copy">
              <span className="web-ecom-problem__chapter">CHAPTER 1 · THE PROBLEM</span>
              <p className="web-ecom-problem__p">
                <strong>In the old way:</strong> your potential customer lands on your site, waits 6
                seconds for it to load, struggles to find what they need, and clicks away. You never
                know why. Your team rebuilds the same page three times. The agency is already
                working on the next project.
              </p>
              <p className="web-ecom-problem__p">
                <strong>With Encegen:</strong> your site loads in under 1.8 seconds, every page is
                designed around a specific conversion goal, and you see exactly what is working —
                with weekly performance reports and ongoing A/B testing.
              </p>
              <div className="web-ecom-problem__pills">
                <span className="web-ecom-pill web-ecom-pill--muted">6-sec load, 17% conversion</span>
                <span className="web-ecom-pill__arrow" aria-hidden="true">→</span>
                <span className="web-ecom-pill web-ecom-pill--purple">Sub-2s, 3× conversion</span>
              </div>
              <p className="web-ecom-problem__caption">
                73% of website visitors leave after 3 seconds of load time — your site speed is costing you customers.
              </p>
              <ul className="web-ecom-problem__checks">
                <li>
                  <span className="web-ecom-check-mark" aria-hidden="true">✓</span>
                  <span>Sub-2 second load times — industry-leading performance</span>
                </li>
                <li>
                  <span className="web-ecom-check-mark" aria-hidden="true">✓</span>
                  <span>Conversion-rate optimised from first wireframe</span>
                </li>
                <li>
                  <span className="web-ecom-check-mark" aria-hidden="true">✓</span>
                  <span>Built-in analytics, A/B testing, and weekly reports</span>
                </li>
              </ul>
            </div>
            <div className="web-ecom-compare-card">
              <div className="web-ecom-compare__head">WEBSITE PERFORMANCE COMPARISON</div>

              {/* Group 1: Typical Agency Site */}
              <div className="web-ecom-compare__group web-ecom-compare__group--bad">
                <span className="web-ecom-compare__badge web-ecom-compare__badge--bad">TYPICAL AGENCY SITE</span>
                <div className="web-ecom-compare__rows">
                  <div className="web-ecom-compare__row">
                    <div className="web-ecom-compare__row-left">
                      <span className="web-ecom-row-icon web-ecom-row-icon--bad" aria-hidden="true">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </span>
                      <span>Page loads</span>
                    </div>
                    <span className="web-ecom-row-chip web-ecom-row-chip--bad">6.4 sec avg</span>
                  </div>

                  <div className="web-ecom-compare__row">
                    <div className="web-ecom-compare__row-left">
                      <span className="web-ecom-row-icon web-ecom-row-icon--bad" aria-hidden="true">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                      </span>
                      <span>Visitor finds CTA</span>
                    </div>
                    <span className="web-ecom-row-chip web-ecom-row-chip--bad">&lt;15% can find</span>
                  </div>

                  <div className="web-ecom-compare__row">
                    <div className="web-ecom-compare__row-left">
                      <span className="web-ecom-row-icon web-ecom-row-icon--bad" aria-hidden="true">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </span>
                      <span>Conversion attempt</span>
                    </div>
                    <span className="web-ecom-row-chip web-ecom-row-chip--bad">1.8% rate</span>
                  </div>

                  <div className="web-ecom-compare__row">
                    <div className="web-ecom-compare__row-left">
                      <span className="web-ecom-row-icon web-ecom-row-icon--bad" aria-hidden="true">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                      </span>
                      <span>Agency responds to issue</span>
                    </div>
                    <span className="web-ecom-row-chip web-ecom-row-chip--bad">4-7 days</span>
                  </div>
                </div>

                <div className="web-ecom-compare__summary web-ecom-compare__summary--bad">
                  Conversion rate: 1.8% · Bounce rate: 68%
                </div>
              </div>

              {/* Group 2: With Encegen */}
              <div className="web-ecom-compare__group web-ecom-compare__group--good">
                <span className="web-ecom-compare__badge web-ecom-compare__badge--good">WITH ENCEGEN</span>
                <div className="web-ecom-compare__rows">
                  <div className="web-ecom-compare__row">
                    <div className="web-ecom-compare__row-left">
                      <span className="web-ecom-row-icon web-ecom-row-icon--good" aria-hidden="true">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>Page loads</span>
                    </div>
                    <span className="web-ecom-row-chip web-ecom-row-chip--good">1.1 sec</span>
                  </div>

                  <div className="web-ecom-compare__row">
                    <div className="web-ecom-compare__row-left">
                      <span className="web-ecom-row-icon web-ecom-row-icon--good" aria-hidden="true">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>Visitor finds CTA</span>
                    </div>
                    <span className="web-ecom-row-chip web-ecom-row-chip--good">Clear path</span>
                  </div>

                  <div className="web-ecom-compare__row">
                    <div className="web-ecom-compare__row-left">
                      <span className="web-ecom-row-icon web-ecom-row-icon--good" aria-hidden="true">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>Conversion attempt</span>
                    </div>
                    <span className="web-ecom-row-chip web-ecom-row-chip--good">5.4% rate</span>
                  </div>

                  <div className="web-ecom-compare__row">
                    <div className="web-ecom-compare__row-left">
                      <span className="web-ecom-row-icon web-ecom-row-icon--good" aria-hidden="true">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>Issue flagged &amp; fixed</span>
                    </div>
                    <span className="web-ecom-row-chip web-ecom-row-chip--good">Same day</span>
                  </div>
                </div>

                <div className="web-ecom-compare__summary web-ecom-compare__summary--good">
                  Conversion rate: 5.4% · Bounce rate: 22%
                </div>
              </div>

              {/* Card Footer Callout */}
              <div className="web-ecom-compare__footer">
                3× higher conversion rate · Based on 50+ Encegen-built websites
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Service */}
      <section className="section section--light web-ecom-flagship">
        <div className="container">
          <SectionHead
            eyebrow="FLAGSHIP SERVICE"
            title={
              <>
                Performance-optimised
                <br />
                websites built for revenue,
                <br />
                not just awards.
              </>
            }
          />
          <div className="web-ecom-flagship__split">
            <div className="web-ecom-flagship__left">
              <h3 className="web-ecom-flagship__subtitle">
                We design every page with one obsession - getting visitors to take action.
              </h3>
              <p className="web-ecom-flagship__lead">
                Most websites look good in screenshots. Ours perform in production. Every layout,
                every load-time millisecond, every CTA is engineered for conversion.
              </p>

              <ul className="web-ecom-flagship__list">
                <li>
                  <span className="web-ecom-flagship__check" aria-hidden="true">✓</span>
                  <div>
                    <strong>Conversion-rate optimised from wireframe one</strong>
                    <span>Every element placed for maximum action.</span>
                  </div>
                </li>
                <li>
                  <span className="web-ecom-flagship__check" aria-hidden="true">✓</span>
                  <div>
                    <strong>Sub-2 second load times guaranteed</strong>
                    <span>98/100 PageSpeed engineered from day one.</span>
                  </div>
                </li>
                <li>
                  <span className="web-ecom-flagship__check" aria-hidden="true">✓</span>
                  <div>
                    <strong>Built-in A/B testing and analytics</strong>
                    <span>Data-driven iteration from launch day.</span>
                  </div>
                </li>
                <li>
                  <span className="web-ecom-flagship__check" aria-hidden="true">✓</span>
                  <div>
                    <strong>SEO-ready at the foundation</strong>
                    <span>Technical SEO baked in, not bolted on.</span>
                  </div>
                </li>
              </ul>

              <a href="#how-we-build" className="web-ecom-flagship__cta">
                Explore our approach →
              </a>
            </div>

            <div className="web-ecom-perf-card">
              <span className="web-ecom-perf__title">PERFORMANCE DASHBOARD</span>

              <div className="web-ecom-perf__metrics">
                <div className="web-ecom-perf__metric">
                  <div className="web-ecom-perf__metric-head">
                    <span>PageSpeed Score</span>
                    <strong className="web-ecom-perf__val--purple">98</strong>
                  </div>
                  <div className="web-ecom-perf__track">
                    <span
                      className="web-ecom-perf__fill web-ecom-perf__fill--purple"
                      style={{ width: '98%' }}
                    />
                  </div>
                </div>

                <div className="web-ecom-perf__metric">
                  <div className="web-ecom-perf__metric-head">
                    <span>Conversion Rate</span>
                    <strong className="web-ecom-perf__val--green">+3.2x</strong>
                  </div>
                  <div className="web-ecom-perf__track">
                    <span
                      className="web-ecom-perf__fill web-ecom-perf__fill--green"
                      style={{ width: '78%' }}
                    />
                  </div>
                </div>

                <div className="web-ecom-perf__metric">
                  <div className="web-ecom-perf__metric-head">
                    <span>Mobile Score</span>
                    <strong className="web-ecom-perf__val--green">97</strong>
                  </div>
                  <div className="web-ecom-perf__track">
                    <span
                      className="web-ecom-perf__fill web-ecom-perf__fill--green"
                      style={{ width: '91%' }}
                    />
                  </div>
                </div>
              </div>

              <div className="web-ecom-perf__banner">
                <span>Industry avg: 62/100 → Encegen avg: 98/100</span>
              </div>

              <div className="web-ecom-perf__activity">
                <span className="web-ecom-perf__activity-title">RECENT ACTIVITY</span>
                <div className="web-ecom-perf__activity-list">
                  {[
                    { time: '09:12', label: 'Optimised hero CTA' },
                    { time: '09:18', label: 'Deployed A/B test' },
                    { time: '09:24', label: 'Sent weekly report' },
                  ].map((act) => (
                    <div key={act.time} className="web-ecom-perf__activity-row">
                      <span className="web-ecom-perf__activity-time">{act.time}</span>
                      <span className="web-ecom-perf__activity-label">{act.label}</span>
                      <span className="web-ecom-perf__activity-check" aria-hidden="true">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="section section--lavender web-ecom-build">
        <div className="container">
          <SectionHead
            eyebrow="WHAT WE BUILD"
            title={
              <>
                Three types of digital products. One
                <br />
                conversion-obsessed team.
              </>
            }
            sub="We build the three experiences that drive growth: high-performance marketing sites, full-scale e-commerce platforms, and bespoke web apps."
          />
          <div className="cards-3 web-ecom-build__grid">
            {PRODUCTS.map((p) => (
              <article key={p.title} className="disc-card web-ecom-build__card">
                <CapabilityArt id={p.art} className="disc-card__art web-ecom-build__art" />
                <div className="disc-card__body web-ecom-build__body">
                  <span
                    className="disc-card__tag web-ecom-build__tag"
                    style={{ background: p.tagBg, color: p.tagColor }}
                  >
                    {p.tag}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="web-ecom-build__meta">
                    <span
                      className="web-ecom-build__dot"
                      style={{ background: p.dotColor }}
                      aria-hidden="true"
                    />
                    <strong>{p.meta}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="how-we-build" className="section section--light">
        <div className="container">
          <SectionHead eyebrow="How We Build" title="From brief to launch, on a schedule you can trust." />
          <div style={{ marginTop: 60 }}>
            <StepFlow steps={STEPS} />
          </div>
          <ResultBar
            left="2-6 week delivery window · 98/100 average PageSpeed · 30 days post-launch support"
            chips={['FIXED-PRICE']}
          />
        </div>
      </section>

      {/* Stack */}
      <section className="section section--light tech-stack-section">
        <div className="container">
          <SectionHead
            eyebrow="OUR WEB & E-COMMERCE STACK"
            title="Conversion-optimised technologies. Proven in production."
            sub="We choose every tool in our stack specifically for web performance, e-commerce reliability, and conversion rate optimisation — not just what is popular."
          />
          <div className="stack-grid">
            {STACK.map((s) => (
              <div key={s.name} className="stack-chip">
                <span className="stack-chip__dot" aria-hidden="true" />
                <div className="stack-chip__content">
                  <strong>{s.name}</strong>
                  <span>{s.role}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="stack-note">
            Platform chosen based on your business model — Shopify for scalable stores, headless for
            custom experiences, WooCommerce for content-first brands.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="section section--lavender ai-research-proof">
        <div className="container">
          <SectionHead eyebrow="The Proof" title="Websites our clients built their growth on." />
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.tag} {...t} outlineStars />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        eyebrow="LET’S BUILD"
        line1="Your website story starts with"
        line2="one conversation."
        sub="Tell us what you need to build. We will design it, build it, and make sure it performs."
        primary={{ label: 'Get a website →', to: '/contact' }}
        secondary={{ label: 'See case studies', to: '/insights' }}
        checks={['30-day support', '2-week delivery', 'Fixed-price engagement']}
      />
    </>
  )
}
