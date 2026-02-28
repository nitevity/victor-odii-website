import type { Metadata } from 'next'
import Tag from '../../components/ui/Tag'

export const metadata: Metadata = {
  title: 'Projects',
}

const caseStudies = [
  {
    number: '01',
    title: 'DFI Infrastructure Feasibility Programme',
    tags: ['Infrastructure', 'Development Finance', 'AFREXIM Bank', 'Arise IIP'],
    summary:
      'Led four infrastructure feasibility studies that secured $100M+ in DFI funding — covering infrastructure viability, risk modelling, and multi-party stakeholder alignment across complex cross-border projects.',
    challenge:
      'Multi-party stakeholder environments where DFI appraisal teams, infrastructure operators, governments, and private co-investors each had different risk tolerances, reporting requirements, and decision timelines. Cross-border infrastructure added sovereignty dimensions that standard feasibility frameworks do not address. Maintaining rigorous appraisal standards while keeping multiple parties aligned through months of review cycles required structured governance that adapted to each funder\'s accountability norms.',
    approach:
      'Structured each feasibility study around the specific appraisal criteria of the lead DFI, while building a parallel stakeholder alignment process that surfaced objections early rather than at submission stage. Designed risk modelling frameworks that spoke to both technical and financial audiences, and maintained consistent project governance across all four studies simultaneously.',
    outcome: '$100M+ in secured DFI funding across four infrastructure projects, with complete appraisal documentation meeting AFREXIM Bank and Arise IIP standards.',
    metrics: ['$100M+', 'DFI Funding Secured'],
  },
  {
    number: '02',
    title: 'PMO Design for Investment Group',
    tags: ['PMO', 'Governance', 'Performance Management', 'Portfolio'],
    summary:
      'Designed and implemented a full PMO operating framework — including KPI dashboards and performance appraisal systems — for an investment group with 25 active portfolio companies.',
    challenge:
      '25 companies across different sectors, each at different maturity stages, with real-time capital allocation decisions depending on performance visibility that did not exist. Investment committee members were making decisions from financial statements alone, with no operational or programme data. The governance gap was creating lag between performance deterioration and intervention — a costly delay at portfolio scale.',
    approach:
      'Designed a tiered PMO framework that distinguished between operational reporting (company-level) and portfolio reporting (investment committee level), with KPI architectures appropriate to each sector. Built dashboards that surfaced leading indicators, not just financial results, and structured appraisal cycles that gave investment managers a consistent language for portfolio conversations.',
    outcome: 'Real-time KPI visibility across all 25 portfolio companies, accelerated capital allocation decision timelines, and a governance framework that the investment group adopted as its standard operating model.',
    metrics: ['25', 'Portfolio Companies'],
  },
  {
    number: '03',
    title: 'Airtel Nigeria Investment Pitch',
    tags: ['Business Planning', 'Investment', 'Financial Modelling', 'Strategy'],
    summary:
      'Led preparation of investor pitch deck and business plan that secured Airtel Nigeria\'s $1,000,000 investment commitment.',
    challenge:
      'Investor-grade pitch preparation requires more than a well-designed slide deck. The financial model had to withstand scrutiny from Airtel\'s corporate finance team, the market analysis had to be defensible against sector knowledge the investor already had, and the narrative had to present a compelling growth case without overreaching on projections. Coordinating across multiple internal teams while maintaining pitch coherence under a compressed timeline added execution pressure to the intellectual challenge.',
    approach:
      'Structured the engagement as a programme rather than a one-off deliverable: separate workstreams for financial modelling, market analysis, competitive positioning, and executive presentation — each with their own review cycles before integration into the final pitch. Maintained a single narrative thread throughout to ensure the investor\'s key questions were answered at every level of detail.',
    outcome: '$1,000,000 investment secured from Airtel Nigeria, with pitch documentation that the client subsequently adapted for follow-on investor conversations.',
    metrics: ['$1M', 'Investment Secured'],
  },
  {
    number: '04',
    title: 'Agile Transformation in Consulting',
    tags: ['Agile', 'Scrum', 'Change Management', 'Delivery'],
    summary:
      'Introduced Scrum methodology to a consulting delivery team, improving throughput and on-time project completion rates across concurrent multi-client engagements.',
    challenge:
      'Traditional consulting delivery environments carry structural resistance to agile methodology. Billable hours culture, client-facing delivery pressure, and the unpredictability of advisory engagements all push against the sprint structure and ceremony discipline that Scrum requires. The specific challenge here was not convincing people that Scrum was good in theory — it was proving that it could work with live client obligations, without creating a new layer of administrative overhead that displaced the delivery work itself.',
    approach:
      'Introduced Scrum incrementally rather than as a full-practice transformation. Started with a single team, adapted ceremony formats to consulting reality (shorter stand-ups, client-facing sprint goals), and built the case through demonstrated improvement before expanding. Used PSM I certification as the credibility anchor for internal sceptics.',
    outcome: 'Measurable improvement in delivery throughput and on-time project completion rates across concurrent multi-client engagements, with the methodology subsequently adopted as standard practice across the team.',
    metrics: ['Improved', 'On-Time Delivery Rate'],
  },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-4">
            Key Achievements
          </p>
          <h1 className="font-serif text-white text-3xl lg:text-5xl font-bold max-w-2xl leading-tight">
            Work That Moved Capital, Built Governance, and Delivered Outcomes
          </h1>
          <p className="text-white/70 mt-4 max-w-xl leading-relaxed">
            Four case studies from five years of project and programme delivery — selected for the
            complexity of the governance challenges, not just the size of the numbers.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-10">
          {caseStudies.map((cs) => (
            <div key={cs.number} className="bg-white rounded-xl border border-light-grey shadow-sm overflow-hidden">
              {/* Gold top bar */}
              <div className="h-1 bg-gold" />

              <div className="p-8 lg:p-10">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <span className="font-serif text-gold/40 text-5xl font-bold leading-none block mb-2">
                      {cs.number}
                    </span>
                    <h2 className="font-serif text-navy text-2xl font-bold">{cs.title}</h2>
                  </div>
                  <div className="bg-navy rounded-lg px-5 py-3 text-center flex-shrink-0">
                    <p className="font-serif text-gold text-2xl font-bold">{cs.metrics[0]}</p>
                    <p className="text-white/60 text-xs uppercase tracking-wide mt-0.5">
                      {cs.metrics[1]}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.tags.map((tag) => (
                    <Tag key={tag} variant="navy">{tag}</Tag>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-mid-grey leading-relaxed mb-6">{cs.summary}</p>

                {/* Challenge + Outcome */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-ivory rounded-lg p-5">
                    <p className="text-xs uppercase tracking-widest text-mid-grey font-semibold mb-3">
                      Key Challenge
                    </p>
                    <p className="text-mid-grey text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="bg-ivory rounded-lg p-5">
                    <p className="text-xs uppercase tracking-widest text-mid-grey font-semibold mb-3">
                      Approach
                    </p>
                    <p className="text-mid-grey text-sm leading-relaxed">{cs.approach}</p>
                  </div>
                </div>

                {/* Outcome */}
                <div className="mt-6 bg-navy/5 border-l-4 border-gold rounded-r-lg p-4">
                  <p className="text-xs uppercase tracking-widest text-mid-grey font-semibold mb-2">
                    Outcome
                  </p>
                  <p className="text-navy text-sm leading-relaxed font-medium">{cs.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
