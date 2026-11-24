// Constantes et configuration du portail (URL d'API, valeurs fixes)

const API_BASE_URL = 'https://webcraft-api.vercel.app/data'

// URL des deux API utilisées par le portail
export const API_PROJECTS_URL = `${API_BASE_URL}/projects.json`
export const API_COURSES_URL = `${API_BASE_URL}/courses.json`

// Nom du site (utilisé dans le header et le footer)
export const SITE_NAME = 'WebCraft Solutions'

// Image affichée si l'image d'un projet ou d'une formation ne charge pas
export const FALLBACK_IMAGE = 'https://placehold.co/800x400/9a7658/ffffff?text=WebCraft'

// Classe CSS du badge selon le niveau d'une formation
export const LEVEL_CLASSES = {
  Débutant: 'level-debutant',
  Intermédiaire: 'level-intermediaire',
  Avancé: 'level-avance',
}

// Liens de navigation du header
export const NAV_LINKS = [
  { path: '/', label: 'Accueil' },
  { path: '/projets', label: 'Projets' },
  { path: '/formations', label: 'Formations' },
  { path: '/inscription', label: 'Inscription' },
]
