const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
},{ timestamps: true });

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;