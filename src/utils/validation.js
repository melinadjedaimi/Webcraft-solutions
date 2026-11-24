import { MOTIVATION_MIN_LENGTH } from '../config'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Numéro international : + puis le code pays et le numéro (8 à 15 chiffres)
const PHONE_REGEX = /^\+[1-9]\d{7,14}$/

/**
 * Valide un champ du formulaire d'inscription.
 * @param {string} name - Le nom du champ (prenom, nom, email, telephone, ...)
 * @param {string|boolean} value - La valeur saisie (un booléen pour la case rgpd)
 * @returns {string} Le message d'erreur, ou une chaîne vide si le champ est valide
 */
export function validateField(name, value) {
  // On enlève les espaces autour du texte (la case rgpd reste un booléen)
  const text = typeof value === 'string' ? value.trim() : value

  switch (name) {
    case 'prenom':
    case 'nom':
      if (!text) return 'Ce champ est obligatoire.'
      if (text.length < 2) return 'Minimum 2 caractères requis.'
      return ''

    case 'email':
      if (!text) return 'Ce champ est obligatoire.'
      if (!EMAIL_REGEX.test(text)) return 'Adresse email invalide (ex : prenom@domaine.fr).'
      return ''

    case 'telephone': {
      if (!text) return 'Ce champ est obligatoire.'
      // On accepte les espaces, tirets, points et parenthèses dans la saisie
      const cleanPhone = text.replace(/[\s\-().]/g, '')
      if (!PHONE_REGEX.test(cleanPhone)) return 'Format international requis (ex : +33612345678).'
      return ''
    }

    case 'experience': {
      // Champ optionnel : valide s'il est vide
      if (text === '') return ''
      const years = Number(text)
      if (Number.isNaN(years) || years < 0 || years > 50) return 'Entrez un nombre entre 0 et 50.'
      return ''
    }

    case 'formation':
      return text ? '' : 'Veuillez sélectionner une formation.'

    case 'niveau':
      return text ? '' : 'Veuillez sélectionner votre niveau.'

    case 'motivation':
      if (!text) return 'Ce champ est obligatoire.'
      if (text.length < MOTIVATION_MIN_LENGTH) {
        return `Minimum ${MOTIVATION_MIN_LENGTH} caractères (actuellement ${text.length}).`
      }
      return ''

    case 'rgpd':
      return text ? '' : 'Vous devez accepter la politique de confidentialité.'

    default:
      return ''
  }
}

/**
 * Valide tous les champs du formulaire d'un coup.
 * @param {Object} values - Les valeurs du formulaire, par nom de champ
 * @returns {Object} Les erreurs par nom de champ (objet vide si tout est valide)
 */
export function validateForm(values) {
  const errors = {}

  Object.keys(values).forEach((name) => {
    const message = validateField(name, values[name])
    if (message) errors[name] = message
  })

  return errors
}
