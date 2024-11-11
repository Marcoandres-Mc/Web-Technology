
import { createContext, useState} from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    
    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
        setTotal(total + producto.precio);
    };
    
    const eliminarDelCarrito = (producto) => {
        const newCarrito = carrito.filter((item) => item.id !== producto.id);
        setCarrito(newCarrito);
        setTotal(total - producto.precio);
    };
    
    return (
        <CarritoContext.Provider value={{ carrito, total, agregarAlCarrito, eliminarDelCarrito }}>
        {children}
        </CarritoContext.Provider>
    );
}
