import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'  // ✅ AJOUT
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Titanium Gym Sousse | Salle de sport haut de gamme',
  description: 'La plus grande salle de sport à Sousse avec 2500m², plateau musculation 500m², cours collectifs, sauna inclus.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body className={`${inter.className} bg-black-deep text-text-offwhite antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      {/* ✅ Google Analytics - Ajouté directement */}
      <GoogleAnalytics gaId="G-VF54JC5J7B" />
    </html>
  )
}