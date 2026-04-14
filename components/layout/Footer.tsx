'use client'

export default function Footer() {
  return (
    <footer className="bg-black-soft border-t border-border-subtle py-12 mt-12">
      <div className="container mx-auto px-4 sm:px-10 max-w-325">
        {/* Une seule colonne centrée */}
        <div className="text-center">
          {/* Logo et nom */}
          <div className="mb-4">
            <h4 className="text-white text-2xl font-semibold">
              TITANIUM <span className="text-gold">GYM</span>
            </h4>
          </div>
          
          {/* Slogan */}
          <p className="text-text-darkgray text-sm mb-4">
            The land of fitness — Première chaîne de fitness en Tunisie
          </p>
          
          {/* Localisation */}
          <p className="text-gold text-sm mb-6">
            <i className="fas fa-map-marker-alt mr-2 text-gold-dim"></i>
            Sousse • Tunis • 11 clubs
          </p>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-border-subtle">
            <p className="text-text-darkgray text-xs uppercase tracking-wider">
              © 2026 Titanium Gym TUNISIE — CLUB DE SOUSSE
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}