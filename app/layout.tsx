import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Habeeba Faiza — International Admissions Specialist',
  description: 'International Admissions Specialist with UK university recruitment expertise. British Council Certified, ABCC Germany Counsellor. 176+ applications managed, 48 offers issued. Open to remote, UAE, UK, and global roles.',
  keywords: ['International Admissions', 'UK University Recruitment', 'CAS Documentation', 'Student Recruitment', 'Higher Education', 'British Council Certified', 'Admissions Officer'],
  openGraph: {
    title: 'Habeeba Faiza — International Admissions Specialist',
    description: 'UK university recruitment specialist with 176+ applications managed. Open to remote, UAE, UK, and global EdTech roles.',
    type: 'website',
    url: 'https://habeeba-faiza.github.io',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habeeba Faiza — International Admissions Specialist',
    description: 'UK university recruitment specialist. British Council Certified. Open to remote & UAE roles.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  )
}
