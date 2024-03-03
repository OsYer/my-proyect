// Rutas.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../Paginacion/Index';
import AboutUs from '../Paginacion/Empresa/AboutUs/AboutUs';
import Login from '../Paginacion/Login/Login';
import ForgotPassword from '../Paginacion/Recuperacion/Recuperacion';
import AuthenticationModal from '../Paginacion/Recuperacion/AuthenticationModal';

function Rutas() {
  return (
    <Routes>
          <Route  path="/" Component={Index} /> {/* Ruta predeterminada */}

          <Route  path="/Nosotros" Component={AboutUs} />
          <Route  path="/Login" Component={Login} />
          <Route  path="/Recuperacion" Component={ForgotPassword} />
          <Route  path="/AuthenticationModal" Component={AuthenticationModal} />

          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> Nosotros*/}
          {/* Agregar más rutas según sea necesario */}
    </Routes>
  );
}
export default Rutas;