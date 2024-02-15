const { check } = require('express-validator');

// Validation rules for creating a product
export const productValidationRules = [
    check('name').notEmpty().withMessage('Name is required'),
    check('price').isNumeric().withMessage('Price must be a number'),
];

// Validation rules for creating a category
export const categoryValidationRules = [
    check('name').notEmpty().withMessage('Name is required'),
];
