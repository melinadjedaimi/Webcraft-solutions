function Hero() {
  return (
    <section className="hero text-white text-center">
      <div className="container">
        <h1 className="hero-title display-5 fw-bold">
          Nous créons des <span className="hero-highlight">solutions web</span>
          <br />
          qui font la différence
        </h1>
        <p className="hero-text lead mx-auto">
          WebCraft Solutions conçoit et développe des applications web et
          mobiles sur-mesure. Portfolio de réalisations et formations expertes.
        </p>
        <div className="hero-buttons d-flex flex-wrap justify-content-center gap-2">
          <a href="#projets" className="btn btn-light btn-lg">
            Nos projets
          </a>
          <a href="#formations" className="btn btn-outline-light btn-lg">
            Nos formations
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
