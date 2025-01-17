import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    id: {},
    nombre: '',
    email: '',
    password: '',
    listaCarrito: [],
    
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        initialState,
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.nombre = action.payload.nombre;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.nombre = '';
            state.email = '';
            state.password = '';
        },

        addId: (state, action) => {
            state.id = action.payload.id;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;