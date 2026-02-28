'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const organisations = [
  'AFREXIM Bank',
  'Arise IIP',
  'Airtel Nigeria',
  'FH Burgenland',
  'Scrum.org',
]

export default function CredibilityBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="bg-ivory py-10 border-b border-light-grey" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <p className="text-xs uppercase tracking-widest text-mid-grey font-medium whitespace-nowrap">
            Experience Across
          </p>
          <div className="w-px h-6 bg-light-grey hidden sm:block" />
          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            {organisations.map((org, i) => (
              <motion.span
                key={org}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-sm font-medium text-navy border border-navy/20 rounded-full px-4 py-1.5 bg-white"
              >
                {org}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
