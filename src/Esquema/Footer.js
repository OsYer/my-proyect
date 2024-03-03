import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Actualiza el año actual al montar el componente
    setCurrentYear(new Date().getFullYear());
  }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <div>
      {/* <!-- Footer Section Begin --> */}
      <footer className="footer bg-black pt-10 pb-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 md:w-1/2 mb-10 lg:mb-0">
              <div className="footer__about">
                <div className="footer__about__logo mb-4">
                  <Link to="/"><img src="/logo_letras.jpeg" alt="" style={{ maxHeight: '75px' }} /></Link>
                </div>
                <ul className="text-gray-400">
                  <li>Dirección: Ote. 7 MZC LT7, Parque de Poblamiento, 43000 Huejutla de Reyes, Hgo.</li>
                  <li>Teléfono: +52 7717935563</li>
                  <li>Correo : sportgymcenterinfo@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2 mb-10 lg:mb-0">
              <div className="footer__widget">
                <h6 className="text-white">Enlaces útiles</h6>
                <ul className="text-gray-400">
                  <li><Link to="/nosotros">Sobre nosotros</Link></li>
                  <li><Link to="#">Quienes somos</Link></li>
                  <li><Link to="/contacto">Contacto</Link></li>
                </ul>
                <ul className="text-gray-400">
                  <li><Link to="/privacidad">Política de privacidad</Link></li>
                  <li><Link to="/terminos-y-condiciones">Términos y condiciones</Link></li>
                  <li><Link to="/cookies">Política de Cookies</Link></li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <div className="footer__widget">
                <h6 className="text-white">Síguenos</h6>
                <p className="text-gray-400">Buscanos en las siguientes redes sociales.</p>
                <div className="footer__widget__social">
                  <a href="https://www.facebook.com/profile.php?id=100063449692054" className="text-gray-400 mr-2"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-gray-400 mr-2"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="text-gray-400 mr-2"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-400 mr-2"><i className="fab fa-pinterest"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400">
            <p>
              <Link to="/privacidad">Privacidad | </Link>
              <Link to="/terminos-y-condiciones">Términos y condiciones | </Link>
              <Link to="/cookies">Cookies | </Link>
              Copyright &copy;{currentYear}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
