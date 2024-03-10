import React, { useState, useEffect } from 'react';
import Navbar from '../../../Esquema/Navbar';
import Footer from '../../../Esquema/Footer';
import { useNavigate, useLocation } from 'react-router-dom';
import { baseURL } from '../../../api';

const MFA = () => {
  const [method, setMethod] = useState('1');
  const [alert, setAlert] = useState(null);
  const [showTokenForm, setShowTokenForm] = useState(false);
  const [showResendButton, setShowResendButton] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const dataUser = location.state;

  const handleMFA = async (event) => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    if (method === '2') {
      setAlert({ type: 'danger', message: 'Opción no disponible por el momento.' });
      return new Error('Opción no disponible por el momento.');
    }
    try {
      const response = await fetch('http://localhost:4000/api/sendMethod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          method: method,
          email: dataUser.correoElectronico
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        setAlert({ type: 'danger', message: 'Error al enviar el código de verificación' });
        return new Error('Error al enviar el código de verificación');
      } else {
        setAlert({ type: 'success', message: 'Correo enviado con su código' });
      }
      setShowTokenForm(true);
    } catch (error) {
      console.log(error.msg)
      setAlert({ type: 'danger', message: error.message });
    }
  };

  const handleTokenSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = event.target.elements.token.value;
      const response = await fetch('http://localhost:4000/api/validateToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: dataUser.ID_usuario,
          token: token,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg);
      }
      const id = dataUser.ID_usuario;
      const loginResponse = await fetch(`${baseURL}/users/${id}`);
      const loginData = await loginResponse.json();
      if (!loginResponse.ok) {
        throw new Error(data.msg);
      }
      const user = { usuario: loginData.nombre, correo:dataUser.correoElectronico, ID_usuario: dataUser.ID_usuario, tipo: dataUser.ID_rol };
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('user', JSON.stringify(user));
      console.log(isLoggedIn);
      navigate('/Perfil', { state: user })
    } catch (error) {
      console.log(error)
      setAlert({ type: 'danger', message: error.msg });
    }
  };

  const handleResendCode = () => {
    setElapsedTime(0);
    handleMFA();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (elapsedTime > 30) {
      setShowResendButton(true);
    }
  }, [elapsedTime]);

  const closeAlert = () => {
    setAlert(null);
  };

  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 dark:bg-gray-900 bg-cover" style={{ backgroundImage: 'url("#")' }}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Verifica tu identidad
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={showTokenForm ? handleTokenSubmit : handleMFA}>
                {!showTokenForm ? (
                  <div>
                    <label htmlFor="method" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Método de autentificación:</label>
                    <select
                      id="method"
                      className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={method}
                      onChange={(e) => setMethod(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option value="1">Correo electrónico</option>
                      <option value="2">SMS</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="token" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Método de autentificación:</label>
                    <input type="number" name="token" id="token" className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese el código" required />
                  </div>
                )}
                {showTokenForm && (
                  <p className='my-3'>Envíe un código de verificación a {dataUser.correoElectronico}</p>
                )}
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 text-center" type="submit">{!showTokenForm ? 'Enviar código' : 'Verificar código'}</button>
                {showResendButton && (
                  <button
                    type="button"
                    className="text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 text-center"
                    onClick={handleResendCode}
                  >
                    Reenviar código
                  </button>
                )}
              </form>
              {alert && (
                <div className={`mt-4 ${alert.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} p-3 rounded-lg`}>
                  {alert.message}
                  <button className="float-right focus:outline-none" onClick={closeAlert}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM6.707 7.293a1 1 0 0 1 1.414-1.414L10 8.586l2.879-2.88a1 1 0 0 1 1.414 1.414L11.414 10l2.88 2.879a1 1 0 1 1-1.414 1.414L10 11.414l-2.879 2.88a1 1 0 0 1-1.414-1.414L8.586 10 5.707 7.121a1 1 0 0 1 1.414-1.414L10 8.586l2.879-2.88a1 1 0 0 1 1.414 1.414L11.414 10l2.88 2.879a1 1 0 1 1-1.414 1.414L10 11.414l-2.879 2.88a1 1 0 0 1-1.414-1.414L8.586 10 5.707 7.121z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MFA;
