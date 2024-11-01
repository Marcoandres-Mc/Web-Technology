import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductsGaming } from '../../api/products';
import { useEffect, useState } from 'react';

const Gaming = () => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate('/details', { state: { product } });
    };

    const [productsGaming, setProductsGaming] = useState([]);

    useEffect (() => {
        const fetchProducts = async () => {
            const products = await getProductsGaming();
            setProductsGaming(products);
            console.log(products);
        };
        fetchProducts();
    }, []);	

    return (
        <div className="flex justify-center items-center min-h-screen mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {productsGaming.map((item) => ( // Cambiado a "GamingData"
                    <div
                        key={item.id}
                        className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105"
                        onClick={() => handleProductClick(item)}
                    >
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base font-medium text-blue-gray-900">
                                    {item.title}
                                </p>
                                <p className="block font-sans text-base font-medium text-blue-gray-900">
                                    {item.price}
                                </p>
                            </div>
                            <p className="block font-sans text-sm text-gray-700 opacity-75">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gaming;
