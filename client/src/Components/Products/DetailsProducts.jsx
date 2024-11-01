import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const DetailsProducts = () => {
    const location = useLocation();
    const { product } = location.state || {};
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <p>No se encontró información del producto.</p>;
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen mt-20">
            <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Imagen del producto */}
                <div className="md:w-1/2">
                    <img src={product.image} alt={product.title} className="object-cover w-full h-full" />
                </div>

                {/* Detalles del producto */}
                <div className="p-6 flex flex-col justify-between md:w-1/2">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                        <p className="text-xl font-semibold text-green-500 mt-4">{product.price}</p>
                    </div>

                    {/* Controles de cantidad y botón de añadir al carrito */}
                    <div className="flex items-center mt-6">
                        <button onClick={decreaseQuantity} className="px-3 py-1 bg-gray-300 text-gray-800 rounded-l">-</button>
                        <span className="px-4 py-1 border-t border-b">{quantity}</span>
                        <button onClick={increaseQuantity} className="px-3 py-1 bg-gray-300 text-gray-800 rounded-r">+</button>
                        <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsProducts;
