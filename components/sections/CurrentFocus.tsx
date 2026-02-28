'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CurrentFocus() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-navy py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Where I Am Now */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-0.5 w-12 bg-gold mb-6" />
            <h3 className="font-serif text-white text-2xl font-bold mb-5">
              Where I Am Now
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Enrolled in the MA EU Studies (Management of EU Projects) programme at FH Burgenland
              in Eisenstadt, Austria — running November 2025 through August 2027. This is not a
              career pivot; it is a precision investment in understanding the EU programme
              management environment from the inside.
            </p>
            <p className="text-white/75 leading-relaxed">
              PSM I certified since December 2025. Completing the cPMA (IPMA/GPM) certification,
              expected May 2026. Actively targeting EU programme implementing organisations across
              Austria, Germany, Belgium, and beyond.
            </p>
          </motion.div>

          {/* What I'm Looking For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="h-0.5 w-12 bg-gold mb-6" />
            <h3 className="font-serif text-white text-2xl font-bold mb-5">
              What I&rsquo;m Looking For
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Programme management internships and junior-to-mid level roles at development
              consultancies, NGOs, and public bodies managing EU-funded programmes in
              infrastructure, economic development, and governance.
            </p>
            <p className="text-white/75 leading-relaxed">
              Organisations like Landell Mills, Transtec, AMBERO, Metis GmbH, and international
              development partners active in EU delegations and implementing organisations. Based
              in Austria — open to international engagement wherever the programmes are.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
