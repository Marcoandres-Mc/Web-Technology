import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../api/users';

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit( async (data) => {
        if (data.password !== data.confirmPassword) {
            console.log('Las contraseñas no coinciden');
            return;
        }

        const newUser = {
            "name": data.nombre,
            "email": data.email,
            "password": data.password,
        };

        try {
            const response = await registerUser(newUser);

            if (!response) {
                console.error('Error registrando usuario:', response);
                return;
              }

            const verificacion = {
                "email": data.email,
                "password": data.password,
            }
            
            await loginUser(verificacion);
            console.log('Usuario registrado:', response);
            navigate('/login');

        } catch (error) {
            console.error('Error registrando usuario:', response);
            
        }

    })
return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
        <div className="m-5 p-5 bg-black text-white rounded-lg shadow-md max-w-md w-full">
            <h3 className="text-3xl font-bold mb-4">Crear Cuenta</h3>
            <form className="grid grid-cols-1 gap-4 w-full" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name" className="block text-gray-300">Nombre</label>
                    <input
                        id="nombre"
                        {...register('nombre', { required: true })}
                        type="text"
                        required
                        className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                    />
                </div>
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
                <div>
                    <label htmlFor="confirmPassword" className="block text-gray-300">Confirmar Contraseña</label>
                    <input
                        id="confirm-password"
                        {...register('confirmPassword', { required: true })}
                        type="password"
                        required
                        className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg"
                    >
                        Registrarse
                    </button>
                </div>
            </form>
            <div className="text-sm text-center text-gray-300 mt-4">
                ¿Ya tienes una cuenta?{' '}
                <Link to="/login" className="text-red-500 hover:text-red-300">
                    Inicia sesión aquí
                </Link>
            </div>
        </div>
    </section>
    );
}

export default Register;