import SafeImage from './SafeImage'
import TechBadges from './TechBadges'

// Contenu de la modal d'un projet
function ProjectDetails({ project }) {
  return (
    <>
      <SafeImage
        src={project.image}
        alt={`Image du projet ${project.title}`}
        className="modal-img"
      />
      <div className="p-4">
        <ul className="list-unstyled d-flex flex-wrap gap-4 card-meta">
          <li><strong>Client :</strong> {project.client}</li>
          <li><strong>Catégorie :</strong> {project.category}</li>
          <li><strong>Année :</strong> {project.year}</li>
          <li><strong>Durée :</strong> {project.duration}</li>
        </ul>

        <p>{project.description}</p>
        <TechBadges technologies={project.technologies} />

        <h3 className="h6">Fonctionnalités principales</h3>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ProjectDetails
