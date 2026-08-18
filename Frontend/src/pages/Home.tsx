import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArtTile, Btn, PageHero, SectionHead, TestimonialCard } from '../components/kit'
import './Home.css'

import heroImage from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'

const LOGOS = ['IBM', 'Airbus', 'Uber', 'Siemens', 'Vodafone', 'Celanese', 'Coca-Cola', 'Wipro']

const STORIES = [
  {
    tag: 'Siemens',
    color: '#22c55e',
    quote:
      'Encegen gave us end-to-end visibility we never thought possible - transforming how we run global operations.',
    initials: 'AM',
    name: 'Anna Müller',
    role: 'VP Supply Chain, Siemens AG',
    metric: '90% fewer invoice exceptions',
    hue: 150,
  },
  {
    tag: 'Uber',
    color: '#3b82f6',
    quote:
      'The AI recommendations were actionable from day one. Finance closes the books 5 days faster every single month.',
    initials: 'JP',
    name: 'James Park',
    role: 'Head of Finance Ops, Uber',
    metric: '40% faster invoice processing',
    hue: 215,
  },
  {
    tag: 'Airbus',
    color: '#f59e0b',
    quote:
      'Process intelligence is now central to our digital transformation - deployed across 14 countries.',
    initials: 'MD',
    name: 'Marie Dubois',
    role: 'Chief Digital Officer, Airbus',
    metric: '94% process compliance',
    hue: 30,
  },
]

const RESOURCES = [
  { tag: 'Research', title: 'The 2026 Process Intelligence Report', meta: '8 min read', art: 'purple' as const },
  { tag: 'Masterclass', title: 'AI at Scale: A CEO Masterclass', meta: 'Available On-Demand', art: 'cyan' as const },
  { tag: 'Technical Paper', title: 'Download the EMS technical paper', meta: 'Download PDF', art: 'magenta' as const },
]

export default function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const facts = useMemo(() => [
    { value: '2019', label: t('home.facts.founded', 'Founded'), sub: t('home.facts.foundedSub', 'Built from enterprise AI research') },
    { value: '3,500+', label: t('home.facts.team', 'Team'), sub: t('home.facts.teamSub', 'Engineers, scientists & operators') },
    { value: '30+', label: t('home.facts.offices', 'Global offices'), sub: t('home.facts.officesSub', 'Across North America, Europe & APAC') },
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
          <p className="home-logos__label">{t('home.trustedBy', "Trusted by the world's leading companies")}</p>
          <div className="home-logos__row marquee">
            <div className="marquee__track">
              {[...LOGOS, ...LOGOS].map((l, i) => (
                <span key={`${l}-${i}`}>{l}</span>
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
                <p>{f.sub}</p>
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