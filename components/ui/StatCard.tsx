interface StatCardProps {
  value: string
  label: string
  className?: string
}

export default function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <p className="font-serif text-4xl lg:text-5xl font-bold text-gold mb-1">{value}</p>
      <p className="text-sm uppercase tracking-wider text-white/70">{label}</p>
    </div>
  )
}
