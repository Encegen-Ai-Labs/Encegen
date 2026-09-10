import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from '../locales/en/translations.json'
import fr from '../locales/fr/translations.json'
import de from '../locales/de/translations.json'
import es from '../locales/es/translations.json'
import it from '../locales/it/translations.json'

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de },
  es: { translation: es },
  it: { translation: it },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'de', 'es', 'it'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'encegen_lang',
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  })

// Ensure initial html lang is synchronized
if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language || 'en'
  i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng
  })
}

export default i18n
