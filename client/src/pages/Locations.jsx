import React from 'react';

const locationsData = [
    {
        id: 1,
        name: "Technology+ Lima",
        address: "Av. Javier Prado 123, San Isidro, Lima",
        phone: "(01) 123-4567",
        image: "https://enterados.pe/wp-content/uploads/2021/12/tecstore-trujillo-mall-plaza.jpg"
    },
    {
        id: 2,
        name: "Technology+ Arequipa",
        address: "Calle Mercaderes 456, Arequipa",
        phone: "(054) 234-5678",
        image: "https://jnretail.com/wp-content/uploads/slider/cache/ea958dbff72377ab4e0109c68132c0c7/gondolas-para-tiendas-de-informatica.webp"
    },
    {
        id: 3,
        name: "Technology+ Piura",
        address: "Av. Grau 789, Piura",
        phone: "(073) 345-6789",
        image: "https://i.pinimg.com/474x/c5/d3/b8/c5d3b8d66a16ea37d1a2208b3792c98b.jpg"
    },
    {
        id: 4,
        name: "Technology+ Cusco",
        address: "Av. El Sol 123, Cusco",
        phone: "(084) 987-6543",
        image: "https://blablacupones.com/wp-content/uploads/sites/12/2020/03/CASHBACK-EN-TIENDAS-DE-TECNOLOG%C3%8DA-3.jpg"
    },
    {
        id: 5,
        name: "Technology+ Trujillo",
        address: "Calle Pizarro 456, Trujillo",
        phone: "(044) 234-5678",
        image: "https://img.freepik.com/fotos-premium/fila-portatiles-pantalla-que-muestra-mismo-color-que-pantalla_979520-149860.jpg"
    },
    {
        id: 6,
        name: "Technology+ Iquitos",
        address: "Av. La Marina 789, Iquitos",
        phone: "(065) 345-6789",
        image: "https://img.freepik.com/fotos-premium/aparatos-tecnologicos-vanguardia-exhibicion-exposicion-tecnologica_1269612-6877.jpg"
    }
];

const Locations = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto p-5">
                {locationsData.map((location) => (
                    <div key={location.id} className="relative flex flex-col text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105">
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-80">
                            <img
                                src={location.image}
                                alt={location.name}
                                className="object-cover w-full h-full rounded-t-xl"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-lg font-bold text-blue-gray-900">{location.name}</h2>
                            <p className="mt-2 text-sm text-gray-700">{location.address}</p>
                            <p className="mt-1 text-sm text-gray-700">{location.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Locations;