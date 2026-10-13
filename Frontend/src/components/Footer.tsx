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
      heading: t('footer.headings.solutions', 'Solutions'),
      links: [
        { label: t('footer.links.aiAgents', 'AI Agents & Automation'), to: '/solutions/ai-agents' },
        { label: t('footer.links.aiResearch', 'AI Research Solutions'), to: '/solutions/ai-research' },
        { label: t('footer.links.customSoftware', 'Custom Software Dev'), to: '/solutions/custom-software' },
        { label: t('footer.links.digitalMarketing', 'Digital Marketing & Growth'), to: '/solutions/digital-marketing' },
        { label: t('footer.links.webEcommerce', 'Website & Ecommerce Dev'), to: '/solutions/web-ecommerce' },
        { label: t('footer.links.useCases', 'Use Cases & Industries'), to: '/solutions/use-cases' },
      ],
    },
    {
      heading: t('footer.headings.products', 'Products'),
      links: [
        { label: t('footer.links.easyHunt', 'Easy Hunt'), to: '/products/easy-hunt' },
        { label: t('footer.links.hrPortal', 'HR Portal'), to: '/products/hr-portal' },
        { label: t('footer.links.cbms', 'CBMS'), to: '/products/cbms' },
        { label: t('footer.links.hms', 'HMS'), to: '/products/hms' },
      ],
    },
    {
      heading: t('footer.headings.resources', 'Resources'),
      links: [
        { label: t('footer.links.insights', 'Insights'), to: '/insights' },
        { label: t('footer.links.caseStudies', 'Case Studies'), to: '/insights' },
        { label: t('footer.links.knowledgeHub', 'Knowledge Hub'), to: '/resources' },
        { label: t('footer.links.researchPapers', 'Research Papers'), to: '/resources' },
        { label: t('footer.links.documentation', 'Documentation'), to: '/resources' },
      ],
    },
    {
      heading: t('footer.headings.company', 'Company'),
      links: [
        { label: t('footer.links.aboutUs', 'About Us'), to: '/about' },
        { label: t('footer.links.careers', 'Careers'), to: '/careers' },
        { label: t('footer.links.ourValues', 'Our Values'), to: '/values' },
        { label: t('footer.links.ourCulture', 'Our Culture'), to: '/culture' },
      ],
    },
  ], [t])

  const legalLinks = useMemo(() => [
    { label: t('footer.links.privacy', 'Privacy Policy'), to: '/privacy-policy' },
    { label: t('footer.links.terms', 'Terms of Use'), to: '/terms-and-conditions' },
    { label: t('footer.links.cookies', 'Cookie Settings'), to: '/privacy-policy#cookies' },
  ], [t])

  return (
    <footer className="footer notranslate" translate="no">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Encegen AI Labs">
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
          <div className="footer__bottom-left">
            <span className="footer__copyright">
              {t('footer.copyright', '© 2025 Encegen SE. All rights reserved.')}
            </span>
            <div className="footer__socials">
              <a href="https://www.linkedin.com/company/encegen-ai-labs-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon size={17} />
              </a>
              <a href="https://x.com/EncegenAi" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <XIcon size={17} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon size={18} />
              </a>
            </div>
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
