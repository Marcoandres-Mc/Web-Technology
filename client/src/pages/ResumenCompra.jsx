import React from 'react'
import { Avatar, Typography } from "@material-tailwind/react";
import {useCarrito} from '../Components/Redux/CarritoCompra/CarritoHelpers.js'
import { Link } from 'react-router-dom';

const ResumenCompra = () => {
    const { carrito, removeProduct, precioTotal } = useCarrito();

    const eliminarCarrito = (id) => {
        removeProduct(id)
    }

  return (
    <>
    <div className="bg-black text-white p-4 justify-center text-center p-7">
        <h1 className="text-2xl font-bold text-white">
            <Link to="/home" className="hover:text-cyan-400 transition duration-200 text-center">Technology+</Link>
        </h1>
    </div>
    <div className="flex flex-col lg:flex-row justify-between p-6 bg-gray-100 min-h-screen">
      <div className="w-full lg:w-2/3 p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Carro de compras</h1>
        {carrito.map(({ id, nombre, cantidad, precio, img }) => (
          <div key={id} className="flex items-center justify-between pb-3 pt-3 last:pb-0 mx-5">
            <div className="flex items-center gap-x-3  border border-gray-300 rounded-full">
              <Avatar size="sm" src={img} alt={nombre} className="w-20" />
              <div>
                <Typography color="blue-gray" variant="h6">
                  {nombre}
                </Typography>
                <Typography variant="small" color="gray">
                  {"Cantidad: " + cantidad}
                </Typography>
              </div>
            </div>
            <Typography color="blue-gray" variant="h6">
              ${precio}
            </Typography>
            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => eliminarCarrito(id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-1/3 p-4 bg-white shadow-md rounded-lg mt-6 lg:mt-0 lg:ml-6 h-[250px]">
            <h2 className="text-xl font-bold mb-4">Resumen:</h2>
            <Typography color="blue-gray" variant="h5" className="mb-4">
                precio total: ${precioTotal}
            </Typography>
            <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
                Comprar
            </button>
            <Link to="/home" className="hover:text-cyan-400 transition duration-200 text-center underline block mt-4">
                Seguir comprando
            </Link>
        </div>
    </div>
    </>
  )
}

export default ResumenCompra