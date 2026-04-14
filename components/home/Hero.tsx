'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Head from 'next/head'

const slides = [
  {
    id: 1,
    image: "/marsa.avif",
    title: "Musculation & Cardio",
    subtitle: "Plateau de musculation 500m²"
  },
  {
    id: 2,
    image: "/Cours_collectifs.avif",
    title: "Cours collectifs",
    subtitle: "Bodypump, RPM, Bodycombat, Yoga"
  },
  {
    id: 3,
    image: "/Vaporium&Sauna.avif",
    title: "Vaporium & Sauna",
    subtitle: "Détente et récupération"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <>
      {/* Balises SEO pour la page */}
      <Head>
        <title>Titanium Gym Sousse | Salle de sport haut de gamme 2500m²</title>
        <meta name="description" content="Titanium Gym à Sousse : plateau musculation 500m², cardio, cours collectifs Bodypump RPM Yoga, sauna et Vaporium inclus. Formules BLUE PASS 24/7 et YELLOW PASS. Ouvert 6h-22h." />
        <meta name="keywords" content="Titanium Gym, salle de sport Sousse, musculation Sousse, cours collectifs Sousse, Bodypump Sousse, salle de sport Tunisie" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://titanium-gym-xi.vercel.app/" />
      </Head>

      <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr] gap-12 py-8 pb-16">
        {/* Left column - Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* H1 principal - important pour SEO */}
          <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
            TITANIUM GYM
          </h1>

          {/* Paragraphe SEO ajouté - texte riche en mots-clés */}
          <div className="bg-gold-min/10 p-5 rounded-xl border border-gold-dim/30">
            <p className="text-text-gray text-sm leading-relaxed">
              <strong className="text-gold">Titanium Gym</strong> est la plus grande salle de sport à Sousse avec <strong className="text-gold">2 500 m²</strong> dédiés au fitness. 
              Notre <strong className="text-gold">plateau de musculation de 500 m²</strong> est équipé des dernières machines. 
              Que vous cherchiez <strong className="text-gold">cardio, cours collectifs Bodypump, RPM, Bodycombat ou Yoga</strong>, nos coachs certifiés vous accompagnent. 
              Le <strong className="text-gold">Vaporium et Sauna</strong> sont inclus dans toutes nos formules. 
              Rejoignez <strong className="text-gold">Titanium Gym</strong> et bénéficiez d&apos;un accès 24/7 avec le <strong className="text-gold">BLUE PASS</strong>.
            </p>
          </div>
          
          <div className="flex items-center gap-3 text-gold bg-gold-min px-5 py-3 rounded-full w-fit border border-gold-dim">
            <i className="fas fa-map-marker-alt"></i>
            <span>Av. de Yasser Arafat, Sousse</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "fa-ruler-combined", text: "Superficie : 2 500 m²" },
              { icon: "fa-heart", text: "Plateau cardio" },
              { icon: "fa-dumbbell", text: "Plateau musculation" },
              { icon: "fa-users", text: "2 Salles de cours" },
              { icon: "fa-bicycle", text: "Studio RPM" },
              { icon: "fa-tachometer-alt", text: "Studio training" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/2 p-3 rounded-xl border border-white/10 hover:border-gold-dim transition-colors">
                <i className={`fas ${feature.icon} text-gold text-lg w-6`}></i>
                <span className="text-text-gray text-sm">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 bg-gold-min p-3 px-5 rounded-full w-fit border border-gold-dim">
            <i className="fas fa-hot-tub text-gold"></i>
            <span className="text-text-gray text-sm">Vaporium & Sauna inclus</span>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/offres?pass=blue" className="bg-gold-min text-gold px-6 py-2 rounded-full text-blue-400 uppercase tracking-wider border border-gold-dim hover:bg-gold-soft hover:border-gold transition-all hover:-translate-y-1">
              BLUE PASS
            </Link>
            <Link href="/offres?pass=yellow" className="bg-gold-min text-gold px-6 py-2 rounded-full text-yellow-400 uppercase tracking-wider border border-gold-dim hover:bg-gold-soft hover:border-gold transition-all hover:-translate-y-1">
              YELLOW PASS
            </Link>
          </div>
        </motion.div>

        {/* Right column - Slider */}
        <div className="relative h-100 rounded-2xl overflow-hidden border border-white/10">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-800 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/80 to-transparent">
                <h3 className="text-gold text-2xl font-medium">{slide.title}</h3>
                <p className="text-text-gray text-sm">{slide.subtitle}</p>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-5 right-6 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-gold scale-125 shadow-glow' 
                    : 'bg-white/30 hover:bg-gold-dim'
                }`}
                aria-label={`Aller à la slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-5 pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-black-deep/60 backdrop-blur-sm border border-gold-dim text-gold hover:bg-gold/20 transition-all pointer-events-auto"
              aria-label="Slide précédente"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-black-deep/60 backdrop-blur-sm border border-gold-dim text-gold hover:bg-gold/20 transition-all pointer-events-auto"
              aria-label="Slide suivante"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}