import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carrito: [],
    total: 0,
};

const carritoSlice = createSlice({
    name: 'carrito',
    initialState,
    reducers: {
        agregarAlCarrito: (state, action) => {
            state.carrito.push(action.payload);
            state.total += action.payload.precio;
        },
        eliminarDelCarrito: (state, action) => {
            const { productoId, productoPrecio } = action.payload;
            state.carrito = state.carrito.filter(item => item.id !== productoId);
            state.total -= productoPrecio;
        },
    },
});

export const { agregarAlCarrito, eliminarDelCarrito } = carritoSlice.actions;

// Mantén la exportación predeterminada
export default carritoSlice.reducer;