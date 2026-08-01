import { FiArrowRight } from 'react-icons/fi';
import {
  FaIndustry,
  FaLandmark,
  FaCartShopping,
  FaHeartPulse,
  FaBoltLightning,
  FaCar,
} from 'react-icons/fa6';
import './Industries.css';

const INDUSTRIES = [
  {
    icon: FaIndustry,
    title: 'Manufacturing',
    description: 'Optimize production cycles and supply chain resilience.',
  },
  {
    icon: FaLandmark,
    title: 'Financial Services',
    description: 'Streamline risk management and order-to-cash workflows.',
  },
  {
    icon: FaCartShopping,
    title: 'Retail',
    description: 'Enhance inventory turnover and omnichannel experiences.',
  },
  {
    icon: FaHeartPulse,
    title: 'Healthcare',
    description: 'Improve patient throughput and billing accuracy.',
  },
  {
    icon: FaBoltLightning,
    title: 'Utilities',
    description: 'Manage grid operations and customer service processes.',
  },
  {
    icon: FaCar,
    title: 'Automotive',
    description: 'Accelerate time-to-market for next-gen vehicle production.',
  },
];

export default function Industries() {
  return (
    <section className="industries-section">
      <div className="container">
        <div className="industries-header">
          <span className="eyebrow">SOLUTIONS FOR EVERY INDUSTRY</span>
          <h2 className="section-heading industries-heading">
            Your Industry. Your Processes. <span className="highlight">Our Platform.</span>
          </h2>
          <p className="section-subtext">
            From finance to manufacturing, Encegen is deployed across 70+
            industries to deliver measurable, real-world results.
          </p>
        </div>

        <div className="industries-grid">
          {INDUSTRIES.map(({ icon: Icon, title, description }) => (
            <div className="industry-card" key={title}>
              <div className="industry-icon">
                <Icon size={20} />
              </div>
              <h3 className="industry-title">{title}</h3>
              <p className="industry-description">{description}</p>
              <a href="#" className="industry-link">
                Explore solution <FiArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="industries-cta-row">
          <a href="#" className="btn btn-outline-light industries-cta">
            See all 70+ industry solutions <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
