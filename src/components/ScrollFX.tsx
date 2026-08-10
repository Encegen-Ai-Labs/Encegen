import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Celonis-style scroll animations, applied globally:
 * - elements fade/slide up when scrolled into view, staggered within their grid
 * - stat numbers count up from zero the first time they become visible
 * Elements are tagged at route-change time so individual pages stay untouched.
 */

const REVEAL_SELECTORS = [
  '.shead',
  '.section .split > *',
  '.cards-2 > *',
  '.cards-3 > *',
  '.cards-4 > *',
  '.tgrid > *',
  '.stepflow__step',
  '.milestones > *',
  '.value-tiles > *',
  '.dcard-grid > *',
  '.pricing > *',
  '.tstat-row > *',
  '.stat-tiles > *',
  '.job-group',
  '.faq details',
  '.stack-grid > *',
  '.leaders > *',
  '.day-row',
  '.award-cards > *',
  '.city-cards > *',
  '.logo-wall > *',
  '.resultbar',
  '.rule-bar',
  '.quote-box',
  '.closing__inner',
  '.featured-card',
  '.console',
  '.careers-band',
  '.world-map',
  '.home-facts__card',
  '.home-stats__grid > div',
  '.gband__stat',
  '.stats__item',
  '.modules__card',
  '.security__card',
  '.security__badges',
  '.process__step-wrap',
  '.hiw__panel',
  '.integrations__pill',
  '.integrations__more',
  '.compare-col > *',
  '.proc-list',
  '.pill-tabs',
  '.topic-pills',
  '.newsletter h2',
  '.newsletter__form',
  '.jd-offer',
  '.apply-card',
]

const COUNTER_SELECTORS = [
  '.gband__stat strong',
  '.stats__value',
  '.home-stats__grid strong',
  '.tstat strong',
  '.stat-tile strong',
]

const REDUCED = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function staggerIndex(el: Element): number {
  const parent = el.parentElement
  if (!parent) return 0
  const idx = Array.prototype.indexOf.call(parent.children, el)
  return Math.max(0, idx)
}

function animateCount(el: HTMLElement) {
  const original = el.textContent ?? ''
  // skip ranges like "3-6 months" — counting the first number reads wrong
  if (/\d\s*-\s*\d/.test(original)) return
  const match = original.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/)
  if (!match) return

  const [, prefix, numText, suffix] = match
  const target = parseFloat(numText.replace(/,/g, ''))
  if (!isFinite(target)) return
  const decimals = (numText.split('.')[1] ?? '').length
  const useCommas = numText.includes(',')
  const duration = 1300
  const start = performance.now()

  const format = (v: number) => {
    let s = v.toFixed(decimals)
    if (useCommas) {
      const [int, dec] = s.split('.')
      s = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (dec ? `.${dec}` : '')
    }
    return prefix + s + suffix
  }

  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    el.textContent = format(target * eased)
    if (t < 1) requestAnimationFrame(tick)
    else el.textContent = original
  }
  requestAnimationFrame(tick)
}

export default function ScrollFX() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (REDUCED()) return

    const cleanups: (() => void)[] = []

    // Defer one frame so the new route's DOM is painted
    const raf = requestAnimationFrame(() => {
      /* --- reveal on scroll --- */
      const revealEls: HTMLElement[] = []
      for (const sel of REVEAL_SELECTORS) {
        document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
          if (el.dataset.fx) return
          el.dataset.fx = '1'
          el.classList.add('reveal')
          el.style.setProperty('--reveal-delay', `${Math.min(staggerIndex(el) % 12, 6) * 70}ms`)
          revealEls.push(el)
        })
      }

      const revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            const el = entry.target as HTMLElement
            el.classList.add('reveal--visible')
            revealObserver.unobserve(el)
            // return element to its normal stylesheet state once the intro is done
            window.setTimeout(() => {
              el.classList.remove('reveal', 'reveal--visible')
              el.style.removeProperty('--reveal-delay')
            }, 1400)
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      )
      revealEls.forEach((el) => revealObserver.observe(el))
      cleanups.push(() => revealObserver.disconnect())

      /* --- count-up stats --- */
      const counterEls: HTMLElement[] = []
      for (const sel of COUNTER_SELECTORS) {
        document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
          if (el.dataset.fxCount) return
          el.dataset.fxCount = '1'
          counterEls.push(el)
        })
      }
      const counterObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            counterObserver.unobserve(entry.target)
            animateCount(entry.target as HTMLElement)
          }
        },
        { threshold: 0.4 },
      )
      counterEls.forEach((el) => counterObserver.observe(el))
      cleanups.push(() => counterObserver.disconnect())
    })

    return () => {
      cancelAnimationFrame(raf)
      cleanups.forEach((fn) => fn())
    }
  }, [pathname])

  return null
}
