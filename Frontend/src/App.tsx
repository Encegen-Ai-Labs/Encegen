import { useEffect } from 'react'
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
import About from './pages/company/About'
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
  useEffect(() => {
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

function Layout() {
  return (
    <>
      <ScrollToTop />
      <ScrollFX />
      <Navbar />
      <main>
        <Outlet />
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
          <Route path="/about" element={<About />} />
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
