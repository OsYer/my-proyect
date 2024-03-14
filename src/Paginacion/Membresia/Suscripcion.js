import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Esquema/Navbar';
import Footer from '../../Esquema/Footer';
import { baseURL } from '../../api';
import { obtenerFechaHoraActual } from "../Utilidades/dateUtils";

const Suscripcion = () => {
    // Obtener los datos de la ubicación
    const location = useLocation();
    const data = location.state;
    const [pagando, setPagando] = useState(false);
    const [user, setUser] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (loggedIn) {
            const user = JSON.parse(localStorage.getItem('user'));
            setUser(user);
            setIsLoggedIn(loggedIn);
        } 
         }, []
    );
    const handlePagarSuscripcion = async () => {
        console.log(data);
        const id = user.ID_usuario;
        try {
          // Realizar fetch para obtener la información del usuario
          const response = await fetch(`${baseURL}/membresia-usuario/${id}`);
    
          if (!response.ok) {
            throw new Error('Error al obtener la información del usuario');
          }
    
          const datosMembresiaUsuario = await response.json();
          console.log("datosMembresiaUsuario", datosMembresiaUsuario);
    
          if (datosMembresiaUsuario.length > 0) {
            console.log('Existe');
            const datosMembresia = datosMembresiaUsuario[0];
            const fechaVencimiento = datosMembresia.fechaVencimiento;
    
            const fechaHoraActual = await obtenerFechaHoraActual();
    
            if (fechaHoraActual > fechaVencimiento) {
              console.log('La membresía está vencida.');
              const createOrderResponse = await fetch(`${baseURL}/create-order`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  ...data,
                  ID_usuario: id
                }),
              });
    
              if (!createOrderResponse.ok) {
                throw new Error('Error al procesar el pago');
              }
    
              const dataMercado = await createOrderResponse.json();
              console.log("mercado", dataMercado);
              window.location.href = dataMercado.init_point;
            } else {
              alert('NO puedes comprar otra membresia porque tienes activada una --- agregar un swetter2alert mensaje--- cuidar ortografia lptm');
              console.log('La membresía está activa.');
            }
    
          } else {
            console.log('No existe');
            // Si no existe un registro, realizar la solicitud de pago
            const createOrderResponse = await fetch(`${baseURL}/create-order`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...data,
                ID_usuario: id
              }),
            });
    
            if (!createOrderResponse.ok) {
              throw new Error('Error al procesar el pago');
            }
    
            const dataMercado = await createOrderResponse.json();
            console.log("mercado", dataMercado);
            window.location.href = dataMercado.init_point;
    
            // // Manejar la respuesta del servidor según sea necesario
            // alert('¡Pago exitoso!');
          }
    
        } catch (error) {
          console.error(error);
          alert('Hubo un error al procesar el pago. Por favor, inténtalo de nuevo más tarde.');
        } finally {
          setPagando(false);
        }
      };
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-8">
                {data ? (
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-2xl font-bold mb-4">Detalles de la suscripción</h2>
                        <div className="mb-4">
                            <p className="text-gray-700 font-bold">ID Único Membresilla:</p>
                            <p className="text-gray-700">{data.ID_UnicoMembresilla}</p>

                        </div>
                        <div className="mb-4">
                            <p className="text-gray-700 font-bold">ID Tipo Membresía:</p>
                            <p className="text-gray-700">{data.ID_tipoMembresia}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-700 font-bold">Costo:</p>
                            <p className="text-gray-700">${data.costo}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-700 font-bold">Nombre:</p>
                            <p className="text-gray-700">{data.nombre}</p>
                        </div>
                        <button onClick={handlePagarSuscripcion} disabled={pagando} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {pagando ? 'Procesando pago...' : 'Pagar Suscripción'}
                        </button> 
                    </div>
                ) : (
                    <p className="text-red-500">No se encontraron datos de suscripción.</p>
                )}
            </div>
            <Footer />

        </div>
    );
};

export default Suscripcion;
