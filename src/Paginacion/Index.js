// En el componente Index
import React, { useState } from 'react';
import Navbar from '../Esquema/Navbar';
import Carousel from '../Esquema/Carousel';
import ProductGrid from '../Esquema/ProductGrid';
import Footer from '../Esquema/Footer';
import Membresia from '../Paginacion/Membresia/Membresia';

export default function Index() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="my-0"> {/* Elimina el margen vertical de todos los componentes */}
            <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <Carousel />
            <ProductGrid />
            <Membresia />
            <Footer />
        </div>
    )
}
