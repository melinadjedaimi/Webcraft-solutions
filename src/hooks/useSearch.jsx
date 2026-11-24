import { useState, useMemo } from 'react'
import { normalizeText } from '../utils/text'

// Hook de recherche + filtres, utilisé pour les projets ET les formations.
// - items : la liste à filtrer
// - searchFields : les champs où chercher le texte (ex: ['title', 'client'])
// Les filtres sont stockés par nom de champ (ex: { category: 'Mobile' }).
// Si le champ de l'item est un tableau (technologies), on regarde s'il contient la valeur.
function useSearch(items, searchFields) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({})

  const setFilter = (name, value) => {
    setFilters((previous) => ({ ...previous, [name]: value }))
  }

  const resetAll = () => {
    setSearchTerm('')
    setFilters({})
  }

  // On ne recalcule la liste que si les données, la recherche ou les filtres changent
  const results = useMemo(() => {
    const term = normalizeText(searchTerm.trim())

    return items.filter((item) => {
      const matchesSearch =
        term === '' ||
        searchFields.some((field) => normalizeText(String(item[field])).includes(term))

      const matchesFilters = Object.entries(filters).every(([name, value]) => {
        if (value === '') return true
        return Array.isArray(item[name]) ? item[name].includes(value) : item[name] === value
      })

      return matchesSearch && matchesFilters
    })
  }, [items, searchFields, searchTerm, filters])

  return { searchTerm, setSearchTerm, filters, setFilter, resetAll, results }
}

export default useSearch
