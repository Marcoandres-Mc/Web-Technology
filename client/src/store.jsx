import { configureStore } from '@reduxjs/toolkit';
import carritoReducer from './Features/Carrito/CarritoSlice';

export const store = configureStore({
    reducer: {
        carrito: carritoReducer,
    },
});
export default store;