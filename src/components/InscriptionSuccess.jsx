// Message affiché après l'envoi du formulaire
function InscriptionSuccess({ name, email, onNew }) {
  return (
    <div className="success-banner" role="alert">
      <i className="bi bi-check-circle-fill success-icon" aria-hidden="true" />
      <h2 className="h4 mt-2">Inscription envoyée !</h2>
      <p>
        Merci <strong>{name}</strong> ! Votre demande d'inscription a bien été reçue.
        Notre équipe vous contactera à l'adresse <strong>{email}</strong> dans les 24 heures.
      </p>
      <button type="button" className="btn btn-primary" onClick={onNew}>
        <i className="bi bi-plus-circle me-2" aria-hidden="true" />
        Nouvelle inscription
      </button>
    </div>
  )
}

export default InscriptionSuccess
