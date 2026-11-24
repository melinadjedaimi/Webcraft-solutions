import { useState } from 'react'
import { FALLBACK_IMAGE } from '../config'

// Image qui affiche une image de secours si l'URL de l'API ne charge pas
function SafeImage({ src, alt, className }) {
  const [hasError, setHasError] = useState(false)

  return (
    <img
      src={hasError ? FALLBACK_IMAGE : src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  )
}

export default SafeImage
