import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Habeeba Faiza | International Admissions & Education Specialist',
  description: 'Premium personal branding website showcasing expertise in UK university admissions, international education, and student counseling. 100+ students successfully guided through elite institutions.',
  keywords: ['admissions officer', 'university admissions', 'international education', 'UK universities', 'student guidance', 'educational consultant'],
  openGraph: {
    type: 'website',
    url: 'https://habeeba-faiza.github.io/',
    title: 'Habeeba Faiza | International Admissions Specialist',
    description: 'Expert guidance for UK university admissions and international education pathways',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="bg-white text-slate-900">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
