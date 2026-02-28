interface CardProps {
  children: React.ReactNode
  goldTopBorder?: boolean
  className?: string
  hover?: boolean
}

export default function Card({
  children,
  goldTopBorder = false,
  className = '',
  hover = false,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-light-grey overflow-hidden ${
        hover ? 'transition-shadow hover:shadow-md' : ''
      } ${className}`}
    >
      {goldTopBorder && <div className="h-1 bg-gold" />}
      <div className="p-6">{children}</div>
    </div>
  )
}
