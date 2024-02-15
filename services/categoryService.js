const CategoryModel = require('../models/CategoryModel');

// Create a new category
const createCategory = async (payload) => {
  try {
    const newCategory = await CategoryModel.create(payload);
    return newCategory;
  } catch (error) {
    throw error; // Handle or log the error appropriately
  }
};

// Get all categories
const getAllCategories = async () => {
  try {
    const categories = await CategoryModel.find();
    return categories;
  } catch (error) {
    throw error; // Handle or log the error appropriately
  }
};

// Get a specific category by ID
const getCategoryById = async (categoryId) => {
  try {
    const category = await CategoryModel.findById(categoryId);
    return category;
  } catch (error) {
    throw error; // Handle or log the error appropriately
  }
};

// Update a category by ID
const updateCategoryById = async (categoryId, updatedFields) => {
  try {
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      categoryId,
      updatedFields,
      { new: true }
    );
    return updatedCategory;
  } catch (error) {
    throw error; // Handle or log the error appropriately
  }
};

// Delete a category by ID
const deleteCategoryById = async (categoryId) => {
  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete(categoryId);
    return deletedCategory;
  } catch (error) {
    throw error; // Handle or log the error appropriately
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
