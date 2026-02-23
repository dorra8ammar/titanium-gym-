/**
 * Formate un prix en DT (Dinars Tunisiens)
 */
export function formatPrice(price: number | string): string {
  if (typeof price === 'number') {
    return `${price.toLocaleString()} DT`
  }
  return price
}

/**
 * Formate une durée en minutes en texte lisible
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`
  }
  const heures = Math.floor(minutes / 60)
  const mins = minutes % 60
  return mins > 0 ? `${heures}h${mins}` : `${heures}h`
}

/**
 * Retourne le nom du jour en français
 */
export function getJourNom(jour: string): string {
  const jours: Record<string, string> = {
    'lun': 'Lundi',
    'mar': 'Mardi',
    'mer': 'Mercredi',
    'jeu': 'Jeudi',
    'ven': 'Vendredi',
    'sam': 'Samedi',
    'dim': 'Dimanche'
  }
  return jours[jour] || jour
}

/**
 * Tronque un texte à une longueur maximale
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

/**
 * Génère un slug à partir d'un titre
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Retourne la classe CSS pour une couleur de badge
 */
export function getBadgeColorClass(color: string): string {
  const colors: Record<string, string> = {
    gold: 'bg-gold text-black',
    blue: 'bg-blue-500 text-white',
    red: 'bg-red-500 text-white',
    green: 'bg-green-500 text-white',
    purple: 'bg-purple-500 text-white',
    orange: 'bg-orange-500 text-white',
    pink: 'bg-pink-500 text-white'
  }
  return colors[color] || colors.gold
}

/**
 * Retourne l'icône Font Awesome pour une catégorie d'activité
 */
export function getCategorieIcon(categorie: string): string {
  const icons: Record<string, string> = {
    'FORCE': 'fa-dumbbell',
    'CARDIO': 'fa-heartbeat',
    'SOUPLESSE': 'fa-spa',
    'DANSE': 'fa-music',
    'TRAINING': 'fa-bolt',
    'AQUATIQUE': 'fa-swimmer'
  }
  return icons[categorie] || 'fa-dumbbell'
}

/**
 * Vérifie si une chaîne est une URL valide
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Retourne les heures d'ouverture formatées
 */
export function getHorairesTexte(horaires: {
  semaine: string
  samedi: string
  dimanche: string
}): string {
  return `Lun-Ven: ${horaires.semaine} | Sam: ${horaires.samedi} | Dim: ${horaires.dimanche}`
}

/**
 * Groupe les cours par jour
 */
export function groupCoursByJour<T extends { jour: string }>(cours: T[]): Record<string, T[]> {
  return cours.reduce((acc, c) => {
    if (!acc[c.jour]) {
      acc[c.jour] = []
    }
    acc[c.jour].push(c)
    return acc
  }, {} as Record<string, T[]>)
}

/**
 * Trie les cours par heure
 */
export function sortCoursByHeure<T extends { heure: string }>(cours: T[]): T[] {
  return [...cours].sort((a, b) => {
    const [aH, aM] = a.heure.split(':').map(Number)
    const [bH, bM] = b.heure.split(':').map(Number)
    if (aH !== bH) return aH - bH
    return aM - bM
  })
}