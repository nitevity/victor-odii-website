import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Victor C. Odii | EU Programme Management & Development Finance',
    template: '%s | Victor C. Odii',
  },
  description:
    'Project and programme management professional specialising in EU-funded programme delivery, development finance, and PMO governance. Austria-based with 5+ years in DFI-funded infrastructure across Africa.',
  keywords: [
    'EU programme management',
    'development finance',
    'PMO',
    'project governance',
    'Eisenstadt',
    'Austria',
    'AFREXIM',
    'infrastructure',
    'international development',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://victorodii.com',
    siteName: 'Victor C. Odii',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-mid-grey">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
