import InscriptionForm from '../components/InscriptionForm'

// Petites cartes d'information affichées à côté du formulaire
const INFO_CARDS = [
  { icon: 'bi-lightning-charge', title: 'Réponse rapide', text: 'Notre équipe vous répond sous 24h ouvrées pour confirmer votre inscription.' },
  { icon: 'bi-people', title: 'Petits groupes', text: 'Formations en groupes de 8 à 12 personnes max pour un suivi personnalisé.' },
  { icon: 'bi-award', title: 'Certification', text: 'Obtenez un certificat de complétion à la fin de chaque formation.' },
  { icon: 'bi-headset', title: 'Support illimité', text: 'Accès au support formateur pendant et après la formation.' },
]

function InscriptionPage() {
  return (
    <>
      <header className="inscription-header text-center">
        <div className="container">
          <span className="section-label">Rejoignez-nous</span>
          <h1 className="inscription-title">Inscription à une formation</h1>
          <p className="mb-0">
            Remplissez ce formulaire pour vous inscrire à l'une de nos formations.
            Notre équipe vous contactera sous 24h.
          </p>
        </div>
      </header>

      <div className="section-beige py-5">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-8">
              <InscriptionForm />
            </div>

            <aside className="col-lg-4 d-none d-lg-block">
              <div className="info-sidebar">
                {INFO_CARDS.map((card) => (
                  <div className="info-card" key={card.title}>
                    <i className={`bi ${card.icon} info-card-icon`} aria-hidden="true" />
                    <h3 className="h6 mt-2">{card.title}</h3>
                    <p className="mb-0 card-meta">{card.text}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}

export default InscriptionPage
