'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Erreur lors de l'inscription")
        return
      }

      // Stocker le token et rediriger
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      router.push('/dashboard')
    } catch (err) {
      setError("Erreur lors de l'inscription")
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
          { label: 'INSCRIPTION', active: true }
        ]} 
      />

      <div className="max-w-md mx-auto my-16">
        <div className="bg-black-card p-10 rounded-2xl border border-border-subtle">
          <h1 className="text-3xl font-semibold text-white mb-8 text-center">
            <span className="text-gold">INSCRIPTION</span>
          </h1>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gold text-sm font-medium mb-2">Prénom</label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="w-full bg-black-deep border border-border-subtle rounded-lg px-4 py-3 text-white placeholder-text-gray focus:border-gold focus:outline-none transition-colors"
                  placeholder="Jean"
                />
              </div>
              <div>
                <label className="block text-gold text-sm font-medium mb-2">Nom</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full bg-black-deep border border-border-subtle rounded-lg px-4 py-3 text-white placeholder-text-gray focus:border-gold focus:outline-none transition-colors"
                  placeholder="Dupont"
                />
              </div>
            </div>

            <div>
              <label className="block text-gold text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black-deep border border-border-subtle rounded-lg px-4 py-3 text-white placeholder-text-gray focus:border-gold focus:outline-none transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-gold text-sm font-medium mb-2">Mot de passe</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-black-deep border border-border-subtle rounded-lg px-4 py-3 text-white placeholder-text-gray focus:border-gold focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-gold text-sm font-medium mb-2">Confirmer le mot de passe</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
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
              {loading ? 'Inscription...' : "S'INSCRIRE"}
            </button>
          </form>

          <p className="text-center text-text-gray text-sm mt-6">
            Déjà inscrit?{' '}
            <Link href="/login" className="text-gold hover:text-gold-soft transition-colors">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
