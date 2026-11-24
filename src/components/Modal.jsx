import { useEffect } from 'react'

// Modal réutilisable : le contenu est passé en children
// (détails d'un projet ou d'une formation) et footer sert à ajouter un bouton d'action
function Modal({ title, onClose, footer, children }) {
  // Fermeture avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <>
      <div className="modal-backdrop show" />
      {/* Un clic en dehors de la boîte ferme la modal */}
      <div className="modal d-block" role="dialog" aria-modal="true" onClick={onClose}>
        <div
          className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="modal-content custom-modal">
            <div className="modal-header">
              <h2 className="modal-title fs-5">{title}</h2>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Fermer"
                onClick={onClose}
              />
            </div>
            <div className="modal-body p-0">{children}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
                Fermer
              </button>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
