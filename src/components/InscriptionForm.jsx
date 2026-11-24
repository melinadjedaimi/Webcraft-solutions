import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import useForm from '../hooks/useForm'
import {
  API_COURSES_URL,
  MOTIVATION_MIN_LENGTH,
  PERSONAL_FIELDS,
  INSCRIPTION_INITIAL_VALUES,
} from '../config'
import { validateField, validateForm } from '../utils/validation'
import FormField from './FormField'
import FormSection from './FormSection'
import CourseChoiceSection from './CourseChoiceSection'
import ConsentCheckbox from './ConsentCheckbox'
import InscriptionSuccess from './InscriptionSuccess'

function InscriptionForm() {
  // Les formations de la liste déroulante viennent de l'API 2
  const { data, isLoading, error, retry } = useFetch(API_COURSES_URL)
  const { values, errors, setValue, handleBlur, validateAll, reset } = useForm(
    INSCRIPTION_INITIAL_VALUES,
    validateField,
    validateForm,
  )
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(null)
  const [searchParams] = useSearchParams()
  const formationParam = searchParams.get('formation')

  // Si on vient d'un bouton "S'inscrire" (?formation=...), on pré-sélectionne la formation
  useEffect(() => {
    if (!data || !formationParam) return
    const course = data.courses.find((c) => c.title === formationParam && c.available)
    if (course) setValue('formation', course.title)
  }, [data, formationParam, setValue])

  const handleSubmit = (event) => {
    event.preventDefault()

    // Si le formulaire est invalide, on met le focus sur le premier champ en erreur
    const newErrors = validateAll()
    const firstErrorField = Object.keys(newErrors)[0]
    if (firstErrorField) {
      document.getElementById(firstErrorField)?.focus()
      return
    }

    // Pas de vrai serveur : on simule un envoi de 1,5 seconde
    setIsSubmitting(true)
    setTimeout(() => {
      const name = `${values.prenom.trim()} ${values.nom.trim()}`
      setSubmitted({ name, email: values.email.trim() })
      setIsSubmitting(false)
      reset()
    }, 1500)
  }

  if (submitted) {
    return <InscriptionSuccess {...submitted} onNew={() => setSubmitted(null)} />
  }

  // Props communes à tous les champs
  const fieldProps = (name) => ({
    id: name,
    value: values[name],
    error: errors[name],
    onChange: setValue,
    onBlur: handleBlur,
  })

  const motivationLength = values.motivation.trim().length

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-card-header">
        <h2 className="h5 mb-1">Votre dossier d'inscription</h2>
        <p className="mb-0 field-hint">
          Les champs marqués d'une <span className="text-danger">*</span> sont obligatoires.
        </p>
      </div>

      <FormSection number="1" title="Informations personnelles">
        {PERSONAL_FIELDS.map(({ name, ...field }) => (
          <FormField key={name} {...fieldProps(name)} {...field} />
        ))}
      </FormSection>

      <CourseChoiceSection
        fieldProps={fieldProps}
        courses={data ? data.courses : []}
        isLoading={isLoading}
        error={error}
        onRetry={retry}
      />

      <FormSection number="3" title="Votre motivation">
        <FormField
          {...fieldProps('motivation')}
          label="Message de motivation"
          type="textarea"
          required
          className="col-12"
          placeholder="Décrivez vos objectifs et pourquoi vous souhaitez suivre cette formation..."
        >
          <span className={`char-counter ${motivationLength >= MOTIVATION_MIN_LENGTH ? 'reached' : ''}`}>
            {motivationLength} / {MOTIVATION_MIN_LENGTH} min.
          </span>
        </FormField>
      </FormSection>

      <ConsentCheckbox
        checked={values.rgpd}
        error={errors.rgpd}
        onChange={setValue}
        onBlur={handleBlur}
      />

      <div className="form-submit-area">
        <button type="submit" className="btn btn-primary btn-lg w-100" disabled={isSubmitting}>
          {isSubmitting ? 'Envoi en cours...' : "Envoyer ma demande d'inscription"}
        </button>
      </div>
    </form>
  )
}

export default InscriptionForm
