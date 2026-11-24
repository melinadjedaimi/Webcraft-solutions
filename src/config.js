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

// Niveaux proposés dans le formulaire d'inscription
export const LEVELS = ['Débutant', 'Intermédiaire', 'Avancé']

// Longueur minimale du message de motivation
export const MOTIVATION_MIN_LENGTH = 50

// Valeurs de départ du formulaire d'inscription
export const INSCRIPTION_INITIAL_VALUES = {
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  entreprise: '',
  experience: '',
  formation: '',
  niveau: '',
  motivation: '',
  rgpd: false,
}

// Champs "Informations personnelles" du formulaire d'inscription
export const PERSONAL_FIELDS = [
  { name: 'prenom', label: 'Prénom', icon: 'bi-person', required: true, placeholder: 'Votre prénom' },
  { name: 'nom', label: 'Nom', icon: 'bi-person', required: true, placeholder: 'Votre nom de famille' },
  {
    name: 'email',
    label: 'Adresse email',
    type: 'email',
    icon: 'bi-envelope',
    required: true,
    placeholder: 'exemple@email.com',
  },
  {
    name: 'telephone',
    label: 'Téléphone',
    type: 'tel',
    icon: 'bi-telephone',
    required: true,
    placeholder: '+33 6 12 34 56 78',
    hint: 'Format international requis : +33 6 XX XX XX XX',
  },
  {
    name: 'entreprise',
    label: 'Entreprise',
    icon: 'bi-building',
    optional: true,
    placeholder: 'Nom de votre entreprise',
  },
  {
    name: 'experience',
    label: "Années d'expérience",
    type: 'number',
    icon: 'bi-briefcase',
    optional: true,
    placeholder: 'Ex : 3',
  },
]

// Liens de navigation du header et du footer (highlight = affiché comme un bouton)
export const NAV_LINKS = [
  { path: '/', label: 'Accueil', icon: 'bi-house-door' },
  { path: '/projets', label: 'Projets', icon: 'bi-briefcase' },
  { path: '/formations', label: 'Formations', icon: 'bi-mortarboard' },
  { path: '/inscription', label: 'Inscription', icon: 'bi-person-plus', highlight: true },
]

// Coordonnées affichées dans le footer
export const CONTACT = {
  address: '15 rue de la Tech, 75001 Paris',
  email: 'contact@webcraft.fr',
  phone: '+33 1 23 45 67 89',
  phoneLink: '+33123456789',
}
