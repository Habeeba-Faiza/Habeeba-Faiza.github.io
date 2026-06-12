'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'

const values = [
  'Compliance-first approach in every application',
  'Precision in documentation and eligibility review',
  'Continuous workflow and process optimisation',
  'Culturally aware, student-centred communication',
]

const metrics = [
  { value: '176+', label: 'Applications Managed', sub: '2025–2026 intake cycles' },
  { value: '48', label: 'Offers Issued', sub: 'Conditional & unconditional' },
  { value: '35+', label: 'University Portals', sub: 'Daily operation' },
  { value: '5', label: 'Certifications', sub: 'British Council, ABCC & more' },
]

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="About Me"
            subtitle="International Admissions Specialist with deep UK university recruitment expertise"
          />

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6">
              <p className="text-lg text-neutral-700 leading-relaxed">
                I am an <strong className="text-neutral-900">International Admissions Specialist</strong> with hands-on experience managing the full UK university admissions lifecycle — from eligibility assessment and document compliance through to offer conversion and pre-visa coordination.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                At <strong className="text-neutral-900">ConnectedHE / AHZ Associates</strong>, I operated 35+ UK university portals daily — including CAS-Shield, Ellucian, Flywire, Student-CRM, and the UKVI immigration portal — managing 109+ applicants and 176+ applications across 2025–2026 intake cycles.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                I hold a <strong className="text-neutral-900">British Council UK Agent & Counsellor Certification</strong>, an <strong className="text-neutral-900">ABCC Germany Counsellor Certification</strong> via ApplyBoard, and an <strong className="text-neutral-900">MBA in Finance & Systems Management</strong> (CGPA 8.0).
              </p>

              <div className="pt-2">
                <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-3">Mission</p>
                  <p className="text-white leading-relaxed">
                    To bring precision, compliance, and genuine care to international admissions — helping students find their path and institutions build stronger intake pipelines.
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">Core Values</p>
                {values.map((v, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-4 h-4 rounded-full bg-gold-400 flex-shrink-0 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-neutral-700 text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover:border-primary-200 hover:bg-primary-50 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-1">{m.value}</div>
                  <div className="text-sm font-semibold text-neutral-900 mb-1">{m.label}</div>
                  <div className="text-xs text-neutral-500">{m.sub}</div>
                </motion.div>
              ))}

              <div className="col-span-2 bg-neutral-900 rounded-xl p-6 mt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Currently Seeking</p>
                <div className="flex flex-wrap gap-2">
                  {['Remote / WFH', 'UAE', 'UK', 'Europe', 'Global EdTech'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-white/60 text-sm mt-3">
                  International Admissions · Student Recruitment Operations · EdTech
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
