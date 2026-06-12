'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from './ui/Section'

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white/80 rounded-full text-sm">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              Available for remote, hybrid & relocation opportunities
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>

          <p className="text-lg text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Open to international admissions, student recruitment, and EdTech operations roles across UAE, UK, Europe, and globally remote organisations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://www.linkedin.com/in/habeeba-faiza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-neutral-900 rounded-xl font-semibold hover:bg-neutral-100 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
            <a
              href="mailto:faaizaofficial27@gmail.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an Email
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
            <div className="text-center">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Location</h3>
              <p className="text-neutral-400 text-sm">Thanjavur, India<br /><span className="text-neutral-500 text-xs">Open to relocation</span></p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Availability</h3>
              <p className="text-neutral-400 text-sm">Immediately available<br /><span className="text-neutral-500 text-xs">Remote · Hybrid · Relocation</span></p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Response Time</h3>
              <p className="text-neutral-400 text-sm">Within 24 hours<br /><span className="text-neutral-500 text-xs">LinkedIn preferred</span></p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-500 py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm font-medium text-neutral-400">Habeeba Faiza</p>
            <p className="text-xs text-neutral-600 mt-0.5">International Admissions Specialist · British Council Certified</p>
          </div>
          <p className="text-xs">© 2026 Habeeba Faiza. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="https://www.linkedin.com/in/habeeba-faiza" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:faaizaofficial27@gmail.com" className="hover:text-white transition-colors">
              Email
            </a>
            <a href="https://habeeba-faiza.github.io/" className="hover:text-white transition-colors">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
