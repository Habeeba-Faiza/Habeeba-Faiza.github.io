import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Achievements from '@/components/sections/Achievements'
import Experience from '@/components/sections/Experience'
import Expertise from '@/components/sections/Expertise'
import ThoughtLeadership from '@/components/sections/ThoughtLeadership'
import Portfolio from '@/components/sections/Portfolio'
import Contact from '@/components/sections/Contact'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Achievements />
      <Experience />
      <Expertise />
      <ThoughtLeadership />
      <Portfolio />
      <CTA />
      <Contact />
    </main>
  )
}
