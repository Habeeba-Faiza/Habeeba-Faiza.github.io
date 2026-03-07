'use client'

import { motion } from 'framer-motion'

const About = () => {
  const highlights = [
    {
      icon: '🎓',
      title: 'MBA Finance & Systems',
      subtitle: 'Advanced qualification in educational management',
    },
    {
      icon: '🌍',
      title: 'Global Admissions Perspective',
      subtitle: 'Experience supporting diverse student backgrounds and goals',
    },
    {
      icon: '⭐',
      title: 'Outcome-Focused Guidance',
      subtitle: 'Structured counseling with clear milestones and accountability',
    },
    {
      icon: '📊',
      title: 'Data-Driven Approach',
      subtitle: 'CRM analytics and success metrics tracking',
    },
  ]

  return (
    <section id="about" className="section-spacing">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="badge mb-4">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Bridging Dreams & Elite Education
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            I combine admissions strategy, documentation quality, and personalized counseling to help students present their strongest applications for international university opportunities.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-raised p-6"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-2">{highlight.title}</h3>
              <p className="text-sm text-slate-600">{highlight.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-primary-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-8 text-slate-900">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-primary-600 mb-4">Assessment & Evaluation</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Student profile analysis</li>
                <li>• Academic strength evaluation</li>
                <li>• University fit assessment</li>
                <li>• Competitive positioning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary-600 mb-4">Documentation & Compliance</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Application document review</li>
                <li>• Visa documentation support</li>
                <li>• Regulatory compliance</li>
                <li>• British Council standards</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary-600 mb-4">Technology & Operations</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• CRM database management</li>
                <li>• Applicant workflow tracking</li>
                <li>• Data analytics & reporting</li>
                <li>• Process optimization</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
