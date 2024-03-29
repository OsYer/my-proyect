import React, { useState } from 'react';
import Navbar from '../../Esquema/Navbar';
import Footer from '../../Esquema/Footer';
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {baseURL} from '../../api';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // const response = await fetch('http://localhost:4000/api/users/login', {
                const response = await fetch(`${baseURL}/users/login`, {

            method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    correoElectronico: email,
                    contraseña: password
                }),
            });

            if (response.ok) {
                // Login successful, redirect or set user state as needed
                console.log('Login successful');
                //Ahora se verfica
                const userData = await response.json();
                console.log(userData);
                navigate('/MFA', { state: userData });

            } else {
                const data = await response.json();
                setErrorMessage(data.msg);
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage(error.message); // Mostrar mensaje de error específico
        }
    };

    const clearErrorMessage = () => {
        setErrorMessage('');
    };

    return (
        <div>
            <Navbar />
            <section className="bg-gray-50 dark:bg-gray-900 bg-cover" style={{ backgroundImage: 'url("#")' }}>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Inicia sesión con tu cuenta
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CorreoElectronico@email.com" required />
                                </div>
                                <div className="relative">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="bg-gray-50 border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                            placeholder='************'
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="focus:outline-none hover:bg-gray-200 p-2"
                                        >
                                            {showPassword ? <FaEyeSlash color="#4B5563" /> : <FaEye color="#4B5563" />}
                                        </button>
                                    </div>
                                </div>
                                {errorMessage && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                                        <div className="flex items-center justify-between">
                                            <strong className="font-bold">Error:</strong>
                                            <button onClick={clearErrorMessage} className="focus:outline-none">
                                                <FaTimes className="h-5 w-5 text-red-500" />
                                            </button>
                                        </div>
                                        <span className="block sm:inline mt-2">{errorMessage}</span>
                                    </div>
                                )}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" 
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="/Recuperacion" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">¿Olvidaste tu contraseña?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-yellow-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Iniciar sesión</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    ¿No tienes cuenta?<a href="/Registro" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Regístrate</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Login;
