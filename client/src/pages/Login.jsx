import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@material-tailwind/react';
import { loginUser } from '../api/users.js';
import { login } from '../Components/Redux/Auth/AuthSlice.js';
import { useAuth } from '../Components/Redux/Auth/AuthHelpers';
import { getUserG } from '../api/users.js';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const { isAuthenticated, signIn, user,agregarId } = useAuth();



    const onSubmit = handleSubmit(async (data) => {
        try {
            const response = await loginUser(data);  
            if (response?.token) {
                login(response.token); 
 
                signIn({ nombre: response.nombre, email: response.email });

                const res = await getUserG(data.email)
                console.log(res)
                agregarId(res._id)

                
                console.log('Usuario autenticado:', response);
                navigate('/home'); 
            } else {
                setError(true); 
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            setError(true); 
        }
    });

    return (
        <section className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
            <div className="m-5 p-5 bg-black text-white rounded-lg shadow-md max-w-md w-full">
                <h3 className="text-3xl font-bold mb-4">Iniciar Sesión</h3>
                <form className="grid grid-cols-1 gap-4 w-full" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-gray-300">Correo Electrónico</label>
                        <input
                            id="email"
                            {...register('email', { required: true })}
                            type="email"
                            required
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-300">Contraseña</label>
                        <input
                            id="password"
                            {...register('password', { required: true })}
                            type="password"
                            required
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                        />
                    </div>
                    <div className="text-center">
                        <Button type="submit" className="ml-auto mt-4 px-4 py-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg">
                            Iniciar Sesión
                        </Button>
                    </div>
                </form>
                <div className="text-sm text-center text-gray-300 mt-4">
                    ¿No tienes una cuenta?{' '}
                    <Link to="/register" className="text-red-500 hover:text-red-300">
                        Regístrate aquí
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Login;