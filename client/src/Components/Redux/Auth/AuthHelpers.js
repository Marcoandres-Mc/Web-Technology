import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './AuthSlice';


export const useAuth = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    
    const signIn = () => {
        dispatch(login());
    };

    
    const signOut = () => {
        dispatch(logout());
    };

    
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
