import React from 'react';

const SectionFour = () => {
    const offers = [
        {
            id: 1,
            image:
                "https://img.global.news.samsung.com/cl/wp-content/uploads/2023/08/SD-generico-OK.jpg",
        },
        {
            id: 2,
            image:
                "https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/01ddc41d-cb41-4ec8-8541-20666331c999___99760b117bb7d334acba287c489b4897.jpg",
        },
        {
            id: 3,
            image:
                "https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/07ba427e-2d6e-4196-bda5-ac4cf197b31f___3f392fcd457ea351afdb24662bc252cd.jpg",
        },
    ];

    return (
        <div className="bg-gray-50 py-10 px-5">
            <h2 className="text-2xl font-bold text-center mb-8 text-red-600">
                Ofertas Exclusivas
            </h2>
            <div className="grid grid-cols-1 gap-6">
                {/* Primera imagen que ocupa todo el ancho */}
                <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img
                        src={offers[0].image}
                        alt={`Oferta ${offers[0].id}`}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Otras dos imágenes en una fila debajo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {offers.slice(1).map((offer) => (
                        <div
                            key={offer.id}
                            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={offer.image}
                                alt={`Oferta ${offer.id}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionFour;
