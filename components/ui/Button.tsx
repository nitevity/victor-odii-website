import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'navy'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  target?: string
  rel?: string
  disabled?: boolean
}

const variants = {
  primary: 'bg-gold text-navy font-semibold hover:bg-gold/90 border-2 border-gold',
  outline: 'bg-transparent text-gold border-2 border-gold hover:bg-gold/10',
  navy: 'bg-navy text-white font-semibold hover:bg-navy/90 border-2 border-navy',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  target,
  rel,
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg tracking-wide transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
