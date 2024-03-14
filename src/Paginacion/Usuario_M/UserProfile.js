import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Esquema/Navbar';
import Footer from '../../Esquema/Footer';
import Sidebar2 from './Sidebar/Sidebar2';

const UserProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(location.state || null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [sidebarExpanded, setSidebarExpanded] = useState(true);

    const toggleSidebar = () => {
        setSidebarExpanded(!sidebarExpanded);
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
            navigate('/Login');
        }
    }, [navigate]);

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Sidebar2 expanded={sidebarExpanded} toggleSidebar={toggleSidebar} />
                <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4 lg:p-8 mt-4">
                    <div className="text-center mb-4">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Perfil"
                            className="mx-auto h-24 w-24 rounded-full mb-4"
                        />
                        <h1 className="text-xl lg:text-2xl font-bold">{user ? `Perfil de ${user.usuario}` : "Perfil"}</h1>
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
            <Footer />
        </div>
    );
};

export default UserProfile;
