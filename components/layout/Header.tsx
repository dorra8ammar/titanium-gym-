'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  
  const navItems = [
    { name: 'ACCUEIL', path: '/' },
    { name: 'ACTIVITÉS', path: '/activites' },
    { name: 'OFFRES', path: '/offres' },
    { name: 'PLANNING', path: '/planning' },
    { name: 'TG STRENGTH', path: '/cg-strength' },
    { name: 'TG ACADEMY', path: '/cg-academy' },
  ]

  return (
    <header className="bg-black-deep/98 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-10 max-w-[1300px]">
        <nav className="flex justify-between items-center py-4 flex-wrap">
          <Link href="/" className="flex items-center gap-2">
            <i className="fas fa-dumbbell text-gold text-3xl"></i>
            <h1 className="text-white text-2xl font-semibold">
              TITANIUM <span className="text-gold">GYM</span>
            </h1>
          </Link>
          
          <ul className="flex gap-5 flex-wrap items-center">
            {navItems.map((item, index) => (
              <li key={item.path} className="flex items-center gap-5">
                <Link 
                  href={item.path}
                  className={`text-sm uppercase tracking-wider pb-1 border-b transition-colors ${
                    pathname === item.path 
                      ? 'text-gold border-gold-dim' 
                      : 'text-text-gray hover:text-gold border-transparent hover:border-gold-dim'
                  }`}
                >
                  {item.name}
                </Link>
                {index < navItems.length - 1 && (
                  <span className="text-gold-dim text-xs opacity-50 hidden sm:inline">•</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}