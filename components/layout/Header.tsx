'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface User {
  id: string
  email: string
  nom: string
  prenom: string
}

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [mounted, setMounted] = useState(false)
  
  const navItems = [
    { name: 'ACCUEIL', path: '/' },
    { name: 'ACTIVITÉS', path: '/activites' },
    { name: 'OFFRES', path: '/offres' },
    { name: 'PLANNING', path: '/planning' },
    { name: 'TG STRENGTH', path: '/cg-strength' },
    { name: 'TG ACADEMY', path: '/cg-academy' },
  ]

  useEffect(() => {
    if (!mounted) {
      const userStr = localStorage.getItem('user')
      if (userStr) {
        try {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setUser(JSON.parse(userStr))
        } catch {
          localStorage.removeItem('user')
        }
      }
      setMounted(true)
    }
  }, [mounted])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    router.push('/')
  }

  return (
    <header className="bg-black-deep/98 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-10 max-w-325">
        <nav className="flex justify-between items-center py-4 flex-wrap gap-4">
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

          {/* Auth buttons */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link 
                  href="/dashboard" 
                  className="text-sm text-gold hover:text-gold-soft transition-colors"
                >
                  {user.prenom}
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 px-3 py-1 rounded text-sm transition-colors"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="text-sm text-gold hover:text-gold-soft transition-colors"
                >
                  Connexion
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-white text-black px-4 py-2 rounded font-semibold text-sm hover:bg-slate-100 transition-colors border border-white/20"
                >
                  S'inscrire
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}