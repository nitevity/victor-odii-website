interface TagProps {
  children: React.ReactNode
  variant?: 'navy' | 'gold' | 'green' | 'grey' | 'outline'
  className?: string
}

const variants = {
  navy: 'bg-navy text-white',
  gold: 'bg-gold/15 text-navy border border-gold/30',
  green: 'bg-success-green/10 text-success-green border border-success-green/30',
  grey: 'bg-light-grey text-mid-grey',
  outline: 'bg-transparent text-mid-grey border border-light-grey',
}

export default function Tag({ children, variant = 'navy', className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
