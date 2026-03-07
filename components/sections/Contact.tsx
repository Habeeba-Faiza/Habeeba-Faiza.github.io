'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formState)
    // Reset form
    setFormState({ name: '', email: '', phone: '', message: '' })
  }

  const contactMethods = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'Email available on request',
      href: 'mailto:faaizaofficial27@gmail.com',
    },
    {
      icon: HiPhone,
      title: 'Phone',
      value: 'Available after initial screening call',
      href: '#contact',
    },
    {
      icon: FaLinkedinIn,
      title: 'LinkedIn',
      value: 'linkedin.com/in/habeeba-faiza',
      href: 'https://linkedin.com/in/habeeba-faiza',
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Thanjavur, Tamil Nadu, India',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="section-spacing">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="badge mb-4">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Start Your Consultation Today
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Schedule a personalized consultation to discuss your university aspirations and develop your winning strategy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.title === 'LinkedIn' ? '_blank' : undefined}
                rel={method.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-raised p-8 text-center hover:shadow-xl transition-all group"
              >
                <Icon className="w-8 h-8 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-slate-900 mb-2">{method.title}</h3>
                <p className="text-sm text-slate-600 break-all">{method.value}</p>
              </motion.a>
            )
          })}
        </div>

        {/* Contact Form & Info */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="+44 (0) 123 456 7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell me about your university aspirations..."
                />
              </div>

              <button type="submit" className="button-primary w-full">
                Send Message
              </button>

              <p className="text-xs text-slate-500 text-center">
                I&apos;ll typically respond within 24 hours. Looking forward to connecting!
              </p>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card-raised p-8 bg-primary-50">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Next Steps</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-900">Submit Your Details</h4>
                    <p className="text-sm text-slate-600">Fill out the form with your information</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-900">Schedule Consultation</h4>
                    <p className="text-sm text-slate-600">I&apos;ll contact you to arrange a 15-minute discovery call</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-900">Get Your Roadmap</h4>
                    <p className="text-sm text-slate-600">Receive a personalized strategy for your university journey</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="card-raised p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Typical Response Time</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Email inquiries:</span>
                  <span className="font-semibold text-primary-600">24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Phone calls:</span>
                  <span className="font-semibold text-primary-600">48 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Consultation scheduling:</span>
                  <span className="font-semibold text-primary-600">3-5 days</span>
                </div>
              </div>
            </div>

            <div className="card-raised p-8 bg-gradient-to-br from-primary-600 to-primary-900 text-white">
              <h3 className="text-xl font-bold mb-3">Availability</h3>
              <p className="text-primary-100 text-sm">
                Currently accepting new students for 2024-2025 admissions cycle. Limited slots available for personalized one-on-one coaching.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
