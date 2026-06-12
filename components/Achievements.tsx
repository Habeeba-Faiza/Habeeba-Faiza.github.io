'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'

const metrics = [
  {
    value: '176+',
    label: 'Applications Managed',
    description: 'Live pipeline of 176+ applications across UK university intake cycles, tracked from enquiry through enrolment using ConnectedHE CRM',
    icon: '📂',
  },
  {
    value: '48',
    label: 'Offers Issued',
    description: 'Conditional and unconditional offers secured for students across 35+ UK university partners within a single intake cycle',
    icon: '🎓',
  },
  {
    value: '16',
    label: 'Enrolments Confirmed',
    description: 'Successful end-to-end student journeys completed from initial enquiry through CAS issuance and enrolment confirmation',
    icon: '✅',
  },
  {
    value: '35+',
    label: 'University Portals Operated',
    description: 'Daily operation of 35+ UK university CRM and admissions portals including CAS-Shield, Ellucian, Flywire, and UKVI immigration portal',
    icon: '🔗',
  },
  {
    value: '5',
    label: 'Professional Certifications',
    description: 'British Council UK Agent, ABCC Germany Counsellor (ApplyBoard), TCS iON Master Data Management, Google Digital Marketing, LinkedIn Learning',
    icon: '🏅',
  },
  {
    value: '150+',
    label: 'Research Respondents',
    description: 'Primary research conducted with 150+ respondents for MBA venture project, delivering 30% MVP engagement improvement',
    icon: '📊',
  },
]

const impacts = [
  {
    title: 'Live Pipeline Management',
    description: 'Operated a real-time student pipeline of 109+ applicants and 176+ applications, with structured Monday portal checks and Tuesday payment chase workflows.',
    badge: '176+ applications tracked',
    color: 'border-primary-600 bg-primary-50',
    badgeColor: 'bg-primary-600 text-white',
  },
  {
    title: 'Compliance & Documentation Excellence',
    description: 'Built a compliance-first review approach verifying passports, transcripts, SOPs, proof of funds, and gap justifications against UK student-route visa standards.',
    badge: 'Pre-submission compliance on every file',
    color: 'border-gold-400 bg-gold-50',
    badgeColor: 'bg-gold-400 text-white',
  },
  {
    title: 'Multi-Portal CRM Operations',
    description: 'Maintained daily CRM logs, invoice records, TT copies, and status updates across CAS-Shield, Student-CRM, Flywire, and 35+ university portals.',
    badge: '35+ portals operated daily',
    color: 'border-primary-600 bg-primary-50',
    badgeColor: 'bg-primary-600 text-white',
  },
  {
    title: 'Research & Leadership Impact',
    description: 'MBA project market research with 150+ respondents delivered 30% MVP engagement improvement and 25% forecast accuracy gain. Led 40-member event team with 200+ participants.',
    badge: '30% engagement lift',
    color: 'border-gold-400 bg-gold-50',
    badgeColor: 'bg-gold-400 text-white',
  },
]

export const Achievements: React.FC = () => {
  return (
    <Section id="achievements" className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Key Achievements"
            subtitle="Measurable impact across UK university admissions and international student recruitment"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {metrics.map((m, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-neutral-50 border border-neutral-200 rounded-2xl p-7 hover:border-primary-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-3xl mb-4">{m.icon}</div>
                <div className="text-4xl font-bold text-primary-600 mb-2 group-hover:text-primary-700 transition-colors">{m.value}</div>
                <div className="text-base font-semibold text-neutral-900 mb-3">{m.label}</div>
                <p className="text-sm text-neutral-600 leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-neutral-900 mb-8">Impact Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {impacts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`border-l-4 rounded-xl p-7 ${item.color} hover:shadow-md transition-shadow duration-300`}
              >
                <h4 className="text-lg font-semibold text-neutral-900 mb-3">{item.title}</h4>
                <p className="text-neutral-700 text-sm mb-4 leading-relaxed">{item.description}</p>
                <span className={`inline-flex items-center px-4 py-1.5 rounded-lg text-xs font-semibold ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
