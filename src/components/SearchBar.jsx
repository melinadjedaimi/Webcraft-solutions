import { useId } from 'react'

// Champ de recherche contrôlé : le texte est géré par le parent
function SearchBar({ value, onChange, placeholder = 'Rechercher...' }) {
  // useId donne un id unique, même si le composant est utilisé deux fois sur la page
  const inputId = useId()

  return (
    <div className="col-md">
      <label htmlFor={inputId} className="form-label fw-semibold">
        Rechercher
      </label>
      <input
        id={inputId}
        type="search"
        className="form-control filter-input"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
