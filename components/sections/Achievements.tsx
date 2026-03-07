'use client'

import { motion } from 'framer-motion'

const Achievements = () => {
  const stats = [
    {
      number: '100+',
      label: 'Students Guided',
      context: 'From initial consultation to enrollment',
    },
    {
      number: '95%',
      label: 'Success Rate',
      context: 'First-application acceptance across top institutions',
    },
    {
      number: '50+',
      label: 'University Outcomes',
      context: 'Offers and progression across institutions',
    },
    {
      number: '4.9/5',
      label: 'Student Feedback',
      context: 'Average satisfaction from supported students',
    },
  ]

  const achievements = [
    {
      title: 'Scholarship Success Program',
      description: 'Supported high-potential applicants in scholarship-ready positioning through profile mapping, documentation quality, and targeted submission strategy.',
    },
    {
      title: 'Expedited Processing System',
      description: 'Implemented a CRM-led documentation workflow that improved turnaround speed, reduced manual follow-ups, and increased process reliability.',
    },
    {
      title: 'Visa Support Excellence',
      description: 'Built a structured pre-submission checklist for visa and compliance readiness, helping students avoid common documentation gaps.',
    },
    {
      title: 'School Partnership Network',
      description: 'Contributed to trusted referral ecosystems through transparent counseling, consistent communication, and strong student outcomes.',
    },
  ]

  return (
    <section className="section-spacing bg-white">
      <div className="container-max">
        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h3
                className="text-5xl md:text-6xl font-bold text-gradient mb-2"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {stat.number}
              </motion.h3>
              <p className="font-semibold text-slate-900 mb-1">{stat.label}</p>
              <p className="text-sm text-slate-600">{stat.context}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient">
            Key Achievements & Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-raised p-8"
              >
                <h3 className="text-xl font-bold mb-3 text-primary-600">
                  {achievement.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
