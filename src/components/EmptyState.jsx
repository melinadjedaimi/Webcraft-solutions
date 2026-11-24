// Affiché quand la recherche ou les filtres ne donnent aucun résultat
function EmptyState({ title }) {
  return (
    <div className="text-center text-muted py-5" role="status">
      <i className="bi bi-search fs-1" aria-hidden="true" />
      <h3 className="h5 mt-2">{title}</h3>
      <p>Essayez d'autres termes de recherche ou réinitialisez les filtres.</p>
    </div>
  )
}

export default EmptyState
