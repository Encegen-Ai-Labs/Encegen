import { Link } from 'react-router-dom'
import logo from '../assets/footerlogo.png'
import { LinkedInIcon, XIcon, YoutubeIcon } from './icons'
import './Footer.css'

const COLUMNS = [
  {
    heading: 'Solutions',
    links: [
      { label: 'AI Agents & Automation', to: '/solutions/ai-agents' },
      { label: 'AI Research Solutions', to: '/solutions/ai-research' },
      { label: 'Custom Software Dev', to: '/solutions/custom-software' },
      { label: 'Digital Marketing & Growth', to: '/solutions/digital-marketing' },
      { label: 'Website & Ecommerce Dev', to: '/solutions/web-ecommerce' },
      { label: 'Use Cases & Industries', to: '/solutions/use-cases' },
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
  {
    heading: 'Resources',
    links: [
      { label: 'Insights', to: '/insights' },
      { label: 'Case Studies', to: '/insights' },
      { label: 'Knowledge Hub', to: '/resources' },
      { label: 'Research Papers', to: '/resources' },
      { label: 'Documentation', to: '/resources' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Our Values', to: '/values' },
      { label: 'Our Culture', to: '/culture' },
    ],
  },
]

const LEGAL_LINKS = ['Privacy Policy', 'Terms of Use', 'Cookie Settings']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
                       <Link to="/" className="navbar__logo">
              <img src={logo} alt="Encegen AI Labs" />
            </Link>
            <p>
              AI-powered solutions for the modern enterprise. Transforming
              businesses with intelligent automation and research.
            </p>
          </div>

          <div className="footer__columns">
            {COLUMNS.map((column) => (
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
            &copy; 2025 Encegen SE. All rights reserved.
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
            {LEGAL_LINKS.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
