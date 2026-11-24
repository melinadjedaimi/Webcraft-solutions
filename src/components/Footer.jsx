import { Link } from 'react-router-dom'
import { SITE_NAME, NAV_LINKS, CONTACT } from '../config'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer pt-5 mt-auto">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-6">
            <p className="footer-heading fw-bold fs-5">{SITE_NAME}</p>
            <p>
              Agence digitale spécialisée dans le développement web sur-mesure et les
              formations techniques de haut niveau.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-6">
            <h3 className="footer-heading fs-6 fw-bold">Navigation</h3>
            <ul className="list-unstyled">
              {NAV_LINKS.map((link) => (
                <li key={link.path} className="mb-2">
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h3 className="footer-heading fs-6 fw-bold">Contact</h3>
            <address>
              <p>
                <i className="bi bi-geo-alt me-2" aria-hidden="true" />
                {CONTACT.address}
              </p>
              <p>
                <i className="bi bi-envelope me-2" aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
              <p>
                <i className="bi bi-telephone me-2" aria-hidden="true" />
                <a href={`tel:${CONTACT.phoneLink}`}>{CONTACT.phone}</a>
              </p>
            </address>
          </div>
        </div>

        <hr className="footer-divider" />
        <p className="text-center pb-3 mb-0">
          © {currentYear} {SITE_NAME}. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}

export default Footer
