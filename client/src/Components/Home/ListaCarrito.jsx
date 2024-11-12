import React from 'react'
import { Card, CardBody, Typography, Avatar} from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { eliminarDelCarrito } from '../../Features/Carrito/CarritoSlice';

/* import {CarritoContext} from '../../Contexts/CarritoContext'; */


const ListaCarrito = () => {
/*   const {carrito, eliminarDelCarrito} = useContext(CarritoContext); */

  const carritoProductos = useSelector((state)=> state.carrito);
  const dispatch = useDispatch();

  const eliminarCarrito = (id) => {
    dispatch(eliminarDelCarrito(id));
  }



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
          {carritoProductos.map(({id,nombre,cantidad, precio, img }, index) => (
            <>
              <div
                key={id}
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
              <div>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => eliminarCarrito(id)}>Eliminar</button>
              </div>
            </>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default ListaCarrito