'use client'

import { activitesList } from '@/lib/data/activites'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function ActivitesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-10 max-w-[1300px]">
      <Breadcrumb 
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'ACTIVITÉS', active: true }
        ]} 
      />

      <h1 className="text-4xl font-medium text-white py-10">ACTIVITÉS</h1>

      <div className="grid grid-cols-1 gap-10 py-10">
        {/* Grille activités */}
        <div>
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-border-subtle">
            <h2 className="text-2xl font-medium text-white">TOUS NOS COURS</h2>
            <span className="text-gold bg-gold-min px-4 py-2 rounded-full text-sm border border-border-gold-light">
              {activitesList.length} activité{activitesList.length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {activitesList.map(act => (
              <div key={act.id} className="bg-black-card rounded-xl overflow-hidden border border-border-subtle hover:border-border-gold-light transition-all hover:-translate-y-1">
                <div className="h-[250px] relative overflow-hidden">
                  <Image 
                    src={act.image} 
                    alt={act.titre}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <div className="text-gold text-xs uppercase tracking-wider mb-2">{act.categorie}</div>
                  <h3 className="text-xl font-medium text-white mb-3">{act.titre}</h3>
                  <div className="space-y-1 text-text-gray text-xs mb-4">
                    <div><i className="fas fa-clock text-gold w-4 mr-2"></i>{act.duree}</div>
                    <div><i className="fas fa-dumbbell text-gold w-4 mr-2"></i>{act.materiel}</div>
                    <div><i className="fas fa-chart-line text-gold w-4 mr-2"></i>{act.intensite}</div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Note débutants */}
      <div className="bg-black-card p-10 rounded-xl border border-border-subtle my-10">
        <h3 className="text-gold text-xl font-medium mb-4">VOUS DÉBUTEZ ?</h3>
        <p className="text-text-gray text-sm leading-relaxed">
          Tous nos cours collectifs sont adaptés à tous les niveaux et donc accessibles à tous. 
          Cependant, si vous n'avez jamais fait de sport, ou venez de reprendre après une période d'inactivité, 
          il est conseillé de pratiquer une activité cardio telle que tapis ou elliptique pour une durée de 2 semaines.
        </p>
      </div>
    </div>
  )
}