function TechBadges({ technologies }) {
  return (
    <div className="d-flex flex-wrap gap-2 mb-3" aria-label="Technologies">
      {technologies.map((tech) => (
        <span className="tech-badge" key={tech}>
          {tech}
        </span>
      ))}
    </div>
  )
}

export default TechBadges
