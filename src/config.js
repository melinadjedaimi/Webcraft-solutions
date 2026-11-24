// Constantes et configuration du portail (URL d'API, valeurs fixes)

const API_BASE_URL = 'https://webcraft-api.vercel.app/data'

// URL des deux API utilisées par le portail
export const API_PROJECTS_URL = `${API_BASE_URL}/projects.json`
export const API_COURSES_URL = `${API_BASE_URL}/courses.json`

// Nom du site (utilisé dans le header et le footer)
export const SITE_NAME = 'WebCraft Solutions'

// Liens de navigation du header
export const NAV_LINKS = [
  { path: '/', label: 'Accueil' },
  { path: '/projets', label: 'Projets' },
  { path: '/formations', label: 'Formations' },
  { path: '/inscription', label: 'Inscription' },
]
