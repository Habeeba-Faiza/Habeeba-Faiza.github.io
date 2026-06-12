'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'

const projects = [
  {
    title: 'UK Admissions Pipeline Management',
    category: 'Admissions Operations',
    categoryColor: 'bg-primary-600 text-white',
    description: 'End-to-end management of 176+ student applications across 2025–2026 intake cycles using ConnectedHE CRM, structured follow-up workflows, and daily portal checks.',
    impact: [
      '109+ applicants managed across concurrent intake cycles',
      '48 offers issued and 16 enrolments confirmed',
      'Structured Monday portal checks and Tuesday payment chase workflows',
      'Real-time CRM visibility across all active applications',
    ],
    metrics: '176+ applications · 48 offers · 16 enrolments',
    technologies: ['ConnectedHE CRM', 'Student-CRM', 'Ellucian', 'Pipeline Tracking'],
  },
  {
    title: 'Multi-Portal University Operations',
    category: 'CRM & Technology',
    categoryColor: 'bg-neutral-800 text-white',
    description: 'Daily operation of 35+ UK university and compliance portals — CAS-Shield, Flywire, UKVI, OnCampus Global, IAPRO — for offer monitoring, payment processing, and visa compliance.',
    impact: [
      '35+ portals operated daily across 200+ partner universities',
      'Offer checks, payment chasing, and CAS status tracked per cycle',
      'UKVI immigration portal used for visa compliance verification',
      'Flywire payment processing for tuition deposit confirmation',
    ],
    metrics: '35+ portals · 200+ university partners',
    technologies: ['CAS-Shield', 'Flywire', 'UKVI Portal', 'OnCampus Global', 'IAPRO'],
  },
  {
    title: 'Pre-CAS Compliance & Document Review',
    category: 'Compliance & Quality',
    categoryColor: 'bg-gold-400 text-white',
    description: 'Compliance-first pre-submission review workflow covering eligibility checks, document verification, and UKVI standard validation before every application submission.',
    impact: [
      'Verified passports, transcripts, SOPs, proof of funds, and gap justifications',
      'Checked same-name affidavits, English proficiency certificates, and ATAS where required',
      'Reduced avoidable delays through structured pre-submission compliance review',
      'Maintained consistent documentation readiness across all intake cases',
    ],
    metrics: 'Compliance review on every profile',
    technologies: ['Eligibility Screening', 'UKVI Standards', 'Document Control', 'Quality Assurance'],
  },
  {
    title: 'Pre-CAS & Mock Interview Coordination',
    category: 'Student Experience',
    categoryColor: 'bg-primary-600 text-white',
    description: 'Organised credibility interview schedules and communication workflows to support student readiness and timely participation across intake cycles.',
    impact: [
      'Scheduled Pre-CAS credibility interviews and mock interviews per intake',
      'Managed student reminders, confirmation tracking, and outcome logging',
      'Aligned communication across students, counsellors, and internal teams',
      'Integrated interview coordination into standard admissions workflow',
    ],
    metrics: 'Interview coordination across all intake cycles',
    technologies: ['Calendar Coordination', 'WhatsApp Communication', 'Student Support', 'CRM Logging'],
  },
  {
    title: 'ERP Financial Management Research',
    category: 'Academic Project',
    categoryColor: 'bg-neutral-600 text-white',
    description: 'In-depth MBA research project on ERP system impact on financial management, conducted in collaboration with Exela Technologies, Thanjavur.',
    impact: [
      'Reviewed 40+ academic research papers on ERP financial systems',
      'Collected primary data through structured questionnaires from ERP professionals',
      'Analysed SAP, Zoho Books, and QuickBooks for financial optimisation',
      'Produced full research report with data analysis, charts, and recommendations',
    ],
    metrics: 'MBA project · 40+ papers reviewed · Mar–May 2025',
    technologies: ['SAP', 'Zoho Books', 'QuickBooks', 'SPSS', 'Research Design'],
  },
  {
    title: 'Startup Venture Planning & MVP Research',
    category: 'Business Project',
    categoryColor: 'bg-neutral-600 text-white',
    description: 'Comprehensive startup planning framework developed during MBA, combining primary market research with structured business modelling and MVP testing.',
    impact: [
      'Developed a 20+ section startup planning framework from scratch',
      '150+ customer interviews and surveys conducted for market validation',
      '30% improvement in MVP engagement through insight-driven positioning',
      '25% improvement in forecast accuracy through structured research',
    ],
    metrics: 'MBA project · 150+ respondents · 30% engagement lift',
    technologies: ['Market Research', 'Business Modelling', 'MVP Design', 'Data Analysis'],
  },
]

export const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Professional Portfolio"
            subtitle="Real work across admissions operations, CRM management, compliance, and academic research"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 card-hover"
              >
                <div className="mb-5">
                  <span className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-3 ${project.categoryColor}`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900">{project.title}</h3>
                </div>

                <p className="text-neutral-600 text-sm mb-5 leading-relaxed">{project.description}</p>

                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Key Impact</h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5">
                  <span className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-xs font-semibold border border-primary-100">
                    {project.metrics}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-neutral-200 text-neutral-600 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
