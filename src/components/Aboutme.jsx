import React from 'react'

const Aboutme = () => {
  return (
    <section className='aboutme' id='aboutme'>
      <div className="aboutme_content">
        <div className="aboutme_content-rightbox" data-aos="fade-right" >
          <h2 className="aboutme_content-rightbox_heading">O mnie</h2>
          <h3 className="aboutme_content-rightbox_welcome">Cześć! Jestem Kamil, miło mi Cię poznać. Zapraszam do przejrzenia moich umiejętności!
          </h3>
        </div>
        <div className="aboutme_content-leftbox" data-aos="zoom-in-up">
          <p className="aboutme_content-leftbox_description">Masz dość nudnych stron internetowych? Witaj w świecie struktur internetowych, tworzonych przez utalentowanego 16-latka! Oferuję strony pełne kreatywności, świeżości i niestandardowych rozwiązań. Ożyw swoje strony dynamicznymi animacjami i nietypowymi układami.</p>
        </div>
      </div>
    </section>
  )
}

export default Aboutme