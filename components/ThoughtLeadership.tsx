'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'

const articles = [
  {
    title: 'How the CAS Process Works: A Step-by-Step Guide for International Students',
    excerpt: 'The Confirmation of Acceptance for Studies (CAS) is the critical document that unlocks a UK student visa. This guide walks through every stage — from offer acceptance and document verification to the CAS issuance window and what comes next.',
    category: 'UK Admissions',
    readTime: '7 min read',
    status: 'published',
  },
  {
    title: 'Designing Admissions Workflows That Scale Without Losing Quality',
    excerpt: 'Operational lessons from managing 176+ applications across intake cycles — how structured Monday portal checks, Tuesday payment chases, and CRM logging create a reliable, repeatable system.',
    category: 'Operational Excellence',
    readTime: '8 min read',
    status: 'published',
  },
  {
    title: 'Common Document Mistakes That Delay UK University Applications',
    excerpt: 'From missing same-name affidavits to insufficient proof of funds, these are the document errors that consistently delay offers — and how students and agents can prevent them.',
    category: 'Application Strategy',
    readTime: '6 min read',
    status: 'published',
  },
  {
    title: 'International Student Recruitment in the UK: What Is Changing in 2026',
    excerpt: 'Key policy and market shifts — from Graduate Route updates to UKVI compliance changes — shaping student pathways and admissions priorities for agents and institutions.',
    category: 'Industry Trends',
    readTime: '10 min read',
    status: 'coming-soon',
  },
  {
    title: 'CRM and Data Governance in Modern Admissions Operations',
    excerpt: 'How admissions teams can use CRM discipline — daily logging, pipeline hygiene, and structured reporting — to improve compliance readiness and reduce rework.',
    category: 'Technology',
    readTime: '9 min read',
    status: 'coming-soon',
  },
  {
    title: 'Cross-Cultural Communication That Improves Student Outcomes',
    excerpt: 'Communication practices built from working with students across India, Nigeria, Pakistan, and Bangladesh — what builds trust, reduces friction, and supports better decision-making.',
    category: 'Student Experience',
    readTime: '6 min read',
    status: 'coming-soon',
  },
]

const insights = [
  {
    stat: '600,000+',
    label: 'International Students in UK',
    description: 'The UK remains one of the world\'s top higher education destinations, sustaining strong demand for specialist admissions professionals.',
  },
  {
    stat: '200+',
    label: 'ConnectedHE Partner Universities',
    description: 'Working across 200+ UK university partners requires deep knowledge of entry requirements, portal systems, and compliance standards.',
  },
  {
    stat: 'UKVI Compliant',
    label: 'Every Application',
    description: 'UK student-route visa documentation demands precision — proof of funds, CAS readiness, and ATAS certificates must be verified before every submission.',
  },
]

export const ThoughtLeadership: React.FC = () => {
  return (
    <Section id="thought-leadership" className="bg-neutral-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Insights & Articles"
            subtitle="Practical knowledge on UK admissions, compliance, and international student recruitment"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className={`bg-white border rounded-2xl p-7 transition-all duration-300 ${
                  article.status === 'published'
                    ? 'border-neutral-200 hover:shadow-xl hover:-translate-y-1 cursor-pointer'
                    : 'border-neutral-100 opacity-70'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-400">{article.readTime}</span>
                    {article.status === 'coming-soon' && (
                      <span className="px-2 py-0.5 bg-neutral-100 text-neutral-500 rounded text-xs">Soon</span>
                    )}
                  </div>
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                {article.status === 'published' && (
                  <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                    Read article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Industry Context</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl p-8"
                >
                  <div className="text-3xl font-bold text-white mb-1">{insight.stat}</div>
                  <div className="text-sm font-semibold text-white/80 mb-3">{insight.label}</div>
                  <p className="text-primary-100 text-sm leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
