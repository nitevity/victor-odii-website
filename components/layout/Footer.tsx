import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy">
      {/* Gold top border */}
      <div className="h-0.5 bg-gold" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Name + tagline */}
          <div>
            <p className="font-serif text-gold text-xl font-semibold mb-3">
              Victor C. Odii
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Programme management professional bridging development finance experience with EU-funded programme delivery. Austria-based, internationally engaged.
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <p className="text-white text-xs uppercase tracking-widest font-medium mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="text-white text-xs uppercase tracking-widest font-medium mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={15} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:victor@victorodii.com"
                  className="hover:text-gold transition-colors"
                >
                  victor@victorodii.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={15} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+436605498592"
                  className="hover:text-gold transition-colors"
                >
                  +43 660 549 8592
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin size={15} className="text-gold flex-shrink-0" />
                <span>Eisenstadt, Austria</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Linkedin size={15} className="text-gold flex-shrink-0" />
                <a
                  href="https://linkedin.com/in/victor-odii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  linkedin.com/in/victor-odii
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-xs">
            © 2026 Victor C. Odii · Built for EU Programme Management
          </p>
          <p className="text-white/30 text-xs">
            Eisenstadt, Austria
          </p>
        </div>
      </div>
    </footer>
  )
}
