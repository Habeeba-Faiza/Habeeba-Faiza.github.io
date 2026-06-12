'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { Container } from './ui/Section'

const stats = [
  { value: '176+', label: 'Applications Managed' },
  { value: '48', label: 'Offers Issued' },
  { value: '35+', label: 'University Portals' },
  { value: '5', label: 'Certifications' },
]

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-bg pt-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <Container>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 text-white/90 rounded-full text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                Open to Remote · UAE · UK · Global Roles
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Habeeba Faiza
            </h1>

            <p className="text-xl md:text-2xl text-white/80 font-medium mb-4">
              International Admissions Specialist
            </p>

            <p className="text-base md:text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              UK University Recruitment · CRM & Compliance Operations · British Council Certified
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Button variant="primary" size="lg" href="#contact">
                Let&apos;s Connect
              </Button>
              <a
                href="#portfolio"
                className="inline-flex items-center px-8 py-4 border-2 border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm px-6 py-8 text-center hover:bg-white/10 transition-colors">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
