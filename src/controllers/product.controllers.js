import Product from '../models/product.model.js';

export const getProductsLaptos = async (req, res) => {
    const products = await Product.find({ categoria: 'laptops' });
    res.json(products);
};
export const getProductsCelulares = async (req, res) => {
    const products = await Product.find({ categoria: 'celulares' });
    res.json(products);
}
export const getProductsGaming = async (req, res) => {
    const products = await Product.find({ categoria: 'gaming' });
    res.json(products);
}
export const getProductsComponentes = async (req, res) => {
    const products = await Product.find({ categoria: 'componentes' });
    res.json(products);
}


