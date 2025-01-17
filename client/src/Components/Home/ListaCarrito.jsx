import React, { useEffect, useState } from 'react';
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { useCarrito } from '../Redux/CarritoCompra/CarritoHelpers.js';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useAuth } from '../Redux/Auth/AuthHelpers.js';
import { updateUser } from '../../api/users.js';
const ListaCarrito = () => {
  const { carrito, removeProduct } = useCarrito();
  const {user} = useAuth();
  const [quantities, setQuantities] = useState(carrito.map(item => item.cantidad));

  const eliminarCarrito = (id, precio) => {
    removeProduct(id, precio);
  };

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  /* useEffect(() => {
      const fetchProducts = async () => {
          setLoading(true);
          try{
              const products = await getProductsGaming();
              setProductsGaming(products);
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
  }, []); */

  const datosGuardados = () => {
    const {isAuthenticated, ...rest} = user;
    const newUser = {...rest, carrito}
    updateUser(newUser,newUser.id)

  }

  return (
    <Card className="transition-transform duration-300 ease-in-out transform w-[420px] absolute z-96 top-24 right-0">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Lista de compras
          </Typography>
        </div>
        <div className="divide-y divide-gray-200 h-80 overflow-y-scroll flex flex-col">
          {carrito.map(({ id, nombre, cantidad, precio, img }, index) => (
            <div key={id} className="flex items-center justify-start pb-3 pt-3 last:pb-0">
              <div className='flex flex-col w-[10px] justify-center align-middle mx-3'>
                <button onClick={() => increaseQuantity(index)} className="text-black rounded-l">+</button>
                <span className="border-t border-b justify-center">{quantities[index]}</span>
                <button onClick={() => decreaseQuantity(index)} className="text-black rounded-l">-</button>
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
          ))}
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
          <Link to="/resumenCompra">
            <button className="mt-4 w-64 bg-purple-900 text-white hover:text-white border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400  dark:hover:bg-purple-500 dark:focus:ring-purple-900">
              Ir al carrito
            </button>
          </Link>
          <button onClick={ () =>{datosGuardados()}} className="border border-purple-800 mt-4 text-purple-900 hover:text-white  hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
            Guardar
          </button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ListaCarrito;