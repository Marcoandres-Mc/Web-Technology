import React, { useState } from 'react';
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { useCarrito } from '../Redux/CarritoCompra/CarritoHelpers.js';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { Button } from '@mui/material';

const ListaCarrito = () => {
  const { carrito, removeProduct } = useCarrito();

  const eliminarCarrito = (id, precio) => {
    removeProduct(id, precio);
  };

  return (
    <Card className="transition-transform duration-300 ease-in-out transform w-[420px] absolute z-96 top-24 right-0">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Lista de compras
          </Typography>
          <Link to="/resumenCompra" className="hover:text-cyan-400 transition duration-200">
            <Typography variant="small" color="blue" className="font-bold">
              Ver todas
            </Typography>
          </Link>
        </div>
        <div className="divide-y divide-gray-200 h-80 overflow-y-scroll flex flex-col">
          {carrito.map(({ id, nombre, cantidad, precio, img }) => {
            const [cantidadC, setCantidadC] = useState(cantidad);

            const increaseQuantity = () => {
              setCantidadC(cantidadC + 1);
            };

            const decreaseQuantity = () => {
              if (cantidadC > 1) {
                setCantidadC(cantidadC - 1);
              }
            };

            return (
              <div key={id} className="flex items-center justify-start pb-3 pt-3 last:pb-0">
                <div className='flex flex-col w-[10px] justify-center align-middle mx-3'>
                  <button onClick={increaseQuantity} className="text-black rounded-l">+</button>
                  <span className="border-t border-b justify-center">{cantidadC}</span>
                  <button onClick={decreaseQuantity} className="text-black rounded-l">-</button>
                </div>
                <div className="flex items-center gap-x-3 min-w-[250px]">
                  <Avatar size="sm" src={img} alt={nombre} className='max-w-20' />
                  <div>
                    <Typography color="blue-gray" variant="h6">
                      {nombre}
                    </Typography>
                    <Typography variant="small" color="gray">
                      ${precio}
                    </Typography>
                  </div>
                </div>
                <div className='flex justify-end mx-4'>
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => eliminarCarrito(id, precio)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mb-2 flex items-center justify-between mx-8 my-5">
          <Typography variant="h5" color="blue-gray" className="">
            Total:
          </Typography>
          <Typography variant="small" color="blue" className="font-bold">
            ${carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2)}
          </Typography>
        </div>
        <div className="mt-4 flex justify-between">
          <Link to="/carrito">
            <Button color="blue" className="mr-2">
              Ir al carrito
            </Button>
          </Link>
          <Button color="green">
            Guardar
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ListaCarrito;