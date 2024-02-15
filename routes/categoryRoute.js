const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { productValidationRules } = require('../middleware/validation');


// Create a new category
router.post('/', productValidationRules, categoryController.createCategory);

// Get all categories
router.get('/', categoryController.getAllCategories);

// Get a specific category by ID
router.get('/:id', categoryController.getCategoryById);

// Update a category by ID
router.put('/:id',productValidationRules, categoryController.updateCategoryById);

// Delete a category by ID
router.delete('/:id', categoryController.deleteCategoryById);

module.exports = router;
