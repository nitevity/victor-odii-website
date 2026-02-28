'use client'

import { motion } from 'framer-motion'
import { photos } from '../../config/photos'
import ProfileImage from '../ui/ProfileImage'
import Button from '../ui/Button'

function fadeUpProps(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.0, 0.0, 0.2, 1] as const },
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Subtle diagonal geometric SVG pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="diagonal-lines"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(35)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="80"
                stroke="#C9A84C"
                strokeWidth="0.5"
                opacity="0.07"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* LEFT — Text (60%) */}
          <div className="lg:col-span-3">
            <motion.p
              {...fadeUpProps(0)}
              className="text-gold text-xs uppercase tracking-widest font-semibold mb-5"
            >
              EU Programme Management · Development Finance · Austria
            </motion.p>

            <motion.h1
              {...fadeUpProps(0.1)}
              className="font-serif text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            >
              Delivering Programmes That Move Capital and Create Impact
            </motion.h1>

            <motion.p
              {...fadeUpProps(0.2)}
              className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl"
            >
              Project and programme management professional with 5+ years securing $100M+ in DFI
              funding and building governance frameworks for complex multi-stakeholder environments.
              Now EU-based and positioned for implementing organisations managing EU-funded programmes.
            </motion.p>

            <motion.div
              {...fadeUpProps(0.3)}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button href="/experience" variant="primary" size="lg">
                View My Work
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              {...fadeUpProps(0.4)}
              className="flex flex-wrap gap-3"
            >
              {[
                '5+ Years Consulting Experience',
                '$100M+ DFI Funding Secured',
                '25 Portfolio Companies Governed',
              ].map((pill) => (
                <span
                  key={pill}
                  className="text-xs text-gold/90 border border-gold/25 rounded-full px-4 py-1.5 tracking-wide"
                >
                  {pill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo (40%) */}
          <motion.div
            {...fadeUpProps(0.2)}
            className="lg:col-span-2 flex flex-col items-center lg:items-end gap-4"
          >
            <ProfileImage
              src={photos.hero}
              alt="Victor C. Odii"
              width={420}
              height={540}
              className="w-full max-w-xs lg:max-w-sm"
              shape="rectangle"
            />
            <div className="flex items-center gap-2 bg-navy/60 border border-gold/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-success-green animate-pulse flex-shrink-0" />
              <span className="text-white/80 text-xs">
                Open to EU Programme Roles &amp; Internships
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
