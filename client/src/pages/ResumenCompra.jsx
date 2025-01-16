import React from 'react';
import { Avatar, Typography } from "@material-tailwind/react";
import { useCarrito } from '../Components/Redux/CarritoCompra/CarritoHelpers.js';
import { Link } from 'react-router-dom';

const ResumenCompra = () => {
  const { carrito, removeProduct, precioTotal } = useCarrito();

  const eliminarCarrito = (id) => {
    removeProduct(id);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-black text-white p-4 flex justify-center items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/home" className="hover:text-cyan-400 transition duration-200">
            Technology+
          </Link>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between p-6 bg-gray-100 min-h-screen mt-20">

        <div className="w-full lg:w-2/3 p-4 bg-white shadow-md rounded-lg mb-6 lg:mb-0">
          <h1 className="text-2xl font-bold mb-4 text-center">Carro de Compras</h1>
          {carrito.map(({ id, nombre, cantidad, precio, img }) => (
            <div key={id} className="flex items-center justify-between pb-4 pt-4 last:pb-0 mx-5 border-b border-gray-300">
              <div className="flex items-center gap-x-3">
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
                S/.{precio}
              </Typography>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200"
                onClick={() => eliminarCarrito(id)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg lg:ml-6 p-8">
          <h2 className="text-xl font-bold mb-4 text-center">Resumen de Compra</h2>
          <Typography color="blue-gray" variant="h5" className="mb-4">
            Precio Total: S/.{precioTotal}
          </Typography>
          <button className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition duration-200">
            Comprar
          </button>
          <Link
            to="/home"
            className="hover:text-cyan-400 transition duration-200 text-center block mt-4 no-underline text-black font-bold"
          >
            Seguir comprando
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResumenCompra;
