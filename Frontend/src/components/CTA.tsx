import { useState } from 'react'
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
          {t('home.cta.title', 'Ready to see what Encegen can do for your business?')}
        </h2>
        <p className="cta__sub">
          {t('home.cta.sub', 'Join thousands of enterprises driving measurable value from every process.')}
        </p>
        <div className="cta__buttons">
          <button type="button" className="cta__button" onClick={() => setShowContact(true)}>
            {t('home.cta.btn2', 'Talk to an expert')}
          </button>
        </div>
      </div>
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </section>
  )
}
