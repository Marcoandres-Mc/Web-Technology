import React, { useState } from 'react';
import { Avatar, Typography } from "@material-tailwind/react";
import { useCarrito } from '../Components/Redux/CarritoCompra/CarritoHelpers.js';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ResumenCompra = () => {
  const { carrito, removeProduct, precioTotal } = useCarrito();
  const { register, handleSubmit } = useForm();
  const [isModalOpen, setModalOpen] = useState(false);

  const eliminarCarrito = (id) => {
    removeProduct(id);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes manejar el envío del formulario
    toggleModal();
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-black text-white p-4 flex justify-center items-center z-50">
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
          <button
            className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition duration-200"
            onClick={toggleModal}
          >
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-fit bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
              onClick={toggleModal}
            >
              ×
            </button>

            <div className="mx-auto max-w-fit">
              <h1 className="text-xl text-black text-center font-bold sm:text-2xl">Formulario</h1>

              <div className="mt-10 sm:mt-8 lg:flex lg:items-start lg:gap-12">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-lg border border-gray-300 bg-white p-6 shadow-md lg:max-w-xl lg:p-8">
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-gray-800">Nombre Completo</label>
                      <input
                        type="text"
                        id="full_name"
                        {...register("nombreCompleto")}
                        className="block w-full rounded-lg border border-gray-300 bg-blue-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
                        placeholder=""
                        required
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="card-number-input" className="mb-2 block text-sm font-medium text-gray-800">Numero de Tarjeta</label>
                      <input
                        maxLength="16"
                        type="text"
                        id="card-number-input"
                        {...register("numeroTarjeta")}
                        className="block w-full rounded-lg border border-gray-300 bg-blue-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="card-expiration-input" className="mb-2 block text-sm font-medium text-gray-800">Fecha de Vencimiento</label>
                      <input
                        maxLength="5"
                        type="text"
                        id="card-expiration-input"
                        {...register("fechaVencimiento")}
                        className="block w-full rounded-lg border border-gray-300 bg-blue-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="mm/yy"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="cvv-input" className="mb-2 block text-sm font-medium text-gray-800">CVV</label>
                      <input
                        type="text"
                        id="cvv-input"
                        {...register("cvv")}
                        maxLength="3"
                        className="block w-full rounded-lg border border-gray-300 bg-blue-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="•••"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Pagar Ahora
                  </button>
                </form>
              </div>

              <div className="mt-6 flex items-center justify-center gap-8">
                <img className="h-8 w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="PayPal" />
                <img className="h-8 w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="Visa" />
                <img className="h-8 w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="MasterCard" />
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ResumenCompra;
