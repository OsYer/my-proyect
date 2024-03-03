// AuthenticationModal.jsx
import React, { useState } from 'react';

const AuthenticationModal = ({ isOpen, onClose, onOpenVerificationModal }) => {
    const [selectedMethod, setSelectedMethod] = useState('');

    const handleMethodChange = (event) => {
        setSelectedMethod(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onOpenVerificationModal(); // Abre el modal de verificación al enviar el formulario
    };

    return (
        <>
            {isOpen && (
                <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Método de autenticación
                                </h3>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="authentication-method" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Método de autenticación</label>
                                        <select
                                            name="authentication-method"
                                            id="authentication-method"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            value={selectedMethod}
                                            onChange={handleMethodChange}
                                            required
                                        >
                                            <option value="">Selecciona un método</option>
                                            <option value="email">Correo electrónico</option>
                                            <option value="text-message">Mensaje de texto</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Enviar código
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AuthenticationModal;
