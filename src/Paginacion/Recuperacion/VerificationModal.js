// VerificationModal.jsx
import React, { useState, useEffect } from 'react';

const VerificationModal = ({ isOpen, onClose }) => {
    const [verificationCode, setVerificationCode] = useState('');
    const [showResendButton, setShowResendButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowResendButton(true);
        }, 30000);

        return () => clearTimeout(timer);
    }, []);

    const handleChange = (event) => {
        setVerificationCode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí podrías enviar el código de verificación para su validación
        console.log('Código de verificación:', verificationCode);
    };

    const handleResendCode = () => {
        // Aquí podrías implementar la lógica para reenviar el código
        console.log('Código reenviado');
    };

    return (
        <div
            className={`${
                isOpen ? 'fixed' : 'hidden'
            } overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50`}
            tabIndex="-1"
            aria-hidden={!isOpen}
        >
            <div className="relative p-4 bg-white rounded-lg shadow w-full max-w-md">
                <div className="p-4 border-b">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Verifica tu identidad
                    </h3>
                    <h4 className="text-sm text-gray-500">
                        Método de autenticación: Método seleccionado
                    </h4>
                </div>
                <div className="p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="verificationCode"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Ingrese el código
                            </label>
                            <input
                                type="text"
                                id="verificationCode"
                                value={verificationCode}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            Enviar código
                        </button>
                        {showResendButton && (
                            <button
                                type="button"
                                onClick={handleResendCode}
                                className="mt-2 w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200"
                            >
                                Reenviar código
                            </button>
                        )}
                    </form>
                </div>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12M7 7l6 6m0 0l6-6m-6 6L7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default VerificationModal;
