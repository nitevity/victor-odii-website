'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Tag from '../../components/ui/Tag'

const roles = [
  {
    title: 'Senior Associate',
    company: 'Caladium Consulting',
    period: 'Jul 2024 – Dec 2025',
    location: 'Lagos, Nigeria',
    achievements: [
      'Led four infrastructure feasibility studies securing $100M+ in DFI funding from AFREXIM Bank and Arise IIP — covering viability assessment, risk modelling, and multi-party stakeholder alignment across complex cross-border projects.',
      'Designed investment performance appraisal framework for a group with 25 active portfolio companies, creating real-time KPI visibility that accelerated capital allocation decisions.',
      'Streamlined budgeting processes for ₦10 billion client portfolios with multi-tier approval workflows, reducing decision cycles and improving financial governance.',
      'Introduced Scrum methodology to consulting delivery processes, improving throughput and on-time project completion rates across concurrent multi-client engagements.',
    ],
    tags: ['Infrastructure', 'DFI', 'PMO', 'Agile'],
  },
  {
    title: 'Project Lead',
    company: 'Caladium Consulting',
    period: 'May 2022 – Jul 2024',
    location: 'Lagos, Nigeria',
    achievements: [
      "Led investor pitch preparation and business planning process securing Airtel Nigeria's $1,000,000 investment commitment — coordinating financial modelling, market analysis, and executive-level presentation across multiple workstreams.",
      'Operationalised PMO framework across 15+ concurrent workstreams, implementing governance structures that gave senior leadership consistent programme visibility.',
      'Supervised project management framework implementation across construction client sites, ensuring delivery accountability from field operations to executive reporting.',
      'Mentored four junior associates; two progressed to independent project lead roles within 12 months — structured coaching and deliberate delegation of ownership.',
    ],
    tags: ['PMO', 'Investment', 'Mentorship', 'Construction'],
  },
  {
    title: 'Senior Strategy Analyst',
    company: 'Caladium Consulting',
    period: 'May 2021 – Jun 2022',
    location: 'Lagos, Nigeria',
    achievements: [
      'Established the project planning function from scratch across four sectors, creating the foundational governance infrastructure that subsequent PMO expansion built upon.',
      'Conducted market analyses and competitive positioning studies supporting client strategy development across infrastructure, financial services, and FMCG sectors.',
      'Deployed project management dashboard tracking 10+ active client workstreams, providing the first real-time delivery visibility the practice had operated with.',
      'Coordinated cross-sector client engagement from analysis through to board-level presentation, building the executive communication track record that defined subsequent roles.',
    ],
    tags: ['Strategy', 'Analytics', 'Governance'],
  },
  {
    title: 'Strategy Analyst',
    company: 'Caladium Consulting',
    period: 'Oct 2020 – May 2021',
    location: 'Lagos, Nigeria',
    achievements: [
      'Mapped and restructured service delivery processes, updating SOPs for multiple clients across manufacturing and financial services — converting informal workflows into documented, auditable delivery frameworks.',
      'Set up new regional office on time within ₦10 million budget, managing vendor engagement, fit-out coordination, and operational launch under no-slip constraints.',
      'Supported senior strategy team on client-facing project deliverables, building analytical and documentation discipline under active engagement pressure.',
    ],
    tags: ['Strategy', 'Operations', 'Process Design'],
  },
  {
    title: 'Business Development Executive',
    company: 'Airtel Nigeria',
    period: 'Dec 2019 – Sep 2020',
    location: 'Lagos, Nigeria',
    achievements: [
      'Managed portfolio of 47 retail partners across Lagos, maintaining account relationships, resolving escalations, and optimising partner performance metrics.',
      'Coordinated co-marketing campaigns with key account operators, aligning Airtel promotional activity with partner distribution priorities.',
      'Contributed to regional sales target delivery within a structured B2B commercial environment — providing the account management and commercial discipline foundation for subsequent consulting work.',
    ],
    tags: ['Business Development', 'Account Management', 'Telecoms'],
  },
]

const stats = [
  { value: '$100M+', label: 'DFI Funded' },
  { value: '₦10B', label: 'Portfolio Managed' },
  { value: '25', label: 'Companies Governed' },
  { value: '15+', label: 'Workstreams Delivered' },
]

function TimelineRole({ role, index }: { role: (typeof roles)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-12">
      {isLeft && <div className="hidden lg:block" />}

      <motion.div
        initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="bg-white rounded-xl border border-light-grey shadow-sm overflow-hidden"
      >
        <div className="h-1 bg-gold" />
        <div className="p-7">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
            <div>
              <h3 className="font-serif text-navy text-xl font-bold">{role.title}</h3>
              <p className="text-gold text-sm font-medium mt-0.5">{role.company}</p>
              <p className="text-mid-grey text-xs mt-1">
                {role.period} · {role.location}
              </p>
            </div>
          </div>
          <ul className="space-y-3 mb-5">
            {role.achievements.map((achievement, i) => (
              <li key={i} className="flex gap-3 text-sm text-mid-grey leading-relaxed">
                <span className="text-gold mt-1 flex-shrink-0">→</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {role.tags.map((tag) => (
              <Tag key={tag} variant="navy">{tag}</Tag>
            ))}
          </div>
        </div>
      </motion.div>

      {!isLeft && <div className="hidden lg:block" />}

      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-gold border-4 border-white shadow-sm z-10" />
      </div>
    </div>
  )
}

function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-navy py-16" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-4xl lg:text-5xl font-bold text-gold mb-1">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ExperienceContent() {
  return (
    <>
      <section className="bg-ivory py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-navy/10" />
            {roles.map((role, i) => (
              <TimelineRole key={role.title + role.period} role={role} index={i} />
            ))}
          </div>
        </div>
      </section>
      <StatsBar />
    </>
  )
}
