export interface Club {
  id: string
  ville: string
  adresse: string
  image: string
  telephone: string
  email: string
  horaires: {
    semaine: string
    samedi: string
    dimanche: string
  }
  equipements: string[]
  coordinates?: {
    lat: number
    lng: number
  }
}

export const clubsData: Club[] = [
  {
    id: "sousse",
    ville: "SOUSSE",
    adresse: "Centre Commercial Tej Marhaba, 4000 Sousse",
    image: "/sousse.avif",
    telephone: "36 013 060",
    email: "sousse@titanium-gym.com",
    horaires: {
      semaine: "6h – 22h",
      samedi: "7h – 18h",
      dimanche: "7h – 18h"
    },
    equipements: [
      "Plateau cardio",
      "Plateau musculation",
      "2 Salles de cours",
      "Studio RPM",
      "Studio training",
      "Vaporium",
      "Sauna"
    ]
  },
  {
    id: "tunis",
    ville: "TUNIS",
    adresse: "Centre Ville, 1000 Tunis",
    image: "/tunis.avif",
    telephone: "71 123 456",
    email: "tunis@titanium-gym.com",
    horaires: {
      semaine: "6h – 22h",
      samedi: "7h – 18h",
      dimanche: "7h – 18h"
    },
    equipements: [
      "Plateau cardio",
      "Plateau musculation",
      "3 Salles de cours",
      "Studio RPM",
      "Studio training",
      "Vaporium",
      "Sauna",
      "Piscine"
    ]
  },
  {
    id: "marsa",
    ville: "LA MARSA",
    adresse: "Route de La Marsa",
    image: "/marsa.avif",
    telephone: "71 789 012",
    email: "marsa@titanium-gym.com",
    horaires: {
      semaine: "6h – 22h",
      samedi: "7h – 18h",
      dimanche: "7h – 18h"
    },
    equipements: [
      "Plateau cardio",
      "Plateau musculation",
      "2 Salles de cours",
      "Studio RPM",
      "Studio training",
      "Vaporium",
      "Sauna"
    ]
  },
  {
    id: "ennasr",
    ville: "ENNASR",
    adresse: "Ennasr 2",
    image: "/ennasr.avif",
    telephone: "71 345 678",
    email: "ennasr@titanium-gym.com",
    horaires: {
      semaine: "6h – 22h",
      samedi: "7h – 18h",
      dimanche: "7h – 18h"
    },
    equipements: [
      "Plateau cardio",
      "Plateau musculation",
      "2 Salles de cours",
      "Studio RPM",
      "Studio training",
      "Vaporium"
    ]
  },
  {
    id: "menzah",
    ville: "JARDINS D'EL MENZAH",
    adresse: "El Menzah",
    image: "/menzah.avif",
    telephone: "71 901 234",
    email: "menzah@titanium-gym.com",
    horaires: {
      semaine: "6h – 22h",
      samedi: "7h – 18h",
      dimanche: "7h – 18h"
    },
    equipements: [
      "Plateau cardio",
      "Plateau musculation",
      "2 Salles de cours",
      "Studio RPM",
      "Studio training",
      "Sauna"
    ]
  },
  {
    id: "lac2",
    ville: "LAC 2",
    adresse: "Les Berges du Lac",
    image: "/lac2.avif",
    telephone: "71 567 890",
    email: "lac2@titanium-gym.com",
    horaires: {
      semaine: "6h – 22h",
      samedi: "7h – 18h",
      dimanche: "7h – 18h"
    },
    equipements: [
      "Plateau cardio",
      "Plateau musculation",
      "3 Salles de cours",
      "Studio RPM",
      "Studio training",
      "Vaporium",
      "Sauna",
      "Piscine"
    ]
  }
]

export const clubsRecord: Record<string, Club> = clubsData.reduce((acc, club) => {
  acc[club.id] = club
  return acc
}, {} as Record<string, Club>)