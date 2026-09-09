import i18n from '../config/i18n'

function setTranslateCookie(langCode: string) {
  const cookieValue = langCode === 'en' ? '' : `/en/${langCode}`
  const domain = window.location.hostname
  const expires =
    langCode === 'en'
      ? 'Thu, 01 Jan 1970 00:00:00 GMT'
      : new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()

  document.cookie = `googtrans=${cookieValue}; expires=${expires}; path=/;`
  document.cookie = `googtrans=${cookieValue}; expires=${expires}; path=/; domain=${domain};`

  const domainParts = domain.split('.')
  if (domainParts.length > 2) {
    const rootDomain = domainParts.slice(-2).join('.')
    document.cookie = `googtrans=${cookieValue}; expires=${expires}; path=/; domain=.${rootDomain};`
  }
}

export function translateWholePage(langCode: string) {
  // 1. Immediately update i18n
  i18n.changeLanguage(langCode)
  localStorage.setItem('encegen_lang', langCode)
  document.documentElement.lang = langCode

  // 2. Set Cookie
  setTranslateCookie(langCode)

  // 3. Immediately trigger Google Translate Select Element in real-time
  const triggerCombo = (): boolean => {
    const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo')
    if (combo) {
      if (langCode === 'en') {
        combo.value = ''
        if (combo.selectedIndex !== 0) {
          combo.selectedIndex = 0
        }
      } else {
        combo.value = langCode
      }

      // Dispatch standard change event
      combo.dispatchEvent(new Event('change', { bubbles: true }))

      // Call onchange handler directly if attached by Google script
      if (typeof (combo as any).onchange === 'function') {
        try {
          ;(combo as any).onchange()
        } catch {
          // ignore
        }
      }
      return true
    }
    return false
  }

  // Attempt instant trigger, retry briefly until Google script mounts the combo
  if (!triggerCombo()) {
    let attempts = 0
    const interval = setInterval(() => {
      attempts++
      if (triggerCombo() || attempts > 30) {
        clearInterval(interval)
      }
    }, 50)
  }
}

export function initPageLanguage() {
  const savedLang = localStorage.getItem('encegen_lang') || 'en'
  if (savedLang !== 'en') {
    translateWholePage(savedLang)
  }
}
