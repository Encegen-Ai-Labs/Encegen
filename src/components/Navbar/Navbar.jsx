import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSearch, FiChevronDown } from 'react-icons/fi';
import logoImg from '../../assets/encegen_logo.png';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <img src={logoImg} alt="Encegen Logo" className="logo-img" />
         
        </a>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          <div className="nav-dropdown">
            <a href="#solutions" className="nav-item">
              Solutions <FiChevronDown className="chevron-icon" />
            </a>
          </div>
          <a href="#resources" className="nav-item">Resources</a>
          <div className="nav-dropdown">
            <a href="#products" className="nav-item">
              Products <FiChevronDown className="chevron-icon" />
            </a>
          </div>
          <a href="#insights" className="nav-item">Insights</a>
          <div className="nav-dropdown">
            <a href="#company" className="nav-item">
              Company <FiChevronDown className="chevron-icon" />
            </a>
          </div>
        </div>

        {/* Search & Desktop CTA */}
        <div className="navbar-actions">
          <button className="search-btn" aria-label="Search">
            <FiSearch size={18} />
          </button>
          <a href="#demo" className="cta-button">Get a demo</a>
        </div>

        {/* Mobile Toggle Icon */}
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-links">
          <a href="#solutions" className="mobile-nav-item" onClick={toggleMenu}>Solutions</a>
          <a href="#resources" className="mobile-nav-item" onClick={toggleMenu}>Resources</a>
          <a href="#products" className="mobile-nav-item" onClick={toggleMenu}>Products</a>
          <a href="#insights" className="mobile-nav-item" onClick={toggleMenu}>Insights</a>
          <a href="#company" className="mobile-nav-item" onClick={toggleMenu}>Company</a>
          <a href="#demo" className="mobile-cta-button" onClick={toggleMenu}>Get a demo</a>
        </div>
      </div>
    </nav>
  );
}