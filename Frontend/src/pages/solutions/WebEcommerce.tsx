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
import { CapabilityArt } from '../../components/CapabilityArt'
import '../../components/CapabilityArt.css'
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
            <Btn to="/insights" variant="outline-light">See case studies →</Btn>
          </>
        }
        trusted={['EasyHunt', 'Varasa', 'Pramay Agro', 'FxAlgo']}
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

      {/* What we build */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead eyebrow="What We Build" title="From marketing sites to full commerce engines." />
          <div className="cards-3">
            {PRODUCTS.map((p) => (
              <article key={p.title} className="disc-card">
                <CapabilityArt id={p.art} className="disc-card__art" />
                <div className="disc-card__body">
                  <span className="disc-card__tag">{p.tag}</span>
                  <h3 style={{ marginTop: 14 }}>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="disc-card__meta">
                    <span className="sol-chip sol-chip--green" style={{ fontSize: 11.5, padding: '5px 12px' }}>
                      {p.meta}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--light">
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
      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Our Tech Stack" title="Modern tools, selected for speed and scale." dark />
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
        trusted={['EasyHunt', 'Varasa', 'Pramay Agro', 'FxAlgo']}
        line1="Your website story starts with"
        line2="one conversation."
        sub="Tell us what you need to build. We'll design it, build it, and make sure it performs."
        secondary={{ label: 'See case studies', to: '/insights' }}
        checks={['30-day support', '2-week delivery', 'Fixed-price engagement']}
      />
    </>
  )
}
