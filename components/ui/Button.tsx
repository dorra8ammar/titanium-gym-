'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'light'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'left'
}: ButtonProps) {
  
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all rounded-full'
  
  const variants = {
    primary: 'bg-gold text-black hover:bg-yellow-300',
    secondary: 'bg-gold-min text-gold border border-border-gold-light hover:bg-gold-soft',
    outline: 'bg-transparent text-gold border border-border-gold-light hover:bg-gold-min',
    light: 'bg-white/5 text-text-gray border border-border-subtle hover:text-gold hover:border-border-gold-light'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  }
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  
  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  )
  
  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {content}
      </Link>
    )
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
    >
      {content}
    </button>
  )
}