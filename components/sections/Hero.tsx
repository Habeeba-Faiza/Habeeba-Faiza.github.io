'use client'

import { motion } from 'framer-motion'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const features = [
    '100+ Students Guided',
    '50+ University Outcomes',
    '95% Application Success Rate',
    'End-to-End Admissions Support'
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 gradient-subtle">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center py-20"
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <motion.span
              variants={itemVariants}
              className="inline-block badge mb-6"
            >
              ✨ International Education & Admissions Specialist
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Your Gateway to <span className="text-gradient">Elite Universities</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg"
            >
              Admission Officer focused on UK and international university pathways. I help students build competitive applications through strong documentation, strategic counseling, and disciplined admissions workflows.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <HiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="button-primary inline-flex items-center justify-center gap-2"
              >
                Schedule Consultation <HiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="button-secondary inline-flex items-center justify-center"
              >
                View Success Stories
              </a>
            </motion.div>

            {/* Trust indicator */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-slate-500 mt-8"
            >
              Trusted by students and families for clear, ethical, and results-focused admissions guidance.
            </motion.p>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Decorative circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-primary-200"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border-2 border-primary-100"
              />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary-50 to-slate-50 rounded-full shadow-2xl p-8">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-primary-600 mb-2">100+</h2>
                  <p className="text-sm font-medium text-slate-600">Success Stories</p>
                  <div className="mt-4 flex -space-x-2 justify-center">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
