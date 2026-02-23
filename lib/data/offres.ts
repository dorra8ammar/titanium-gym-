export interface Offre {
  id: string
  nom: string
  description: string
  prix: {
    douze: string
    quinze: string
    dixhuit: string
    vingtun: string
  }
  prelevement: {
    montant: string
    initial: string
  }
  features: string[]
  isPremium?: boolean
  clubs: string[]
}

export const offresData: Record<string, Offre> = {
  blue: {
    id: "blue",
    nom: "BLUE PASS-SPORT",
    description: "Notre offre premium avec accès illimité 24/7 à tous les clubs",
    prix: {
      douze: "1 510 DT",
      quinze: "940 DT",
      dixhuit: "570 DT",
      vingtun: "210 DT"
    },
    prelevement: {
      montant: "58 DT",
      initial: "230 DT"
    },
    features: [
      "Accès illimité 24/7",
      "Cours collectifs illimités",
      "Vaporium & Sauna",
      "Coaching personnalisé",
      "Sans engagement"
    ],
    isPremium: true,
    clubs: ["sousse", "tunis", "lac2", "ennasr", "menzah", "marsa"]
  },
  yellow: {
    id: "yellow",
    nom: "YELLOW PASS-SPORT",
    description: "Notre offre équilibrée pour les sportifs réguliers",
    prix: {
      douze: "1 200 DT",
      quinze: "750 DT",
      dixhuit: "450 DT",
      vingtun: "180 DT"
    },
    prelevement: {
      montant: "46 DT",
      initial: "185 DT"
    },
    features: [
      "Accès heures creuses",
      "Cours collectifs",
      "Vaporium & Sauna",
      "1 séance coaching/mois",
      "Tarif préférentiel"
    ],
    clubs: ["sousse", "tunis", "lac2"]
  },
  green: {
    id: "green",
    nom: "GREEN PASS-SPORT",
    description: "Notre offre découverte pour débuter en douceur",
    prix: {
      douze: "950 DT",
      quinze: "600 DT",
      dixhuit: "360 DT",
      vingtun: "140 DT"
    },
    prelevement: {
      montant: "36 DT",
      initial: "150 DT"
    },
    features: [
      "Accès à 1 club (Marsa)",
      "Cours collectifs",
      "Vaporium & Sauna",
      "Sans engagement"
    ],
    clubs: ["marsa"]
  }
}

export const offresList = Object.values(offresData)