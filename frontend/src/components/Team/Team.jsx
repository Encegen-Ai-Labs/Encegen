import useScrollReveal from '../../hooks/useScrollReveal';
import './Team.css';

const TEAM = [
  {
    initials: 'AR',
    name: 'Alex Rivera',
    role: 'CEO & CO-FOUNDER',
    description: 'Built and scaled AI-first products for Fortune 500 operations.',
  },
  {
    initials: 'PN',
    name: 'Priya Nair',
    role: 'CTO',
    description: 'Architected enterprise AI platforms with reliability and explainability.',
  },
  {
    initials: 'MB',
    name: 'Marcus Böhm',
    role: 'CHIEF AI OFFICER',
    description: 'Led AI research and deployment across finance and operations.',
  },
  {
    initials: 'SC',
    name: 'Sophia Chen',
    role: 'CHIEF REVENUE OFFICER',
    description: 'Scaled go-to-market for AI-first enterprise software.',
  },
];

const RULE_AVATARS = ['AR', 'PN', 'MB', 'SC', 'JD'];

export default function Team() {
  const [ref, visible] = useScrollReveal();

  return (
    <section ref={ref} className={`team-section reveal ${visible ? 'is-visible' : ''}`}>
      <div className="container">
        <div className="team-header">
          <span className="eyebrow">CHAPTER 04</span>
          <h2 className="section-heading team-heading">
            Built by people who've sat in your seat.
          </h2>
          <p className="section-subtext team-subtext">
            Our team comes from the operations, finance, and technology
            floors of the companies we serve. We know what bad data costs.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-avatar">{member.initials}</div>
              <h3 className="team-name">{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="team-rule-bar">
        <div className="container team-rule-container">
          <p className="team-rule-text">
            We have one rule at Encegen: if you wouldn't bet your own career
            on it, we don't ship it.
          </p>
          <div className="team-rule-avatars">
            {RULE_AVATARS.map((initials, i) => (
              <span
                className="team-rule-avatar"
                key={`${initials}-${i}`}
                style={{ zIndex: RULE_AVATARS.length - i }}
              >
                {initials}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
