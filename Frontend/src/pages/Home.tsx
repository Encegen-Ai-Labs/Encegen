import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Btn, PageHero, SectionHead, TestimonialCard } from '../components/kit'
import { ArrowRight } from '../components/icons'
import ScrollFillText from '../components/ScrollFillText'
import './Home.css'

/* Scroll-triggered reveal: adds 'is-visible' to each child with stagger */
function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const revealed = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed.current) {
          revealed.current = true
          const children = el.querySelectorAll('.anim-item')
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('is-visible'), i * 120)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

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

const HOME_RESOURCES = [
  {
    type: 'research' as const,
    tag: 'Research',
    title: 'The 2026 Process Intelligence Report',
    meta: '8 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    type: 'webinar' as const,
    tag: 'Webinar',
    title: 'AI at Scale: A CEO Masterclass',
    meta: 'Available On-Demand',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    type: 'paper' as const,
    tag: 'Technical Paper',
    title: 'EMS Technical Paper',
    desc: 'Download the EMS technical paper',
    cta: 'Download PDF',
  },
]

export default function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const capRef = useScrollReveal<HTMLDivElement>()
  const indRef = useScrollReveal<HTMLDivElement>()
  const statsRef = useScrollReveal<HTMLDivElement>()
  const resRef = useScrollReveal<HTMLDivElement>()
  const [storyPage, setStoryPage] = useState(0)
  const totalPages = 2
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [progressKey, setProgressKey] = useState(0)

  // Auto-play carousel
  useEffect(() => {
    if (isPaused) return
    autoPlayRef.current = setInterval(() => {
      setStoryPage((prev) => (prev + 1) % totalPages)
      setProgressKey((k) => k + 1)
    }, 5000)
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isPaused])

  const handlePageChange = (page: number) => {
    setStoryPage(page)
    setProgressKey((k) => k + 1)
    // Reset auto-play timer
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setStoryPage((prev) => (prev + 1) % totalPages)
        setProgressKey((k) => k + 1)
      }, 5000)
    }
  }

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
          name: 'Legismith Partners LLP',
          address: 'Office No. 507,Sukhwani Boulevard Commerz, Pashan-Sus Road, Above Domnios, Sus. Pune Maharashtra 411021',
          mapUrl: 'https://www.google.com/maps/place/Legismith+Partners+LLP/@18.5528432,73.7551646,612a,75y,87.03h,90t/data=!3m7!1e1!3m5!1s7itLVbuKwXhTbJ1suLtkOQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3D7itLVbuKwXhTbJ1suLtkOQ%26yaw%3D87.03443356390962!7i16384!8i8192!4m7!3m6!1s0x3bc2bfa66853ed39:0x6339bde89311682b!8m2!3d18.5525751!4d73.7550038!10e5!16s%2Fg%2F11vz6648ss!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D',
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
      <section className="section section--light" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container split">
          <div>
            <p className="shead__eyebrow">{t('home.aboutEyebrow', 'About Encegen AI Labs')}</p>
            <h2 className="left-title">
              <ScrollFillText text={t('home.aboutTitle', 'We believe every great business runs on great processes.')} />
            </h2>
            <p className="left-copy" style={{ fontSize: '1.3rem', lineHeight: '1.6', fontWeight: 500 }}>
              <ScrollFillText text={t('home.aboutCopy', 'More than 1,400 companies around the world use Encegen to analyze, design, and operate AI-driven processes. Now your agents, humans, and systems can work together to deliver real business outcomes.')} />
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
          <div className="cards-3" ref={capRef}>
            {capabilities.map((c) => (
              <article key={c.title} className="fcard fcard--top-accent hover-lift anim-item">
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
          <div className="cards-3" ref={indRef}>
            {industries.map((ind) => (
              <article key={ind.title} className="fcard anim-item hover-lift">
                <span className="fcard__icon">{ind.icon}</span>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
               
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
        <div className="container home-stats__grid" ref={statsRef}>
          {stats.map((s) => (
            <div key={s.label} className="anim-item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Customer stories */}
      <section
        className="home-stories-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container">
          {/* Centered header */}
          <div className="home-stories__header">
            <span className="home-stories__eyebrow">
              {t('home.stories.eyebrow', 'Customer Stories')}
            </span>
            <h2 className="home-stories__title">
              {t('home.stories.title', 'Trusted by the brands that run the world')}
            </h2>
            <span className="home-stories__accent-line" />
          </div>

          {/* Subtitle row with arrows */}
          <div className="home-stories__head">
            <div>
              <span className="home-stories__subtitle-eyebrow">
                {t('home.stories.eyebrow', 'Customer Stories')}
              </span>
              <h3 className="home-stories__subtitle">
                {t('home.stories.subtitle', "Trusted by the world's leading enterprises.")}
              </h3>
            </div>
            <div className="home-stories__controls" aria-label="Customer stories navigation">
              <button
                type="button"
                className="home-stories__arrow"
                onClick={() => handlePageChange(0)}
                disabled={storyPage === 0}
                aria-label="Previous customer stories"
              >
                <ArrowRight size={17} className="home-stories__arrow--previous" />
              </button>
              <button
                type="button"
                className="home-stories__arrow home-stories__arrow--next"
                onClick={() => handlePageChange(1)}
                disabled={storyPage === 1}
                aria-label="Next customer stories"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          {/* Cards carousel */}
          <div className="home-stories__viewport">
            <div
              className="home-stories__track"
              style={{ ['--story-page' as string]: storyPage }}
            >
              {STORIES.map((s) => (
                <div className="home-stories__slide" key={s.name}>
                  <TestimonialCard {...s} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="home-stories__dots" aria-label="Customer stories pages">
            {[0, 1].map((page) => (
              <button
                key={page}
                type="button"
                className={storyPage === page ? 'is-active' : ''}
                onClick={() => handlePageChange(page)}
                aria-label={`Show customer stories page ${page + 1}`}
                aria-current={storyPage === page ? 'true' : undefined}
              />
            ))}
          </div>

          {/* Auto-play progress bar */}
          <div className="home-stories__progress">
            <div className="home-stories__progress-bar">
              <div
                key={progressKey}
                className="home-stories__progress-fill"
                style={isPaused ? { animationPlayState: 'paused' } : {}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section section--light home-resources-section">
        <div className="container">
          <div className="home-res-head">
            <div>
              <p className="shead__eyebrow" style={{ color: 'var(--purple-600)' }}>
                {t('home.resources.eyebrow', 'Resources')}
              </p>
              <h2 className="left-title">{t('home.resources.title', 'Learn from the experts')}</h2>
            </div>
            <Link to="/resources" className="home-ind-link">
              {t('common.readMore', 'View all resources')}
            </Link>
          </div>
          <div className="home-res-grid" ref={resRef}>
            {HOME_RESOURCES.map((r) => (
              <article
                key={r.title}
                className={`home-res-card2 home-res-card2--${r.type} anim-item hover-lift`}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/resources')}
              >
                {/* Research & Webinar cards: image top */}
                {r.type !== 'paper' && r.image && (
                  <div className="home-res-card2__img-wrap">
                    <img src={r.image} alt={r.title} className="home-res-card2__img" />
                    {r.type === 'research' && (
                      <span className="home-res-card2__badge">{r.tag}</span>
                    )}
                    {r.type === 'webinar' && (
                      <span className="home-res-card2__play">▶</span>
                    )}
                  </div>
                )}

                {/* Paper card: purple gradient background */}
                {r.type === 'paper' && (
                  <div className="home-res-card2__paper-bg">
                    <h3 className="home-res-card2__paper-title">{r.title}</h3>
                  </div>
                )}

                {/* Bottom content */}
                <div className="home-res-card2__body">
                  {r.type !== 'paper' ? (
                    <>
                      <h3 className="home-res-card2__title">{r.title}</h3>
                      <span className="home-res-card2__meta">{r.meta}</span>
                    </>
                  ) : (
                    <div className="home-res-card2__paper-foot">
                      <p className="home-res-card2__paper-desc">{'desc' in r ? r.desc : ''}</p>
                      <span className="home-res-card2__paper-cta">{'cta' in r ? r.cta : 'Download'}</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}