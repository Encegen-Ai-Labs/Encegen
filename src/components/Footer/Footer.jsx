import { FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import logoImg from '../../assets/encegen_logo.png';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Content Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo">
              <img src={logoImg} alt="Encegen Logo" className="footer-logo-img" />
              
            </a>
            <p className="footer-description">
              AI-powered solutions for the modern enterprise. Transforming businesses with intelligent automation and research.
            </p>
          </div>

          {/* Solutions Column */}
          <div className="footer-links-col">
            <h3 className="footer-title">Solutions</h3>
            <ul className="footer-links">
              <li><a href="#ai-agents">AI Agents & Automation</a></li>
              <li><a href="#ai-research">AI Research Solutions</a></li>
              <li><a href="#custom-dev">Custom Software Dev</a></li>
              <li><a href="#marketing">Digital Marketing & Growth</a></li>
              <li><a href="#ecommerce">Website & Ecommerce Dev</a></li>
              <li><a href="#use-cases">Use Cases & Industries</a></li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="footer-links-col">
            <h3 className="footer-title">Products</h3>
            <ul className="footer-links">
              <li><a href="#easy-hunt">Easy Hunt</a></li>
              <li><a href="#hr-portal">HR Portal</a></li>
              <li><a href="#cbms">CBMS</a></li>
              <li><a href="#hms">HMS</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-links-col">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              <li><a href="#insights">Insights</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#knowledge-hub">Knowledge Hub</a></li>
              <li><a href="#research-papers">Research Papers</a></li>
              <li><a href="#documentation">Documentation</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-links-col">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#values">Our Values</a></li>
              <li><a href="#culture">Our Culture</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="footer-copy">
              &copy; {currentYear} Encegen SE. All rights reserved.
            </span>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="X (Twitter)">
                <FaXTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}