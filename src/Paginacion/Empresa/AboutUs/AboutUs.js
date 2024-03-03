import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Navbar from '../../../Esquema/Navbar';
import Footer from '../../../Esquema/Footer';
import './Estilo_Movil.css';
const AboutUs = () => {
  // Estado local para controlar la visibilidad de cada sección
  const [mostrarHistoria, setMostrarHistoria] = useState(true);
  const [mostrarMision, setMostrarMision] = useState(true);
  const [mostrarVision, setMostrarVision] = useState(true);
  const [mostrarValores, setMostrarValores] = useState(true);

  // Funciones para cambiar el estado de visibilidad de cada sección
  const toggleHistoria = () => {
    setMostrarHistoria(!mostrarHistoria);
  };

  const toggleMision = () => {
    setMostrarMision(!mostrarMision);
  };

  const toggleVision = () => {
    setMostrarVision(!mostrarVision);
  };

  const toggleValores = () => {
    setMostrarValores(!mostrarValores);
  };

  return (
    <div>
      <Navbar />
      <section id="about" className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Sobre Nosotros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className='mobile-padding'>
              <h3 className="text-xl font-semibold mb-4">
                Nuestra Historia{' '}
                <span onClick={toggleHistoria} className="toggle-icon">
                  {mostrarHistoria ? <FaMinus /> : <FaPlus />}
                </span>
              </h3>
              {mostrarHistoria && (
                <p className="text-gray-700">
                  Sport Gym Center abrió sus puertas en 2015 con un objetivo claro: brindar un espacio donde puedas alcanzar tus metas fitness de manera efectiva y divertida. Desde 2018, además de ofrecer instalaciones de primera calidad, contamos con servicios de nutrición para complementar tu estilo de vida activo.

                  Ubicados en Dirección: Ote. 7 MZC LT7, Parque de Poblamiento, 43000 Huejutla de Reyes, Hgo., estamos comprometidos a ayudarte en tu camino hacia una vida más saludable. Contáctanos al +52 7717935563 o vía correo electrónico a sportgymcenterinfo@gmail.com y únete a nuestra comunidad en Sport Gym Center.
                </p>
              )}
            </div>
            <div className='mobile-padding'>
              <h3 className="text-xl font-semibold mb-4">
                Misión{' '}
                <span onClick={toggleMision} className="toggle-icon">
                  {mostrarMision ? <FaMinus /> : <FaPlus />}
                </span>
              </h3>
              {mostrarMision && (
                <p className="text-gray-700">
                  En Sport GYM Center, nos comprometemos a ser el catalizador que impulsa la transformación
                  positiva en la vida de nuestros miembros, proporcionando un espacio
                  inspirador y accesible donde cada individuo, independientemente de su nivel de
                  condición física, encuentre el apoyo y los recursos necesarios para alcanzar sus
                  metas de bienestar y fitness. Nos esforzamos por fomentar una comunidad saludable y
                  vibrante que motive a nuestros miembros a adoptar un estilo de vida activo y equilibrado.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="py-12 bg-white ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Visión</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-center justify-center lg:justify-start">
              <img src="/logo.jpeg" alt="Visión" className="mr-4 w-1/2 lg:w-auto" />
            </div>
            <div className="lg:w-1/2 lg:pl-8 mobile-padding">
              <h3 className="text-xl font-semibold mb-4">
                Nuestra Visión{' '}
                <span onClick={toggleVision} className="toggle-icon">
                  {mostrarVision ? <FaMinus /> : <FaPlus />}
                </span>
              </h3>
              {mostrarVision && (
                <p className="text-gray-700">
                  Nuestra visión es ser reconocidos como el referente líder en bienestar y fitness, destacando por nuestra comunidad comprometida, instalaciones de vanguardia y programas innovadores. Aspiramos a inspirar y capacitar a las personas de todas las edades y niveles de condición física, convirtiéndonos en el destino preferido para aquellos que buscan alcanzar sus metas de salud y bienestar. En Sport GYM Center, visualizamos un futuro donde cada individuo descubre su mejor versión a través de una vida activa y equilibrada.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="valores" className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className='mobile-padding'>
              <h3 className="text-xl font-semibold mb-4">
                Valores que nos representan{' '}
                <span onClick={toggleValores} className="toggle-icon">
                  {mostrarValores ? <FaMinus /> : <FaPlus />}
                </span>
              </h3>
              {mostrarValores && (
                <ul className="list-disc text-gray-700 pl-6">
                  <li>Calidad</li>
                  <li>Apego a la filosofía de la salud y el bienestar</li>
                  <li>Profesionalismo</li>
                  <li>Confianza</li>
                  <li>Excelencia</li>
                  <li>Responsabilidad</li>
                  <li>Integridad</li>
                  <li>Compromiso</li>
                  <li>Innovación</li>
                  <li>Trabajo en equipo</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
