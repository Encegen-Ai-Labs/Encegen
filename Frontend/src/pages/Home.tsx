import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArtTile, Btn, PageHero, SectionHead, TestimonialCard } from '../components/kit'
import './Home.css'

import heroImage from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import logoEasyHunt from '../assets/easyhunt.png'
import logoPramay from '../assets/pramay.png'
import logoVarasa from '../assets/varasa.png'
import logoFxAlgo from '../assets/fxalgo.png'

const CLIENT_ITEMS = [
  { name: 'EasyHunt', logo: logoEasyHunt, tag: 'Title Search Software' },
  { name: 'Pramay Agro', logo: logoPramay, tag: 'Agri E-Commerce (Fertilizers & Pesticides)' },
  { name: 'Varasa', logo: logoVarasa, tag: 'Heritage Conservation & Scholarship' },
  { name: 'Fx Algo', logo: logoFxAlgo, tag: 'Algorithmic Trading Systems' },
  { name: 'Flairnetic Advocates', logo: null, tag: 'Major Client for EasyHunt (Legal Due Diligence)' },
]

const STORIES = [
  {
    tag: 'Varasa',
    color: '#22c55e',
    quote:
      'Encegen AI Labs engineered our digital platform for archaeological explorations, ancient artifact preservation documentation, and student scholarship research grants.',
    initials: 'VR',
    name: 'Research & Conservation Head',
    role: 'Varasa (Heritage Conservation & Scholarship)',
    metric: '10,000+ artifacts documented',
    hue: 150,
  },
  {
    tag: 'Pramay Agro',
    color: '#3b82f6',
    quote:
      'Encegen built our specialized e-commerce platform for fertilizers, pesticides, and agro-inputs with seamless dealer ordering and real-time inventory synchronization.',
    initials: 'PA',
    name: 'Operations Director',
    role: 'Pramay Agro (Fertilizers & Pesticides E-Commerce)',
    metric: '60% time saved on ops',
    hue: 215,
  },
  {
    tag: 'Fx Algo',
    color: '#f59e0b',
    quote:
      'In algorithmic finance, latency and precision are paramount. Encegen engineered an ultra-reliable, high-throughput execution backend that consistently excels.',
    initials: 'FA',
    name: 'Quantitative Strategist',
    role: 'Fx Algo (Algorithmic Trading Platform)',
    metric: '<5ms execution latency',
    hue: 30,
  },
  {
    tag: 'Flairnetic Advocates',
    color: '#8b5cf6',
    quote:
      'Using EasyHunt software engineered by Encegen, our legal team accelerated property title search and document intelligence turnaround from days to minutes across Maharashtra records.',
    initials: 'FL',
    name: 'Senior Legal Partner',
    role: 'Flairnetic Advocates (Major Client for EasyHunt)',
    metric: '90% faster title search',
    hue: 260,
  },
]

const RESOURCES = [
  { tag: 'Product', title: 'EasyHunt: Legal Tech Title Search Software for Advocates', meta: 'Product Overview', art: 'purple' as const },
  { tag: 'E-Commerce', title: 'Pramay Agro: Fertilizer & Pesticide Distribution Platform', meta: 'E-Commerce Deep Dive', art: 'cyan' as const },
  { tag: 'Fintech', title: 'Fx Algo: Ultra-Low Latency Algorithmic Trading Engines', meta: 'Technical Blueprint', art: 'magenta' as const },
]

