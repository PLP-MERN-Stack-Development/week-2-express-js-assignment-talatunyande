const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  inStock: { type: Boolean, default: true }
});

module.exports = mongoose.model('Product', productSchema);

