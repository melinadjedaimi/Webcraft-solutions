import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import useSearch from '../hooks/useSearch'
import { API_PROJECTS_URL } from '../config'
import { formatResultCount } from '../utils/text'
import DataSection from './DataSection'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import ProjectCard from './ProjectCard'
import ProjectDetails from './ProjectDetails'
import EmptyState from './EmptyState'
import Modal from './Modal'

// Champs dans lesquels la recherche texte est faite
const SEARCH_FIELDS = ['title', 'client', 'technologies']

// Section Projets de la page d'accueil (API 1)
function ProjectsSection() {
  const { data, isLoading, error, retry } = useFetch(API_PROJECTS_URL)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = data ? data.projects : []
  const { searchTerm, setSearchTerm, filters, setFilter, resetAll, results } =
    useSearch(projects, SEARCH_FIELDS)

  // Les listes d'options des filtres viennent de l'API
  const filterList = data
    ? [
        {
          name: 'category',
          label: 'Catégorie',
          allLabel: 'Toutes les catégories',
          options: data.categories,
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
      id="projets"
      label="Notre portfolio"
      title="Projets clients"
      subtitle="Découvrez nos réalisations pour des clients variés, du e-commerce aux dashboards analytiques."
      isLoading={isLoading}
      error={error}
      onRetry={retry}
      loadingMessage="Chargement des projets..."
      className="section-beige"
    >
      <FilterBar
        filters={filterList}
        values={filters}
        onChange={setFilter}
        onReset={resetAll}
        resultText={formatResultCount(results.length, 'projet')}
      >
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Titre, client, technologie..."
        />
      </FilterBar>

      {results.length === 0 ? (
        <EmptyState title="Aucun projet trouvé" />
      ) : (
        <div className="row g-4">
          {results.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <ProjectCard project={project} onSelect={setSelectedProject} />
            </div>
          ))}
        </div>
      )}

      {selectedProject && (
        <Modal
          title={selectedProject.title}
          onClose={() => setSelectedProject(null)}
          footer={
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Voir le projet
            </a>
          }
        >
          <ProjectDetails project={selectedProject} />
        </Modal>
      )}
    </DataSection>
  )
}

export default ProjectsSection
