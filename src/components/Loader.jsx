function Loader({ message = 'Chargement en cours...' }) {
  return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status" />
      <p className="mt-3 text-muted">{message}</p>
    </div>
  )
}

export default Loader
