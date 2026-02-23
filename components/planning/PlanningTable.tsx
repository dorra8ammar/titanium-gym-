'use client'

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

interface PlanningTableProps {
  cours: Cours[]
}

// Mapping des jours
const joursMapping: Record<string, number> = {
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
  "my-cg": "#2E8B57",
  "aquagym": "#00BFFF"
}

export default function PlanningTable({ cours }: PlanningTableProps) {
  const heures = ['07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h']
  const jours = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim']
  const joursNoms = ['Lun 09/02', 'Mar 10/02', 'Mer 11/02', 'Jeu 12/02', 'Ven 13/02', 'Sam 14/02', 'Dim 15/02']

  return (
    <div className="my-10 overflow-x-auto bg-white rounded-xl p-5 shadow-lg">
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
                const coursHeure = cours.filter(c => {
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
  )
}