import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { GlobeIcon, ChevronDown, CheckIcon } from './icons'
import { translateWholePage } from '../utils/translator'
import './LanguageSelector.css'

export interface LanguageOption {
  code: string
  label: string
  nativeName: string
  fullName: string
  flag: string
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeName: 'English', fullName: 'English', flag: '🇺🇸' },
  { code: 'fr', label: 'French', nativeName: 'Français', fullName: 'Français (French)', flag: '🇫🇷' },
  { code: 'de', label: 'German', nativeName: 'Deutsch', fullName: 'Deutsch (German)', flag: '🇩🇪' },
  { code: 'es', label: 'Spanish', nativeName: 'Español', fullName: 'Español (Spanish)', flag: '🇪🇸' },
  { code: 'it', label: 'Italian', nativeName: 'Italiano', fullName: 'Italiano (Italian)', flag: '🇮🇹' },
]

interface LanguageSelectorProps {
  isMobile?: boolean
  onSelect?: () => void
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isMobile = false, onSelect }) => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Normalize language (e.g. 'en-US' -> 'en')
  const currentCode = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0]
  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === currentCode) || SUPPORTED_LANGUAGES[0]

  const handleLanguageChange = (code: string) => {
    translateWholePage(code)
    setIsOpen(false)
    if (onSelect) {
      onSelect()
    }
  }

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div
      className={`lang-selector notranslate ${isMobile ? 'lang-selector--mobile' : ''} ${isOpen ? 'is-active' : ''}`}
      translate="no"
      ref={dropdownRef}
    >
      <button
        type="button"
        className="lang-selector__button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select Language"
        title="Select Language"
      >
        <span className="lang-selector__globe">
          <GlobeIcon size={16} />
        </span>
        <span className="lang-selector__current-name">
          <span className="lang-selector__flag">{currentLang.flag}</span>
          <span className="lang-selector__text">{currentLang.nativeName}</span>
        </span>
        <ChevronDown
          size={14}
          className={`lang-selector__chevron ${isOpen ? 'lang-selector__chevron--open' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="lang-selector__dropdown" role="listbox">
          <div className="lang-selector__header">
            <span>Select Language</span>
          </div>
          <div className="lang-selector__list">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLang.code
              return (
                <button
                  key={lang.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`lang-selector__item ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  <span className="lang-selector__item-flag">{lang.flag}</span>
                  <div className="lang-selector__item-info">
                    <span className="lang-selector__item-fullname">{lang.fullName}</span>
                  </div>
                  {isSelected && (
                    <span className="lang-selector__item-check">
                      <CheckIcon size={14} />
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
