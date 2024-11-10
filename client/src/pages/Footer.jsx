import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white text-center dark:bg-black dark:text-white lg:text-left">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
          <div className="me-12 hidden lg:block">
            <span>Conéctate con nosotros en nuestras redes sociales:</span>
          </div>
          <div className="flex justify-center">
            <a href="https://www.instagram.com/marco_23andres/" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="https://github.com/Marcoandres-Mc" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/17jeancruz/" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/Jean-20" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                Technology+
              </h6>
              <p>
                Compañía dedicada a la innovación tecnológica, ofreciendo soluciones efectivas en todo Perú.
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Productos
              </h6>
              <p className="mb-4">
                <a href="/computacion" className="text-neutral-600 dark:text-neutral-200">Computación</a>
              </p>
              <p className="mb-4">
                <a href="/phones" className="text-neutral-600 dark:text-neutral-200">Teléfonos</a>
              </p>
              <p className="mb-4">
                <a href="/gaming" className="text-neutral-600 dark:text-neutral-200">Gaming</a>
              </p>
              <p>
                <a href="/pc" className="text-neutral-600 dark:text-neutral-200">Componentes</a>
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Enlaces útiles
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Precios</a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Configuración</a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Pedidos</a>
              </p>
              <p>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Ayuda</a>
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contacto
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                Lima, Perú
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                Technologyplus@gmail.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                +51 01 234 5678
              </p>
              <p className="flex items-center justify-center md:justify-start">
                +51 01 234 5679
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-6 bg-black text-white dark:bg-black dark:text-white">
          <span>© 2024 Derechos Reservados:</span>
          <a className="text-neutral-600 dark:text-neutral-400" href="https://technologyplus.pe/">Technology+</a>
        </div>
      </footer >
    </>
  );
}

export default Footer;
