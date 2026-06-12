'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'

const experiences = [
  {
    title: 'Admission Officer',
    organization: 'AHZ Associates · ConnectedHE · MH Global Group',
    location: 'Kochi, Kerala (Hybrid)',
    period: 'Jul 2025 – Jul 2026',
    description: 'End-to-end UK university admissions operations across 35+ partner portals, managing 176+ applications and 109+ applicants across intake cycles for 200+ partner universities.',
    achievements: [
      'Managed a live pipeline of 109+ applicants and 176+ applications across 2025–2026 intake cycles using ConnectedHE CRM',
      'Achieved 48 conditional/unconditional offers issued and 16 confirmed enrolments within a single intake cycle',
      'Operated 35+ UK university portals daily: CAS-Shield, Ellucian CRM Recruit, Flywire, Student-CRM, UKVI immigration portal, OnCampus Global, and IAPRO',
      'Conducted structured Monday portal offer checks and Tuesday payment chase calls across 15+ partner agents with CRM logging',
      'Performed pre-submission compliance reviews — verifying passports, transcripts, SOPs, proof of funds, gap justifications against UK student-route visa requirements',
      'Scheduled and coordinated Pre-CAS credibility and mock interviews; managed student communication and outcome tracking',
      'Maintained structured Google Sheets workflows: CHE Tier-1 shortlisting, entry requirements, offer chase, and payment affiliate tracking',
      'Participated in daily ConnectedHE Cluster Morning Meetings with Operations Heads, Relationship Managers, and Compliance Specialists',
    ],
    skills: ['CAS-Shield', 'Ellucian CRM', 'Flywire', 'UKVI Portal', 'Student-CRM', 'UK Compliance', 'Pre-CAS Coordination'],
    highlight: '48 offers · 16 enrolments · 35+ portals',
  },
  {
    title: 'Finance Intern',
    organization: 'Royal Printers',
    location: 'Thanjavur, Tamil Nadu (Hybrid)',
    period: 'Nov 2024 – Dec 2024',
    description: 'Supported finance and administrative operations using ERP tools including Zoho Books and QuickBooks.',
    achievements: [
      'Assisted financial analysis by evaluating revenue streams and cost structures',
      'Supported budgeting, forecasting, and financial reporting processes',
      'Managed accounts receivable/payable and cash flow monitoring',
      'Gained hands-on proficiency with Zoho Books and QuickBooks for financial tracking',
    ],
    skills: ['Zoho Books', 'QuickBooks', 'Financial Analysis', 'Budgeting'],
    highlight: '2-month finance operations exposure',
  },
]

const deliveryAreas = [
  'Application Review & Eligibility Assessment',
  'CAS & Visa Documentation Compliance',
  'CRM Pipeline Management',
  'Pre-CAS & Mock Interview Coordination',
  'Partner Agent & University Liaison',
  'Student Counselling & Pre-visa Guidance',
  'Admissions Reporting & KPI Tracking',
  'Process Improvement & SOP Design',
]

export const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-neutral-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Professional Experience"
            subtitle="A track record of compliance excellence, CRM precision, and student-centred admissions"
          />

          <div className="space-y-10 mb-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-primary-600"
              >
                <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-2 ring-4 ring-white" />

                <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-1">{exp.title}</h3>
                      <div className="text-primary-600 font-semibold mb-1">{exp.organization}</div>
                      <div className="text-sm text-neutral-500">{exp.location}</div>
                    </div>
                    <div className="mt-3 md:mt-0 flex flex-col items-start md:items-end gap-2">
                      <span className="px-4 py-1.5 bg-primary-600 text-white rounded-lg text-sm font-semibold">
                        {exp.period}
                      </span>
                      <span className="px-3 py-1 bg-gold-50 text-gold-500 border border-gold-400/30 rounded-lg text-xs font-semibold">
                        {exp.highlight}
                      </span>
                    </div>
                  </div>

                  <p className="text-neutral-600 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Key Achievements</h4>
                    <ul className="space-y-2.5">
                      {exp.achievements.map((a, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
                          <span className="text-neutral-700 text-sm leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary-50 text-primary-700 border border-primary-100 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 to-primary-900 text-white rounded-2xl p-10"
          >
            <h3 className="text-xl font-bold mb-6 text-white/90">Core Delivery Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {deliveryAreas.map((resp, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                  <span className="text-sm text-white/80">{resp}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
