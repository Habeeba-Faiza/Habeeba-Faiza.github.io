'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'

const projects = [
  {
    title: 'International Admissions Intake Coordination',
    category: 'Admissions Operations',
    description: 'Coordinated end-to-end application flow across each intake cycle, balancing profile tracking, follow-ups, and submission readiness.',
    impact: [
      'Managed 40+ student/client profiles per intake',
      'Improved intake visibility through structured follow-up checkpoints',
      'Supported smoother handoffs between counseling, documentation, and submissions',
      'Contributed to stronger offer-conversion support through workflow consistency'
    ],
    metrics: '40+ profiles per intake',
    technologies: ['CRM Tracking', 'Follow-up Scheduling', 'Workflow Coordination'],
  },
  {
    title: 'Documentation Compliance and Eligibility Review',
    category: 'Compliance & Quality',
    description: 'Built a compliance-first review approach for eligibility checks and documentation verification before application progression.',
    impact: [
      'Performed eligibility checks and document verification per profile',
      'Reduced avoidable delays through pre-submission compliance review',
      'Improved consistency of documentation readiness across cases',
      'Supported policy-aligned submissions for partner universities'
    ],
    metrics: 'Compliance review integrated into each intake workflow',
    technologies: ['Eligibility Screening', 'Documentation Control', 'Quality Checks'],
  },
  {
    title: 'Pre-CAS and Mock Interview Coordination',
    category: 'Student Experience',
    description: 'Organized credibility interview schedules and communication workflows to support student readiness and timely participation.',
    impact: [
      'Scheduled and coordinated Pre-CAS and mock interviews',
      'Improved student readiness through structured reminders and follow-ups',
      'Aligned communication between students, counselors, and internal teams',
      'Supported smoother interview execution within intake timelines'
    ],
    metrics: 'Interview coordination built into standard admissions workflow',
    technologies: ['Calendar Coordination', 'Stakeholder Communication', 'Student Support'],
  },
  {
    title: 'CRM Record and Financial Document Control',
    category: 'Data & Administration',
    description: 'Maintained operational records, CRM status updates, invoices, and TT copies for clear tracking and traceable submissions.',
    impact: [
      'Kept detailed logs and CRM records updated throughout application stages',
      'Improved transparency of student status across internal stakeholders',
      'Supported timely submission with complete financial and admin records',
      'Strengthened documentation traceability for internal reviews'
    ],
    metrics: 'Ongoing record management across active intake cases',
    technologies: ['CRM Systems', 'Record Management', 'Financial Documentation'],
  },
  {
    title: 'Entrepreneur Startup Planning and Venture Creation',
    category: 'Academic Project',
    description: 'Developed a structured venture-planning framework during MBA, combining market research and practical model design.',
    impact: [
      'Created a 20+ section business planning framework',
      'Improved project clarity by 40%',
      'Conducted market research with 150+ respondents',
      'Improved MVP engagement by 30%'
    ],
    metrics: 'MBA project | Mar 2024 - May 2024',
    technologies: ['Market Research', 'Business Modeling', 'Data Analysis'],
  },
  {
    title: 'Campus Event Operations Leadership',
    category: 'Leadership Project',
    description: 'Led student operations for college cultural events, managing team coordination, participation planning, and execution support.',
    impact: [
      'Led a 40-member organizing team',
      'Coordinated events with 200+ participants',
      'Improved participation by 25% through structured engagement efforts',
      'Strengthened cross-team planning and communication'
    ],
    metrics: '40-member team | 200+ participants',
    technologies: ['Team Coordination', 'Event Planning', 'Stakeholder Communication'],
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
            subtitle="Real projects across admissions coordination, documentation quality, and operational execution"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white rounded-lg text-xs font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-3">
                    Key Impact
                  </h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-primary-600 mr-2 mt-1 flex-shrink-0">✓</span>
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-semibold">
                    {project.metrics}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white border border-neutral-300 text-neutral-700 rounded-full text-xs"
                    >
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
