'use client'

import { useState } from 'react'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function CGStrengthPage() {
  const [zoneActive, setZoneActive] = useState('cardio')

  const zones = {
    cardio: {
      titre: "CARDIO ZONE",
      description: "Boostez votre endurance et brûlez des calories dans notre espace dédié, équipé des dernières technologies de fitness. Tapis de course, vélos, rameurs... chaque séance est un défi pour votre forme. Venez repousser vos limites dans un environnement dynamique et motivant !",
      features: [
        "Tapis de course dernière génération",
        "Vélos interactifs et rameurs",
        "Elliptiques et machines de cardio"
      ],
      image: "/CARDIO_ZONE.jpg"
    },
    strength: {
      titre: "STRENGTH ZONE",
      description: "Développez votre force et sculptez votre corps dans notre espace dédié au renforcement musculaire et aux entraînements de résistance. Équipements de pointe et ambiance motivante pour des séances intensives adaptées à tous les niveaux.",
      features: [
        "Machines de musculation guidées",
        "Haltères et barres olympiques",
        "Racks et cages à squat"
      ],
      image: "/STRENGTH_ZONE.avif"
    },
    functional: {
      titre: "FUNCTIONAL TRAINING ZONE",
      description: "Participez à nos cours d'entraînement fonctionnel pour améliorer votre mobilité, votre équilibre et votre force. Chaque séance est conçue pour vous aider à renforcer les mouvements essentiels du quotidien.",
      features: [
        "TRX et kettlebells",
        "Boxes de cross training",
        "Équipements de mobilité"
      ],
      image: "/FUNCTIONAL_TRAINING_ZONE.avif"
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-10 max-w-325">
      <Breadcrumb 
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'TG STRENGTH', active: true }
        ]} 
      />

      {/* Hero image */}
      <div className="relative h-75 lg:h-100 rounded-2xl overflow-hidden border border-border-subtle mb-8">
        <Image 
          src="/Titanium_Gym.avif"
          alt="TG Strength"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-3">
              <span className="text-gold">TITANIUM GYM</span> STRENGTH
            </h1>
            <p className="text-text-gray text-lg">Performance • Puissance • Innovation</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="text-center max-w-3xl mx-auto my-12">
        <p className="text-text-gray text-lg leading-relaxed">
          Vivez avec Titanium Gym Strength, une nouvelle expérience fitness, alliant performance et puissance.
          Un concept innovant, des équipements spécialisés et un espace conçu pour repousser vos limites !
        </p>
        <p className="text-gold mt-4">
          <i className="fas fa-map-marker-alt mr-2"></i>
          Situé à la Marsa, ce club s&apos;étend sur 600 m² et offre une panoplie d&apos;équipements de pointe.
        </p>
      </div>

      {/* Bandes des zones */}
      <div className="flex flex-wrap justify-center gap-6 my-10">
        {Object.entries(zones).map(([key]) => (
          <div 
            key={key}
            className="bg-black-card border border-border-gold-light rounded-full px-8 py-4 flex items-center gap-4 hover:border-gold hover:-translate-y-1 transition-all cursor-pointer"
            onClick={() => setZoneActive(key)}
          >
            <i className={`fas ${
              key === 'cardio' ? 'fa-heartbeat' : key === 'strength' ? 'fa-dumbbell' : 'fa-bolt'
            } text-gold text-2xl`}></i>
            <span className="text-white font-medium">
              {key === 'cardio' ? '1 CARDIO ZONE' : key === 'strength' ? '1 STRENGTH ZONE' : '1 FUNCTIONAL TRAINING ZONE'}
            </span>
          </div>
        ))}
      </div>

      {/* Tabs zones */}
      <div className="flex justify-center gap-4 my-8 flex-wrap">
        {Object.keys(zones).map((key) => (
          <button
            key={key}
            onClick={() => setZoneActive(key)}
            className={`px-8 py-3 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
              zoneActive === key
                ? 'bg-gold text-black'
                : 'bg-transparent text-text-gray border border-border-gold-light hover:text-gold'
            }`}
          >
            {key === 'cardio' ? 'CARDIO ZONE' : key === 'strength' ? 'STRENGTH ZONE' : 'FUNCTIONAL TRAINING ZONE'}
          </button>
        ))}
      </div>

      {/* Contenu zone active */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
        <div>
          <h2 className="text-gold text-4xl font-semibold mb-6">{zones[zoneActive as keyof typeof zones].titre}</h2>
          <p className="text-text-gray text-lg leading-relaxed mb-8">{zones[zoneActive as keyof typeof zones].description}</p>
          <div className="space-y-4">
            {zones[zoneActive as keyof typeof zones].features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/2 p-4 rounded-full border border-border-subtle w-fit">
                <i className="fas fa-check-circle text-gold text-xl"></i>
                <span className="text-text-gray">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border-2 border-border-gold-light h-100">
          <Image 
            src={zones[zoneActive as keyof typeof zones].image}
            alt={zones[zoneActive as keyof typeof zones].titre}
            width={600}
            height={400}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* Classes section */}
      <div className="my-16">
        <div className="flex items-center gap-4 mb-8">
          <i className="fas fa-dumbbell text-gold text-3xl"></i>
          <h2 className="text-3xl font-medium text-white">CG STRENGTH CLASSES</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { titre: "KB WORKOUT", desc: "Le Kettlebell Workout est un entraînement fonctionnel avec des kettlebells, combinant force, endurance et mobilité." },
            { titre: "TRX", desc: "Le TRX est un système d'entraînement en suspension utilisant le poids du corps pour renforcer muscles, stabilité et flexibilité." },
            { titre: "CROSS FORCE", desc: "Entraînement intense combinant force fonctionnelle et cardio. Utilisation de poids libres, kettlebells et mouvements au poids du corps." }
          ].map((classe, index) => (
            <div key={index} className="bg-black-card p-8 rounded-xl border border-border-subtle hover:border-border-gold-light hover:-translate-y-1 transition-all">
              <h3 className="text-gold text-2xl font-medium mb-4">{classe.titre}</h3>
              <p className="text-text-gray text-sm leading-relaxed">{classe.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Green Pass section */}
      <div className="bg-black-card rounded-2xl p-10 border border-border-gold-light my-12">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <h2 className="text-gold text-3xl font-medium">GREEN PASS-SPORT</h2>
          <span className="bg-gold text-black px-6 py-2 rounded-full font-semibold text-sm">EXCLUSIVITÉ MARSA</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-text-gray mb-6">Ne réfléchissez pas trop, réfléchissez mieux et optez pour le prélèvement bancaire automatique.</p>
            <div className="bg-gold-min p-6 rounded-xl border-l-4 border-gold">
              <p className="text-text-gray"><span className="text-gold font-semibold">Pour le Green Pass-Sport par prélèvement :</span></p>
              <p className="text-text-gray mt-2">
                un montant de <span className="text-gold font-semibold">39 DT</span> sera prélevé automatiquement de votre compte bancaire toutes les 2 semaines, avec un engagement minimal d&apos;un an. Le premier prélèvement sera effectué après 8 semaines. Un paiement initial de <span className="text-gold font-semibold">160 DT</span>, hors frais d&apos;inscription, sera requis lors de l&apos;inscription.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { icon: "fa-clock", text: "Gain de temps" },
              { icon: "fa-coins", text: "Gain d&apos;argent" },
              { icon: "fa-brain", text: "Tranquillité d'esprit" },
              { icon: "fa-building", text: "Entreprise • MY CG" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <i className={`fas ${item.icon} text-gold text-xl`}></i>
                <span className="text-text-gray">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}