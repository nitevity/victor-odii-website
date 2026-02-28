'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const FORMSPREE_ID = 'YOUR_FORM_ID' // Replace with your Formspree form ID

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Basic validation
    const newErrors: Record<string, string> = {}
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string

    if (!name?.trim()) newErrors.name = 'Name is required'
    if (!email?.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!message?.trim()) newErrors.message = 'Message is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setLoading(true)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        // Fallback: open mailto
        const subject = encodeURIComponent(`Message from ${name}`)
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
        window.location.href = `mailto:victor@victorodii.com?subject=${subject}&body=${body}`
      }
    } catch {
      // Network error fallback
      const subject = encodeURIComponent(`Message from ${name}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
      window.location.href = `mailto:victor@victorodii.com?subject=${subject}&body=${body}`
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={48} className="text-success-green mb-4" />
        <h3 className="font-serif text-navy text-2xl font-bold mb-2">Message Sent</h3>
        <p className="text-mid-grey">
          Thank you for reaching out. I will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-wider text-mid-grey font-medium mb-2">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`w-full border rounded-lg px-4 py-3 text-sm text-navy placeholder-mid-grey/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors ${
              errors.name ? 'border-red-400' : 'border-light-grey'
            }`}
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-wider text-mid-grey font-medium mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`w-full border rounded-lg px-4 py-3 text-sm text-navy placeholder-mid-grey/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors ${
              errors.email ? 'border-red-400' : 'border-light-grey'
            }`}
            placeholder="you@organisation.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Organisation */}
      <div>
        <label htmlFor="organisation" className="block text-xs uppercase tracking-wider text-mid-grey font-medium mb-2">
          Organisation
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          className="w-full border border-light-grey rounded-lg px-4 py-3 text-sm text-navy placeholder-mid-grey/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
          placeholder="Your organisation"
        />
      </div>

      {/* Enquiry type */}
      <div>
        <label htmlFor="enquiry_type" className="block text-xs uppercase tracking-wider text-mid-grey font-medium mb-2">
          How can I help?
        </label>
        <select
          id="enquiry_type"
          name="enquiry_type"
          className="w-full border border-light-grey rounded-lg px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors bg-white"
        >
          <option value="">Select an option</option>
          <option value="Programme Management Role">Programme Management Role</option>
          <option value="Internship Opportunity">Internship Opportunity</option>
          <option value="Consultancy Enquiry">Consultancy Enquiry</option>
          <option value="General Conversation">General Conversation</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wider text-mid-grey font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`w-full border rounded-lg px-4 py-3 text-sm text-navy placeholder-mid-grey/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors resize-none ${
            errors.message ? 'border-red-400' : 'border-light-grey'
          }`}
          placeholder="Tell me about your programme, organisation, or what you're working on..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-60 text-sm"
      >
        {loading ? (
          'Sending...'
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
