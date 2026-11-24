import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Remonte en haut de la page à chaque changement de page
// (React Router garde sinon la position de scroll de la page précédente)
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
