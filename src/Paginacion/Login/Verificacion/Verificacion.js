import React, { useState } from 'react';
import Navbar from '../../../Esquema/Navbar';
import Footer from '../../../Esquema/Footer';
import { useNavigate, useLocation } from 'react-router-dom';
import { baseURL } from '../../../api';

const Verificacion = () => {
    const location = useLocation();
    const dataUser = location.state;
    const [selectedMethod, setSelectedMethod] = useState(""); // Estado para almacenar el método seleccionado
    const navigate = useNavigate();

    const handleMethodChange = (event) => {
        setSelectedMethod(event.target.value); // Actualiza el estado con el método seleccionado
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita la recarga de la página al enviar el formulario
        if (selectedMethod.trim() === "") {
            console.log("El campo del método de autentificación es requerido."); // Mensaje de validación en consola
            return;
        }
    
        try {
            if (selectedMethod === 'mensaje') {
                console.log('Opción no disponible por el momento.'); // Mensaje de alerta en consola
                return;
            }
    
            const response = await fetch(`http://localhost:4000/api/sendMethod`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    method: selectedMethod,
                    email: dataUser.correoElectronico
                }),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                console.log('Error al enviar el código de verificación'); // Mensaje de error en consola
                return;
            }
    
            console.log('Correo enviado con su código'); // Mensaje de éxito en consola
    
            // Mostrar el formulario para ingresar el código de verificación
            navigate('/ingresar_codigoToken', { state: dataUser });
    
        } catch (error) {
            console.error('Error al enviar el código de verificación:', error);
        }
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
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="authMethod" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Método de autentificación:</label>
                                    <select 
                                        id="authMethod" 
                                        name="authMethod" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={selectedMethod}
                                        onChange={handleMethodChange}
                                        required
                                    >
                                        <option value="">Selecciona un método</option>
                                        <option value="mensaje">Mensaje</option>
                                        <option value="email">Correo electrónico</option>
                                    </select>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Envíe un código de verificación a {dataUser.correoElectronico}
                                </p>
                                <button type="submit" className="w-full text-white bg-yellow-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Verificar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Verificacion;