export default function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const facts = useMemo(() => [
    { value: '2025', label: t('home.facts.founded', 'Founded'), sub: t('home.facts.foundedSub', 'Incorporated 24 May 2025') },
    { value: '11–50', label: t('home.facts.team', 'Team Size'), sub: t('home.facts.teamSub', 'AI engineers, developers & builders') },
    {
      value: '2',
      label: t('home.facts.offices', 'Offices in Pune'),
      offices: [
        {
          name: 'Wagholi Office',
          address: 'BA HUB, Office no : 03, Sambhaji Nagar (Baif road), Near BA Varmont Society, Wagholi, Pune-412207',
          mapUrl: 'https://maps.app.goo.gl/TXjPKk6BFvho6c4R7',
        },
        {
          name: 'Pashan Office',
          address: 'Legismith Partners LLP, Pashan, Pune',
          mapUrl: null,
        },
      ],
    },
  ], [t])

  const capabilities = useMemo(() => [
    {
      icon: '◎',
      title: t('home.capabilities.c1Title', 'Real-Time Process Mining'),
      desc: t('home.capabilities.c1Desc', 'Discover and visualize every process variant as it actually runs, not how you think it runs.'),
    },
    {
      icon: '✦',
      title: t('home.capabilities.c2Title', 'AI-Powered Recommendations'),
      desc: t('home.capabilities.c2Desc', 'Surface the highest-value improvement opportunities across your entire operation.'),
    },
    {
      icon: '⚡',
      title: t('home.capabilities.c3Title', 'Execution Engine'),
      desc: t('home.capabilities.c3Desc', 'Automate fixes and embed intelligence directly into SAP, Salesforce, and ServiceNow.'),
    },
  ], [t])

  const industries = useMemo(() => [
    { icon: '⚙', title: t('home.industries.mfg', 'Manufacturing'), desc: t('home.industries.mfgDesc', 'Optimize production cycles and supply chain resilience.') },
    { icon: '🏦', title: t('home.industries.fin', 'Financial Services'), desc: t('home.industries.finDesc', 'Streamline risk management and order-to-cash workflows.') },
    { icon: '🛍', title: t('home.industries.ret', 'Retail'), desc: t('home.industries.retDesc', 'Enhance inventory turnover and omnichannel experiences.') },
    { icon: '🏥', title: t('home.industries.health', 'Healthcare'), desc: t('home.industries.healthDesc', 'Improve patient throughput and billing accuracy.') },
    { icon: '⚡', title: t('home.industries.util', 'Utilities'), desc: t('home.industries.utilDesc', 'Manage grid operations and customer service processes.') },
    { icon: '🚗', title: t('home.industries.auto', 'Automotive'), desc: t('home.industries.autoDesc', 'Accelerate time-to-market for next-gen vehicle production.') },
  ], [t])

  const stats = useMemo(() => [
    { value: '5,000+', label: t('home.stats.s1', 'Enterprise customers') },
    { value: '$2.4T', label: t('home.stats.s2', 'Business value delivered') },
    { value: '98%', label: t('home.stats.s3', 'Customer satisfaction') },
    { value: '300%', label: t('home.stats.s4', 'Avg. ROI within 12 months') },
  ], [t])

  return (
    <>
      <PageHero
        badge={t('home.heroBadge', 'Process Intelligence Platform')}
        title={t('home.heroTitle', 'Turn Every Process Into a Competitive Advantage')}
        sub={t('home.heroSub', 'Encegen gives you the x-ray vision to see, fix, and optimize every business process – in real time, at global scale.')}
        actions={
          <>
            <Btn to="/platform" variant="white">
              {t('home.startFree', 'Start for free →')}
            </Btn>
          </>
        }
        trustedLabel={t('home.trustedBy', "Trusted by the world's leading companies")}
        trusted={[]}
      >
        <div className="home-hero-visual">
          <img 
            src={heroImage} 
            alt="Process Intelligence Platform Interface" 
            className="home-hero-img" 
          />
        </div>
      </PageHero>

      {/* Logo marquee */}
      <section className="home-logos">
        <div className="container">
          <p className="home-logos__label">{t('home.trustedBy', "Our Products, Clients & Trusted Partners")}</p>
          <div className="home-logos__row marquee">
            <div className="marquee__track">
              {[...CLIENT_ITEMS, ...CLIENT_ITEMS].map((item, i) => (
                <div key={`${item.name}-${i}`} className="client-logo-item">
                  {item.logo ? (
                    <img src={item.logo} alt={item.name} className="client-logo-img" />
                  ) : (
                    <span style={{ fontSize: '1.25rem' }}>⚖</span>
                  )}
                  <div>
                    <span className="client-logo-label">{item.name}</span>
                    <span className="client-logo-tag">{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">{t('home.aboutEyebrow', 'About Encegen AI Labs')}</p>
            <h2 className="left-title">{t('home.aboutTitle', 'We believe every great business runs on great processes.')}</h2>
            <p className="left-copy">
              {t('home.aboutCopy', 'Encegen AI Labs builds process intelligence technology that gives enterprise teams real-time visibility into how their operations actually run — not how they think they run. Founded by a team of AI researchers and enterprise operators, we are on a mission to make every business process transparent, measurable, and continuously improving.')}
            </p>
          </div>
          <div className="home-facts">
            {facts.map((f) => (
              <div key={f.label} className="home-facts__card">
                <strong>
                  {f.value} <span>{f.label}</span>
                </strong>
                {f.sub && <p>{f.sub}</p>}
                {'offices' in f && Array.isArray((f as any).offices) && (
                  <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {((f as any).offices as Array<{ name: string; address: string; mapUrl: string | null }>).map((off) => (
                      <div key={off.name} style={{ fontSize: '0.82rem', lineHeight: 1.4, color: 'var(--ink-700)' }}>
                        <span style={{ fontWeight: 700, color: 'var(--purple-700)', display: 'block' }}>📍 {off.name}</span>
                        {off.mapUrl ? (
                          <a
                            href={off.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--ink-700)', textDecoration: 'underline' }}
                          >
                            {off.address} ↗
                          </a>
                        ) : (
                          <span>{off.address}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow={t('home.capabilities.eyebrow', 'Capabilities')}
            title={t('home.capabilities.title', 'Everything you need to achieve process excellence')}
          />
          <div className="cards-3">
            {capabilities.map((c) => (
              <article key={c.title} className="fcard fcard--top-accent">
                <span className="fcard__icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="section section--dark">
        <div className="container split">
          <div>
            <p className="shead__eyebrow" style={{ color: 'var(--purple-400)' }}>
              {t('home.platform.eyebrow', 'The Encegen Platform')}
            </p>
            <h2 className="left-title" style={{ color: '#fff' }}>
              {t('home.platform.title', 'One platform. Every process. Unlimited potential.')}
            </h2>
            <p className="left-copy" style={{ color: '#a8a5cb' }}>
              {t('home.platform.sub', 'From procurement to order-to-cash, Encegen connects every part of your business into a single, living process intelligence layer.')}
            </p>
            <ul className="check-list check-list--dark">
              <li>{t('home.platform.f1', 'EMS (Execution Management System)')}</li>
              <li>{t('home.platform.f2', 'Process Analytics & Mining')}</li>
              <li>{t('home.platform.f3', 'Action Flows & Automation')}</li>
              <li>{t('home.platform.f4', 'Live Connected Data')}</li>
            </ul>
            <div style={{ marginTop: 34 }}>
              <Btn to="/platform" variant="white">
                {t('home.platform.cta', 'Explore platform')}
              </Btn>
            </div>
          </div>
          
          <div className="home-platform-visual">
            <img src={hero2} alt="Platform Preview" className="home-platform-img" />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow={t('home.industries.eyebrow', 'Solutions for every industry')}
            title={
              <>
                Your Industry. Your Processes. <span className="accent-purple">Our Platform.</span>
              </>
            }
            sub={t('home.industries.title', 'Tailored for your sector\'s most complex challenges')}
          />
          <div className="cards-3">
            {industries.map((ind) => (
              <article key={ind.title} className="fcard">
                <span className="fcard__icon">{ind.icon}</span>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
                <Link to="/solutions/use-cases" className="home-ind-link">
                  {t('common.learnMore', 'Explore solution →')}
                </Link>
              </article>
            ))}
          </div>
          <div className="home-center-cta">
            <Btn to="/solutions/use-cases" variant="lavender">
              {t('home.industries.title', 'See all 70+ industry solutions →')}
            </Btn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="home-stats">
        <div className="container home-stats__grid">
          {stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Customer stories */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow={t('home.stories.eyebrow', 'Customer Stories')}
            title={t('home.stories.title', 'Trusted by the brands that run the world')}
          />
          <div className="tgrid">
            {STORIES.map((s) => (
              <TestimonialCard key={s.name} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section section--light">
        <div className="container">
          <div className="home-res-head">
            <h2 className="left-title">{t('home.resources.title', 'Learn from the experts')}</h2>
            <Link to="/resources" className="home-ind-link">
              {t('common.readMore', 'View all resources →')}
            </Link>
          </div>
          <div className="cards-3">
            {RESOURCES.map((r) => (
              <article
                key={r.title}
                className="home-res-card"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/resources')}
              >
                <ArtTile variant={r.art} className="home-res-card__art" />
                <span className="home-res-card__tag">{r.tag}</span>
                <h3>{r.title}</h3>
                <span className="home-res-card__meta">{r.meta}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}