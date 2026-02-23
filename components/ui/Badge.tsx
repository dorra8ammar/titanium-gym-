import { ReactNode } from 'react'
import Link from 'next/link'

interface BadgeProps {
  children: ReactNode
  variant?: 'gold' | 'outline' | 'subtle' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  icon?: ReactNode
  className?: string
  removable?: boolean
  onRemove?: () => void
}

export default function Badge({
  children,
  variant = 'subtle',
  size = 'md',
  href,
  onClick,
  icon,
  className = '',
  removable = false,
  onRemove
}: BadgeProps) {
  
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-all'
  
  const variants = {
    gold: 'bg-gold text-black',
    outline: 'bg-transparent text-gold border border-border-gold-light hover:bg-gold-min',
    subtle: 'bg-gold-min text-gold border border-border-gold-light',
    dark: 'bg-black-card text-text-gray border border-border-subtle hover:border-border-gold-light hover:text-gold'
  }
  
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base'
  }
  
  const clickableStyles = (onClick || href) ? 'cursor-pointer hover:bg-gold-soft' : ''
  
  const badgeStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${clickableStyles} ${className}`
  
  const content = (
    <>
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onRemove?.()
          }}
          className="ml-2 hover:text-white focus:outline-none"
          aria-label="Remove"
        >
          <i className="fas fa-times text-xs"></i>
        </button>
      )}
    </>
  )
  
  if (href) {
    return (
      <Link href={href} className={badgeStyles}>
        {content}
      </Link>
    )
  }
  
  if (onClick) {
    return (
      <button onClick={onClick} className={badgeStyles}>
        {content}
      </button>
    )
  }
  
  return (
    <span className={badgeStyles}>
      {content}
    </span>
  )
}