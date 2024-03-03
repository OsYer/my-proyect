// ForgotPassword.jsx
import React, { useState } from 'react';
import Navbar from '../../Esquema/Navbar';
import Footer from '../../Esquema/Footer';
import AuthenticationModal from './AuthenticationModal'; // Importa el componente de modal de autenticación
import VerificationModal from './VerificationModal'; // Importa el componente de modal de verificación

const ForgotPassword = () => {
    const [isAuthenticationModalOpen, setIsAuthenticationModalOpen] = useState(false);
    const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    // Función para abrir el modal de autenticación
    const openAuthenticationModal = () => {
        setIsAuthenticationModalOpen(true);
    };

    // Función para cerrar el modal de autenticación
    const closeAuthenticationModal = () => {
        setIsAuthenticationModalOpen(false);
    };

    // Función para abrir el modal de verificación
    const openVerificationModal = () => {
        setIsVerificationModalOpen(true);
    };

    // Función para cerrar el modal de verificación
    const closeVerificationModal = () => {
        setIsVerificationModalOpen(false);
    };

    // Función para manejar el cambio en el input de correo electrónico
    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    };

    // Función para validar el correo electrónico
    const validateEmail = () => {
        if (!email) {
            setEmailError('Por favor, ingresa tu correo electrónico.');
            return false;
        }
        setEmailError('');
        return true;
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateEmail();
        if (isValid) {
            openAuthenticationModal(); // Abre el modal de autenticación al enviar el formulario
        }
    };

    return (
        <div>
            <Navbar />
            <section className="bg-gray-50 dark:bg-gray-900 bg-cover" style={{ backgroundImage: 'url("/girl_back.jpg")' }}>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Recuperación de contraseña
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${emailError ? 'border-red-500' : ''}`}
                                        placeholder="CorreoElectronico@email.com"
                                        required
                                    />
                                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {/* Renderiza el modal de autenticación si isAuthenticationModalOpen es true */}
            <AuthenticationModal isOpen={isAuthenticationModalOpen} onClose={closeAuthenticationModal} onOpenVerificationModal={openVerificationModal} />
            {/* Renderiza el modal de verificación si isVerificationModalOpen es true */}
            <VerificationModal isOpen={isVerificationModalOpen} onClose={closeVerificationModal} />
        </div>
    );
};

export default ForgotPassword;
