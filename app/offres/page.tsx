'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { useSearchParams } from 'next/navigation'

// Données des offres
const tarifsData = {
  blue: {
    nom: "BLUE PASS-SPORT",
    douze: "1 510 DT",
    quinze: "940 DT",
    dixhuit: "570 DT",
    vingtun: "210 DT",
    prelevement: {
      montant: "58 DT",
      initial: "230 DT"
    }
  },
  yellow: {
    nom: "YELLOW PASS-SPORT",
    douze: "1 200 DT",
    quinze: "750 DT",
    dixhuit: "450 DT",
    vingtun: "180 DT",
    prelevement: {
      montant: "46 DT",
      initial: "185 DT"
    }
  },
  green: {
    nom: "GREEN PASS-SPORT",
    douze: "950 DT",
    quinze: "600 DT",
    dixhuit: "360 DT",
    vingtun: "140 DT",
    prelevement: {
      montant: "36 DT",
      initial: "150 DT"
    }
  }
}

// Données des clubs pour le slider
const clubsData = [
  {
    ville: "SOUSSE",
    adresse: "Centre Commercial Tej Marhaba, 4000 Sousse",
    image: "/sousse.avif"
  },
  {
    ville: "TUNIS",
    adresse: "Centre Ville, 1000 Tunis",
    image: "/tunis.avif"
  },
  {
    ville: "LA MARSA",
    adresse: "Route de La Marsa",
    image: "/marsa.avif"
  },
  {
    ville: "ENNASR",
    adresse: "Ennasr 2",
    image: "/ennasr.avif"
  },
  {
    ville: "JARDINS D'EL MENZAH",
    adresse: "El Menzah",
    image: "/menzah.avif"
  },
  {
    ville: "LAC 2",
    adresse: "Les Berges du Lac",
    image: "/lac2.avif"
  }
]

