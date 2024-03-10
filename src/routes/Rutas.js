// Rutas.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../Paginacion/Index';
////Empresa
import Contacto from '../Paginacion/Empresa/Contacto/Contacto';
import AboutUs from '../Paginacion/Empresa/AboutUs/AboutUs';
import Login from '../Paginacion/Login/Login';
import ForgotPassword from '../Paginacion/Recuperacion/Recuperacion';
import AuthenticationModal from '../Paginacion/Recuperacion/AuthenticationModal';
import Registro from '../Paginacion/Registro/Registro'; 
import Membresia from '../Paginacion/Membresia/Membresia';
import MFA from '../Paginacion/Login/Verificacion/MFA';
import PerfilPage from '../Paginacion/Usuario_M/Usuario';
function Rutas() {
  return (
    <Routes>
          <Route  path="/" Component={Index} /> {/* Ruta predeterminada */}

          <Route  path="/Nosotros" Component={AboutUs} />
          <Route  path="/Login" Component={Login} />
          
          
          <Route  path="/Recuperacion" Component={ForgotPassword} />
          <Route  path="/AuthenticationModal" Component={AuthenticationModal} />
          <Route  path="/Registro" Component={Registro} />
          <Route  path="/Contacto" Component={Contacto} />
          <Route  path="/Membresia" Component={Membresia} />
          <Route  path="/MFA" Component={MFA} />
          <Route  path="/Perfil" Component={PerfilPage} />
          
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> Nosotros*/}
          {/* Agregar más rutas según sea necesario */}
    </Routes>
  );
}
export default Rutas;