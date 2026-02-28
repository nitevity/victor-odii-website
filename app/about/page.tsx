import type { Metadata } from 'next'
import { photos } from '../../config/photos'
import ProfileImage from '../../components/ui/ProfileImage'
import Tag from '../../components/ui/Tag'
import Button from '../../components/ui/Button'
import { Download, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
}

const technicalSkills = [
  'Programme Management',
  'PMO Design',
  'Feasibility Studies',
  'DFI Funding',
  'Investment Appraisal',
  'Risk Assessment',
  'Agile / Scrum',
  'KPI Dashboard Design',
  'Stakeholder Management',
  'Logframe Design',
  'EU Funding Frameworks',
  'Monitoring & Evaluation',
  'Budget Management',
  'Workstream Planning',
]

const softSkills = [
  'Workshop Facilitation',
  'Executive Communication',
  'Cross-functional Leadership',
  'Coaching & Mentorship',
  'Cross-cultural Collaboration',
  'Analytical Thinking',
  'Strategic Planning',
  'Conflict Resolution',
]

const values = [
  {
    title: 'Delivery over decoration',
    description:
      'Programme outcomes matter more than process theatre. I focus on what needs to move, by when, and who owns it — then build the governance infrastructure to make that happen. Frameworks serve delivery; delivery does not serve frameworks.',
  },
  {
    title: 'Governance as an enabler',
    description:
      'PMO frameworks built to create bureaucracy are a tax on the programme. The ones I design accelerate decisions, surface blockers early, and give decision-makers the information they need — without burying them in reporting that nobody reads.',
  },
  {
    title: 'Cross-cultural by default',
    description:
      'Having worked across Nigerian institutions, international DFIs, and now the Austrian/EU academic and professional environment, I navigate different operating cultures as standard practice — not as something that requires adjustment time.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <ProfileImage
                src={photos.about}
                alt="Victor C. Odii"
                width={480}
                height={560}
                className="w-full max-w-sm"
                shape="rectangle"
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-4">
                About
              </p>
              <h1 className="font-serif text-navy text-3xl lg:text-4xl font-bold leading-tight mb-6">
                A Programme Manager Built for Where Delivery Meets Development Finance
              </h1>
              <div className="space-y-4 text-mid-grey leading-relaxed">
                <p>
                  Five years at Caladium Consulting in Lagos gave me something that is hard to
                  replicate in a classroom: the experience of sitting across the table from DFI
                  appraisal teams with $100M+ in infrastructure funding at stake. The scrutiny that
                  comes with that — rigorous feasibility standards, multi-party accountability, no
                  margin for governance theatre — shaped how I think about programme management at
                  every level.
                </p>
                <p>
                  In late 2025, I moved to Austria and enrolled in the MA EU Studies programme at
                  FH Burgenland. This was not a retreat from professional life — it was a deliberate
                  entry into the EU programme management world. I wanted to understand not just how
                  EU-funded programmes are managed, but how implementing organisations actually
                  operate: their procurement environments, their accountability to delegations, and
                  the specific governance pressures that make EU programme delivery its own
                  discipline.
                </p>
                <p>
                  The result is a profile that is rare in this space: African DFI experience that
                  taught me the hardest version of multi-stakeholder programme governance, combined
                  with formal EU programme management training and the PSM I and cPMA certifications
                  that implementing organisations increasingly look for. I am not transitioning
                  careers — I am extending an existing one into a new geography and funding context.
                </p>
              </div>

              <div className="mt-8">
                <Button href="/public/downloads/Victor_Odii_CV_2026.pdf" variant="primary">
                  <Download size={16} className="mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-navy text-3xl font-bold text-center mb-12">
            Working Style & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-7 border border-light-grey shadow-sm">
                <div className="h-1 w-10 bg-gold mb-5 rounded-full" />
                <h3 className="font-serif text-navy text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-mid-grey text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-navy text-3xl font-bold text-center mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-mid-grey font-semibold mb-5">
                Technical & Professional
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((s) => (
                  <Tag key={s} variant="navy">{s}</Tag>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-mid-grey font-semibold mb-5">
                Leadership & Interpersonal
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <Tag key={s} variant="gold">{s}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-white text-3xl font-bold text-center mb-12">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* PSM I */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-serif text-white text-xl font-bold">PSM I</p>
                  <p className="text-gold text-sm mt-1">Professional Scrum Master I</p>
                </div>
                <Tag variant="green">Certified</Tag>
              </div>
              <p className="text-white/60 text-sm mb-1">Scrum.org</p>
              <p className="text-white/60 text-sm">December 2025</p>
              <a
                href="https://www.credly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-gold text-xs hover:underline"
              >
                Verify on Credly <ExternalLink size={12} />
              </a>
            </div>

            {/* cPMA */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-serif text-white text-xl font-bold">cPMA</p>
                  <p className="text-gold text-sm mt-1">Certified Project Management Associate</p>
                </div>
                <Tag variant="gold">In Progress</Tag>
              </div>
              <p className="text-white/60 text-sm mb-1">IPMA / GPM</p>
              <p className="text-white/60 text-sm">Expected May 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-navy text-3xl font-bold text-center mb-12">
            Education
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                <div className="w-0.5 h-full bg-light-grey mt-2" />
              </div>
              <div className="pb-8">
                <p className="font-serif text-navy text-xl font-bold">
                  MA EU Studies — Management of EU Projects
                </p>
                <p className="text-gold text-sm font-medium mt-1">
                  FH Burgenland · Eisenstadt, Austria
                </p>
                <p className="text-mid-grey text-sm mt-1">November 2025 – August 2027</p>
                <p className="text-mid-grey text-sm leading-relaxed mt-3">
                  Specialist programme in EU project management, EU funding mechanisms, and the
                  operational management of EU-funded programmes. Covering logframe methodology,
                  EU procurement rules, M&E frameworks, and implementing organisation governance.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gold/40 mt-1.5 flex-shrink-0" />
              </div>
              <div>
                <p className="font-serif text-navy text-xl font-bold">
                  BSc Political Science
                </p>
                <p className="text-gold text-sm font-medium mt-1">
                  Federal University Otuoke · Nigeria
                </p>
                <p className="text-mid-grey text-sm mt-1">October 2013 – October 2017</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Download CTA */}
      <section className="bg-ivory py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-serif text-navy text-2xl font-bold mb-4">
            Want the full picture?
          </h3>
          <p className="text-mid-grey mb-6">
            Download the complete CV for a detailed record of experience, certifications, and references.
          </p>
          <a
            href="/downloads/Victor_Odii_CV_2026.pdf"
            download
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3 rounded-lg hover:bg-navy/90 transition-colors font-semibold text-sm"
          >
            <Download size={16} />
            Download CV (PDF)
          </a>
        </div>
      </section>
    </>
  )
}
