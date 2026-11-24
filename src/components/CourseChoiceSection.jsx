import { LEVELS } from '../config'
import FormField from './FormField'
import FormSection from './FormSection'
import ErrorMessage from './ErrorMessage'

const levelOptions = LEVELS.map((level) => ({ value: level, label: level }))

// Section "Formation choisie" du formulaire : choix de la formation (API 2) et du niveau.
// fieldProps(name) donne les props communes d'un champ (valeur, erreur, onChange...)
function CourseChoiceSection({ fieldProps, courses, isLoading, error, onRetry }) {
  const courseOptions = courses.map((course) => ({
    value: course.title,
    label: `${course.title} - ${course.price} €${course.available ? '' : ' (Complet)'}`,
    disabled: !course.available,
  }))

  return (
    <FormSection number="2" title="Formation choisie">
      {error && (
        <div className="col-12">
          <ErrorMessage message={error} onRetry={onRetry} />
        </div>
      )}
      <FormField
        {...fieldProps('formation')}
        label="Formation souhaitée"
        type="select"
        icon="bi-mortarboard"
        required
        className="col-12"
        placeholder={isLoading ? 'Chargement des formations...' : '-- Sélectionnez une formation --'}
        options={courseOptions}
      />
      <FormField
        {...fieldProps('niveau')}
        label="Votre niveau actuel"
        type="select"
        icon="bi-bar-chart"
        required
        placeholder="-- Sélectionnez votre niveau --"
        options={levelOptions}
      />
    </FormSection>
  )
}

export default CourseChoiceSection
