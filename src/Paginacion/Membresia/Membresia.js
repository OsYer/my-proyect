import React from 'react';

const MembresiaCard = ({ titulo, subtitulo, descripcion, precio, imagenUrl }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4 flex flex-col">
            <div style={{position: 'relative', paddingBottom: '56.25%'}}>
                <img className="absolute h-full w-full object-cover rounded-t-lg" src={imagenUrl} alt={titulo} />
            </div>
            <div className="px-4 py-2 flex-grow">
                <div className="font-bold text-2xl mb-2 text-gray-900 dark:text-white">{titulo}</div>
                <p className="text-base mb-3 text-gray-700 dark:text-gray-400">{subtitulo}</p>
                <p className="text-base text-gray-700 dark:text-gray-400">{descripcion}</p>
            </div>  
            <div className="px-6 pt-4 pb-2">
                <p className="text-base text-gray-700 dark:text-gray-400">
                    <span className="font-bold text-xl">{precio}</span> {/* Resaltar precio */}
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 self-center">Comprar ahora</button> {/* Botón de comprar membresía */}
            </div>
        </div>
    );
};

const Membresia = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-8">Membresías</h1>
            <div className="flex flex-wrap justify-center">
                <MembresiaCard
                    titulo="Membresía Mensual"
                    subtitulo="Acceso completo al gimnasio durante un mes completo."
                    precio="$49.99 por mes"
                    imagenUrl="/backgrond5.jpg"
                />
                <MembresiaCard
                    titulo="Membresía por 2 Semanas"
                    subtitulo="Acceso completo al gimnasio durante dos semanas consecutivas."
                    precio="$29.99 por semana"
                    imagenUrl="/backgrond5.jpg"
                />
                <MembresiaCard
                    titulo="Membresía Diaria"
                    subtitulo="Acceso completo al gimnasio durante un día."
                    precio="$9.99 por día"
                    imagenUrl="/backgrond5.jpg"
                />
            </div>
        </div>
    );
};

export default Membresia;
