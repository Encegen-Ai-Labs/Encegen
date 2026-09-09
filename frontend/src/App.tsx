import { useEffect, useLayoutEffect } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollFX from './components/ScrollFX'
import Home from './pages/Home'
import Platform from './pages/Platform'
import AiAgents from './pages/solutions/AiAgents'
import AiResearch from './pages/solutions/AiResearch'
import CustomSoftware from './pages/solutions/CustomSoftware'
import DigitalMarketing from './pages/solutions/DigitalMarketing'
import WebEcommerce from './pages/solutions/WebEcommerce'
import UseCases from './pages/solutions/UseCases'
import EasyHunt from './pages/products/EasyHunt'
import HrPortal from './pages/products/HrPortal'
import ResumeBuilder from './pages/products/ResumeBuilder'
import ResumeAnalyzer from './pages/products/ResumeAnalyzer'
import VoiceAgent from './pages/products/VoiceAgent'
import HMS from './pages/products/HMS'
import CBMS from './pages/products/CBMS'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import Terms from './pages/legal/Terms'
import About from './pages/company/About'
import CompanyProfile from './pages/company/CompanyProfile'
import OurStory from './pages/company/OurStory'
import Values from './pages/company/Values'
import Culture from './pages/company/Culture'
import Careers from './pages/careers/Careers'
import JobDetail from './pages/careers/JobDetail'
import WhyEncegen from './pages/careers/WhyEncegen'
import Insights from './pages/Insights'
import Resources from './pages/Resources'
import SearchPage from './pages/SearchPage'
import AdminDashboard from './pages/admin/AdminDashboard'

import { initPageLanguage } from './utils/translator'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useLayoutEffect(() => {
    initPageLanguage()
    if (hash) {
      const id = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
      }, 120)
      return () => window.clearTimeout(id)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}


function GlobalEffects() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    // Prevent magnetic effect on mobile devices
    if (window.matchMedia('(max-width: 768px)').matches) return

    let rafId: number
    
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        // 2. Spotlight Cards
        const cards = document.querySelectorAll<HTMLElement>('.fcard, .feature-card, .team-card, .dcard, .principle, .day-row__card')
        for(const card of cards) {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          card.style.setProperty('--mouse-x', `${x}px`)
          card.style.setProperty('--mouse-y', `${y}px`)
          if (!card.classList.contains('card-spotlight')) {
            card.classList.add('card-spotlight')
          }
        }
        
        // 5. Magnetic Buttons
        const btns = document.querySelectorAll<HTMLElement>('.btn--primary, .btn--magnetic')
        for(const btn of btns) {
          const rect = btn.getBoundingClientRect()
          const cx = rect.left + rect.width / 2
          const cy = rect.top + rect.height / 2
          const distance = Math.hypot(e.clientX - cx, e.clientY - cy)
          
          if (distance < 120) { // Trigger distance
            const dx = (e.clientX - cx) * 0.25 // magnetic strength
            const dy = (e.clientY - cy) * 0.25
            btn.style.transform = `translate(${dx}px, ${dy}px)`
          } else {
            btn.style.transform = `translate(0px, 0px)`
          }
        }
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [pathname])
  
  return null
}

function Layout() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <ScrollFX />
      <GlobalEffects />
      <Navbar />
      <main>
        <div key={location.pathname} className="page-transition-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions/ai-agents" element={<AiAgents />} />
          <Route path="/solutions/ai-research" element={<AiResearch />} />
          <Route path="/solutions/custom-software" element={<CustomSoftware />} />
          <Route path="/solutions/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/solutions/web-ecommerce" element={<WebEcommerce />} />
          <Route path="/solutions/use-cases" element={<UseCases />} />
          <Route path="/products/easy-hunt" element={<EasyHunt />} />
          <Route path="/products/hr-portal" element={<HrPortal />} />
          <Route path="/products/resume-builder" element={<ResumeBuilder />} />
          <Route path="/products/resume-analyzer" element={<ResumeAnalyzer />} />
          <Route path="/products/voice-agent" element={<VoiceAgent />} />
          <Route path="/products/hms" element={<HMS />} />
          <Route path="/hms" element={<HMS />} />
          <Route path="/products/cbms" element={<CBMS />} />
          <Route path="/cbms" element={<CBMS />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/company/profile" element={<CompanyProfile />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/values" element={<Values />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/why-encegen" element={<WhyEncegen />} />
          <Route path="/careers/:slug" element={<JobDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
