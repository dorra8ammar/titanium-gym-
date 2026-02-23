'use client'

import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
  active?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="py-5 text-xs text-text-darkgray border-b border-border-subtle mb-5 uppercase tracking-wider">
      {items.map((item, index) => (
        <span key={index}>
          {item.href && !item.active ? (
            <Link href={item.href} className="text-text-gray hover:text-gold transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className={item.active ? 'text-gold' : ''}>{item.label}</span>
          )}
          {index < items.length - 1 && (
            <i className="fas fa-chevron-right mx-2 text-gold-dim text-xs"></i>
          )}
        </span>
      ))}
    </div>
  )
}