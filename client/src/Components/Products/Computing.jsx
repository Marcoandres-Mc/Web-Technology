import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductsLaptos } from '../../api/products';
import Spinner from '../Spinner';


const Computing = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [productsLaptos, setProductsLaptos] = useState([]);
    

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
                try{
                    const products = await getProductsLaptos();
                    setProductsLaptos(products);
                console.log(products);
                    setLoading(false);
                }catch(error){
                    console.error('Error fetching dulceria:', error);
                    setLoading(false);
    
                } finally{
                    setLoading(false)
                }
        };
        fetchProducts();
    }, []);

    const handleProductClick = (item) => {
        const urlImg = encodeURIComponent(item.url).replace(/%2F/g, '|')
        const url = `/home/producto/detalles/${item._id}/${item.nombre}/${item.descripcion}/${item.precio}/${urlImg}`;
        navigate(url);
    };


    return (
        <>
        {loading && <Spinner />}
        <div className="flex justify-center items-center min-h-screen mt-32 my-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {productsLaptos.map((item) => (
                    <div
                        key={item._id}
                        className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105"
                        onClick={() => handleProductClick(item)}
                    >
                        <div className="relative mx-4 mt-4 overflow-hidden text-black bg-white bg-clip-border rounded-xl h-96">
                            <img
                                src={item.url}
                                alt={item.nombre}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base font-bold text-gray-800">
                                    {item.nombre}
                                </p>
                                <p className="block font-sans text-base font-medium text-blue-600">
                                    S/.
                                    {item.precio}
                                </p>
                            </div>
                            <p className="block font-sans text-sm text-black opacity-75">
                                {item.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Computing;
