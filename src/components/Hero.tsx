import { ArrowRight, PlaySquare } from './icons'
import './Hero.css'

const TRUST_BADGES = [
  { emoji: '🔒', label: 'SOC 2 Certified' },
  { emoji: '🌍', label: 'Global Scale' },
  { emoji: '⚡', label: 'Real-Time' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <span className="hero__badge">THE ENCEGEN PLATFORM</span>

        <h1 className="hero__title">
          One Platform to Run{' '}
          <span className="hero__title-accent">Every Business Process</span>
        </h1>

        <p className="hero__sub">
          Encegen connects your data, processes, and systems into a single
          intelligent layer &ndash; giving every team the clarity to act.
        </p>

        <div className="hero__ctas">
          <a href="#" className="hero__cta">
            Explore the platform <ArrowRight size={18} />
          </a>
          <a href="#" className="hero__cta">
            Watch a 3-min demo <PlaySquare size={20} />
          </a>
        </div>

        <div className="hero__badges">
          {TRUST_BADGES.map((badge) => (
            <span key={badge.label} className="hero__trust">
              <span aria-hidden="true">{badge.emoji}</span>
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
