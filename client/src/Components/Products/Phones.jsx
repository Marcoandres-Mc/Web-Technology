import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductsCelulares } from '../../api/products';
import { useEffect, useState } from 'react';

const PhonesData = [
    {
        id: 1,
        title: "iPhone 14 Pro",
        price: "$999.00",
        description: "6.1-inch Super Retina XDR display with ProMotion and always-on display.",
        image: "https://images.unsplash.com/photo-1606813906843-d7cabd0e5435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 2,
        title: "Samsung Galaxy S21",
        price: "$799.00",
        description: "64MP high resolution camera, 8K video recording, and 120Hz display.",
        image: "https://images.unsplash.com/photo-1612277790470-520705d612d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 3,
        title: "Google Pixel 6",
        price: "$699.00",
        description: "Google's own Tensor processor, 50MP camera, and real-time translation features.",
        image: "https://images.unsplash.com/photo-1630440202177-fcf86da03b8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 4,
        title: "OnePlus 9 Pro",
        price: "$899.00",
        description: "120Hz Fluid Display, Qualcomm Snapdragon 888, and Hasselblad camera for mobile.",
        image: "https://images.unsplash.com/photo-1614678660209-64e42e260904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    }
];

const Phones = () => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate('/details', { state: { product } });
    };

    const [productsCelulares, setProductsCelulares] = useState([]);

    useEffect (() => {
        const fetchProducts = async () => {
            const products = await getProductsCelulares();
            setProductsCelulares(products);
            console.log(products);
        };
        fetchProducts();
    }, []);	

    return (
        <div className="flex justify-center items-center min-h-screen mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {productsCelulares.map((item) => (
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

export default Phones;
