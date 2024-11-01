import React, { useRef } from 'react';

const products = [
    {
        id: 1,
        brand: 'Sony®',
        name: 'PlayStation 5 Digital 1TB Japan Specs',
        image: 'https://comprarmag.com/wp-content/uploads/2024/07/3061f58f-997b-05bf-2d65-c57a897ba39a.webp',
        price: 'S/. 2,599.90',
    },
    {
        id: 2,
        brand: 'Sony®',
        name: 'PlayStation 5 Slim 1TB Marvel´s Spider-man 2',
        image: 'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/c/o/consola-play-station-5-estandar-spider-man-2-bundle-75789-default-1.jpg',
        price: 's/. 3,499.90',
    },
    {
        id: 3,
        brand: 'Sony®',
        name: 'Consola Playstation 5 Slim Standard',
        image: 'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/p/s/ps5-consola-slim-standard-bundle-returnal-ratchet-clank-80861-default-2.jpg',
        price: 'S/. 2,799.90',
    },
    {
        id: 4,
        brand: 'Sony®',
        name: 'Consola Playstation 5 + God of War Ragnarok',
        image: 'https://www.artefacta.com/media/catalog/product/1/0/1002010037_1__ckkzgualsww0uyeg_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1040&width=1040&canvas=1040:1040',
        price: 'S/. 3, 7209.90',
    },
    {
        id: 7,
        brand: 'Sony®',
        name: 'Consola PS5 – EA SPORTS FC 24',
        image: 'https://m.media-amazon.com/images/I/812V9tZ8XTL.jpg',
        price: 'S/ 2,499.90',
    },
    {
        id: 5,
        brand: 'Sony®',
        name: 'Auriculares Inalámbricos Pulse Elite Para Ps5',
        image: 'https://phantom.pe/media/catalog/product/cache/c58c05327f55128aefac5642661cf3d1/a/u/audifonos_playstation_pulse_explore_1_.jpg',
        price: 'S/. 655.00',
    },
    {
        id: 6,
        brand: 'Sony®',
        name: 'Mando Inalámbrico Ps5 Rojo',
        image: 'https://promart.vteximg.com.br/arquivos/ids/7419883-1000-1000/image-b20864ed391e4dd598f5198e40587573.jpg?v=638272877507600000',
        price: 'S/. 409.50 PEN',
    },

];

const Recommendations = () => {
    const carouselRef = useRef(null);

    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === 'right' ? 400 : -400;
            carouselRef.current.scrollBy({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const handleAddToCart = (product) => {
        console.log(`Added to cart: ${product.name}`);
    };

    return (
        <div className="p-4">
            <h2 className="text-white bg-black text-2xl font-semibold p-4 text-center">
                Te recomendamos:
            </h2>
            <div className="relative mt-10">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-lg z-10"
                    onClick={() => scrollCarousel('left')}
                >
                    &#10094; {/* Icono de flecha izquierda */}
                </button>
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto whitespace-nowrap scroll-smooth"
                >
                    {products.map((product) => (
                        <div key={product.id} className="max-w-sm m-4 bg-white shadow-xl rounded-lg inline-block transition-transform transform hover:scale-105">
                            <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
                            <div className="p-4">
                                <h2 className="font-semibold text-xl">{product.brand}</h2>
                                <p className="text-gray-800">{product.name}</p>
                                <p className="text-black font-bold text-lg">{product.price}</p>
                                <button
                                    className="mt-4 w-full text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-lg z-10"
                    onClick={() => scrollCarousel('right')}
                >
                    &#10095; {/* Icono de flecha derecha */}
                </button>
            </div>
        </div>
    );
};

export default Recommendations;