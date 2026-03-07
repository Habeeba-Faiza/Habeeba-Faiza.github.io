'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const Portfolio = () => {
  const caseStudies = [
    {
      id: 1,
      studentName: 'Case Study 01 - STEM Applicant',
      university: 'Top UK University Offer',
      program: 'Undergraduate STEM Program',
      country: 'India',
      challenge: 'Strong academics but limited international exposure, needed competitive positioning against global applicators',
      solution: 'Developed unique positioning around local tech initiative involvement, coached for rigorous interview process, emphasized problem-solving approach',
      result: 'Received offer in first cycle with strong interview readiness and complete documentation package.',
      impact: '🎓 Offer Received | 📊 First-Cycle Success | ✅ Documentation Accuracy',
    },
    {
      id: 2,
      studentName: 'Case Study 02 - Multi-Application Track',
      university: 'Multiple UK University Offers',
      program: 'Business & Analytics Pathway',
      country: 'UK (Expat)',
      challenge: 'Multiple applications across tier-1 universities with tight timeline, coordination complexity',
      solution: 'Implemented sophisticated application timeline, coordinated with universities for tailored essays, managed interview sequences across cities',
      result: 'Secured multiple offers through timeline discipline, tailored essays, and coordinated submission management.',
      impact: '📈 Multi-Offer Outcome | ⏱️ Faster Submission Cycle | 🎯 Strong Program Fit',
    },
    {
      id: 3,
      studentName: 'Case Study 03 - Competitive Program Applicant',
      university: 'Highly Selective UK Institution',
      program: 'Undergraduate Law Pathway',
      country: 'India',
      challenge: 'Highly competitive applicant pool, needed strategic differentiation, complex interview preparation',
      solution: 'Focused on unique perspective as aspiring international law expert, intensive interview coaching covering edge-case scenarios, networking with alumni',
      result: 'Achieved final-round interview confidence and offer readiness with a clear application narrative.',
      impact: '🏆 Selective-Program Offer | 🌟 Interview Readiness | 🎯 Strategic Positioning',
    },
  ]

  const stats = [
    { label: 'Success Stories', value: '100+', color: 'from-primary-600 to-primary-400' },
    { label: 'Universities', value: '50+', color: 'from-accent-teal to-accent-emerald' },
    { label: 'Student Rating', value: '4.9/5', color: 'from-accent-amber to-orange-400' },
  ]

  return (
    <section id="portfolio" className="section-spacing gradient-subtle">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="badge mb-4">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Case Studies & Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Real students. Real achievements. Real pathways to elite universities across the globe.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${stat.color} rounded-xl p-8 text-white`}
            >
              <p className="text-sm font-semibold opacity-90 mb-2">{stat.label}</p>
              <h3 className="text-4xl font-bold">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-raised overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-3 gap-0">
                {/* Header Section */}
                <div className="bg-primary-600 text-white p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{study.studentName}</h3>
                    <p className="text-primary-100 mb-4">{study.university}</p>
                    <div className="space-y-1 text-sm opacity-90">
                      <p><span className="font-semibold">Program:</span> {study.program}</p>
                      <p><span className="font-semibold">Origin:</span> {study.country}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 border-r border-slate-200">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Challenge</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Solution</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="p-8 bg-primary-50">
                  <h4 className="font-semibold text-primary-900 mb-3">Outcome</h4>
                  <p className="text-slate-700 mb-4 font-medium">{study.result}</p>
                  <div className="space-y-2 mb-6">
                    {study.impact.split(' | ').map((item) => (
                      <p key={item} className="text-sm text-primary-600 font-semibold">
                        {item}
                      </p>
                    ))}
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2 text-sm group">
                    Read Full Story
                    <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-6">
            Your success story could be next. Let&apos;s create your pathway to elite education.
          </p>
          <a href="#contact" className="button-primary inline-flex items-center gap-2">
            Start Your Journey <HiArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
