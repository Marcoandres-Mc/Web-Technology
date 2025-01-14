import { useState } from "react";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="preguntas"
      className="py-16 bg-white mt-24 "

    >
      <div className="container mx-auto flex flex-wrap items-center ">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="text-center mb-8 ">
            <h1 className="text-3xl font-bold">
              PREGUNTAS FRECUENTES
            </h1>
            <p className="text-black mt-4">
              Aquí tienes respuestas a las preguntas más comunes sobre nuestra
              plataforma. Encuentra información esencial de manera rápida y
              clara.
            </p>
          </div>

          {/* Acordeón */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-none">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-4 text-black font-medium flex justify-between items-center hover:bg-slate-100 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`accordion-content-${index}`}
                >
                  {item.question}
                  <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div
                    id={`accordion-content-${index}`}
                    className="px-6 py-4 text-black transition-all"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4 flex justify-center">
          <img
            src="https://concepto.de/wp-content/uploads/2020/06/Computadora-de-escritorio-scaled-e1724955496406.jpg"
            alt="Preguntas frecuentes"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

const accordionData = [
  {
    question: "¿Qué productos ofrecen en su tienda?",
    answer: "Ofrecemos una amplia gama de productos de tecnología, incluyendo consolas PS4 y PS5, juegos, laptops, componentes para PC y teléfonos móviles.",
  },
  {
    question: "¿Cómo puedo realizar un pedido?",
    answer: "Puedes realizar un pedido directamente a través de nuestra página web. Simplemente selecciona los productos que deseas y sigue el proceso de compra.",
  },
  {
    question: "¿Tienen una sección de contacto?",
    answer: "Sí, contamos con un apartado de contacto donde puedes enviarnos tus consultas o inquietudes. Nos comprometemos a responderte lo más pronto posible.",
  },
  {
    question: "¿Dónde están ubicadas sus sedes?",
    answer: "Nuestras sedes están ubicadas en diferentes ciudades. Puedes encontrar la información de las sedes en la sección correspondiente de nuestra página web.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos varios métodos de pago, incluyendo tarjetas de crédito, débito y transferencias bancarias para mayor comodidad.",
  },
];

export default Questions;