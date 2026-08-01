import { FiArrowRight, FiPlay } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="container hero-container">
        <span className="hero-badge">PROCESS INTELLIGENCE PLATFORM</span>
        <h1 className="hero-heading">
          Turn Every Process Into a Competitive Advantage
        </h1>
        <p className="hero-subtext">
          Encegen gives you the x-ray vision to see, fix, and optimize every
          business process — in real time, at global scale.
        </p>
        <div className="hero-actions">
          <a href="#" className="btn btn-solid">
            Start for free <FiArrowRight />
          </a>
          <a href="#" className="btn btn-outline">
            <FiPlay /> Watch demo
          </a>
        </div>
        <p className="hero-caption">5,000+ ENTERPRISE CUSTOMERS WORLDWIDE</p>

        <div className="hero-mockup">
          <div className="hero-mockup-glow" aria-hidden="true"></div>
          <div className="hero-mockup-frame">
            <div className="hero-mockup-topbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="hero-mockup-body">
              <div className="hero-mockup-panel hero-mockup-panel--tall"></div>
              <div className="hero-mockup-panel-group">
                <div className="hero-mockup-panel hero-mockup-panel--flow">
                  <div className="hero-flow-node"></div>
                  <div className="hero-flow-line"></div>
                  <div className="hero-flow-node"></div>
                  <div className="hero-flow-line"></div>
                  <div className="hero-flow-node"></div>
                </div>
                <div className="hero-mockup-panel-row">
                  <div className="hero-mockup-panel"></div>
                  <div className="hero-mockup-panel"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
