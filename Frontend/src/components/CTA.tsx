import { useTranslation } from 'react-i18next'
import './CTA.css'

export default function CTA() {
  const { t } = useTranslation()

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
          <a href="#" className="cta__button">
            {t('home.cta.btn1', 'Get started today')}
          </a>
          <a href="#" className="cta__button">
            {t('home.cta.btn2', 'Talk to an expert')}
          </a>
        </div>
      </div>
    </section>
  )
}
