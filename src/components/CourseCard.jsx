import { Link } from 'react-router-dom'
import { LEVEL_CLASSES } from '../config'
import SafeImage from './SafeImage'
import TechBadges from './TechBadges'
import RatingStars from './RatingStars'

// Carte d'une formation : onSelect est appelé avec la formation quand on clique sur "Détails"
function CourseCard({ course, onSelect }) {
  return (
    <article className="catalog-card">
      <div className="catalog-card-img-wrapper">
        <SafeImage
          src={course.image}
          alt={`Aperçu de la formation ${course.title}`}
          className="catalog-card-img"
        />
        <span className={`catalog-badge catalog-badge-left ${LEVEL_CLASSES[course.level]}`}>
          {course.level}
        </span>
        <span
          className={`catalog-badge catalog-badge-right ${
            course.available ? 'available-yes' : 'available-no'
          }`}
        >
          {course.available ? 'Disponible' : 'Complet'}
        </span>
      </div>

      <div className="catalog-card-body">
        <p className="card-meta mb-1">{course.category}</p>
        <h3 className="catalog-card-title">{course.title}</h3>

        <div className="d-flex align-items-center gap-2 mb-2">
          <RatingStars rating={course.rating} />
          <strong>{course.rating}</strong>
          <span className="card-meta">({course.students} étudiants)</span>
        </div>

        <p className="card-meta d-flex gap-3">
          <span><i className="bi bi-clock me-1" aria-hidden="true" />{course.duration}</span>
          <span><i className="bi bi-person me-1" aria-hidden="true" />{course.instructor}</span>
        </p>

        <TechBadges technologies={course.technologies} />

        <p className="course-price mt-auto">{course.price} €</p>

        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-outline-secondary flex-fill"
            onClick={() => onSelect(course)}
          >
            <i className="bi bi-eye me-1" aria-hidden="true" />
            Détails
          </button>
          <Link
            to={`/inscription?formation=${encodeURIComponent(course.title)}`}
            className="btn btn-success flex-fill"
          >
            <i className="bi bi-person-plus me-1" aria-hidden="true" />
            S'inscrire
          </Link>
        </div>
      </div>
    </article>
  )
}

export default CourseCard
