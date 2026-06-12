'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'

const expertiseAreas = [
  {
    category: 'Admissions Management',
    icon: '📋',
    skills: [
      'International application screening & triage',
      'Eligibility assessment against entry requirements',
      'Document verification and readiness checks',
      'Offer tracking and conversion support',
      'Conditional offer requirement management',
      'Entry criteria interpretation across 200+ institutions',
    ],
  },
  {
    category: 'Compliance & Documentation',
    icon: '🔒',
    skills: [
      'UK student-route visa documentation standards',
      'CAS documentation readiness and validation',
      'Proof of funds, SOP, and transcript review',
      'ATAS, same-name affidavit, and gap justification checks',
      'Data protection and confidentiality practice',
      'Pre-submission quality assurance checkpoints',
    ],
  },
  {
    category: 'CRM & Portal Operations',
    icon: '💻',
    skills: [
      'ConnectedHE CRM and Student-CRM daily operations',
      'Ellucian CRM Recruit and CAS-Shield',
      'Flywire payment processing and verification',
      'UKVI immigration portal compliance checks',
      'OnCampus Global and IAPRO portal management',
      'Pipeline reporting and KPI visibility',
    ],
  },
  {
    category: 'Student Counselling',
    icon: '🎓',
    skills: [
      'Programme and university fit guidance',
      'Application planning and submission strategy',
      'Pre-CAS credibility interview preparation',
      'Pre-visa documentation orientation',
      'Cross-cultural applicant communication',
      'Decision and timeline expectation management',
    ],
  },
  {
    category: 'Operational Excellence',
    icon: '⚙️',
    skills: [
      'Intake workflow design and process mapping',
      'Google Sheets-based tracking and reporting',
      'Monday portal checks and Tuesday payment chases',
      'Cluster morning meetings and cross-team coordination',
      'Agent training and onboarding support',
      'Early-bird bursary and conversion campaign management',
    ],
  },
  {
    category: 'International Destinations',
    icon: '🌍',
    skills: [
      'UK higher education admissions ecosystem',
      'Germany counselling (ABCC certified)',
      'UK student-route visa regulations',
      'International qualification pathway alignment',
      '200+ UK university partner network knowledge',
      'Expanding: Canada SDS, Australia CoE/GTE',
    ],
  },
]

const techStack = [
  { name: 'ConnectedHE CRM', category: 'CRM' },
  { name: 'CAS-Shield', category: 'UK Portals' },
  { name: 'Ellucian CRM Recruit', category: 'CRM' },
  { name: 'Flywire', category: 'Payments' },
  { name: 'Student-CRM', category: 'CRM' },
  { name: 'UKVI Portal', category: 'Compliance' },
  { name: 'OnCampus Global', category: 'UK Portals' },
  { name: 'IAPRO', category: 'UK Portals' },
  { name: 'SAP', category: 'ERP' },
  { name: 'Zoho Books', category: 'Finance' },
  { name: 'QuickBooks', category: 'Finance' },
  { name: 'Power BI', category: 'Analytics' },
  { name: 'Excel (Advanced)', category: 'Analytics' },
  { name: 'Google Workspace', category: 'Productivity' },
  { name: 'Microsoft Office', category: 'Productivity' },
  { name: 'SPSS', category: 'Research' },
]

export const Expertise: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <Section id="expertise" className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Expertise & Skills"
            subtitle="Core capabilities across UK admissions operations, CRM systems, compliance, and student guidance"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-7 border cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-primary-600 bg-primary-50 shadow-lg'
                    : 'border-neutral-200 bg-neutral-50 hover:border-primary-300 hover:shadow-md'
                }`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{area.icon}</span>
                  <h3 className={`text-base font-bold transition-colors ${activeIndex === index ? 'text-primary-700' : 'text-neutral-900'}`}>
                    {area.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {area.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${activeIndex === index ? 'bg-primary-600' : 'bg-neutral-400'}`} />
                      <span className="text-sm text-neutral-700 leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-neutral-900 rounded-2xl p-10"
          >
            <h3 className="text-lg font-bold text-white mb-2">Technical Proficiencies</h3>
            <p className="text-neutral-400 text-sm mb-7">CRM systems, university portals, and finance/analytics tools used in live admissions operations</p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <div key={index} className="group flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/10 rounded-xl hover:bg-white/15 hover:border-white/20 transition-all duration-200">
                  <span className="text-white text-sm font-medium">{tech.name}</span>
                  <span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">{tech.category}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
