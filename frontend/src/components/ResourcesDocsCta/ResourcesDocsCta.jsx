import { FiCheck, FiArrowRight } from 'react-icons/fi';
import './ResourcesDocsCta.css';

export default function ResourcesDocsCta() {
  const features = [
    'Getting Started',
    'API Reference',
    'SDK & Developer Tools',
    'Security & Compliance'
  ];

  return (
    <section className="docs-cta-section">
      <div className="container docs-cta-container">
        {/* Left Side: Content */}
        <div className="docs-cta-content">
          <span className="eyebrow">DOCUMENTATION</span>
          <h2 className="docs-cta-heading">Everything you need to<br/>build on Encegen.</h2>
          <p className="docs-cta-subtext">
            Get your team up and running with our comprehensive developer guides and API references.
          </p>
          
          <ul className="docs-cta-list">
            {features.map((feature, idx) => (
              <li key={idx}>
                <div className="docs-check-circle">
                  <FiCheck size={14} strokeWidth={3} />
                </div>
                {feature}
              </li>
            ))}
          </ul>

          <button className="btn docs-btn">
            Browse docs <FiArrowRight size={16} />
          </button>
        </div>

        {/* Right Side: Code Block UI */}
        <div className="docs-cta-visual">
          <div className="code-window">
            <div className="code-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            {/* Switched to a standard div with explicit line breaks to bypass global code styles */}
            <div className="code-body">
              <span className="keyword">const</span> encegen = <span className="keyword">new</span> <span className="class-name">Encegen</span>({'{'}<br/>
              &nbsp;&nbsp;apiKey: <span className="string">'process_Intelligence_2026'</span>,<br/>
              &nbsp;&nbsp;environment: <span className="string">'production'</span><br/>
              {'}'});<br/>
              <br/>
              <span className="keyword">await</span> encegen.mining.<span className="function">start</span>({'{'}<br/>
              &nbsp;&nbsp;source: <span className="string">'SAP_ERP'</span>,<br/>
              &nbsp;&nbsp;autoOptimize: <span className="keyword">true</span><br/>
              {'}'});
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}