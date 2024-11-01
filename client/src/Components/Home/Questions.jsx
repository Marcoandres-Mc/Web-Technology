import React, { useState } from 'react';

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
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

    return (
        <section className="max-w-6xl mx-auto p-4 mt-4 bg-white border border-black rounded-lg shadow-lg mb-10">
            <h1 className="text-2xl font-bold mb-4 text-center">Preguntas Frecuentes</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 py-2">
                    <button
                        className="flex justify-between w-full text-left text-lg font-medium text-black py-2 focus:outline-none"
                        onClick={() => toggleFAQ(index)}
                    >
                        {faq.question}
                        <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </button>
                    {openIndex === index && (
                        <p className="text-black mt-2">{faq.answer}</p>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Questions;