const ProductModel = require('../models/ProductModel');

// Create a new product
const createProduct = async ({ name, price, category, user }) => {
  try {
    const newProduct = await ProductModel.create({ name, price, category, user });
    return newProduct;
  } catch (error) {
    throw error;
  }
};

// Get all products
const getAllProducts = async () => {
  try {
    const products = await ProductModel.find();
    return products;
  } catch (error) {
    throw error;
  }
};

// Get a specific product by ID
const getProductById = async (productId) => {
  try {
    const product = await ProductModel.findById(productId);
    return product;
  } catch (error) {
    throw error;
  }
};

// Update a product by ID
const updateProductById = async (productId, updatedFields) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      updatedFields,
      { new: true }
    );
    return updatedProduct;
  } catch (error) {
    throw error;
  }
};

// Delete a product by ID
const deleteProductById = async (productId) => {
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(productId);
    return deletedProduct;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
