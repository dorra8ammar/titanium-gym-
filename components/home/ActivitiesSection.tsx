import Image from 'next/image'
import Link from 'next/link'

export default function ActivitiesSection() {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden border border-border-subtle aspect-[4/3] group">
          <Image 
            src="/Titanium_Gym.avif"
            alt="Titanium Gym Sousse - Salle de sport moderne"
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-transparent opacity-50"></div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest mb-3">
            <i className="fas fa-circle text-[4px]"></i>
            ACTIVITÉS DU CLUB
          </div>
          
          <h2 className="text-3xl font-medium text-white mb-4">
            Une palette complète<br />pour tous les niveaux
          </h2>
          
          <p className="text-text-darkgray text-sm leading-relaxed mb-6 max-w-[90%]">
            Une large palette d&apos;activités assurées par nos coachs, 
            <strong className="text-gold font-medium"> cours CG</strong> (yoga, zumba, abdos fessiers …) et 
            <strong className="text-gold font-medium"> training CG</strong> (cross training, TRX, HBX-Boxing).
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
            {[
              "Cardio", "Force", "Danse", "Kids Island",
              "Souplesse", "Training", "Yoga", "TRX"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-text-gray text-sm border-b border-white/2 py-2">
                <i className="fas fa-circle text-gold text-[6px]"></i>
                {item}
              </div>
            ))}
          </div>

          <Link 
            href="/activites"
            className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-wider border-b border-gold-dim pb-1 hover:gap-3 transition-all"
          >
            DÉCOUVRIR TOUS LES COURS <i className="fas fa-arrow-right text-xs"></i>
          </Link>

          <div className="flex items-center gap-2 mt-6">
            <span className="w-1 h-1 bg-gold rounded-full opacity-40"></span>
            <span className="text-gold-dim text-[10px] tracking-widest">11 CLUBS EN TUNISIE</span>
          </div>
        </div>
      </div>
    </div>
  )
}