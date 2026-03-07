import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Achievements } from '@/components/Achievements'
import { Experience } from '@/components/Experience'
import { Expertise } from '@/components/Expertise'
import { ThoughtLeadership } from '@/components/ThoughtLeadership'
import { Portfolio } from '@/components/Portfolio'
import { Contact, Footer } from '@/components/Contact'

export default function Home() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Habeeba Faiza',
    jobTitle: 'International Education & Admissions Specialist',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Thanjavur',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    email: 'mailto:faaizaofficial27@gmail.com',
    sameAs: ['https://www.linkedin.com/in/habeeba-faiza'],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Sathyabama Institute of Science & Technology',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Bharathidasan University',
      },
    ],
    knowsAbout: [
      'International admissions',
      'UK university admissions',
      'Education consulting',
      'Student recruitment',
      'Admissions operations',
      'CRM admissions management',
    ],
    url: 'https://habeeba-faiza.github.io',
  }

  return (
    <main id="main-content" className="relative" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      <Experience />
      <Expertise />
      <ThoughtLeadership />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
