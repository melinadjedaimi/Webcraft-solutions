/**
 * Construit le texte du nombre de résultats ("1 projet trouvé", "3 projets trouvés").
 * @param {number} count - Nombre de résultats
 * @param {string} noun - Le nom au singulier ("projet", "formation")
 * @returns {string} Le texte à afficher
 */
export function formatResultCount(count, noun) {
  if (count === 0) return 'Aucun résultat'
  const plural = count > 1 ? 's' : ''
  return `${count} ${noun}${plural} trouvé${plural}`
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
