import type { Metadata } from 'next'
import ExperienceContent from './ExperienceContent'

export const metadata: Metadata = {
  title: 'Experience',
}

export default function ExperiencePage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-4">
            Career History
          </p>
          <h1 className="font-serif text-white text-3xl lg:text-5xl font-bold max-w-2xl leading-tight">
            Five Years Building. Infrastructure, Teams, and Governance Systems.
          </h1>
        </div>
      </section>

      <ExperienceContent />
    </>
  )
}
