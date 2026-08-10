import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { ArrowRight, ChevronDown, SearchIcon } from './icons'
import './Navbar.css'

/* Routes whose hero/banner is light — the transparent header shows dark text there */
const LIGHT_HERO_PATHS = ['/careers', '/search']

type MegaColumn = {
  heading: string
  links: { label: string; to: string }[]
}

type NavItem = {
  label: string
  to?: string
  mega?: {
    featured: { title: string; to: string }
    columns: MegaColumn[]
  }
}

const NAV: NavItem[] = [
  {
    label: 'Solutions',
    mega: {
      featured: { title: 'Success stories', to: '/insights' },
      columns: [
        {
          heading: 'By Transformation',
          links: [
            { label: 'AI Agents & Automation', to: '/solutions/ai-agents' },
            { label: 'AI Research Solutions', to: '/solutions/ai-research' },
            { label: 'Custom Software Dev', to: '/solutions/custom-software' },
            { label: 'All transformations', to: '/solutions/use-cases' },
          ],
        },
        {
          heading: 'By Function',
          links: [
            { label: 'Digital Marketing & Growth', to: '/solutions/digital-marketing' },
            { label: 'Website & Ecommerce Dev', to: '/solutions/web-ecommerce' },
            { label: 'Process Excellence', to: '/platform' },
            { label: 'All functions', to: '/solutions/use-cases' },
          ],
        },
        {
          heading: 'By Industry',
          links: [
            { label: 'Manufacturing', to: '/solutions/use-cases' },
            { label: 'Financial Services', to: '/solutions/use-cases' },
            { label: 'Healthcare', to: '/solutions/use-cases' },
            { label: 'All industries', to: '/solutions/use-cases' },
          ],
        },
      ],
    },
  },
  { label: 'Resources', to: '/resources' },
  {
    label: 'Products',
    mega: {
      featured: { title: 'The Encegen Platform', to: '/platform' },
      columns: [
        {
          heading: 'Platform',
          links: [
            { label: 'Process Mining', to: '/platform' },
            { label: 'Execution Management', to: '/platform' },
            { label: 'AI Insights', to: '/platform' },
            { label: 'Explore the platform', to: '/platform' },
          ],
        },
        {
          heading: 'Products',
          links: [
            { label: 'Easy Hunt', to: '/products/easy-hunt' },
            { label: 'HR Portal', to: '/products/hr-portal' },
            { label: 'CBMS', to: '/platform' },
            { label: 'HMS', to: '/platform' },
          ],
        },
      ],
    },
  },
  { label: 'Insights', to: '/insights' },
  {
    label: 'Company',
    mega: {
      featured: { title: 'Life at Encegen', to: '/careers/why-encegen' },
      columns: [
        {
          heading: 'Who We Are',
          links: [
            { label: 'About Us', to: '/about' },
            { label: 'Our Story', to: '/our-story' },
          ],
        },
        {
          heading: 'How We Work',
          links: [
            { label: 'Our Values', to: '/values' },
            { label: 'Our Culture', to: '/culture' },
          ],
        },
        {
          heading: 'Join Us',
          links: [
            { label: 'Careers', to: '/careers' },
            { label: 'Why Encegen', to: '/careers/why-encegen' },
            { label: 'All open roles', to: '/careers' },
          ],
        },
      ],
    },
  },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const onDark = !scrolled && !LIGHT_HERO_PATHS.includes(pathname)
  const cls = [
    'navbar',
    scrolled ? 'navbar--scrolled' : 'navbar--top',
    onDark ? 'navbar--on-dark' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={cls}>
      <div className="container navbar__inner">
        <Logo variant={onDark ? 'light' : 'dark'} />

        <nav className="navbar__links" aria-label="Main navigation">
          {NAV.map((item) =>
            item.mega ? (
              <div key={item.label} className="navbar__group">
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
                key={item.label}
                to={item.to!}
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="navbar__actions">
          <Link to="/search" className="navbar__search" aria-label="Search">
            <SearchIcon size={20} />
          </Link>
          <a href="#" className="navbar__demo">
            Get a demo
          </a>
          <button
            type="button"
            className="navbar__burger"
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

      <div className={`navbar__mobile-panel ${mobileOpen ? 'is-open' : ''}`}>
        <nav className="container navbar__mobile-inner" aria-label="Mobile navigation">
          {NAV.map((item) =>
            item.mega ? (
              <div key={item.label}>
                <span className="navbar__mobile-group-label">{item.label}</span>
                <Link to={item.mega.featured.to} className="navbar__mobile-link">
                  {item.mega.featured.title}
                </Link>
                {item.mega.columns.flatMap((col) => col.links).map((link) => (
                  <Link key={link.label} to={link.to} className="navbar__mobile-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.label} to={item.to!} className="navbar__mobile-link">
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>

      <div className="navbar__backdrop" aria-hidden="true" />
    </header>
  )
}
