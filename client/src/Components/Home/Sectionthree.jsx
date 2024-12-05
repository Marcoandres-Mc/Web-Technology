import React from 'react';

const SectionThree = () => {
    return (
        <div className="flex flex-col md:flex-row justify-around items-center py-10 bg-gray-50 my-14">
            <div className="flex flex-col items-center text-center px-4">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAaVBMVEX///8AAAAgHB0ZFBUjHyDz8vJfX19BPkB0c3P39/fn5+cNBgi0s7O8u7v7+/vV1dWLioodGBo3NDUtLS2cmppMSkpYVleEhIQ8OztmZGXPzs8xLS7Ew8Oko6OtrKze3t59fHwqJieTkpIjBGCaAAADuUlEQVR4nO2c2ZaiMBBArSQgUCqGBhoVAf3/j5xwnF4QkSUJMmPdx24jN5KtUoTViiAIgiAI4gc/sM9OX9MpvDSxjVttdFXDNSK3D2IS6HkCF0x9jWW4EHgpNTyDhAuOrmebFKTAgzNdtEDBT6Vvn1xIBvlkT99FJsLp9RxBLgVUk0s7a46exg0ZQZBInkwu7UQSKwND3JBLuZyvp5cm0falSNQwJGoaEjXNu4ie/hlRhE+DNs8upSW6yrNUZzk7Ak3R+SBR05CoaYaK7oLj1jbhs6BmoGjuwRxU3YHiMNGCo5gBBtFGS7RQQfEM2zacCwlHDdEy4wLcYmObOEHBU3+66AYEenpbVMMIIs5Yx3bIENEDsmie7ZAjCIgf/2uIaMK5O892SBkx2D9eNg4RXc8nmkn4JFGDkKhpSNQ0JGoaEjUNiZrmrUV34VGXsKVkQXQXn7SJzjOIOkJFDZrg+j6+sSDqHwyE8a00qo02GpyvsR7XcytgfOtebwUSNQ2JmoZETfPWomW81yWeY2byUxNz/f2mrY3Vk/xHVk+rc6RPcf+lVjpTGerSzkv/L72+79m8RYiGEcNDT/EliPoeCmi16TteJRrk3xR1Cirqe9jiRaLF7yFXCgmd6ccvXiPquI38K0IruG7xol/03JjF0gEPOL+qjZabn1z+oAznY1Fn9DGK/so+GZ4mi8ZRNpbuZLxF0QDk6EWIZH2/qQ1RBqPPUUDW52Dj1h+9w1i83ly6DVErkKhpSNQ0JGoaEjUNiZqGRE1DoqYhUdNoiqZcap4ZH0qIDK7Ti+9BYP82hQkqdaXeULWbHJm8xPZvfnAFITONY0c7VVGGl48WSdFtv3O2VdIu8gyBovMR52EELgjxIFDn8NFxo5zc4wBj8xGCgafjqUwrgAdvemCCw/bR57cuIlN1G3dcAAHjjqfwh1PGbnpPcuFCfrTblFNBXQcUp6RV5hmHdobMEKWLAvb3fw1T1VAQ3fjpaZp5CTLJ74fYMELV1tLjcixrrmrkam7UbFV74Ow8z2HR4ZzVvW+IxvV7Oi7TX39hi7gp6u+BCci6jvq8kKZocFAzAxzmWReMoyFaZvUMpjlkW+K3aJ7V3f26tG5045foGVV35w8nqgXwLerHqhvheoHd6MaX6K6qVz7JTCfDJ/BX1KlnI0xfbfOEm+ix9uQL7UY3atFye+KquxdL9qxfTCXrdz7xBc6aDY5CSdbdaJ7jmNPxU2BMwkzRtA6+e7ms40U3zy/ChS2RCYIgCIIg5uYPINioDbfymHwAAAAASUVORK5CYII="
                    alt="Servicio al cliente"
                    className="h-20 w-20 mb-4"
                />
                <h3 className="text-lg font-bold text-red-600">Servicio al cliente</h3>
                <p className="text-sm text-gray-600">+51 970 311 999</p>
            </div>

            <div className="flex flex-col items-center text-center px-4">
                <img
                    src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cart-shopping-cart-icon-png-free-illustration-image_2284387.jpg"
                    alt="Seguimiento de compra"
                    className="h-20 w-20 mb-4"
                />
                <h3 className="text-lg font-bold text-red-600">Seguimiento de Compra</h3>
                <p className="text-sm text-gray-600">Solo con tu número de orden de compra</p>
            </div>

            <div className="flex flex-col items-center text-center px-4">
                <img
                    src="https://previews.123rf.com/images/djvstock/djvstock1704/djvstock170406789/75584875-dise%C3%B1o-blanco-y-negro-del-ejemplo-de-la-imagen-del-icono-de-la-fachada-del-escaparate-de-la-tienda.jpg"
                    alt="Retiro en tienda"
                    className="h-20 w-20 mb-4"
                />
                <h3 className="text-lg font-bold text-red-600">Retiro en tienda</h3>
                <p className="text-sm text-gray-600">Compra online y recoge en tienda</p>
            </div>
        </div>
    );
};

export default SectionThree;
