import React from 'react'
import Navbar from '../Esquema/Navbar'
import Carousel from '../Esquema/Carousel'
import ProductGrid from '../Esquema/ProductGrid'
import Footer from '../Esquema/Footer'

export default function Index() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <ProductGrid />
            <Footer />
        </div>
    )
}
