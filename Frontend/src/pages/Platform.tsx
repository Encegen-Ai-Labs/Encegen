import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Modules from '../components/Modules'
import ProcessMiningSection from '../components/ProcessMiningSection'
import ExecutionManagementSection from '../components/ExecutionManagementSection'
import AIInsightsSection from '../components/AIInsightsSection'
import ExplorePlatformSection from '../components/ExplorePlatformSection'
import Process from '../components/Process'
import Integrations from '../components/Integrations'
import StatsBar from '../components/StatsBar'
import Security from '../components/Security'
import CTA from '../components/CTA'

export default function Platform() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Modules />
      <ProcessMiningSection />
      <ExecutionManagementSection />
      <AIInsightsSection />
      <ExplorePlatformSection />
      <Process />
      <Integrations />
      <StatsBar />
      <Security />
      <CTA />
    </>
  )
}
