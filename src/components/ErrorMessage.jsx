// Message d'erreur avec un bouton pour relancer l'appel API (si onRetry est fourni)
function ErrorMessage({ message, onRetry }) {
  return (
    <div className="alert alert-danger text-center" role="alert">
      <p className="mb-2">{message}</p>
      {onRetry && (
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={onRetry}>
          Réessayer
        </button>
      )}
    </div>
  )
}

export default ErrorMessage
