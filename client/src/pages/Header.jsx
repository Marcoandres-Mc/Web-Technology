import { Link } from 'react-router-dom';
import { useState } from 'react';
import Carrito from '../Components/Home/Carrito'
import { useAuth } from '../Components/Redux/Auth/AuthHelpers';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const { isAuthenticated, signIn, signOut, checkAuth } = useAuth();

  
  

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };
  


  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black shadow-lg  px-8 py-4 z-50">
        <div className='flex items-center justify-between px-8 py-4'>
          <h1 className="text-2xl font-bold text-white">
            <Link to="/home" className="hover:text-cyan-400 transition duration-200">Technology+</Link>
          </h1>

          <nav className="nav font-semibold text-lg text-white">
            <ul className="flex items-center space-x-8">
              <li className="relative group">
                <Link to="/home" className="hover:text-cyan-400 transition duration-200" onClick={closeMenu}>Home</Link>
              </li>

              {/* Productos con menú desplegable */}
              <li className="relative group">
                <button
                  className="hover:text-cyan-400 transition duration-200 flex items-center space-x-2"
                  onClick={() => toggleMenu('productos')}
                >
                  <span>Productos</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeMenu === 'productos' && (
                  <ul className="absolute top-12 left-0 bg-white text-black rounded-lg shadow-lg py-2 w-48 space-y-2 transition duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <li className="hover:bg-gray-100 px-4 py-2 rounded-md">
                      <Link to="/home/productos/computacion" onClick={closeMenu}>Laptops</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2 rounded-md">
                      <Link to="/home/productos/phones" onClick={closeMenu}>Telefonos</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2 rounded-md">
                      <Link to="/home/productos/gaming" onClick={closeMenu}>Gaming</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2 rounded-md">
                      <Link to="/home/productos/pc" onClick={closeMenu}>PC Components</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative group">
                <Link to="/home/sedes" className="hover:text-cyan-400 transition duration-200" onClick={closeMenu}>Sedes</Link>
              </li>
              <li className="relative group">
                <Link to="/home/preguntasFrecuentes" className="hover:text-cyan-400 transition duration-200" onClick={closeMenu}>Preguntas Frecuentes</Link>
              </li>
            </ul>
          </nav>
          {
            isAuthenticated ? (
              <div className="flex items-center space-x-4">
              <Carrito />
            </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-white hover:bg-cyan-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
                  Log in
                </Link>
              </div>
            )}
        </div>
      </header>
    </>

  );
};

export default Header;
