import Loader from './Loader'
import ErrorMessage from './ErrorMessage'

// Section de la page qui affiche des données d'API :
// en-tête, puis loader pendant le chargement, message d'erreur, ou le contenu (children)
function DataSection({
  id,
  label,
  title,
  subtitle,
  isLoading,
  error,
  onRetry,
  loadingMessage,
  className = '',
  children,
}) {
  return (
    <section id={id} className={`py-5 ${className}`}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        {isLoading && <Loader message={loadingMessage} />}
        {error && <ErrorMessage message={error} onRetry={onRetry} />}
        {!isLoading && !error && children}
      </div>
    </section>
  )
}

export default DataSection
