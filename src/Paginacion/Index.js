// En el componente Index
import React, { useState } from 'react';
import Navbar from '../Esquema/Navbar';
import Carousel from '../Esquema/Carousel';
import ProductGrid from '../Esquema/ProductGrid';
import Footer from '../Esquema/Footer';
import Membresia from '../Paginacion/Membresia/Membresia';
// import NavBar2 from '../Esquema/NavBar2';

export default function Index() {

    return (
        <div className="my-0">
            {/* <Navbar/> */}
            <Navbar />
            <Carousel />
            <Membresia />
            <ProductGrid />
            <Footer />
        </div>
    )
}
