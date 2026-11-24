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
