import { SITE_NAME } from '../config'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-auto">
      <div className="container">
        <p className="mb-0">
          © {currentYear} {SITE_NAME} - Tous droits réservés
        </p>
      </div>
    </footer>
  )
}

export default Footer
