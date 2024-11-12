import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

export const carritoSlice = createSlice({
    name: 'carrito',
    initialState,
    reducers: {
        agregarAlCarrito: (state, action) => {
            state.push(action.payload);
        },
        eliminarDelCarrito: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
    },
    });

export const { agregarAlCarrito, eliminarDelCarrito } = carritoSlice.actions;
export default carritoSlice.reducer;