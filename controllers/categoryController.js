const categoryService = require('../services/categoryService');

// Create a new category
const createCategory = async (req, res) => {
  try {
    const payload = req.body
    payload.user_id = res.auth.user_id || "123";
    const newCategory = await categoryService.createCategory(payload);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific category by ID
const getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await categoryService.getCategoryById(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a category by ID
const updateCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const updatedCategory = await categoryService.updateCategoryById(categoryId, req.body);
    if (!updatedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a category by ID
const deleteCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    await categoryService.deleteCategoryById(categoryId);
    res.status(204).json(); // No content
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
