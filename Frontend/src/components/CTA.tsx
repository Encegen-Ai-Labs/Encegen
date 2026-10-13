import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ContactModal from './ContactModal'
import './CTA.css'

export default function CTA() {
  const { t } = useTranslation()
  const [showContact, setShowContact] = useState(false)

  return (
    <section className="cta">
      <div className="cta__panel">
        <h2 className="cta__title">
          {t('home.cta.platformTitle', 'Ready to transform your operations?')}
        </h2>
        <p className="cta__sub">
          {t('home.cta.platformSub', 'Join 5,000+ enterprises running smarter with Encegen.')}
        </p>
        <div className="cta__buttons">
        
          <Link className="cta__button cta__button--secondary" to="/get-started">
            {t('home.cta.platformStartButton', 'Get started')}
          </Link>
        </div>
      </div>
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </section>
  )
}
