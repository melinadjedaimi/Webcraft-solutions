// Bloc numéroté du formulaire (ex : "1 - Informations personnelles")
function FormSection({ number, title, children }) {
  return (
    <fieldset className="form-section">
      <legend className="form-section-title">
        <span className="section-number">{number}</span>
        {title}
      </legend>
      <div className="row g-3">{children}</div>
    </fieldset>
  )
}

export default FormSection
