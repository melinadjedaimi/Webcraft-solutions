// Champ de formulaire réutilisable (input, select ou textarea) avec label et message d'erreur.
// onChange(name, value) et onBlur(name) sont fournis par le formulaire.
// options (pour un select) : [{ value, label, disabled }]
function FormField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  required = false,
  optional = false,
  placeholder,
  hint,
  options = [],
  icon,
  className = 'col-md-6',
  children,
}) {
  const controlProps = {
    id,
    name: id,
    value,
    placeholder,
    onChange: (event) => onChange(id, event.target.value),
    onBlur: () => onBlur(id),
    'aria-invalid': Boolean(error),
    'aria-describedby': `${id}-error`,
  }
  const invalidClass = error ? 'is-invalid' : ''

  let control
  if (type === 'select') {
    control = (
      <select className={`form-select custom-input ${invalidClass}`} {...controlProps}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    )
  } else if (type === 'textarea') {
    control = (
      <textarea
        rows="5"
        className={`form-control custom-input custom-textarea ${invalidClass}`}
        {...controlProps}
      />
    )
  } else {
    control = (
      <input type={type} className={`form-control custom-input ${invalidClass}`} {...controlProps} />
    )
  }

  return (
    <div className={className}>
      <label htmlFor={id} className="form-label fw-semibold">
        {label}
        {required && <span className="text-danger"> *</span>}
        {optional && <span className="field-hint"> (optionnel)</span>}
      </label>

      <div className="input-group-custom">
        {icon && <i className={`bi ${icon} input-icon`} aria-hidden="true" />}
        {control}
      </div>

      {hint && <div className="field-hint">{hint}</div>}

      <div className="d-flex justify-content-between align-items-start">
        <div className="field-error" id={`${id}-error`} role="alert">
          {error}
        </div>
        {children}
      </div>
    </div>
  )
}

export default FormField
