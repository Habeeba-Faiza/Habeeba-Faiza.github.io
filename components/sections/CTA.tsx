'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const CTA = () => {
  return (
    <section className="section-spacing gradient-subtle">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Transform Your University Journey?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Every great achievement starts with a conversation. Let&apos;s discuss your aspirations, assess your profile, and create a personalized pathway to your dream university.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="button-primary inline-flex items-center gap-2"
            >
              Schedule a Free Consultation
              <HiArrowRight className="w-4 h-4" />
            </a>
            <a href="#portfolio" className="button-secondary">
              View Success Stories
            </a>
          </div>

          <p className="text-sm text-slate-500 mt-8">
            ✓ 15-minute discovery call • No obligation • Personalized roadmap
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
