// Affiche une note sur 5 avec des étoiles (pleine, demi ou vide)
function RatingStars({ rating }) {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    let icon = 'bi-star'
    if (rating >= i) icon = 'bi-star-fill'
    else if (rating >= i - 0.5) icon = 'bi-star-half'

    stars.push(<i key={i} className={`bi ${icon}`} aria-hidden="true" />)
  }

  return (
    <span className="stars" aria-label={`Note : ${rating} sur 5`}>
      {stars}
    </span>
  )
}

export default RatingStars
