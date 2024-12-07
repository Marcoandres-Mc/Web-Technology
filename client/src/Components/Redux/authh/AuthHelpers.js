import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './authSlice';

// Hook personalizado para interactuar con la autenticación
export const useAuth = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // Función para iniciar sesión
    const signIn = () => {
        dispatch(login());
    };

    // Función para cerrar sesión
    const signOut = () => {
        dispatch(logout());
    };

    // Función para verificar el estado de autenticación
    const checkAuth = () => {
        return isAuthenticated;
    };

    return {
        isAuthenticated,
        signIn,
        signOut,
        checkAuth,
    };
};
