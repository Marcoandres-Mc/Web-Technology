import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        navigate('/');
    };

    return (
        <section className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
            <div className="m-5 p-5 bg-black text-white rounded-lg shadow-md max-w-md w-full">
                <h3 className="text-3xl font-bold mb-4">Crear Cuenta</h3>
                <form className="grid grid-cols-1 gap-4 w-full" onSubmit={handleRegister}>
                    <div>
                        <label htmlFor="name" className="block text-gray-300">Nombre</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-300">Correo Electrónico</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-300">Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block text-gray-300">Confirmar Contraseña</label>
                        <input
                            id="confirm-password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
};

export default Register;