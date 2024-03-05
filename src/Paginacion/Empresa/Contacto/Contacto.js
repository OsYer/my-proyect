import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import Navbar from '../../../Esquema/Navbar';
import Footer from '../../../Esquema/Footer';

const Contacto = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una función de envío
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Mensaje:', mensaje);
    // Cerrar el modal después de enviar el formulario
    handleCloseModal();
  };

  return (
    <div>
      <Navbar />
      <section id="about" className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Contáctanos
          </h1>
          <br/>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                <FaPhone className="inline-block mr-2" />
                Teléfono
              </h2>
              <p>+52 7717935563</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                <FaMapMarkerAlt className="inline-block mr-2" />
                Dirección
              </h2>
              <p>Ote. 7 MZC LT7, Parque de Poblamiento, 43000 Huejutla de Reyes, Hgo.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                <FaClock className="inline-block mr-2" />
                Horario de atención
              </h2>
              <p>8:00 am a 12:00 pm</p>
              <p>4:00 pm a 10:00 pm</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                <FaEnvelope className="inline-block mr-2" />
                Correo electrónico
              </h2>
              <p>sportgymcenterinfo@gmail.com</p>
            </div>
          </div>
          <div>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.036044992767!2d-98.38401482587831!3d21.150963783572227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d725db91202525%3A0xfcb308bede75f77b!2sSport%20Gym%20Center!5e0!3m2!1ses!2smx!4v1700597387464!5m2!1ses!2smx"
              height="500"
              style={{ border: '0', width: '100%' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="mt-1"
            ></iframe>
          </div>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8" onClick={handleOpenModal}>
              Deja un mensaje
            </button>
          </div>
        </div>
      </section>
      <Footer />

      {/* Modal */}
      {modalOpen && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50" onClick={handleCloseModal}>
                <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M.75 0l16.5 16.5m0-16.5L.75 16.5" stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd" />
                </svg>
                <span>Close</span>
              </div>

              <form onSubmit={handleSubmit} className="mt-4">
                <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />

                <label htmlFor="correo" className="block text-gray-700 text-sm font-bold mb-2">
                  Correo:
                </label>
                <input
                  type="email"
                  id="correo"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />

                <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">
                  Mensaje:
                </label>
                <textarea
                  id="mensaje"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
                  rows="5"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                ></textarea>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacto;
