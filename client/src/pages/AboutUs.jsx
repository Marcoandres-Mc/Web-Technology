import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Carrusel from '../Components/Home/Carrusel';
import Recommendations from '../Components/Home/Recommendations';
import SectionThree from '../Components/Home/sectionthree';
import SectionFour from '../Components/Home/SectionFour';

const AboutUs = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="mt-20">
      <section className="mt-32">
        <Carrusel />
      </section>
      <section className="flex flex-col justify-center items-center px-5 py-3 mb-10 bg-black text-white container-md mt-20">
        <h1 className="text-3xl font-bold">Technology+</h1>
        <p className="text-center mt-4">
          ¡Bienvenido a Technology+, el lugar ideal para todas tus necesidades tecnológicas!
          <br />
          Ubicado en el vibrante corazón de la ciudad, Technology + se erige como el destino definitivo para aquellos que
          buscan productos de alta calidad en tecnología. Desde consolas de videojuegos hasta computadoras y teléfonos,
          ofrecemos todo lo que necesitas para estar a la vanguardia.
        </p>
        <button
          type="button"
          className="mt-4 px-4 py-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          onClick={openModal}
        >
          Video presentación
        </button>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold">Video presentación</h1>
              <button
                type="button"
                className="text-black"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <div className="mt-2">
              <iframe
                className="w-full h-56" // Ajusta la altura para que se vea mejor
                src="https://www.youtube.com/embed/pSyghD1K_sA?si=f7BvCkFfKVGZyBNW"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="mt-20">
        <Recommendations />
      </section>
      <section className='mt-20'>
        <SectionFour />
      </section>
      <section className='mt-20'>
        <SectionThree />
      </section>


      <div className="contacto fixed bottom-0 end-0 mb-4 mr-4">
        <a href="https://chat.whatsapp.com/GDgpouaqc589mNUxBSmvH6" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
        </a>
      </div>
    </main>
  );
};

export default AboutUs;