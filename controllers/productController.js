const productService = require('../services/productService');
const { validationResult } = require('express-validator');

// Create a new product

const createProduct = async (req, res) => {
    try {
        // Validate input using express-validator
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, price, categoryId, userId } = req.body;
        const newProduct = await productService.createProduct({ name, price, categoryId, userId });
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        if (error.message === 'Category not found') {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get a specific product by ID
const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productService.getProductById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update a product by ID
const updateProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = await productService.updateProductById(productId, req.body);
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a product by ID
const deleteProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        await productService.deleteProductById(productId);
        res.status(204).json(); // No content
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
};
