'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '$100M+', label: 'DFI Funding Secured' },
  { value: '₦10B', label: 'Client Portfolio Managed' },
  { value: '25', label: 'Portfolio Companies Governed' },
  { value: '15+', label: 'Concurrent Workstreams Delivered' },
]

export default function FeaturedAchievement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-ivory py-20 lg:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative">
            {/* Decorative gold quotation mark */}
            <span
              className="absolute -top-6 -left-4 font-serif text-gold select-none pointer-events-none"
              style={{ fontSize: '7rem', lineHeight: 1, opacity: 0.25 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="relative z-10 pl-8 border-l-4 border-gold">
              <p className="font-serif text-navy text-xl lg:text-2xl font-medium leading-relaxed mb-4">
                Led four infrastructure feasibility studies securing $100M+ in DFI funding from
                AFREXIM Bank and Arise IIP — covering viability assessment, risk modelling, and
                multi-party stakeholder alignment across complex cross-border projects.
              </p>
              <cite className="text-mid-grey text-sm not-italic font-medium">
                — Senior Associate, Caladium Consulting (2024–2025)
              </cite>
            </blockquote>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="text-center bg-white rounded-xl p-6 border border-light-grey shadow-sm"
            >
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold mb-1">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wide text-mid-grey font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
