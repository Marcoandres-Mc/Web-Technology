import { agregarAlCarrito, aumentarTotal, disminuirTotal ,eliminarDelCarrito } from './CarritoSlice.js';
import { useSelector, useDispatch } from 'react-redux';


export const useCarrito = () => {
    const dispatch = useDispatch();
    const carrito = useSelector((state) => state.carrito.carrito);
    const precioTotal = useSelector((state) => state.carrito.total);

    
    const addProduct = (producto) => {

        const existeProducto = carrito.find((item) => item.id === producto.id)

        if (existeProducto) {
            const updatedProduct = {
                ...existeProducto,
                cantidad: existeProducto.cantidad + producto.cantidad,
                precio: existeProducto.precio + (producto.precio * producto.cantidad),
            };

            removeProduct(existeProducto.id, existeProducto.precio);
            dispatch(aumentarTotal(updatedProduct.precio));
            dispatch(agregarAlCarrito(updatedProduct));

        }else{
            const precioProducto = producto.precio * producto.cantidad;
            producto = {...producto, precio: precioProducto}

            dispatch(aumentarTotal(precioProducto));
            dispatch(agregarAlCarrito(producto));
        }
 
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
        precioTotal,
        addProduct,
        removeProduct,
        getProductById,
        clearCart,
    };
};
