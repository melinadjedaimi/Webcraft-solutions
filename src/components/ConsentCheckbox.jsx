// Case à cocher du consentement RGPD (obligatoire pour envoyer le formulaire)
function ConsentCheckbox({ checked, error, onChange, onBlur }) {
  return (
    <div className="form-section">
      <div className="form-check">
        <input
          id="rgpd"
          type="checkbox"
          className={`form-check-input ${error ? 'is-invalid' : ''}`}
          checked={checked}
          onChange={(event) => onChange('rgpd', event.target.checked)}
          onBlur={() => onBlur('rgpd')}
        />
        <label htmlFor="rgpd" className="form-check-label">
          J'accepte que mes données personnelles soient utilisées pour traiter ma demande
          d'inscription.
          <span className="text-danger"> *</span>
        </label>
        <div className="field-error" role="alert">
          {error}
        </div>
      </div>
    </div>
  )
}

export default ConsentCheckbox
