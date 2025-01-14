import { agregarAlCarrito, eliminarDelCarrito } from './CarritoSlice.js';
import { useSelector, useDispatch } from 'react-redux';


export const useCarrito = () => {
    const dispatch = useDispatch();
    const carrito = useSelector((state) => state.carrito.carrito);
    const total = useSelector((state) => state.carrito.total);

    
    const addProduct = (producto) => {
        dispatch(agregarAlCarrito(producto));
    };

    
    const removeProduct = (productoId, productoPrecio) => {
        dispatch(eliminarDelCarrito({ productoId, productoPrecio }));
    };

    
    const getProductById = (productoId) => {
        return carrito.find((item) => item.id === productoId) || null;
    };

    
    const clearCart = () => {
        carrito.forEach((producto) =>
            dispatch(eliminarDelCarrito({ productoId: producto.id, productoPrecio: producto.precio }))
        );
    };

    return {
        carrito,
        total,
        addProduct,
        removeProduct,
        getProductById,
        clearCart,
    };
};
