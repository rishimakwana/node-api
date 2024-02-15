const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { productValidationRules } = require('../middleware/validation');

// Create a new product
router.post('/', productValidationRules, productController.createProduct);

// Get all products
router.get('/', productController.getAllProducts);

// Get a specific product by ID
router.get('/:id', productController.getProductById);

// Update a product by ID
router.put('/:id', productValidationRules, productController.updateProductById);

// Delete a product by ID
router.delete('/:id', productController.deleteProductById);


module.exports = router;
