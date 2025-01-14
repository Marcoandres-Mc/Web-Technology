import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductsComponentes } from '../../api/products';
import { useEffect, useState } from 'react';

// Asegúrate de que los datos se llamen PccompsData en lugar de computingData
const PccompsData = [
    {
        id: 1,
        title: "NVIDIA GeForce RTX 3080",
        price: "$699.00",
        description: "Ultimate performance with real-time ray tracing and AI-enhanced graphics.",
        image: "https://images.unsplash.com/photo-1601916250322-df5f7ca9bf65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 2,
        title: "Intel Core i9-12900K",
        price: "$599.00",
        description: "High-performance 16-core CPU with turbo boost up to 5.2 GHz.",
        image: "https://images.unsplash.com/photo-1620571304179-c6bfff1c8091?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 3,
        title: "Corsair Vengeance RGB Pro 32GB",
        price: "$179.99",
        description: "High-speed DDR4 RAM with dynamic multi-zone RGB lighting.",
        image: "https://images.unsplash.com/photo-1618435554187-42ba16e7e5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 4,
        title: "Samsung 980 Pro SSD 1TB",
        price: "$229.99",
        description: "PCIe 4.0 NVMe SSD for blazing-fast read and write speeds.",
        image: "https://images.unsplash.com/photo-1629228363045-1b0679e1b820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    }
];

const Pccomps = () => {
    const navigate = useNavigate();


    const [productsComponentes, setProductsComponentes] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProductsComponentes();
            setProductsComponentes(products);
            console.log(products);
        };
        fetchProducts();
    }, []);

    const handleProductClick = (item) => {
        const urlImg = encodeURIComponent(item.url).replace(/%2F/g, '|')
        const url = `/home/producto/detalles/${item._id}/${item.nombre}/${item.descripcion}/${item.precio}/${urlImg}`;
        navigate(url);
    };

    return (
        <div className="flex justify-center items-center min-h-screen mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {productsComponentes.map((item) => (
                    <div
                        key={item._id}
                        className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105"
                        onClick={() => handleProductClick(item)}
                    >
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                            <img
                                src={item.url}
                                alt={item.nombre}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base font-medium text-blue-gray-900">
                                    {item.nombre}
                                </p>
                                <p className="block font-sans text-base font-medium text-blue-gray-900">
                                    {item.precio}
                                </p>
                            </div>
                            <p className="block font-sans text-sm text-gray-700 opacity-75">
                                {item.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pccomps;
