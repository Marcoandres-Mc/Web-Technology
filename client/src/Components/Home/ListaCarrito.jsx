import React from 'react'
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { useCarrito } from '../Redux/CarritoCompra/CarritoHelpers.js'

import { Link } from 'react-router-dom';

const ListaCarrito = () => {

  const { carrito, removeProduct } = useCarrito();

  const eliminarCarrito = (id, precio) => {
    removeProduct(id, precio)
  }



  return (
    <Card className="w-[350px] absolute z-96 top-24 right-0 ">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Lista de compras
          </Typography>
          <Link to="/resumenCompra" className="hover:text-cyan-400 transition duration-200">
            <Typography
              variant="small"
              color="blue"
              className="font-bold"
            >
              Ver todas
            </Typography>
          </Link>
        </div>
        <div className="divide-y divide-gray-200 h-96 overflow-y-scroll">
          {carrito.map(({ id, nombre, cantidad, precio, img }, index) => (
            <>
              <div
                key={id}
                className="flex items-center justify-between pb-3 pt-3 last:pb-0 mx-5"
              >
                <div className="flex items-center gap-x-3">
                  <Avatar size="sm" src={img} alt={nombre} className='w-20' />
                  <div>
                    <Typography color="blue-gray" variant="h6">
                      {nombre}
                    </Typography>
                    <Typography variant="small" color="gray">
                      {"Cantidad:" + cantidad}
                    </Typography>
                  </div>
                </div>
                <Typography color="blue-gray" variant="h6">
                  ${precio}
                </Typography>
              </div>
              <div className='flex justify-end mx-5'>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => eliminarCarrito(id, precio)}>Eliminar</button>
              </div>
            </>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default ListaCarrito