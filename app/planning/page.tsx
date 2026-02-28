'use client'

import { useState } from 'react'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'

// Types
interface Cours {
  id: string
  nom: string
  coach: string
  salle: string
  jour: string
  heure: string
  duree: string
  type: string
  couleur: string
}

// Données des cours
const coursData: Cours[] = [
  // Sousse
  { id: "kb-workout", nom: "KB WORKOUT", coach: "Ahmed C.H.", salle: "sousse", jour: "lun", heure: "09:00", duree: "45 min", type: "Force", couleur: "kb-workout" },
  { id: "kb-workout", nom: "KB WORKOUT", coach: "Ahmed C.H.", salle: "sousse", jour: "mer", heure: "09:00", duree: "45 min", type: "Force", couleur: "kb-workout" },
  { id: "kb-workout", nom: "KB WORKOUT", coach: "Ahmed C.H.", salle: "sousse", jour: "ven", heure: "09:00", duree: "45 min", type: "Force", couleur: "kb-workout" },
  { id: "cross-force", nom: "CROSS FORCE", coach: "Sarah", salle: "sousse", jour: "lun", heure: "10:00", duree: "50 min", type: "Force", couleur: "cross-force" },
  { id: "cross-force", nom: "CROSS FORCE", coach: "Sarah", salle: "sousse", jour: "mar", heure: "10:00", duree: "50 min", type: "Force", couleur: "cross-force" },
  { id: "cross-force", nom: "CROSS FORCE", coach: "Sarah", salle: "sousse", jour: "jeu", heure: "10:00", duree: "50 min", type: "Force", couleur: "cross-force" },
  { id: "bodyattack", nom: "BODYATTACK", coach: "Karim", salle: "sousse", jour: "lun", heure: "11:00", duree: "55 min", type: "Cardio", couleur: "bodyattack" },
  { id: "bodyattack", nom: "BODYATTACK", coach: "Karim", salle: "sousse", jour: "mer", heure: "11:00", duree: "55 min", type: "Cardio", couleur: "bodyattack" },
  { id: "bodyattack", nom: "BODYATTACK", coach: "Karim", salle: "sousse", jour: "ven", heure: "11:00", duree: "55 min", type: "Cardio", couleur: "bodyattack" },
  { id: "bodycombat", nom: "BODYCOMBAT", coach: "Sarah", salle: "sousse", jour: "mar", heure: "18:00", duree: "55 min", type: "Cardio", couleur: "bodycombat" },
  { id: "bodycombat", nom: "BODYCOMBAT", coach: "Sarah", salle: "sousse", jour: "jeu", heure: "18:00", duree: "55 min", type: "Cardio", couleur: "bodycombat" },
  { id: "bodybalance", nom: "BODYBALANCE", coach: "EYA", salle: "sousse", jour: "mar", heure: "09:00", duree: "50 min", type: "Souplesse", couleur: "bodybalance" },
  { id: "bodybalance", nom: "BODYBALANCE", coach: "EYA", salle: "sousse", jour: "jeu", heure: "09:00", duree: "50 min", type: "Souplesse", couleur: "bodybalance" },
  { id: "bodypump", nom: "BODYPUMP", coach: "Mouadh", salle: "sousse", jour: "lun", heure: "17:00", duree: "55 min", type: "Force", couleur: "bodypump" },
  { id: "bodypump", nom: "BODYPUMP", coach: "Mouadh", salle: "sousse", jour: "mer", heure: "17:00", duree: "55 min", type: "Force", couleur: "bodypump" },
  { id: "bodypump", nom: "BODYPUMP", coach: "Mouadh", salle: "sousse", jour: "ven", heure: "17:00", duree: "55 min", type: "Force", couleur: "bodypump" },
  { id: "rpm", nom: "RPM", coach: "Karim", salle: "sousse", jour: "lun", heure: "18:00", duree: "45 min", type: "Cardio", couleur: "rpm" },
  { id: "rpm", nom: "RPM", coach: "Karim", salle: "sousse", jour: "mer", heure: "18:00", duree: "45 min", type: "Cardio", couleur: "rpm" },
  { id: "lesmills-dance", nom: "LESMILLS DANCE", coach: "Najiba", salle: "sousse", jour: "mar", heure: "19:00", duree: "50 min", type: "Danse", couleur: "lesmills-dance" },
  { id: "lesmills-dance", nom: "LESMILLS DANCE", coach: "Najiba", salle: "sousse", jour: "jeu", heure: "19:00", duree: "50 min", type: "Danse", couleur: "lesmills-dance" },
  { id: "abdos-fessiers", nom: "ABDOS FESSIERS", coach: "Hamza B.", salle: "sousse", jour: "lun", heure: "12:00", duree: "30 min", type: "Force", couleur: "abdos-fessiers" },
  { id: "abdos-fessiers", nom: "ABDOS FESSIERS", coach: "Hamza B.", salle: "sousse", jour: "mer", heure: "12:00", duree: "30 min", type: "Force", couleur: "abdos-fessiers" },
  { id: "abdos-fessiers", nom: "ABDOS FESSIERS", coach: "Hamza B.", salle: "sousse", jour: "ven", heure: "12:00", duree: "30 min", type: "Force", couleur: "abdos-fessiers" },
  { id: "trx", nom: "TRX", coach: "Karim", salle: "sousse", jour: "mar", heure: "11:00", duree: "45 min", type: "Training", couleur: "trx" },
  { id: "trx", nom: "TRX", coach: "Karim", salle: "sousse", jour: "jeu", heure: "11:00", duree: "45 min", type: "Training", couleur: "trx" },
  { id: "aquagym", nom: "AQUAGYM", coach: "EYA", salle: "sousse", jour: "sam", heure: "10:00", duree: "45 min", type: "Aquatique", couleur: "aquagym" },
  
  // Tunis
  { id: "bodypump", nom: "BODYPUMP", coach: "Mouadh", salle: "tunis", jour: "mar", heure: "18:00", duree: "55 min", type: "Force", couleur: "bodypump" },
  { id: "rpm", nom: "RPM", coach: "Karim", salle: "tunis", jour: "jeu", heure: "18:00", duree: "45 min", type: "Cardio", couleur: "rpm" },
  { id: "aquagym", nom: "AQUAGYM", coach: "EYA", salle: "tunis", jour: "sam", heure: "11:00", duree: "45 min", type: "Aquatique", couleur: "aquagym" },
  
  // Lac 2
  { id: "trx", nom: "TRX", coach: "Karim", salle: "lac2", jour: "lun", heure: "12:00", duree: "45 min", type: "Training", couleur: "trx" },
  { id: "bodycombat", nom: "BODYCOMBAT", coach: "Sarah", salle: "lac2", jour: "jeu", heure: "18:00", duree: "55 min", type: "Cardio", couleur: "bodycombat" },
  
  // Ennasr
  { id: "bodypump", nom: "BODYPUMP", coach: "Mouadh", salle: "ennasr", jour: "mar", heure: "09:00", duree: "55 min", type: "Force", couleur: "bodypump" },
  { id: "bodybalance", nom: "BODYBALANCE", coach: "EYA", salle: "ennasr", jour: "jeu", heure: "10:00", duree: "50 min", type: "Souplesse", couleur: "bodybalance" },
  
  // Menzah
  { id: "bodybalance", nom: "BODYBALANCE", coach: "EYA", salle: "menzah", jour: "mar", heure: "17:00", duree: "50 min", type: "Souplesse", couleur: "bodybalance" },
  { id: "abdos-fessiers", nom: "ABDOS FESSIERS", coach: "Hamza B.", salle: "menzah", jour: "jeu", heure: "11:00", duree: "30 min", type: "Force", couleur: "abdos-fessiers" },
  
  // Marsa
  { id: "lesmills-dance", nom: "LESMILLS DANCE", coach: "Najiba", salle: "marsa", jour: "ven", heure: "10:00", duree: "50 min", type: "Danse", couleur: "lesmills-dance" },
  { id: "rpm", nom: "RPM", coach: "Karim", salle: "marsa", jour: "sam", heure: "11:00", duree: "45 min", type: "Cardio", couleur: "rpm" },
]

