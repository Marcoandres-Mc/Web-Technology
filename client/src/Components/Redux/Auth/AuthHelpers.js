import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './AuthSlice';


export const useAuth = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth);

    const signIn = (userData) => {
        dispatch(login(userData));
    };

    const signOut = () => {
        dispatch(logout());
    };

    const checkAuth = () => {
        return isAuthenticated;
    };
    const agregarId = (id) =>{
        dispatch(login(id));
    }

    return {
        isAuthenticated,
        user,
        signIn,
        signOut,
        checkAuth,
        agregarId,
    };
};
