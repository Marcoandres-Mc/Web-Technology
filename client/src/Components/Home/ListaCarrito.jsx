import React, { useContext } from 'react'
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import {CarritoContext} from '../../Contexts/CarritoContext';


const ListaCarrito = () => {
  const {carrito} = useContext(CarritoContext);

  return (
    <Card className="w-[280px] absolute z-96 top-24 right-0">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Lista de compras
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="small"
            color="blue"
            className="font-bold"
          >
            Ver todas
          </Typography>
        </div>
        <div className="divide-y divide-gray-200">
          {carrito.map(({ nombre,cantidad, precio, img }, index) => (
            <div
              key={index}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0"
            >
              <div className="flex items-center gap-x-3">
                <Avatar size="sm" src={img} alt={nombre}  className='w-20'/>
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {nombre}
                  </Typography>
                  <Typography variant="small" color="gray">
                    {"Cantidad:"+ cantidad}
                  </Typography>
                </div>
              </div>
              <Typography color="blue-gray" variant="h6">
                ${precio}
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default ListaCarrito