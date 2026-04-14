'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Erreur de connexion')
        return
      }

      // Stocker le token
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      // Rediriger vers le tableau de bord
      router.push('/dashboard')
    } catch (err) {
      setError('Erreur lors de la connexion')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-10 max-w-325">
      <Breadcrumb 
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'CONNEXION', active: true }
        ]} 
      />

      <div className="max-w-md mx-auto my-16">
        <div className="bg-black-card p-10 rounded-2xl border border-border-subtle">
          <h1 className="text-3xl font-semibold text-white mb-8 text-center">
            <span className="text-gold">CONNEXION</span>
          </h1>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gold text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black-deep border border-border-subtle rounded-lg px-4 py-3 text-white placeholder-text-gray focus:border-gold focus:outline-none transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-gold text-sm font-medium mb-2">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-black-deep border border-border-subtle rounded-lg px-4 py-3 text-white placeholder-text-gray focus:border-gold focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-slate-100 disabled:opacity-50 transition-all border border-white/20"
            >
              {loading ? 'Connexion...' : 'SE CONNECTER'}
            </button>
          </form>

          <p className="text-center text-text-gray text-sm mt-6">
            Pas encore inscrit?{' '}
            <Link href="/signup" className="text-gold hover:text-gold-soft transition-colors">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
