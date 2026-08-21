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
        { label: t('navbar.links.resumeBuilder', 'Resume Builder'), to: '/products/resume-builder' },
        { label: t('navbar.links.resumeAnalyzer', 'Resume Analyzer'), to: '/products/resume-analyzer' },
        { label: t('navbar.links.voiceAgent', 'Voice Agent'), to: '/products/voice-agent' },
        { label: 'CBMS (Call Back Management System)', to: '/products/cbms' },
        { label: 'HMS (Hostel Management System)', to: '/products/hms' },
        { label: t('navbar.headings.platform', 'Encegen Platform'), to: '/platform' },
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
        { label: 'Company Profile', to: '/company/profile' },
        { label: t('navbar.links.ourStory', 'Our Story'), to: '/our-story' },
        { label: t('navbar.links.ourValues', 'Our Values'), to: '/values' },
        { label: t('navbar.links.ourCulture', 'Our Culture'), to: '/culture' },
        { label: t('navbar.links.careers', 'Careers'), to: '/careers' },
      ],
    },
  ], [t])

  const legalLinks = useMemo(() => [
    { label: t('footer.links.privacy', 'Privacy Policy'), to: '/privacy-policy' },
    { label: t('footer.links.terms', 'Terms of Use'), to: '/terms-and-conditions' },
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
            <div className="footer__offices" style={{ marginTop: 14, fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5 }}>
              <div style={{ marginBottom: 6 }}>
                <strong style={{ color: '#e2e8f0' }}>📍 Wagholi Office: </strong>
                <a
                  href="https://maps.app.goo.gl/TXjPKk6BFvho6c4R7"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#94a3b8', textDecoration: 'underline' }}
                >
                  BA HUB, Office no : 03, Sambhaji Nagar (Baif road), Near BA Varmont Society, Wagholi, Pune-412207
                </a>
              </div>
              <div>
                <strong style={{ color: '#e2e8f0' }}>📍 Pashan Office: </strong>
                <span>Legismith Partners LLP, Pashan, Pune</span>
              </div>
            </div>
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
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
