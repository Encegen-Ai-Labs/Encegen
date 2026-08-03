import {
  FaDiagramProject,
  FaRobot,
  FaSackDollar,
  FaTruck,
  FaServer,
  FaIndustry,
} from 'react-icons/fa6';
import './BrowseByTopic.css';

const TOPICS = [
  { icon: FaDiagramProject, label: 'Process Mining' },
  { icon: FaRobot, label: 'AI & Automation' },
  { icon: FaSackDollar, label: 'Finance Ops' },
  { icon: FaTruck, label: 'Supply Chain' },
  { icon: FaServer, label: 'IT Operations' },
  { icon: FaIndustry, label: 'Manufacturing' },
];

export default function BrowseByTopic() {
  return (
    <section className="browse-topic-section">
      <div className="container">
        <span className="eyebrow">BROWSE BY TOPIC</span>
        <h2 className="section-heading browse-topic-heading">
          Find insights for your area
        </h2>

        <div className="browse-topic-pills">
          {TOPICS.map(({ icon: Icon, label }) => (
            <a href="#insights-grid" className="browse-topic-pill" key={label}>
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
