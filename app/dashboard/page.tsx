'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'

interface User {
  id: string
  email: string
  nom: string
  prenom: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const userStr = localStorage.getItem('user')
    if (!userStr) {
      router.push('/login')
      return
    }

    try {
      const userData = JSON.parse(userStr)
      setUser(userData)
    } catch {
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/')
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-10 max-w-325 py-20 text-center">
        <div className="text-gold">Chargement...</div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="container mx-auto px-4 sm:px-10 max-w-325">
      <Breadcrumb 
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'TABLEAU DE BORD', active: true }
        ]} 
      />

      <div className="my-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="bg-black-card rounded-2xl p-8 border border-border-subtle h-fit">
            <h2 className="text-gold text-2xl font-semibold mb-6">Profil</h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-text-gray text-sm">Nom</p>
                <p className="text-white font-medium">{user.prenom} {user.nom}</p>
              </div>
              
              <div>
                <p className="text-text-gray text-sm">Email</p>
                <p className="text-white font-medium">{user.email}</p>
              </div>

              <div className="pt-6 border-t border-border-subtle">
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 px-4 py-3 rounded-lg transition-colors"
                >
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome card */}
            <div className="bg-black-card rounded-2xl p-10 border border-border-subtle">
              <h1 className="text-3xl font-semibold text-white mb-4">
                Bienvenue, <span className="text-gold">{user.prenom}</span>!
              </h1>
              <p className="text-text-gray">
                Explorez vos options d&apos;abonnement et g\u00e9rez votre compte Titanium Gym.\n
              </p>
            </div>

            {/* Quick links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href="/offres"
                className="bg-black-card rounded-2xl p-8 border border-border-subtle hover:border-gold-dim transition-all group"
              >
                <i className="fas fa-dumbbell text-gold text-3xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 className="text-white font-semibold mb-2">Nos Offres</h3>
                <p className="text-text-gray text-sm">D\u00e9couvrez nos formules d&apos;abonnement</p>\n
              </Link>

              <Link
                href="/activites"
                className="bg-black-card rounded-2xl p-8 border border-border-subtle hover:border-gold-dim transition-all group"
              >
                <i className="fas fa-heart text-gold text-3xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 className="text-white font-semibold mb-2">Activités</h3>
                <p className="text-text-gray text-sm">Consultez toutes nos activités</p>
              </Link>

              <Link
                href="/planning"
                className="bg-black-card rounded-2xl p-8 border border-border-subtle hover:border-gold-dim transition-all group"
              >
                <i className="fas fa-calendar text-gold text-3xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 className="text-white font-semibold mb-2">Planning</h3>
                <p className="text-text-gray text-sm">Consultez le planning des cours</p>
              </Link>

              <Link
                href="/"
                className="bg-black-card rounded-2xl p-8 border border-border-subtle hover:border-gold-dim transition-all group"
              >
                <i className="fas fa-home text-gold text-3xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 className="text-white font-semibold mb-2">Accueil</h3>
                <p className="text-text-gray text-sm">Retourner à l&apos;accueil</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
