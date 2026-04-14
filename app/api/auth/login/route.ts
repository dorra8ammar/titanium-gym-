import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

// Simulated user database (in production, use a real database)
const users: Record<string, {
  id: string
  email: string
  nom: string
  prenom: string
  password: string
}> = {
  'test@titanium-gym.com': {
    id: '1',
    email: 'test@titanium-gym.com',
    nom: 'Dupont',
    prenom: 'Jean',
    password: 'password123', // In production, hash this!
  },
}

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email et mot de passe requis' },
        { status: 400 }
      )
    }

    const user = users[email]

    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: 'Email ou mot de passe incorrect' },
        { status: 401 }
      )
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    const safeUser = {
      id: user.id,
      email: user.email,
      nom: user.nom,
      prenom: user.prenom,
    }

    return NextResponse.json({
      token,
      user: safeUser,
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
