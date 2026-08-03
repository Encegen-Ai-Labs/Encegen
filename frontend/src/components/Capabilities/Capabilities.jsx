import { FiActivity, FiCpu, FiZap } from 'react-icons/fi';
import './Capabilities.css';

const CAPABILITIES = [
  {
    icon: FiActivity,
    title: 'Real-Time Process Mining',
    description:
      'Discover and visualize every process variant as it actually runs, not how you think it runs.',
  },
  {
    icon: FiCpu,
    title: 'AI-Powered Recommendations',
    description:
      'Surface the highest-value improvement opportunities across your entire operation.',
  },
  {
    icon: FiZap,
    title: 'Execution Engine',
    description:
      'Automate fixes and embed intelligence directly into SAP, Salesforce, and ServiceNow.',
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities-section">
      <div className="container">
        <div className="capabilities-header">
          <span className="eyebrow">CAPABILITIES</span>
          <h2 className="section-heading capabilities-heading">
            Everything you need to achieve process excellence
          </h2>
        </div>

        <div className="capabilities-grid">
          {CAPABILITIES.map(({ icon: Icon, title, description }) => (
            <div className="capability-card" key={title}>
              <div className="capability-accent" aria-hidden="true"></div>
              <div className="capability-icon">
                <Icon size={22} />
              </div>
              <h3 className="capability-title">{title}</h3>
              <p className="capability-description">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
