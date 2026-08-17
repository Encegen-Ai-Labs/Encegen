import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/footerlogo.png'
import { LinkedInIcon, XIcon, YoutubeIcon } from './icons'
import './Footer.css'

export default function Footer() {
  const { t } = useTranslation()

  const columns = useMemo(() => [
    {
      heading: t('navbar.solutions', 'Solutions'),
      links: [
        { label: t('navbar.links.aiAgents', 'AI Agents & Automation'), to: '/solutions/ai-agents' },
        { label: t('navbar.links.aiResearch', 'AI Research Solutions'), to: '/solutions/ai-research' },
        { label: t('navbar.links.customSoftware', 'Custom Software Dev'), to: '/solutions/custom-software' },
        { label: t('navbar.links.digitalMarketing', 'Digital Marketing & Growth'), to: '/solutions/digital-marketing' },
        { label: t('navbar.links.webEcommerce', 'Website & Ecommerce Dev'), to: '/solutions/web-ecommerce' },
        { label: t('navbar.links.allTransformations', 'Use Cases & Industries'), to: '/solutions/use-cases' },
      ],
    },
    {
      heading: t('navbar.products', 'Products'),
      links: [
        { label: t('navbar.links.easyHunt', 'Easy Hunt'), to: '/products/easy-hunt' },
        { label: t('navbar.links.hrPortal', 'HR Portal'), to: '/products/hr-portal' },
        { label: t('navbar.links.cbms', 'CBMS'), to: '/platform' },
        { label: t('navbar.links.hms', 'HMS'), to: '/platform' },
      ],
    },
    {
      heading: t('navbar.resources', 'Resources'),
      links: [
        { label: t('navbar.insights', 'Insights'), to: '/insights' },
        { label: t('navbar.featuredStories', 'Case Studies'), to: '/insights' },
        { label: t('navbar.resources', 'Knowledge Hub'), to: '/resources' },
        { label: t('navbar.links.aiResearch', 'Research Papers'), to: '/resources' },
        { label: t('navbar.links.explorePlatformLink', 'Documentation'), to: '/resources' },
      ],
    },
    {
      heading: t('navbar.company', 'Company'),
      links: [
        { label: t('navbar.links.aboutUs', 'About Us'), to: '/about' },
        { label: t('navbar.links.careers', 'Careers'), to: '/careers' },
        { label: t('navbar.links.ourValues', 'Our Values'), to: '/values' },
        { label: t('navbar.links.ourCulture', 'Our Culture'), to: '/culture' },
      ],
    },
  ], [t])

  const legalLinks = useMemo(() => [
    { label: t('footer.links.privacy', 'Privacy Policy'), href: '#' },
    { label: t('footer.links.terms', 'Terms of Use'), href: '#' },
    { label: t('footer.links.cookies', 'Cookie Settings'), href: '#' },
  ], [t])

  return (
    <footer className="footer notranslate" translate="no">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="navbar__logo">
              <img src={logo} alt="Encegen AI Labs" />
            </Link>
            <p>
              {t('footer.tagline', 'AI-powered solutions for the modern enterprise. Transforming businesses with intelligent automation and research.')}
            </p>
          </div>

          <div className="footer__columns">
            {columns.map((column) => (
              <div key={column.heading} className="footer__column">
                <h4>{column.heading}</h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            {t('footer.copyright', '© 2026 Encegen AI Labs Inc. All rights reserved.')}
          </span>
          <div className="footer__socials">
            <a href="#" aria-label="LinkedIn">
              <LinkedInIcon size={19} />
            </a>
            <a href="#" aria-label="X (Twitter)">
              <XIcon size={19} />
            </a>
            <a href="#" aria-label="YouTube">
              <YoutubeIcon size={21} />
            </a>
          </div>
          <div className="footer__legal">
            {legalLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
