import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Esquema/Navbar';
import Footer from '../../Esquema/Footer';
import Sidebar from './Sidebar/Sidebar';
import { FiMenu } from 'react-icons/fi';


const PerfilPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(location.state || null);
    const [menuVisible, setMenuVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user1 = location.state;
    
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null); // Establecer user a null
        
        // Actualizar la sesión del almacenamiento local
        localStorage.setItem('isLoggedIn', false);
        localStorage.setItem('user', null); // Sobrescribir el valor con null
        
        // Redirigir al usuario a la página de inicio de sesión
        navigate('/login');
    };
    

    useEffect(() => {
        // Verificar si el usuario está autenticado al cargar la página
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (loggedIn) {
          const user = JSON.parse(localStorage.getItem('user'));
          setUser(user);
          setIsLoggedIn(loggedIn);
        } else {
          // Si no está autenticado, redirigir al usuario a la página de inicio de sesión
          navigate('/login');
        }
      }, [navigate]);
    

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-1 flex justify-center items-center">
                <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
                <div className="container mx-auto px-4 flex flex-row items-center"> {/* Contenedor principal */}
                    {/* Icono de menú a la izquierda */}
                    <div onClick={toggleSidebar} className="cursor-pointer bg-gray-200 rounded-md p-2 mb-8 mr-4">
                        <FiMenu className="text-gray-600 h-6 w-6" />
                    </div>
                    {/* Contenedor del card centrado */}
                    <div className="flex justify-center mx-auto w-full sm:w-3/4 lg:w-1/2 xl:w-1/3"> 
                        <div className="bg-white rounded-lg shadow-md p-8 w-full">
                            <div className="text-center mb-4">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Perfil"
                                    className="mx-auto h-24 w-24 rounded-full mb-4"
                                />
                                <h1 className="text-2xl font-bold">{user ? `Perfil de ${user.usuario}` : "Perfil"}</h1>
                            </div>
                            {user ? (
                                <div>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Correo electrónico:</span> {user.correo}
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">ID de usuario:</span> {user.ID_usuario}
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Tipo de usuario:</span> {user.tipo}
                                    </p>
                                    {/* Agregar el enlace de cierre de sesión */}
                                    <button onClick={handleLogout} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                                        Cerrar sesión
                                    </button>
                                </div>
                            ) : (
                                <p className="text-gray-700">No hay datos de usuario disponibles.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PerfilPage;
