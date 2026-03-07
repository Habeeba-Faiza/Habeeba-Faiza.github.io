'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const ThoughtLeadership = () => {
  const insights = [
    {
      id: 1,
      title: 'The Hidden Curriculum: What Elite Universities Really Want',
      excerpt: 'Beyond grades and test scores, elite university admissions committees evaluate character, resilience, and intellectual curiosity. Discover the five key dimensions...',
      category: 'Admissions Strategy',
      readTime: '8 min read',
      date: 'March 2024',
      featured: true,
    },
    {
      id: 2,
      title: 'International Student Pathways: A-Level vs IB vs AP',
      excerpt: 'Comparing the three major qualification pathways and how universities perceive each. Strategic insights for choosing the right route based on your goals...',
      category: 'Education Planning',
      readTime: '6 min read',
      date: 'February 2024',
    },
    {
      id: 3,
      title: 'Visa Documentation: Common Mistakes That Delay Admission',
      excerpt: 'Financial documentation and visa requirements are often overlooked until the last moment. Here are the eight most critical compliance elements...',
      category: 'Compliance',
      readTime: '7 min read',
      date: 'January 2024',
    },
    {
      id: 4,
      title: 'Crafting the Personal Statement: From Draft to Masterpiece',
      excerpt: 'The personal statement is your voice. Learn the five-step framework used by top applicants to transform a blank page into compelling narrative...',
      category: 'Application Essays',
      readTime: '9 min read',
      date: 'December 2023',
    },
    {
      id: 5,
      title: 'Interview Preparation: The Psychology Behind the Questions',
      excerpt: 'University interviewers aren\'t testing knowledge - they\'re assessing your thinking process. Understand the frameworks behind interview questions...',
      category: 'Interview Prep',
      readTime: '10 min read',
      date: 'November 2023',
    },
    {
      id: 6,
      title: 'Scholarship Strategy: Maximizing Your Financial Opportunities',
      excerpt: 'Not all scholarships are equal. A data-driven approach to identifying and maximizing your scholarship potential at elite institutions...',
      category: 'Scholarships',
      readTime: '8 min read',
      date: 'October 2023',
    },
  ]

  const featured = insights.find(i => i.featured)
  const others = insights.filter(i => !i.featured).slice(0, 3)

  return (
    <section id="insights" className="section-spacing">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="badge mb-4">Thought Leadership</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Insights & Expert Knowledge
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Strategic articles, proven frameworks, and insider perspectives on university admissions and international education.
          </p>
        </motion.div>

        {/* Featured Article */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-raised overflow-hidden mb-12 hover:shadow-2xl transition-shadow"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary-600 to-primary-900 p-12 text-white flex flex-col justify-between">
                <div>
                  <span className="inline-block badge bg-white/20 text-white mb-4">
                    Featured
                  </span>
                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    {featured.title}
                  </h3>
                  <p className="text-primary-100 text-lg leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-primary-100">
                  <span className="text-sm">{featured.readTime}</span>
                  <span>•</span>
                  <span className="text-sm">{featured.date}</span>
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <p className="text-sm font-semibold text-primary-600 mb-6">
                  {featured.category}
                </p>
                <button className="inline-flex items-center gap-3 text-primary-600 hover:text-primary-700 font-semibold group">
                  Read Article
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {others.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-raised p-8 flex flex-col hover:shadow-xl transition-shadow"
            >
              <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-3">
                {article.category}
              </span>
              <h3 className="text-lg font-bold mb-3 text-slate-900 flex-grow">
                {article.title}
              </h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="text-xs text-slate-500">{article.readTime}</span>
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-1 text-sm group"
                >
                  Read
                  <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="button-outline inline-flex items-center gap-2">
            View All Insights
            <HiArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ThoughtLeadership
