const express = require('express');
const { v4: uuidv4 } = require('uuid');
const middleware = require('../middleware');

const router = express.Router();

// In-memory product list
let products = [
  {
    id: uuidv4(),
    name: 'Laptop',
    description: 'High-end laptop',
    price: 1500,
    category: 'electronics',
    inStock: true
  }
];

// GET all products
router.get('/', (req, res) => {
  let result = [...products];

  // Filter by category
  if (req.query.category) {
    result = result.filter(p => p.category === req.query.category);
  }

  // Search
  if (req.query.search) {
    const term = req.query.search.toLowerCase();
    result = result.filter(p => p.name.toLowerCase().includes(term));
  }

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || result.length;
  const start = (page - 1) * limit;
  const paginated = result.slice(start, start + limit);

  res.json(paginated);
});

// GET a specific product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// POST a new product
router.post('/', middleware.validateProduct, (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update a product
router.put('/:id', middleware.validateProduct, (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  products[index] = { id: req.params.id, ...req.body };
  res.json(products[index]);
});

// DELETE a product
router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  const removed = products.splice(index, 1);
  res.json({ message: 'Product deleted', product: removed[0] });
});

module.exports = router;

