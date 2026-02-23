'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

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

export default function HeroSlider() {
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
    <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border-subtle">
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
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
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
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-5 pointer-events-none">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-black-deep/60 backdrop-blur-sm border border-border-gold-light text-gold hover:bg-gold/20 transition-all pointer-events-auto"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-black-deep/60 backdrop-blur-sm border border-border-gold-light text-gold hover:bg-gold/20 transition-all pointer-events-auto"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}