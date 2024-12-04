
import { createContext, useState} from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    
    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
        setTotal(total + producto.precio);
    };
    
    const eliminarDelCarrito = (productoId,productoPrecio) => {
        const newCarrito = carrito.filter((item) => item.id !== productoId);
        setCarrito(newCarrito);
        setTotal(total - productoPrecio);
    };
    
    return (
        <CarritoContext.Provider value={{ carrito, total, agregarAlCarrito, eliminarDelCarrito }}>
        {children}
        </CarritoContext.Provider>
    );
}
