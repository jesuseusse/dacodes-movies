import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="custom-shape-divider-top-1696824990">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div>
          <h3 className="footer__title">
            We are coding the world of tomorrow_
          </h3>
          <p className="footer__description">
            DaCodes es una de las mejores empresas de desarrollo de software en
            México y LATAM. Lo que nos separa de los demás es el nivel de
            involucramiento que tenemos en nuestros proyectos y la pasión que
            tenemos por desarrollar productos digitales de calidad mundial.
            Somos un equipo de 220+ dacoders especializados en la planeación,
            diseño, desarrollo, implementación e innovación continua de
            productos digitales disruptivos.
          </p>
          <div className="footer__logos">
            <img src="./Group183.png" alt="BEST" />
            <img src="./LogoGPTW.png" alt="Great place to Work" />
            <img src="./Vector.png" alt="EFY" />
            <img src="./Vector2.png" alt="AWS" />
          </div>
        </div>
      </footer>
    </>
  )
}
