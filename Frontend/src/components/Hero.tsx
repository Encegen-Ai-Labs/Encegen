import { useTranslation } from 'react-i18next'
import { GlobeIcon, LockIcon, ZapIcon } from './icons'
import './Hero.css'

const TRUST_BADGES = [
  { icon: LockIcon, label: 'SOC 2 Certified' },
  { icon: GlobeIcon, label: 'Global Scale' },
  { icon: ZapIcon, label: 'Real-Time' },
]

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="container hero__inner">
        <span className="hero__badge">{t('home.heroBadge', 'THE ENCEGEN PLATFORM')}</span>

        <h1 className="hero__title">
          {t('home.platform.title', 'One platform. Every process. Unlimited potential.')}
        </h1>

        <p className="hero__sub">
          {t('home.platform.sub', 'Encegen connects your data, your processes, and your systems into one intelligent layer – so every team has the clarity to act.')}
        </p>

        <div className="hero__badges">
          {TRUST_BADGES.map((badge) => (
            <span key={badge.label} className="hero__trust">
              <badge.icon size={16} />
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
