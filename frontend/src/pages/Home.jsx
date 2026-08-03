import Hero from '../components/Hero/Hero'
import LogoStrip from '../components/LogoStrip/LogoStrip'
import About from '../components/About/About'
import Capabilities from '../components/Capabilities/Capabilities'
import Platform from '../components/Platform/Platform'
import Industries from '../components/Industries/Industries'
import StatsBar from '../components/StatsBar/StatsBar'
import Testimonials from '../components/Testimonials/Testimonials'
import Resources from '../components/Resources/Resources'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <About />
      <Capabilities />
      <Platform />
      <Industries />
      <StatsBar />
      <Testimonials />
      <Resources />
    </>
  )
}
