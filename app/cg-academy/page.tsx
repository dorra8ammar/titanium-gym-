'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function CGAcademyPage() {
  const [partenaireActif, setPartenaireActif] = useState('partenaire')
  const [slideIndex, setSlideIndex] = useState(0)

  const formations = [
    {
      titre: "CERTIFIED PERSONAL TRAINER",
      description: "Que vous débutiez dans le coaching ou que vous soyez un professionnel confirmé, cette certification vous apporte les connaissances essentielles.",
      image: "/Coach_Titanium_Gym.jpg",
      icon: "fa-user-graduate"
    },
    {
      titre: "CERTIFIED NUTRITION COACH",
      description: "Optimisez les résultats de vos clients en intégrant la nutrition, essentielle pour la performance et le bien-être.",
      image: "/CERTIFIED_NUTRITION_COACH.avif",
      icon: "fa-apple-alt"
    },
    {
      titre: "CORRECTIVE EXERCISE",
      description: "Identifiez et corrigez les points faibles de vos clients pour prévenir les blessures et optimiser la performance.",
      image: "/CORRECTIVE_EXERCISE.avif",
      icon: "fa-heartbeat"
    },
    {
      titre: "PERFORMANCE ENHANCEMENT",
      description: "Spécialisez-vous dans l'entraînement des athlètes pour améliorer force, puissance, vitesse et agilité.",
      image: "/PERFORMANCE_ENHANCEMENT.avif",
      icon: "fa-dumbbell"
    },
    {
      titre: "WELLNESS COACH",
      description: "Adoptez une approche holistique du bien-être en intégrant nutrition, activité physique et gestion du stress.",
      image: "/WELLNESS_COACH.avif",
      icon: "fa-spa"
    },
    {
      titre: "YOUTH TRAINING",
      description: "Découvrez les spécificités de l'entraînement pour les jeunes et créez des programmes adaptés à chaque âge.",
      image: "/YOUTH_TRAINING.avif",
      icon: "fa-child"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % formations.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [formations.length])

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % formations.length)
  const prevSlide = () => setSlideIndex((prev) => (prev - 1 + formations.length) % formations.length)

  return (
    <div className="container mx-auto px-4 sm:px-10 max-w-325">
      <Breadcrumb 
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'TG ACADEMY', active: true }
        ]} 
      />

      {/* Hero image */}
      <div className="relative h-75 lg:h-100 rounded-2xl overflow-hidden border border-border-subtle mb-8">
        <Image 
          src="/TG_Academy.avif"
          alt="TG Academy"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-3">
              <span className="text-gold">TITANIUM GYM</span> ACADEMY
            </h1>
            <p className="text-text-gray text-lg">L&apos;expertise fitness au service des coachs</p>
          </div>
        </div>
      </div>

      {/* Mission section */}
      <div className="bg-black-card rounded-2xl p-10 border border-border-gold-light my-12 text-center">
        <p className="text-text-gray text-lg leading-relaxed max-w-4xl mx-auto">
          Titanium Gym Academy, l&apos;expertise fitness au service des coachs, propose des formations et des certifications destinées aux coachs sportifs débutants ou souhaitant développer leurs compétences. Alliant expertise de terrain et excellence pédagogique, elle transforme votre passion en une véritable carrière.
        </p>

        {/* Badges partenaires */}
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <button 
            onClick={() => setPartenaireActif('partenaire')}
            className={`flex items-center gap-3 px-8 py-3 rounded-full border transition-all ${
              partenaireActif === 'partenaire'
                ? 'bg-gold text-black border-gold'
                : 'bg-gold-min text-gold border-border-gold-light hover:bg-gold-soft'
            }`}
          >
            <i className="fas fa-handshake"></i>
            <span className="font-medium">Notre partenaire</span>
          </button>
          <button 
            onClick={() => setPartenaireActif('formateur')}
            className={`flex items-center gap-3 px-8 py-3 rounded-full border transition-all ${
              partenaireActif === 'formateur'
                ? 'bg-gold text-black border-gold'
                : 'bg-gold-min text-gold border-border-gold-light hover:bg-gold-soft'
            }`}
          >
            <i className="fas fa-chalkboard-teacher"></i>
            <span className="font-medium">Nos Formateurs</span>
          </button>
        </div>
      </div>

      {/* Contenu partenaire / formateur */}
      <div className="my-12">
        {partenaireActif === 'partenaire' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-gold text-3xl font-medium mb-6">NASM - National Academy of Sports Medicine</h3>
              <p className="text-text-gray text-lg leading-relaxed mb-8">
                Certification de prestige reconnue mondialement, NASM™ s&apos;impose comme la référence dans plus de 90 pays. Véritable label d&apos;excellence, elle valorise les coachs et les clubs en attestant de leur expertise, de leur professionnalisme et de leur engagement à délivrer des services de qualité supérieure dans le domaine du fitness et de la santé.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Réputation internationale",
                  "Méthodes scientifiquement validées",
                  "Modèle de Performance Optimale (OPT)",
                  "Innovation continue"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-gold"></i>
                    <span className="text-text-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-border-gold-light h-100">
              <Image 
                src="/NASM.png"
                alt="NASM Certification"
                width={600}
                height={400}
                className="w-full h-full object-contain bg-white p-8"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-gold text-3xl font-medium mb-6">Seif Sassi</h3>
              <p className="text-text-gray text-lg leading-relaxed mb-4">
                Seif Sassi est un coach sportif, formateur et consultant reconnu pour son expertise dans le développement des coachs et l&apos;entraînement fonctionnel. Formateur avec l&apos;organisation NASM™, il a accompagné et formé plus de 300 coachs à travers divers programmes de certification et de spécialisation.
              </p>
              <p className="text-text-gray text-lg leading-relaxed mb-6">
                Passionné par la pédagogie du mouvement, Seif est également formateur des programmes Les Mills, instructeur certifié Animal Flow, et fondateur du concept Kettlebell Workout, une méthode d&apos;entraînement innovante alliant force, endurance et coordination.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Plus de 10 ans d&apos;expérience",
                  "Certifications internationales",
                  "Pédagogie adaptée",
                  "Suivi personnalisé"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-gold"></i>
                    <span className="text-text-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-border-gold-light h-100">
              <Image 
                src="/Seif.jpg"
                alt="Seif Sassi"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {/* Slider formations */}
      <div className="my-16">
        <h2 className="text-center text-gold text-3xl font-medium mb-8 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-0.5 after:bg-gold after:opacity-50 pb-4">
          LES FORMATIONS NASM
        </h2>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 gap-6"
            style={{ transform: `translateX(-${slideIndex * (100 / 3)}%)` }}
          >
            {formations.map((formation, index) => (
              <div key={index} className="min-w-[calc(33.333%-12px)] shrink-0">
                <div className="bg-black-card rounded-xl overflow-hidden border border-border-subtle hover:border-border-gold-light hover:-translate-y-1 transition-all h-full">
                  <div className="h-50 relative overflow-hidden">
                    <Image 
                      src={formation.image}
                      alt={formation.titre}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gold-min flex items-center justify-center mb-4">
                      <i className={`fas ${formation.icon} text-gold text-xl`}></i>
                    </div>
                    <h3 className="text-gold text-xl font-medium mb-3">{formation.titre}</h3>
                    <p className="text-text-gray text-sm leading-relaxed mb-4">{formation.description}</p>
                    <Link 
                      href="#" 
                      className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-wider border-b border-gold-dim pb-1 hover:gap-3 transition-all"
                    >
                      EN SAVOIR PLUS <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-6">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-black-card border border-border-gold-light text-gold hover:bg-gold/20 transition-all"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-black-card border border-border-gold-light text-gold hover:bg-gold/20 transition-all"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {formations.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlideIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === slideIndex ? 'bg-gold scale-125' : 'bg-white/30 hover:bg-gold-dim'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Contact section - Uniquement les informations, sans formulaire */}
      <div className="bg-black-card rounded-2xl p-10 border border-border-gold-light my-12">
        <div>
          <h3 className="text-gold text-3xl font-medium mb-6">CONTACTEZ-NOUS</h3>
          <p className="text-text-gray mb-8">
            Pour toute demande d&apos;information, vous pouvez nous contacter via les coordonnées ci-dessous.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <i className="fas fa-building text-gold text-xl w-8"></i>
              <span className="text-gold font-medium">Entreprise • MY TG</span>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-envelope text-gold text-xl w-8"></i>
              <span className="text-gold font-medium">academy@titanium-gym.com</span>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-phone-alt text-gold text-xl w-8"></i>
              <span className="text-text-gray">+216 29 74 69 91</span>
            </div>
            <div className="flex items-center gap-4">
              <i className="fab fa-whatsapp text-gold text-xl w-8"></i>
              <span className="text-text-gray">+216 29 74 69 91</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}