// Mapping des jours
const joursMapping = {
  "lun": 1, "mar": 2, "mer": 3, "jeu": 4, "ven": 5, "sam": 6, "dim": 7
}

// Noms des salles
const nomsSalles: Record<string, string> = {
  "sousse": "CG Sousse",
  "tunis": "CG Tunis",
  "lac2": "CG Lac 2",
  "ennasr": "CG Ennasr",
  "menzah": "CG Jardins d'El Menzah",
  "marsa": "CG La Marsa"
}

// Couleurs des cours
const couleursCours: Record<string, string> = {
  "kb-workout": "#FF69B4",
  "cross-force": "#4169E1",
  "bodyattack": "#FFA500",
  "bodycombat": "#DC143C",
  "bodybalance": "#9370DB",
  "bodypump": "#32CD32",
  "rpm": "#FF4500",
  "lesmills-dance": "#FFD700",
  "abdos-fessiers": "#20B2AA",
  "trx": "#8A2BE2",
  "aquagym": "#00BFFF"
}

export default function PlanningPage() {
  const [filtres, setFiltres] = useState({
    salle: 'sousse',
    coach: 'tous',
    cours: 'tous'
  })

  const filtrerCours = () => {
    return coursData.filter(c => {
      if (filtres.salle !== 'toutes' && c.salle !== filtres.salle) return false
      if (filtres.coach !== 'tous') {
        const coachMap: Record<string, string> = {
          'ahmed': 'Ahmed C.H.',
          'sarah': 'Sarah',
          'karim': 'Karim',
          'mouadh': 'Mouadh',
          'eya': 'EYA',
          'hamza': 'Hamza B.',
          'najiba': 'Najiba'
        }
        if (c.coach !== coachMap[filtres.coach]) return false
      }
      if (filtres.cours !== 'tous' && c.id !== filtres.cours) return false
      return true
    })
  }

  const coursFiltres = filtrerCours()
  const heures = ['07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h']
  const jours = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim']
  const joursNoms = ['Lun 09/02', 'Mar 10/02', 'Mer 11/02', 'Jeu 12/02', 'Ven 13/02', 'Sam 14/02', 'Dim 15/02']

  const resetFiltres = () => {
    setFiltres({ salle: 'sousse', coach: 'tous', cours: 'tous' })
  }

  return (
    <div className="container mx-auto px-4 sm:px-10 max-w-[1300px]">
      <Breadcrumb 
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'PLANNING', active: true }
        ]} 
      />

      {/* Bandeau avec photo */}
      <div className="flex flex-col lg:flex-row items-center gap-8 my-8">
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
            PLANNING DES <span className="text-gold">COURS</span>
          </h1>
        </div>
        <div className="w-full lg:w-[500px] h-[300px] rounded-xl overflow-hidden border-2 border-border-gold-light">
          <Image 
            src="/Coach .jpg"
            alt="Coach Titanium Gym"
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Filtres */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="bg-black-card rounded-xl p-5 border border-border-subtle">
          <h3 className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase mb-3">
            <i className="fas fa-dumbbell"></i> SALLE DE SPORT
          </h3>
          <select 
            className="w-full bg-black-deep border border-border-gold-light rounded-lg p-3 text-white text-sm"
            value={filtres.salle}
            onChange={(e) => setFiltres({...filtres, salle: e.target.value})}
          >
            <option value="toutes">Toutes les salles</option>
            <option value="sousse">TG Sousse</option>
            <option value="tunis">TG Tunis</option>
            <option value="lac2">TG Lac 2</option>
            <option value="ennasr">TG Ennasr</option>
            <option value="menzah">TG Jardins d'El Menzah</option>
            <option value="marsa">TG La Marsa</option>
          </select>
        </div>

        <div className="bg-black-card rounded-xl p-5 border border-border-subtle">
          <h3 className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase mb-3">
            <i className="fas fa-user"></i> COACH
          </h3>
          <select 
            className="w-full bg-black-deep border border-border-gold-light rounded-lg p-3 text-white text-sm"
            value={filtres.coach}
            onChange={(e) => setFiltres({...filtres, coach: e.target.value})}
          >
            <option value="tous">Tous les coachs</option>
            <option value="ahmed">Ahmed C.H.</option>
            <option value="sarah">Sarah</option>
            <option value="karim">Karim</option>
            <option value="mouadh">Mouadh</option>
            <option value="eya">EYA</option>
            <option value="hamza">Hamza B.</option>
            <option value="najiba">Najiba</option>
          </select>
        </div>

        <div className="bg-black-card rounded-xl p-5 border border-border-subtle">
          <h3 className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase mb-3">
            <i className="fas fa-calendar-alt"></i> COURS
          </h3>
          <select 
            className="w-full bg-black-deep border border-border-gold-light rounded-lg p-3 text-white text-sm"
            value={filtres.cours}
            onChange={(e) => setFiltres({...filtres, cours: e.target.value})}
          >
            <option value="tous">Tous les cours</option>
            <option value="kb-workout">KB WORKOUT</option>
            <option value="cross-force">CROSS FORCE</option>
            <option value="bodyattack">BODYATTACK</option>
            <option value="bodycombat">BODYCOMBAT</option>
            <option value="bodybalance">BODYBALANCE</option>
            <option value="bodypump">BODYPUMP</option>
            <option value="rpm">RPM</option>
            <option value="lesmills-dance">LESMILLS DANCE</option>
            <option value="abdos-fessiers">ABDOS FESSIERS</option>
            <option value="trx">TRX</option>
            <option value="aquagym">AQUAGYM</option>
          </select>
        </div>

        <div className="md:col-span-3 flex justify-end gap-3">
          <button 
            onClick={() => setFiltres({...filtres})}
            className="bg-gold-min text-gold border border-border-gold-light px-6 py-3 rounded-full text-xs uppercase tracking-wider hover:bg-gold-soft transition-all"
          >
            <i className="fas fa-filter mr-2"></i>APPLIQUER LES FILTRES
          </button>
          <button 
            onClick={resetFiltres}
            className="bg-transparent text-text-gray border border-border-subtle px-6 py-3 rounded-full text-xs uppercase tracking-wider hover:text-white hover:border-text-gray transition-all"
          >
            <i className="fas fa-undo-alt mr-2"></i>RÉINITIALISER
          </button>
        </div>
      </div>

      {/* Planning Table */}
      <div className="my-10 overflow-x-auto bg-black-card rounded-xl p-5 shadow-lg">
        <table className="w-full min-w-[1000px] border-collapse">
          <thead>
            <tr>
              <th className="bg-gold text-black py-3 px-2 text-xs font-semibold uppercase tracking-wider border border-gray-300"></th>
              {joursNoms.map((jour, index) => (
                <th key={index} className="bg-gold text-black py-3 px-2 text-xs font-semibold uppercase tracking-wider border border-gray-300">
                  {jour}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {heures.map(heure => (
              <tr key={heure}>
                <td className="bg-gray-100 text-black font-semibold text-xs text-center border border-gray-300 p-2">
                  {heure}
                </td>
                {jours.map(jour => {
                  const coursHeure = coursFiltres.filter(c => {
                    const heureCours = parseInt(c.heure.split(':')[0])
                    const heureActuelle = parseInt(heure)
                    return heureCours === heureActuelle && c.jour === jour
                  })

                  return (
                    <td key={`${heure}-${jour}`} className="border border-gray-300 p-1 align-top bg-white">
                      {coursHeure.map(c => (
                        <div 
                          key={`${c.id}-${c.heure}`}
                          className="border-l-4 p-1 mb-1 rounded text-[10px] font-medium cursor-pointer hover:brightness-110 transition-all"
                          style={{ 
                            backgroundColor: couleursCours[c.id] + '20',
                            borderLeftColor: couleursCours[c.id],
                            color: '#333'
                          }}
                          title={nomsSalles[c.salle]}
                        >
                          <div className="font-semibold">{c.nom}</div>
                          <div className="text-[8px] opacity-80">{c.coach}</div>
                        </div>
                      ))}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Liste des cours */}
      <div className="my-10">
        <div className="flex items-center gap-3 mb-6">
          <i className="fas fa-list text-gold text-xl"></i>
          <h2 className="text-2xl font-medium text-white">COURS DISPONIBLES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coursFiltres.length > 0 ? (
            coursFiltres.map((c, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-all">
                <div className="text-gold text-sm font-semibold mb-2">{c.heure} - {c.duree}</div>
                <div className="text-black text-lg font-semibold mb-1">{c.nom}</div>
                <div className="text-gray-600 text-sm mb-2">{c.coach}</div>
                <div className="text-gray-500 text-xs mb-3">{nomsSalles[c.salle]}</div>
                <span className="inline-block bg-gold text-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold">
                  {c.type}
                </span>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 bg-black-card rounded-xl border border-border-subtle">
              <p className="text-text-gray">Aucun cours trouvé</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}