import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import Breadcrumbs from './Breadcrumbs';
function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownOpen(true);
        const buttonPosition = e.target.getBoundingClientRect();
        setDropdownPosition({
            top: buttonPosition.bottom + window.pageYOffset,
            left: buttonPosition.left + window.pageXOffset
        });
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        // Obtener el estado de isLoggedIn del localStorage al cargar el componente
        const loggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedIn === 'true'); // Convertir el valor de cadena a booleano
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false); // Actualizar el estado local
        localStorage.removeItem('isLoggedIn'); // Eliminar el estado de isLoggedIn del localStorage
    };

    return (
        <div className={`sticky top-0 z-50 ${isMobileMenuOpen ? '' : 'mb-0'}`} style={{ backgroundColor: '#1B1716' }}>
            <nav className="bg-black border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <a href="/">
                            <img src="/logo_letras.jpeg" className="h-12" alt="Logo" />
                        </a>
                    </div>
                    <div className="hidden md:flex md:w-auto items-center space-x-4">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Inicio</a>
                            </li>
                            <li onMouseLeave={closeDropdown}>
                                <div
                                    onMouseEnter={toggleDropdown}
                                    onMouseLeave={closeDropdown}
                                >
                                    <button
                                        id="dropdownNavbarLink"
                                        className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                    >
                                        Tienda
                                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {isDropdownOpen && (
                                        <div
                                            className="absolute z-40 top-[${dropdownPosition.top}px] left-[${dropdownPosition.left}px] w-full md:w-auto font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                                        >
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black">Dashboard</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black">Overview</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black">Mis descargas</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black">Facturación</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black">Recompensas</a>
                                        </div>
                                    )}
                                </div>
                            </li>
                            <li>
                                <a href="/Nosotros" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nosotros</a>
                            </li>
                            <li>
                                <a href="/Contacto" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contacto</a>
                            </li>
                        </ul>
                        {isLoggedIn && (
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link to="/Perfil"
                                        className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent flex items-center"
                                    >
                                        <FaUserCircle className="mr-2" /> Perfil
                                    </Link>
                                </li>

                            </ul>
                        )}
                        {!isLoggedIn && (
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link to="/Login"
                                        className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Iniciar sesión
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                    <button
                        onClick={toggleMobileMenu}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-multi-level"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">Abrir menú principal</span>
                        {isMobileMenuOpen ? (
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        )}
                    </button>
                </div>
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                    <ul className="py-2 px-4 text-white dark:text-white bg-black">
                        <li>
                            <a href="/" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Inicio</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tienda</a>
                        </li>
                        <li onMouseLeave={closeDropdown}>
                            <div
                                onMouseEnter={toggleDropdown}
                                onMouseLeave={closeDropdown}
                            >
                                <button
                                    id="dropdownNavbarLink"
                                    className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >
                                    Más
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div
                                        className="absolute z-40 top-[${dropdownPosition.top}px] left-[${dropdownPosition.left}px] w-full md:w-auto font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                                    >
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black">Dashboard</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black">Overview</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black">Mis descargas</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black">Facturación</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black">Recompensas</a>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li>
                            <a href="/Nosotros" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Nosotros</a>
                        </li>
                        <li>
                            <a href="/Contacto" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contacto</a>
                        </li>
                        {isLoggedIn && (
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link to="/Perfil"
                                        className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent flex items-center"
                                    >
                                        <FaUserCircle className="mr-2" /> Perfil
                                    </Link>
                                </li>

                            </ul>
                        )}
                        {!isLoggedIn && (
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link to="/Login"
                                        className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Iniciar sesión
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </ul>
                </div>
            </nav>
            <Breadcrumbs /> 
        </div>
    );
}

export default Navbar;
