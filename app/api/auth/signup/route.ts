import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'

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

// Simple hash function for development (use bcrypt in production!)
function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex')
}

export async function POST(request: NextRequest) {
  try {
    const { nom, prenom, email, password } = await request.json()

    if (!nom || !prenom || !email || !password) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    if (users[email]) {
      return NextResponse.json(
        { error: 'Cet email est déjà utilisé' },
        { status: 409 }
      )
    }

    // Create new user
    const userId = crypto.randomUUID()
    const hashedPassword = hashPassword(password)

    const newUser = {
      id: userId,
      email,
      nom,
      prenom,
      password: hashedPassword,
    }
    users[email] = newUser

    // Generate JWT token
    const token = jwt.sign(
      { id: userId, email },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    const safeUser = {
      id: userId,
      email,
      nom,
      prenom,
    }

    return NextResponse.json({
      token,
      user: safeUser,
    }, { status: 201 })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
