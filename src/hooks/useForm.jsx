import { useState, useCallback } from 'react'

// Hook qui gère les valeurs et les erreurs d'un formulaire.
// - validateField(name, value) : renvoie le message d'erreur d'un champ ('' si valide)
// - validateForm(values) : renvoie les erreurs de tous les champs
function useForm(initialValues, validateField, validateForm) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  // useCallback : la fonction reste la même entre deux rendus (utile dans un useEffect)
  const setValue = useCallback(
    (name, value) => {
      setValues((previous) => ({ ...previous, [name]: value }))

      // Si le champ était en erreur, on le revalide pendant la saisie pour que l'erreur disparaisse
      setErrors((previous) =>
        previous[name] ? { ...previous, [name]: validateField(name, value) } : previous,
      )
    },
    [validateField],
  )

  // Validation quand on quitte un champ
  const handleBlur = (name) => {
    setErrors((previous) => ({ ...previous, [name]: validateField(name, values[name]) }))
  }

  // Validation de tout le formulaire (à la soumission), renvoie les erreurs trouvées
  const validateAll = () => {
    const newErrors = validateForm(values)
    setErrors(newErrors)
    return newErrors
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
  }

  return { values, errors, setValue, handleBlur, validateAll, reset }
}

export default useForm
