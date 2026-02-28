'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ClipboardList, Building2, RefreshCw } from 'lucide-react'

const services = [
  {
    icon: ClipboardList,
    title: 'Programme Governance',
    description:
      'Designing PMO frameworks that give programme directors real-time visibility, clear accountability chains, and decision-support systems — the governance infrastructure EU-funded programmes demand from day one.',
  },
  {
    icon: Building2,
    title: 'DFI & Infrastructure Delivery',
    description:
      'Five years leading feasibility studies and appraisal frameworks for $100M+ in DFI-funded infrastructure. That rigour — risk modelling, multi-stakeholder alignment, hard accountability to funders — transfers directly into EU programme environments.',
  },
  {
    icon: RefreshCw,
    title: 'Agile & Scrum Implementation',
    description:
      'PSM I certified and practitioner-applied: I introduced Scrum to a traditional consulting delivery environment, improving throughput across concurrent multi-client workstreams. Methodology that actually lands, not just gets presented.',
  },
]

export default function WhatIDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-white py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-navy text-3xl lg:text-4xl font-bold">
            What I Bring to EU Programme Environments
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(10,35,66,0.10)' }}
              className="bg-white rounded-xl border border-light-grey overflow-hidden shadow-sm cursor-default"
            >
              <div className="h-1 bg-gold" />
              <div className="p-7">
                <div className="w-11 h-11 rounded-lg bg-navy/8 flex items-center justify-center mb-5 bg-ivory">
                  <service.icon size={22} className="text-navy" />
                </div>
                <h3 className="font-serif text-navy text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-mid-grey text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
