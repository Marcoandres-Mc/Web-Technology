import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
/* import {CarritoContext} from '../../Contexts/CarritoContext'; */
import { useDispatch } from 'react-redux';
import {useCarrito} from '../Redux/CarritoCompra/CarritoHelpers.js'


const DetallesProducto = () => {

    const { addProduct } = useCarrito();

    const { id, nombre, descripcion, precio, img } = useParams();
    const decodedImg = decodeURIComponent(img).replace(/\|/g, '/');



    const [quantity, setQuantity] = useState(1);


    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };




    const btnAgregar = () => {
        addProduct({ id, nombre, descripcion, precio, img: decodedImg, cantidad: quantity });
    }





    return (
        <div className="flex justify-center items-center min-h-screen mt-20">
            <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">

                <div className="md:w-1/2">
                    <img src={decodedImg} alt={nombre} className="object-cover w-full h-full" />
                </div>


                <div className="p-6 flex flex-col justify-between md:w-1/2">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{nombre}</h2>
                        <p className="text-gray-600 mt-2">{descripcion}</p>
                        <p className="text-xl font-semibold text-green-500 mt-4">{"S/." + precio}</p>
                    </div>


                    <div className="flex items-center mt-6">
                        <button onClick={decreaseQuantity} className="px-3 py-1 bg-gray-300 text-gray-800 rounded-l">-</button>
                        <span className="px-4 py-1 border-t border-b">{quantity}</span>
                        <button onClick={increaseQuantity} className="px-3 py-1 bg-gray-300 text-gray-800 rounded-r">+</button>
                        <button onClick={btnAgregar} className="ml-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetallesProducto;
