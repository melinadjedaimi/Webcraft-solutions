import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SITE_NAME, NAV_LINKS } from '../config'

// On sépare le premier mot du nom pour mettre la fin en couleur : "WebCraft" + "Solutions"
const [firstWord, ...otherWords] = SITE_NAME.split(' ')

function Header() {
  // Menu ouvert ou fermé sur mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/" onClick={closeMenu}>
          <span className="brand-icon">
            <i className="bi bi-code-slash" aria-hidden="true" />
          </span>
          <span className="fw-bold">
            {firstWord} <span className="brand-accent">{otherWords.join(' ')}</span>
          </span>
        </Link>

        <button
          type="button"
          className="navbar-toggler"
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <nav className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''} ${link.highlight ? 'nav-pill' : ''}`
                  }
                  onClick={closeMenu}
                >
                  <i className={`bi ${link.icon} me-1`} aria-hidden="true" />
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
