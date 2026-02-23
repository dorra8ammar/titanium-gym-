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

interface CoursListProps {
  cours: Cours[]
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

export default function CoursList({ cours }: CoursListProps) {
  if (cours.length === 0) {
    return (
      <div className="col-span-full text-center py-10 bg-black-card rounded-xl border border-border-subtle">
        <p className="text-text-gray">Aucun cours trouvé</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cours.map((c, index) => (
        <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-all">
          <div className="text-gold text-sm font-semibold mb-2">{c.heure} - {c.duree}</div>
          <div className="text-black text-lg font-semibold mb-1">{c.nom}</div>
          <div className="text-gray-600 text-sm mb-2">{c.coach}</div>
          <div className="text-gray-500 text-xs mb-3">{nomsSalles[c.salle]}</div>
          <span className="inline-block bg-gold text-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold">
            {c.type}
          </span>
        </div>
      ))}
    </div>
  )
}