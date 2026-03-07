'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Admission Officer',
      company: 'International Higher Education',
      period: 'Current Role',
      description: 'Lead student application review and admissions guidance for UK and international pathways, supporting applicants from profile evaluation to final submission.',
      highlights: [
        'Assessed and guided 100+ student applications across multiple intakes',
        'Contributed to a 95% application success rate through quality review',
        'Managed high-volume documentation and compliance checkpoints',
        'Used CRM systems to track student progress and decision timelines',
      ],
    },
    {
      title: 'Admissions Operations Specialist',
      company: 'International Education Services',
      period: 'Previous Experience',
      description: 'Supported admissions operations with a strong focus on documentation accuracy, eligibility checks, and application timeline management.',
      highlights: [
        'Standardized document verification and checklist procedures',
        'Improved processing efficiency by reducing application bottlenecks',
        'Coordinated student counseling touchpoints for better readiness',
        'Maintained consistency in communication with applicants and families',
      ],
    },
    {
      title: 'Student Counseling Support',
      company: 'Education Advisory Practice',
      period: 'Early Career',
      description: 'Provided student counseling and pathway planning support, helping applicants align academic background with suitable university options.',
      highlights: [
        'Supported students in shortlisting universities by fit and goals',
        'Assisted with statement preparation and documentation organization',
        'Promoted student-first counseling and clear expectation setting',
        'Built a reputation for reliable, detail-oriented admissions support',
      ],
    },
  ]

  return (
    <section id="experience" className="section-spacing gradient-subtle">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="badge mb-4">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Professional Journey & Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Progressive experience in international education, university admissions, and student guidance with a consistent focus on quality and outcomes.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-primary-200" />
              )}

              <div className="card-raised p-8 md:p-10">
                {/* Timeline dot */}
                <div className="absolute -left-6 top-8 w-12 h-12 bg-primary-600 rounded-full border-4 border-white flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>

                <div className="ml-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {experience.title}
                      </h3>
                      <p className="text-primary-600 font-semibold">{experience.company}</p>
                    </div>
                    <span className="text-sm font-semibold text-slate-500 px-3 py-1 bg-slate-100 rounded-full w-fit">
                      {experience.period}
                    </span>
                  </div>

                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <ul className="grid md:grid-cols-2 gap-4">
                    {experience.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-700"
                      >
                        <span className="text-primary-600 font-bold mt-0.5">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education / Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 card-raised p-8 md:p-10 bg-primary-50 border-2 border-primary-200"
        >
          <h3 className="text-2xl font-bold mb-6 text-primary-900">Professional Qualifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-primary-600 mb-2">Master of Business Administration</h4>
              <p className="text-slate-700 mb-2">Finance & Systems</p>
              <p className="text-sm text-slate-600">Professional foundation for operations and decision support</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-600 mb-2">Admissions Counseling Expertise</h4>
              <p className="text-slate-700 mb-2">International higher education pathways</p>
              <p className="text-sm text-slate-600">Student guidance, profile alignment, and application planning</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-600 mb-2">Documentation & Compliance</h4>
              <p className="text-slate-700 mb-2">UK admissions and visa documentation workflows</p>
              <p className="text-sm text-slate-600">Accuracy-first processes and checklist-based controls</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-600 mb-2">Professional Development</h4>
              <p className="text-slate-700 mb-2">CRM systems, data handling, and communication excellence</p>
              <p className="text-sm text-slate-600">Continuous upskilling aligned with changing admissions requirements</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
