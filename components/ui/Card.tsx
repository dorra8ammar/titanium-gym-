'use client'

import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  children?: ReactNode
  title?: string
  subtitle?: string
  description?: string
  image?: string
  imageAlt?: string
  icon?: ReactNode
  badge?: string
  badgeColor?: string
  footer?: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  hoverable?: boolean
  bordered?: boolean
}

// 👇 WRAPPER DÉFINI À L'EXTÉRIEUR DU COMPOSANT PRINCIPAL
interface WrapperProps {
  children: ReactNode
  href?: string
  onClick?: () => void
}

const Wrapper = ({ children, href, onClick }: WrapperProps) => {
  if (href) {
    return (
      <Link href={href} className="block h-full">
        {children}
      </Link>
    )
  }
  if (onClick) {
    return (
      <div onClick={onClick} className="h-full cursor-pointer">
        {children}
      </div>
    )
  }
  return <div className="h-full">{children}</div>
}

export default function Card({
  children,
  title,
  subtitle,
  description,
  image,
  imageAlt = '',
  icon,
  badge,
  badgeColor = 'gold',
  footer,
  onClick,
  href,
  className = '',
  hoverable = true,
  bordered = true
}: CardProps) {
  
  const baseStyles = 'bg-black-card rounded-xl overflow-hidden'
  const borderStyles = bordered ? 'border border-border-subtle' : ''
  const hoverStyles = hoverable ? 'transition-all hover:border-border-gold-light hover:-translate-y-1' : ''
  const clickableStyles = (onClick || href) ? 'cursor-pointer' : ''
  
  const cardStyles = `${baseStyles} ${borderStyles} ${hoverStyles} ${clickableStyles} ${className}`
  
  const badgeColors: Record<string, string> = {
    gold: 'bg-gold text-black',
    blue: 'bg-blue-500 text-white',
    red: 'bg-red-500 text-white',
    green: 'bg-green-500 text-white',
    purple: 'bg-purple-500 text-white'
  }
  
  return (
    <Wrapper href={href} onClick={onClick}>
      <div className={cardStyles}>
        {image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image}
              alt={imageAlt || title || ''}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        
        <div className="p-6">
          {(icon || badge) && (
            <div className="flex items-center justify-between mb-4">
              {icon && <div className="text-gold text-xl">{icon}</div>}
              {badge && (
                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                  badgeColors[badgeColor] || badgeColors.gold
                }`}>
                  {badge}
                </span>
              )}
            </div>
          )}
          
          {title && <h3 className="text-gold text-xl font-medium mb-2">{title}</h3>}
          {subtitle && <p className="text-text-gray text-sm mb-3">{subtitle}</p>}
          {description && <p className="text-text-darkgray text-sm leading-relaxed">{description}</p>}
          
          {children}
        </div>
        
        {footer && (
          <div className="px-6 pb-6 pt-2 border-t border-border-subtle">
            {footer}
          </div>
        )}
      </div>
    </Wrapper>
  )
}