import { useEffect, useState, useRef, useMemo } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.png'
import { ArrowRight, ChevronDown, SearchIcon } from './icons'
import AdminLoginModal from './AdminLoginModal'
import LanguageSelector from './LanguageSelector'
import './Navbar.css'

type MegaColumn = {
  heading: string
  links: { label: string; to: string }[]
}

type NavItem = {
  key: string
  label: string
  to?: string
  mega?: {
    featured: { title: string; to: string }
    columns: MegaColumn[]
  }
}

export default function Navbar() {
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null)
  
  // Secret 3-Tap Admin Login Trigger state
  const [showAdminModal, setShowAdminModal] = useState(false)
  const clickCountRef = useRef(0)
  const clickTimerRef = useRef<any>(null)

  const navItems: NavItem[] = useMemo(() => [
    {
      key: 'solutions',
      label: t('navbar.solutions', 'Solutions'),
      mega: {
        featured: { title: t('navbar.featuredStories', 'Success stories'), to: '/insights' },
        columns: [
          {
            heading: t('navbar.headings.byTransformation', 'By Transformation'),
            links: [
              { label: t('navbar.links.aiAgents', 'AI Agents & Automation'), to: '/solutions/ai-agents' },
              { label: t('navbar.links.aiResearch', 'AI Research Solutions'), to: '/solutions/ai-research' },
              { label: t('navbar.links.customSoftware', 'Custom Software Dev'), to: '/solutions/custom-software' },
              { label: t('navbar.links.allTransformations', 'All transformations'), to: '/solutions/use-cases' },
            ],
          },
          {
            heading: t('navbar.headings.byFunction', 'By Function'),
            links: [
              { label: t('navbar.links.digitalMarketing', 'Digital Marketing & Growth'), to: '/solutions/digital-marketing' },
              { label: t('navbar.links.webEcommerce', 'Website & Ecommerce Dev'), to: '/solutions/web-ecommerce' },
              { label: t('navbar.links.processExcellence', 'Process Excellence'), to: '/platform' },
              { label: t('navbar.links.allFunctions', 'All functions'), to: '/solutions/use-cases' },
            ],
          },
          {
            heading: t('navbar.headings.byIndustry', 'By Industry'),
            links: [
              { label: t('navbar.links.manufacturing', 'Manufacturing'), to: '/solutions/use-cases#manufacturing' },
              { label: t('navbar.links.financialServices', 'Financial Services'), to: '/solutions/use-cases#financial-services' },
              { label: t('navbar.links.healthcare', 'Healthcare'), to: '/solutions/use-cases#healthcare' },
              { label: t('navbar.links.allIndustries', 'All industries'), to: '/solutions/use-cases' },
            ],
          },
        ],
      },
    },
    { key: 'resources', label: t('navbar.resources', 'Resources'), to: '/resources' },
    {
      key: 'products',
      label: t('navbar.products', 'Products'),
      mega: {
        featured: { title: t('navbar.explorePlatform', 'The Encegen Platform'), to: '/platform' },
        columns: [
          {
            heading: t('navbar.headings.platform', 'Platform'),
            links: [
              { label: t('navbar.links.processMining', 'Process Mining'), to: '/platform' },
              { label: t('navbar.links.executionManagement', 'Execution Management'), to: '/platform' },
              { label: t('navbar.links.aiInsights', 'AI Insights'), to: '/platform' },
              { label: t('navbar.links.explorePlatformLink', 'Explore the platform'), to: '/platform' },
            ],
          },
          {
            heading: t('navbar.headings.products', 'Products'),
            links: [
              { label: t('navbar.links.easyHunt', 'Easy Hunt'), to: '/products/easy-hunt' },
              { label: t('navbar.links.hrPortal', 'HR Portal'), to: '/products/hr-portal' },
              { label: t('navbar.links.resumeBuilder', 'Resume Builder'), to: '/products/resume-builder' },
              { label: t('navbar.links.resumeAnalyzer', 'Resume Analyzer'), to: '/products/resume-analyzer' },
              { label: t('navbar.links.voiceAgent', 'Voice Agent'), to: '/products/voice-agent' },
              { label: t('navbar.links.cbms', 'CBMS'), to: '/platform' },
              { label: t('navbar.links.hms', 'HMS'), to: '/platform' },
            ],
          },
        ],
      },
    },
    { key: 'insights', label: t('navbar.insights', 'Insights'), to: '/insights' },
    {
      key: 'company',
      label: t('navbar.company', 'Company'),
      mega: {
        featured: { title: t('navbar.lifeAtEncegen', 'Life at Encegen'), to: '/careers/why-encegen' },
        columns: [
          {
            heading: t('navbar.headings.whoWeAre', 'Who We Are'),
            links: [
              { label: t('navbar.links.aboutUs', 'About Us'), to: '/about' },
              { label: t('navbar.links.ourStory', 'Our Story'), to: '/our-story' },
            ],
          },
          {
            heading: t('navbar.headings.howWeWork', 'How We Work'),
            links: [
              { label: t('navbar.links.ourValues', 'Our Values'), to: '/values' },
              { label: t('navbar.links.ourCulture', 'Our Culture'), to: '/culture' },
            ],
          },
          {
            heading: t('navbar.headings.joinUs', 'Join Us'),
            links: [
              { label: t('navbar.links.careers', 'Careers'), to: '/careers' },
              { label: t('navbar.links.whyEncegen', 'Why Encegen'), to: '/careers/why-encegen' },
              { label: t('navbar.links.allOpenRoles', 'All open roles'), to: '/careers' },
            ],
          },
        ],
      },
    },
  ], [t])

  const handleLogoClick = (e: React.MouseEvent) => {
    clickCountRef.current += 1

    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current)
    }

    if (clickCountRef.current >= 3) {
      e.preventDefault()
      e.stopPropagation()
      clickCountRef.current = 0
      setShowAdminModal(true)
      return false
    }

    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0
    }, 1000)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setExpandedMobileMenu(null)
  }, [pathname])

  const toggleMobileAccordion = (key: string) => {
    setExpandedMobileMenu((prev) => (prev === key ? null : key))
  }

  const cls = ['navbar', scrolled ? 'navbar--scrolled' : 'navbar--top', 'notranslate'].join(' ')

  return (
    <header className={cls} translate="no">
      <AdminLoginModal isOpen={showAdminModal} onClose={() => setShowAdminModal(false)} />
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={handleLogoClick} title={t('navbar.tripleTapHint', 'Triple tap to open Admin Panel')}>
          <img src={logo} alt="Encegen AI Labs" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navItems.map((item) =>
            item.mega ? (
              <div key={item.key} className="navbar__group">
                <button className="navbar__link" type="button">
                  {item.label}
                  <ChevronDown size={16} className="navbar__chevron" />
                </button>
                <div className="navbar__mega">
                  <div className="container navbar__mega-inner">
                    <Link to={item.mega.featured.to} className="navbar__mega-card">
                      <span>{item.mega.featured.title}</span>
                      <span className="navbar__mega-arrow">
                        <ArrowRight size={16} />
                      </span>
                    </Link>
                    {item.mega.columns.map((col) => (
                      <div key={col.heading} className="navbar__mega-col">
                        <h4>{col.heading}</h4>
                        {col.links.map((link) => (
                          <Link key={link.label} to={link.to} className="navbar__mega-link">
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.key}
                to={item.to!}
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        {/* Right Actions */}
        <div className="navbar__actions">
          <Link to="/search" className="navbar__search desktop-only" aria-label={t('navbar.search', 'Search')}>
            <SearchIcon size={20} />
          </Link>

          {/* Desktop Language Selector Dropdown (Replaces Get Demo) */}
          <div className="desktop-only">
            <LanguageSelector />
          </div>

          {/* Hamburger / Cross Toggle Button */}
          <button
            type="button"
            className={`navbar__burger ${mobileOpen ? 'is-active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      <div className={`navbar__mobile-panel ${mobileOpen ? 'is-open' : ''}`}>
        <nav className="container navbar__mobile-inner" aria-label="Mobile navigation">
          
          {/* Mobile Search Input Bar */}
          <div className="navbar__mobile-search-wrap">
            <Link to="/search" className="navbar__mobile-search-btn" onClick={() => setMobileOpen(false)}>
              <SearchIcon size={18} />
              <span>{t('navbar.searchPlaceholder', 'Search products, solutions...')}</span>
            </Link>
          </div>

          {/* Nav Items */}
          {navItems.map((item) =>
            item.mega ? (
              <div key={item.key} className="navbar__mobile-group">
                <button
                  type="button"
                  className={`navbar__mobile-group-btn ${expandedMobileMenu === item.key ? 'is-expanded' : ''}`}
                  onClick={() => toggleMobileAccordion(item.key)}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={18} className="navbar__mobile-chevron" />
                </button>

                <div className={`navbar__mobile-accordion ${expandedMobileMenu === item.key ? 'is-open' : ''}`}>
                  <Link to={item.mega.featured.to} className="navbar__mobile-link navbar__mobile-link--featured">
                    🔥 {item.mega.featured.title}
                  </Link>

                  {item.mega.columns.map((col) => (
                    <div key={col.heading} className="navbar__mobile-subcol">
                      <span className="navbar__mobile-group-label">{col.heading}</span>
                      {col.links.map((link) => (
                        <Link key={link.label} to={link.to} className="navbar__mobile-link">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.key} to={item.to!} className="navbar__mobile-link navbar__mobile-link--top">
                {item.label}
              </Link>
            ),
          )}

          {/* Mobile Multilingual Language Selector (Replaces Get Demo) */}
          <div className="navbar__mobile-actions">
            <LanguageSelector isMobile onSelect={() => setMobileOpen(false)} />
          </div>

        </nav>
      </div>

      {/* Background Overlay */}
      <div
        className={`navbar__backdrop ${mobileOpen ? 'is-open' : ''}`}
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
      />
      <AdminLoginModal isOpen={showAdminModal} onClose={() => setShowAdminModal(false)} />
    </header>
  )
}