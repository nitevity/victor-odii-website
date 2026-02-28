'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProfileImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  shape?: 'rectangle' | 'circle'
}

export default function ProfileImage({
  src,
  alt,
  width,
  height,
  className = '',
  shape = 'rectangle',
}: ProfileImageProps) {
  const [error, setError] = useState(false)

  const borderRadius = shape === 'circle' ? 'rounded-full' : 'rounded-2xl'

  if (error) {
    return (
      <div
        className={`bg-navy flex items-center justify-center border-2 border-gold/40 ${borderRadius} ${className}`}
        style={{ width, height }}
        aria-label={alt}
      >
        <span
          className="font-serif text-gold font-bold select-none"
          style={{ fontSize: Math.min(width, height) * 0.28 }}
        >
          VO
        </span>
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden border-2 border-gold/40 ${borderRadius} ${className}`}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${width}px`}
        className="object-cover"
        onError={() => setError(true)}
        unoptimized
        priority
      />
    </div>
  )
}
