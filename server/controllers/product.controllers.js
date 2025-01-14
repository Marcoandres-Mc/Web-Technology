import Product from '../models/product.model.js';
export const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
}

export const getProductsLaptos = async (req, res) => {
    const products = await Product.find({ categoria: 'laptops' || 'Laptops' });
    res.json(products);
};
export const getProductsCelulares = async (req, res) => {
    const products = await Product.find({ categoria: 'celulares' || 'Celulares' });
    res.json(products);
}
export const getProductsGaming = async (req, res) => {
    const products = await Product.find({ categoria: 'gaming' || 'Gaming' });
    res.json(products);
}
export const getProductsComponentes = async (req, res) => {
    const products = await Product.find({ categoria: 'componentes' || 'Componentes' });
    res.json(products);
}


