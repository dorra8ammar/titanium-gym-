export interface Cours {
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

export const coursData: Cours[] = [
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

export const nomsSalles: Record<string, string> = {
  "sousse": "CG Sousse",
  "tunis": "CG Tunis",
  "lac2": "CG Lac 2",
  "ennasr": "CG Ennasr",
  "menzah": "CG Jardins d'El Menzah",
  "marsa": "CG La Marsa"
}

export const couleursCours: Record<string, string> = {
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

export const joursMapping: Record<string, number> = {
  "lun": 1, "mar": 2, "mer": 3, "jeu": 4, "ven": 5, "sam": 6, "dim": 7
}