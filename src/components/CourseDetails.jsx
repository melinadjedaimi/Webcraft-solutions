import { LEVEL_CLASSES } from '../config'
import SafeImage from './SafeImage'
import TechBadges from './TechBadges'
import RatingStars from './RatingStars'

// Contenu de la modal d'une formation
function CourseDetails({ course }) {
  return (
    <>
      <SafeImage
        src={course.image}
        alt={`Image de la formation ${course.title}`}
        className="modal-img"
      />
      <div className="p-4">
        <ul className="list-unstyled d-flex flex-wrap gap-4 card-meta">
          <li><strong>Catégorie :</strong> {course.category}</li>
          <li><strong>Niveau :</strong> {course.level}</li>
          <li><strong>Durée :</strong> {course.duration}</li>
          <li><strong>Étudiants :</strong> {course.students}</li>
        </ul>

        <div className="d-flex align-items-center gap-2 mb-2">
          <RatingStars rating={course.rating} />
          <strong>{course.rating}/5</strong>
        </div>

        <p>{course.description}</p>
        <TechBadges technologies={course.technologies} />

        <h3 className="h6">Modules du programme</h3>
        <ul>
          {course.modules.map((module) => (
            <li key={module}>{module}</li>
          ))}
        </ul>

        <p className="card-meta">
          <i className="bi bi-person-circle me-1" aria-hidden="true" />
          Formateur : <strong>{course.instructor}</strong>
        </p>

        <div className="d-flex justify-content-between align-items-center price-box">
          <div className="d-flex align-items-center gap-2">
            <span className={`catalog-badge-inline ${LEVEL_CLASSES[course.level]}`}>
              {course.level}
            </span>
            <span className={course.available ? 'text-success' : 'text-secondary'}>
              {course.available ? 'Disponible' : 'Complet'}
            </span>
          </div>
          <span className="course-price mb-0">{course.price} €</span>
        </div>
      </div>
    </>
  )
}

export default CourseDetails