// --- NOUVEAU COMPOSANT SÉPARÉ POUR LA PARTIE AVEC useSearchParams ---
function OffresContent() {
  const searchParams = useSearchParams()
  const [passActif, setPassActif] = useState('blue')
  const [clubIndex, setClubIndex] = useState(0)

  useEffect(() => {
    const pass = searchParams.get('pass')
    if (pass && ['blue', 'yellow', 'green'].includes(pass)) {
      setPassActif(pass)
    }
  }, [searchParams])

  useEffect(() => {
    const timer = setInterval(() => {
      setClubIndex((prev) => (prev + 1) % clubsData.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextClub = () => setClubIndex((prev) => (prev + 1) % clubsData.length)
  const prevClub = () => setClubIndex((prev) => (prev - 1 + clubsData.length) % clubsData.length)

  const data = tarifsData[passActif as keyof typeof tarifsData]

  return (
    <>
      {/* Layout 2 colonnes */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 py-10">
        {/* Colonne gauche - Liste des pass */}
        <div className="bg-black-card rounded-2xl p-8 border border-border-subtle h-fit sticky top-24">
          <h3 className="text-gold text-sm font-medium tracking-widest uppercase pb-4 border-b border-border-subtle mb-4">
            NOS PASS
          </h3>
          {['blue', 'yellow', 'green'].map((pass) => (
            <button
              key={pass}
              onClick={() => setPassActif(pass)}
              className={`w-full text-left p-4 mb-2 border rounded-xl transition-all ${
                passActif === pass
                  ? 'border-gold bg-gold-min text-gold'
                  : 'border-border-subtle text-text-gray hover:border-border-gold-light hover:text-gold'
              }`}
            >
              {tarifsData[pass as keyof typeof tarifsData].nom}
            </button>
          ))}
        </div>

        {/* Colonne droite - Contenu */}
        <div>
          {/* Tableau des tarifs */}
          <div className="bg-black-card rounded-2xl p-8 border border-border-subtle mb-8">
            <h3 className="text-gold text-2xl font-medium mb-5">TARIFS {data.nom}</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-gold-light">
                  <th className="text-left py-3 text-gold text-sm tracking-wider"></th>
                  <th className="text-left py-3 text-gold text-sm tracking-wider">12 MOIS</th>
                  <th className="text-left py-3 text-gold text-sm tracking-wider">15 MOIS</th>
                  <th className="text-left py-3 text-gold text-sm tracking-wider">18 MOIS</th>
                  <th className="text-left py-3 text-gold text-sm tracking-wider">21 MOIS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-subtle">
                  <td className="py-4 text-gold font-medium">{data.nom}</td>
                  <td className="py-4 text-gold">{data.douze}</td>
                  <td className="py-4 text-gold">{data.quinze}</td>
                  <td className="py-4 text-gold">{data.dixhuit}</td>
                  <td className="py-4 text-gold">{data.vingtun}</td>
                </tr>
                <tr>
                  <td className="py-4 text-gold font-medium">PRÉLÈVEMENT AUTOMATIQUE*</td>
                  <td colSpan={4} className="py-4 text-gold">{data.prelevement.montant} / 2 semaines</td>
                </tr>
              </tbody>
            </table>
            <p className="text-text-darkgray text-sm italic mt-4">* Voir détails ci-dessous</p>
          </div>

          {/* Bloc prélèvement */}
          <div className="bg-gradient-to-br from-black-card to-[#0A0A12] rounded-xl p-8 border border-border-gold-light mb-8">
            <h3 className="flex items-center gap-3 text-gold text-xl font-medium mb-4">
              <i className="fas fa-credit-card"></i>
              PRÉLÈVEMENT AUTOMATIQUE
            </h3>
            <p className="text-text-gray">
              Pour le <span className="text-gold font-medium">{data.nom} par prélèvement</span> : 
              un montant de <span className="text-gold font-medium">{data.prelevement.montant}</span> sera prélevé 
              automatiquement de votre compte bancaire toutes les 2 semaines, avec un engagement minimal d'un an. 
              Le premier prélèvement sera effectué après 8 semaines. Un paiement initial de 
              <span className="text-gold font-medium"> {data.prelevement.initial}</span>, hors frais d'inscription, 
              sera requis lors de l'inscription.
            </p>
          </div>

          {/* Statistiques plateaux */}
          <div className="mb-8">
            <h2 className="flex items-center gap-4 text-2xl font-medium text-white mb-6">
              <i className="fas fa-dumbbell text-gold text-3xl"></i>
              NOMBRE DE PLATEAUX D'ACTIVITÉS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "fa-heartbeat", label: "Plateau cardio", value: "11" },
                { icon: "fa-users", label: "Cours collectifs", value: "17" },
                { icon: "fa-crosshairs", label: "Cours cross", value: "10" },
                { icon: "fa-swimmer", label: "Piscine", value: "2" },
                { icon: "fa-hot-tub", label: "Sauna", value: "12" },
                { icon: "fa-wind", label: "Vaporium", value: "11" },
                { icon: "fa-chart-line", label: "Cours training", value: "10" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-4 py-3 border-b border-border-subtle">
                  <div className="w-10 h-10 rounded-full bg-gold-min border border-border-gold-light flex items-center justify-center text-gold">
                    <i className={`fas ${stat.icon}`}></i>
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <span className="text-text-gray">{stat.label}</span>
                    <span className="text-gold text-xl font-medium">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions de vente */}
          <div className="mb-8">
            <h2 className="flex items-center gap-4 text-2xl font-medium text-white mb-6">
              <i className="fas fa-file-contract text-gold"></i>
              CONDITIONS DE VENTE
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-text-gray border-b border-border-subtle pb-3">
                <i className="fas fa-check-circle text-gold text-lg"></i>
                Les frais d'inscription de <span className="text-gold font-medium">45 DT</span> sont payés uniquement lors de la première inscription.
              </li>
              <li className="flex items-center gap-4 text-text-gray border-b border-border-subtle pb-3">
                <i className="fas fa-times-circle text-gold text-lg"></i>
                Les abonnements ne sont ni remboursables ni transférables.
              </li>
              <li className="flex items-center gap-4 text-text-gray border-b border-border-subtle pb-3">
                <i className="fas fa-id-card text-gold text-lg"></i>
                En cas de perte, la carte membre sera remplacée moyennant <span className="text-gold font-medium">30 DT</span>.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slider clubs */}
      <div className="my-16">
        <div className="flex items-center gap-4 mb-8">
          <i className="fas fa-map-marked-alt text-gold text-3xl"></i>
          <h2 className="text-2xl font-medium text-white">NOS CLUBS EN TUNISIE</h2>
        </div>

        <div className="relative h-[450px] rounded-2xl overflow-hidden border border-border-subtle">
          {clubsData.map((club, index) => (
            <div
              key={club.ville}
              className={`absolute inset-0 transition-opacity duration-800 ${
                index === clubIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={club.image}
                alt={club.ville}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <i className="fas fa-map-marker-alt text-gold text-2xl"></i>
                  <h3 className="text-gold text-3xl font-semibold">{club.ville}</h3>
                </div>
                <p className="text-text-gray">{club.adresse}</p>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-5 right-6 flex gap-3 z-10">
            {clubsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setClubIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === clubIndex 
                    ? 'bg-gold scale-125 shadow-glow' 
                    : 'bg-white/30 hover:bg-gold-dim'
                }`}
              />
            ))}
          </div>

          {/* Flèches */}
          <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
            <button
              onClick={prevClub}
              className="w-11 h-11 rounded-full bg-black-deep/70 backdrop-blur-sm border border-border-gold-light text-gold hover:bg-gold/20 transition-all pointer-events-auto"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextClub}
              className="w-11 h-11 rounded-full bg-black-deep/70 backdrop-blur-sm border border-border-gold-light text-gold hover:bg-gold/20 transition-all pointer-events-auto"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

// --- COMPOSANT PRINCIPAL (page) ---
export default function OffresPage() {
  return (
    <div className="container mx-auto px-4 sm:px-10 max-w-[1300px]">
      <Breadcrumb 
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'OFFRES', active: true }
        ]} 
      />

      {/* Bandeau titre + image */}
      <div className="flex flex-col lg:flex-row items-center gap-8 my-8">
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
            NOS <span className="text-gold">OFFRES</span><br />POUR VOUS
          </h1>
        </div>
        <div className="w-full lg:w-[500px] h-[300px] rounded-xl overflow-hidden border-2 border-border-gold-light">
          <Image 
            src="/Coach_Titanium_Gym.jpg"
            alt="Coach Titanium Gym"
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* On enveloppe la partie dynamique dans Suspense avec useSearchParams */}
      <Suspense fallback={
        <div className="py-20 text-center">
          <div className="text-gold text-xl">Chargement des offres...</div>
        </div>
      }>
        <OffresContent />
      </Suspense>
    </div>
  )
}