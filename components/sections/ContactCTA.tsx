import Button from '../ui/Button'

export default function ContactCTA() {
  return (
    <section className="bg-gold py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-navy text-3xl lg:text-4xl font-bold mb-4">
          Working on an EU Programme? Let&rsquo;s Talk.
        </h2>
        <p className="text-navy/75 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          I am available for programme management internships and roles within implementing
          organisations managing EU-funded programmes. Based in Austria, open to international
          engagement.
        </p>
        <Button href="/contact" variant="navy" size="lg">
          Start a Conversation
        </Button>
      </div>
    </section>
  )
}
