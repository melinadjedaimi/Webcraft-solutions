import { useId } from 'react'

// Barre de filtres générique : une liste déroulante par filtre.
// filters : [{ name, label, allLabel, options }]  (name = champ de l'item à filtrer)
// values : valeurs choisies, par exemple { category: 'Mobile' }
// children : sert à placer la SearchBar dans la même ligne
function FilterBar({ filters, values, onChange, onReset, resultText, children }) {
  const baseId = useId()

  return (
    <div className="filters-container" role="search">
      <div className="row g-3 align-items-end">
        {children}

        {filters.map((filter) => (
          <div className="col-md" key={filter.name}>
            <label htmlFor={`${baseId}-${filter.name}`} className="form-label fw-semibold">
              {filter.label}
            </label>
            <select
              id={`${baseId}-${filter.name}`}
              className="form-select filter-input"
              value={values[filter.name] || ''}
              onChange={(event) => onChange(filter.name, event.target.value)}
            >
              <option value="">{filter.allLabel}</option>
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="mt-3 d-flex justify-content-between align-items-center">
        <span className="results-count" aria-live="polite">
          {resultText}
        </span>
        <button type="button" className="btn-reset" onClick={onReset}>
          Réinitialiser
        </button>
      </div>
    </div>
  )
}

export default FilterBar
