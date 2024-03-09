import React, { useState, useEffect } from 'react';
import Navbar from '../../Esquema/Navbar';
import Footer from '../../Esquema/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Registro = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [nombreError, setNombreError] = useState('');
    const [apellidoPaternoError, setApellidoPaternoError] = useState('');
    const [apellidoMaternoError, setApellidoMaternoError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [validationResults, setValidationResults] = useState([]);
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0); // Estado para la fuerza de la contraseña
    const [equivalenPasswordError, setEquivalenPasswordError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const isValid = !nombreError && !apellidoPaternoError && !apellidoMaternoError && !emailError && !equivalenPasswordError && validationResults.every(result => result.criteria);
        setIsButtonDisabled(!isValid);
    }, [nombreError, apellidoPaternoError, apellidoMaternoError, emailError, equivalenPasswordError, validationResults]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const validarCampo = (valor) => {
        const regex = /^[a-zA-Z\s]*$/;
        if (valor.length < 3) {
            return 'El campo debe tener al menos 3 caracteres.';
        } else if (!regex.test(valor)) {
            return 'El campo no debe contener números ni caracteres especiales.';
        }
        return '';
    };

    const validatePassword = (value) => {
        const validations = [
            { criteria: value.length >= 8, message: "- La contraseña debe tener al menos 8 caracteres." },
            { criteria: value.length <= 20, message: "- La contraseña debe tener al máximo 20 caracteres." },
            { criteria: /[A-Z]/.test(value), message: "- La contraseña debe tener al menos una letra mayúscula." },
            { criteria: /[a-z]/.test(value), message: "- La contraseña debe tener al menos una letra minúscula." },
            { criteria: /\d/.test(value), message: "- La contraseña debe tener al menos un número." },
            { criteria: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value), message: "La contraseña debe tener al menos un carácter especial." }
        ];

        setValidationResults(validations);

        // Calcular la fuerza de la contraseña
        const strength = validations.reduce((acc, curr) => acc + (curr.criteria ? 1 : 0), 0);
        setPasswordStrength(strength);
    };

    const handleChangeNombre = (e) => {
        setNombreError(validarCampo(e.target.value));
    };

    const handleChangeApellidoPaterno = (e) => {
        setApellidoPaternoError(validarCampo(e.target.value));
    };

    const handleChangeApellidoMaterno = (e) => {
        setApellidoMaternoError(validarCampo(e.target.value));
    };

    const handleChangeEmail = (e) => {
        setEmailError(validarEmail(e.target.value));
    };

    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            return 'El correo electrónico no es válido.';
        }
        return '';
    };

    const handleChangePasword = (event) => {
        const { value } = event.target;
        setPassword(value);
        validatePassword(value);
    };

    const renderError = (error) => {
        return error ? <p className="text-red-500">{error}</p> : null;
    };
    //Funcion que valida confirmar password dinamica
    const handleConfirmPasswordChange = (event) => {
        const { value } = event.target;
        if (value !== password) {
            setEquivalenPasswordError('Las contraseñas no coinciden.');
        } else {
            setEquivalenPasswordError('');
        }
    };

    // Función para renderizar la barra de fuerza de la contraseña
    const renderPasswordStrengthBar = () => {
        const strengthPercentage = (passwordStrength / 6) * 100; // 6 es el número total de criterios de validación
        return (
            <div className="relative w-full h-2 mt-2 bg-gray-200 rounded-full">
                <div
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                    style={{ width: `${strengthPercentage}%` }}
                ></div>
            </div>
        );
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4">
                <section className="py-8">
                    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg dark:border dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Crea una cuenta
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                    <input type="text" name="nombre" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChangeNombre} />
                                    {renderError(nombreError)}
                                </div>
                                <div>
                                    <label htmlFor="apellidoPaterno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Paterno</label>
                                    <input type="text" name="apellidoPaterno" id="apellidoPaterno" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChangeApellidoPaterno} />
                                    {renderError(apellidoPaternoError)}
                                </div>
                                <div>
                                    <label htmlFor="apellidoMaterno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Materno</label>
                                    <input type="text" name="apellidoMaterno" id="apellidoMaterno" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChangeApellidoMaterno} />
                                    {renderError(apellidoMaternoError)}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChangeEmail} />
                                    {renderError(emailError)}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            className="bg-gray-50 border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                            placeholder='************'
                                            onChange={handleChangePasword}
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="focus:outline-none hover:bg-gray-200 p-2"
                                        >
                                            {showPassword ? <FaEyeSlash color="#4B5563" /> : <FaEye color="#4B5563" />}
                                        </button>
                                    </div>
                                    <div className="bg-gray-200"> {/* Cambia "bg-red-100" al color de fondo que desees */}
                                        {validationResults.some(result => !result.criteria) ? (
                                            <div>
                                                {validationResults.map((result, index) => (
                                                    <p key={index} style={{ color: result.criteria ? 'green' : 'red' }}>
                                                        {result.message}
                                                    </p>
                                                ))}
                                            </div>
                                        ) : null}
                                    </div>
                                    {/* Barra de fuerza de la contraseña */}
                                    {renderPasswordStrengthBar()}
                                </div>
                                <div className="relative">
                                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar Contraseña</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            className="bg-gray-50 border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                            placeholder='************'
                                            onChange={handleConfirmPasswordChange}
                                        />
                                        <button
                                            type="button"
                                            onClick={toggleConfirmPasswordVisibility}
                                            className="focus:outline-none hover:bg-gray-200 p-2"
                                        >
                                            {showConfirmPassword ? <FaEyeSlash color="#4B5563" /> : <FaEye color="#4B5563" />}
                                        </button>
                                    </div>
                                    {renderError(equivalenPasswordError)}
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="text-gray-500 dark:text-gray-300">Aceptar términos y condiciones</label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-black bg-yellow-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" disabled={isButtonDisabled}>Registrarse</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    ¿Ya tienes cuenta? <a href="/Login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Inicia sesión</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Registro;
