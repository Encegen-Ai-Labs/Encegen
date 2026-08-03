import { FiArrowRight, FiPlay } from 'react-icons/fi';
import hero1 from "../../assets/hero1.png";
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-glow"></div>
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

        <div className="hero-image">
  <img src={hero1} alt="Encegen AI Platform" />
</div>
      </div>
    </section>
  );
}
