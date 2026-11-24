import { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import useSearch from '../hooks/useSearch'
import { API_COURSES_URL } from '../config'
import { formatResultCount } from '../utils/text'
import DataSection from './DataSection'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import CourseCard from './CourseCard'
import CourseDetails from './CourseDetails'
import EmptyState from './EmptyState'
import Modal from './Modal'

const SEARCH_FIELDS = ['title', 'instructor', 'technologies']

// Section Formations de la page d'accueil (API 2)
// Elle réutilise les mêmes SearchBar, FilterBar et Modal que la section Projets
function CoursesSection() {
  const { data, isLoading, error, retry } = useFetch(API_COURSES_URL)
  const [selectedCourse, setSelectedCourse] = useState(null)

  const courses = data ? data.courses : []
  const { searchTerm, setSearchTerm, filters, setFilter, resetAll, results } =
    useSearch(courses, SEARCH_FIELDS)

  const filterList = data
    ? [
        {
          name: 'category',
          label: 'Catégorie',
          allLabel: 'Toutes les catégories',
          options: data.categories,
        },
        {
          name: 'level',
          label: 'Niveau',
          allLabel: 'Tous les niveaux',
          options: data.levels,
        },
        {
          name: 'technologies',
          label: 'Technologie',
          allLabel: 'Toutes les technologies',
          options: data.technologies,
        },
      ]
    : []

  return (
    <DataSection
      id="formations"
      label="Notre catalogue"
      title="Formations techniques"
      subtitle="Montez en compétences avec nos formations expertes. Du débutant à l'expert, il y en a pour tous les niveaux."
      isLoading={isLoading}
      error={error}
      onRetry={retry}
      loadingMessage="Chargement des formations..."
    >
      <FilterBar
        filters={filterList}
        values={filters}
        onChange={setFilter}
        onReset={resetAll}
        resultText={formatResultCount(results.length, 'formation', true)}
      >
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Titre, formateur, technologie..."
        />
      </FilterBar>

      {results.length === 0 ? (
        <EmptyState title="Aucune formation trouvée" />
      ) : (
        <div className="row g-4">
          {results.map((course) => (
            <div className="col-lg-4 col-md-6" key={course.id}>
              <CourseCard course={course} onSelect={setSelectedCourse} />
            </div>
          ))}
        </div>
      )}

      {selectedCourse && (
        <Modal
          title={selectedCourse.title}
          onClose={() => setSelectedCourse(null)}
          footer={
            <Link
              to={`/inscription?formation=${encodeURIComponent(selectedCourse.title)}`}
              className="btn btn-primary"
            >
              S'inscrire
            </Link>
          }
        >
          <CourseDetails course={selectedCourse} />
        </Modal>
      )}
    </DataSection>
  )
}

export default CoursesSection
