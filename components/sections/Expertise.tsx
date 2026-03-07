'use client'

import { motion } from 'framer-motion'

const Expertise = () => {
  const expertiseAreas = [
    {
      category: 'Admissions Assessment',
      skills: [
        'Student profile evaluation',
        'Academic strength positioning',
        'Interview preparation',
        'Personal statement development',
      ],
    },
    {
      category: 'Documentation & Compliance',
      skills: [
        'Application document review',
        'Visa documentation support',
        'Regulatory compliance',
        'British Council standards',
      ],
    },
    {
      category: 'University Operations',
      skills: [
        'CRM database management',
        'Applicant workflow tracking',
        'Data analytics & reporting',
        'Process optimization',
      ],
    },
    {
      category: 'Student Guidance',
      skills: [
        'Career path counseling',
        'University selection strategy',
        'International pathways',
        'Scholarship navigation',
      ],
    },
    {
      category: 'Strategic Planning',
      skills: [
        'Competitive positioning',
        'Timeline management',
        'Risk mitigation',
        'Contingency planning',
      ],
    },
    {
      category: 'Technology & Tools',
      skills: [
        'CRM platforms',
        'Data analytics tools',
        'Document management',
        'Student engagement platforms',
      ],
    },
  ]

  return (
    <section className="section-spacing">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="badge mb-4">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Specialized Knowledge & Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Deep expertise across all aspects of international university admissions, from initial assessment to enrollment and beyond.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card-raised p-8"
            >
              <h3 className="text-lg font-bold text-primary-600 mb-6">
                {area.category}
              </h3>
              <ul className="space-y-3">
                {area.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary-600" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Services Offered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-primary-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold mb-12 text-primary-900">
            Comprehensive Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-semibold mb-3 text-primary-600">
                University Selection
              </h4>
              <p className="text-slate-700">
                Strategic assessment of university fit based on academic profile, career goals, location preferences, and scholarship opportunities. Data-driven university ranking based on your profile.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">📝</div>
              <h4 className="text-xl font-semibold mb-3 text-primary-600">
                Application Strategy
              </h4>
              <p className="text-slate-700">
                End-to-end application management including essay editing, document preparation, interview coaching, and timeline management across multiple universities.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-semibold mb-3 text-primary-600">
                International Support
              </h4>
              <p className="text-slate-700">
                Visa documentation guidance, international pathway counseling, accommodation support, and post-enrollment transition assistance for smooth settling.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Expertise
