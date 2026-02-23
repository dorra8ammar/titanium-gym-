export interface Activite {
  id: string
  titre: string
  categorie: string
  duree: string
  materiel: string
  intensite: string
  pourqui: string
  image: string
  description: string
  bienfaits: string[]
  recommandations: string
  aussi: string[]
}

export const activitesData: Record<string, Activite> = {
  // Activités existantes
  "kb-workout": {
    id: "kb-workout",
    titre: "KB WORKOUT",
    categorie: "FORCE",
    duree: "45 min",
    materiel: "Kettlebells",
    intensite: "Moyenne à forte",
    pourqui: "18-55 ans",
    image: "/kb-workout.jpg",
    description: "Le KB Workout est un cours de renforcement musculaire utilisant des kettlebells. Cet entraînement fonctionnel sollicite l'ensemble du corps à travers des mouvements dynamiques et contrôlés.",
    bienfaits: [
      "Améliore la force et la puissance",
      "Développe l'endurance musculaire",
      "Renforce le core et les stabilisateurs",
      "Brûle un maximum de calories"
    ],
    recommandations: "Tenue : Vêtements confortables, chaussures de sport. À prévoir : Serviette et bouteille d'eau.",
    aussi: ["cross-force", "bodypump"]
  },
  
  "cross-force": {
    id: "cross-force",
    titre: "CROSS FORCE",
    categorie: "FORCE",
    duree: "50 min",
    materiel: "Poids libres",
    intensite: "Forte",
    pourqui: "18-55 ans",
    image: "/cross-force.avif",
    description: "Le Cross Force est un entraînement intense combinant force fonctionnelle et cardio.",
    bienfaits: [
      "Développe la force globale",
      "Améliore l'endurance cardiovasculaire",
      "Sculpte la silhouette",
      "Brûle les graisses"
    ],
    recommandations: "Tenue : Vêtements de sport techniques, chaussures stabilisantes.",
    aussi: ["kb-workout", "bodypump"]
  },
  
  "aquagym": {
    id: "aquagym",
    titre: "AQUAGYM",
    categorie: "AQUATIQUE",
    duree: "45 min",
    materiel: "Aquatique",
    intensite: "Moyenne",
    pourqui: "Tous niveaux",
    image: "/aquagym.jpg",
    description: "L'Aquagym est une activité douce et complète qui se pratique en piscine.",
    bienfaits: [
      "Renforce les muscles en douceur",
      "Améliore la circulation",
      "Favorise la perte de poids",
      "Soulage les douleurs articulaires"
    ],
    recommandations: "Tenue : Maillot de bain, bonnet de bain obligatoire.",
    aussi: ["bodybalance", "abdos-fessiers"]
  },

  // 6 NOUVELLES ACTIVITÉS
  "yoga": {
    id: "yoga",
    titre: "YOGA",
    categorie: "SOUPLESSE",
    duree: "60 min",
    materiel: "Tapis, coussin",
    intensite: "Faible",
    pourqui: "Tous niveaux",
    image: "/yoga.avif",
    description: "Le Yoga est une pratique douce qui combine postures, respiration et méditation pour améliorer la souplesse, réduire le stress et renforcer le corps en profondeur. Accessible à tous, cette discipline millénaire apporte bien-être et équilibre.",
    bienfaits: [
      "Améliore la souplesse et l'équilibre",
      "Réduit le stress et l'anxiété",
      "Renforce les muscles profonds",
      "Améliore la concentration et la respiration"
    ],
    recommandations: "Tenue confortable et souple, tapis de yoga. À prévoir : bouteille d'eau et petite serviette.",
    aussi: ["pilates", "bodybalance"]
  },

  "zumba": {
    id: "zumba",
    titre: "ZUMBA",
    categorie: "DANSE",
    duree: "50 min",
    materiel: "Chaussures de danse",
    intensite: "Moyenne",
    pourqui: "Tous niveaux",
    image: "/zumba.avif",
    description: "La Zumba est un programme de fitness qui mêle danse et mouvements aérobiques sur des rythmes latins et internationaux. Une façon amusante et énergisante de brûler des calories sans même s'en rendre compte !",
    bienfaits: [
      "Brûle jusqu'à 600 calories par séance",
      "Améliore la coordination et le rythme",
      "Travaille le cardio en s'amusant",
      "Tonifie l'ensemble du corps"
    ],
    recommandations: "Tenue légère et confortable, baskets propres. À prévoir : serviette et bouteille d'eau.",
    aussi: ["lesmills-dance", "bodyattack"]
  },

  "crossfit": {
    id: "crossfit",
    titre: "CROSSFIT",
    categorie: "TRAINING",
    duree: "60 min",
    materiel: "Poids, cordes, boxes",
    intensite: "Forte",
    pourqui: "Intermédiaire à avancé",
    image: "/crossfit.avif",
    description: "Le CrossFit est un programme de conditionnement physique qui combine des mouvements fonctionnels, de l'haltérophilie, de la gymnastique et du cardio à haute intensité. Chaque séance est différente et challengeante.",
    bienfaits: [
      "Améliore la condition physique globale",
      "Développe force et endurance",
      "Brûle un maximum de calories",
      "Esprit communautaire et dépassement de soi"
    ],
    recommandations: "Tenue de sport résistante, chaussures de cross-training. À prévoir : serviette, bouteille d'eau, gants de protection.",
    aussi: ["cross-force", "trx"]
  },

  "pilates": {
    id: "pilates",
    titre: "PILATES",
    categorie: "SOUPLESSE",
    duree: "55 min",
    materiel: "Tapis, élastiques",
    intensite: "Moyenne",
    pourqui: "Tous niveaux",
    image: "/pilates.avif",
    description: "Le Pilates est une méthode de renforcement musculaire qui se concentre sur les muscles profonds, la posture et la respiration. Idéal pour sculpter sa silhouette en douceur et prévenir les douleurs dorsales.",
    bienfaits: [
      "Renforce les muscles profonds et la sangle abdominale",
      "Améliore la posture et l'alignement du corps",
      "Développe la souplesse et la mobilité",
      "Prévient les douleurs de dos"
    ],
    recommandations: "Tenue confortable et ajustée, pieds nus ou chaussettes antidérapantes. À prévoir : tapis de sol, bouteille d'eau.",
    aussi: ["yoga", "bodybalance"]
  },

 
}

export const activitesList = Object.values(activitesData)