import SafeImage from './SafeImage'
import TechBadges from './TechBadges'

// Carte d'un projet : onSelect est appelé avec le projet quand on clique sur "Voir détails"
function ProjectCard({ project, onSelect }) {
  return (
    <article className="catalog-card">
      <div className="catalog-card-img-wrapper">
        <SafeImage
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          className="catalog-card-img"
        />
        <span className="catalog-badge catalog-badge-left">{project.category}</span>
        <span className="catalog-badge catalog-badge-right">{project.year}</span>
      </div>

      <div className="catalog-card-body">
        <p className="card-meta mb-1">
          <i className="bi bi-building me-1" aria-hidden="true" />
          {project.client}
        </p>
        <h3 className="catalog-card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
        <TechBadges technologies={project.technologies} />
        <p className="card-meta mt-auto">
          <i className="bi bi-clock me-1" aria-hidden="true" />
          Durée : {project.duration}
        </p>
        <button
          type="button"
          className="btn btn-outline-secondary w-100"
          onClick={() => onSelect(project)}
        >
          <i className="bi bi-eye me-1" aria-hidden="true" />
          Voir détails
        </button>
      </div>
    </article>
  )
}

export default ProjectCard
