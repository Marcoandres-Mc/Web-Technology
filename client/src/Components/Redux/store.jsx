import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/AuthSlice';
import carritoReducer from './CarritoCompra/CarritoSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    carrito: carritoReducer,
  },
});

export default store;