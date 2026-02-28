import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'victor@victorodii.com',
    href: 'mailto:victor@victorodii.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+43 660 549 8592',
    href: 'tel:+436605498592',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Eisenstadt, Austria',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/victor-odii',
    href: 'https://linkedin.com/in/victor-odii',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-4">
            Contact
          </p>
          <h1 className="font-serif text-white text-3xl lg:text-5xl font-bold leading-tight mb-4">
            Let&rsquo;s Talk Programmes
          </h1>
          <p className="text-white/70 max-w-xl leading-relaxed">
            I am available for programme management internships and roles at EU-funded implementing
            organisations. I also welcome conversations with practitioners in development
            consultancy, DFI-funded programme delivery, and EU governance contexts.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Contact details */}
            <div>
              <h2 className="font-serif text-navy text-2xl font-bold mb-8">
                Get in touch directly
              </h2>
              <ul className="space-y-6 mb-10">
                {contactDetails.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                      <detail.icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-mid-grey font-medium mb-0.5">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith('http') ? '_blank' : undefined}
                          rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-navy font-medium hover:text-gold transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-navy font-medium">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Availability */}
              <div className="bg-ivory rounded-xl p-6 border border-light-grey">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-success-green animate-pulse" />
                  <p className="text-navy font-semibold text-sm">
                    Currently available for EU programme management roles and internships
                  </p>
                </div>
                <p className="text-mid-grey text-xs leading-relaxed">
                  Open to: Austria · Germany · Belgium · Netherlands · Western Balkans · Remote
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-serif text-navy text-2xl font-bold mb-8">
                Send a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
