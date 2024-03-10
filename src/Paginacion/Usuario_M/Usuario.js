import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Esquema/Navbar';
import Footer from '../../Esquema/Footer';

const PerfilPage = () => {
  const location = useLocation();
  const [user, setUser] = useState(location.state || null);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white rounded-lg shadow-md p-8 w-full sm:w-3/4 lg:w-1/2 xl:w-1/3">
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

export default PerfilPage;
