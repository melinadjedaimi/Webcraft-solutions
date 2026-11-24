/**
 * Construit le texte du nombre de résultats ("1 projet trouvé", "3 formations trouvées").
 * @param {number} count - Nombre de résultats
 * @param {string} noun - Le nom au singulier ("projet", "formation")
 * @param {boolean} [isFeminine=false] - true si le nom est féminin (accord de "trouvé")
 * @returns {string} Le texte à afficher
 */
export function formatResultCount(count, noun, isFeminine = false) {
  if (count === 0) return 'Aucun résultat'
  const plural = count > 1 ? 's' : ''
  const feminine = isFeminine ? 'e' : ''
  return `${count} ${noun}${plural} trouvé${feminine}${plural}`
}

/**
 * Met un texte en minuscules et enlève les accents,
 * pour que la recherche ignore la casse et les accents ("react" trouve "React", "ete" trouve "été").
 * @param {string} text - Le texte à normaliser
 * @returns {string} Le texte normalisé
 */
export function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}
