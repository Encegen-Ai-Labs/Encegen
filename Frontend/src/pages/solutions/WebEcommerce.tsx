import { useState } from 'react'
import {
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
        className="ai-research-hero web-ecommerce-hero"
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
        trusted={['EasyHunt', 'Varasa', 'Pramay Agro', 'FxAlgo']}
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
            eyebrow="The Problem"
            title="Every week, a site built to look good — not to perform — quietly costs you customers."
          />
          <div className="split web-ecommerce-problem__split">
            <div className="web-ecommerce-problem__copy">
              <p className="left-copy">
                <strong>The old way:</strong> a visitor lands, waits for a slow page, can't find what
                they came for, and leaves. You never learn why. Your team rebuilds the same page a
                year later, changes the colors, and the numbers don't move.
              </p>
              <p className="left-copy">
                <strong>With Encegen:</strong> we engineer every page around one goal: conversion.
                Speed is treated as a feature, structure is tested against real users, and every
                deploy is instrumented so you can see where people convert and why.
              </p>
              <ul className="check-list">
                <li>Sub-second page loads — built to pass Core Web Vitals on mobile</li>
                <li>Conversion-focused design — clear paths to action, tested with real users</li>
                <li>CMS integration so your team can publish without waiting on an engineer</li>
                <li>Full analytics setup on launch day — tracking, funnels, and event tagging</li>
              </ul>
            </div>
            <MockPanel
              className="web-ecommerce-problem__audit"
              title="Page Performance Audit"
              rows={[
                { label: 'TYPICAL AGENCY SITE', chip: 'Before', chipColor: '#ef4444' },
                { label: 'Page load time', chip: '4.8s', chipColor: '#ef4444' },
                { label: 'Mobile Performance score', chip: '43/100', chipColor: '#ef4444' },
                { label: 'Bounce rate', chip: '68%', chipColor: '#ef4444' },
                { label: 'WITH ENCEGEN', chip: 'After', chipColor: '#2fe08e' },
                { label: 'Page load time', chip: '0.9s', chipColor: '#2fe08e' },
                { label: 'Mobile Performance score', chip: '98/100', chipColor: '#2fe08e' },
                { label: 'Bounce rate', chip: '24%', chipColor: '#2fe08e' },
              ]}
              footer={<span>Average 3× conversion increase across 30+ site launches</span>}
            />
          </div>
        </div>
      </section>

      {/* Flagship Service */}
      <section className="section section--light web-ecom-flagship">
        <div className="container">
          <SectionHead
            eyebrow="Flagship Service"
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
                        ✓
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
