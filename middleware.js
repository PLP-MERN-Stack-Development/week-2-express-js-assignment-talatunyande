require('dotenv').config();
const bodyParser = require('body-parser');

const middleware = {};

// 1. JSON Body Parser
middleware.jsonParser = bodyParser.json();

// 2. Logger
middleware.logRequest = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next();
};

// 3. Authentication
middleware.authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).json({ error: 'Forbidden: Invalid API key' });
  }
  next();
};

// 4. Validation
middleware.validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (
    typeof name !== 'string' ||
    typeof description !== 'string' ||
    typeof price !== 'number' ||
    typeof category !== 'string' ||
    typeof inStock !== 'boolean'
  ) {
    return res.status(400).json({ error: 'Invalid product data. Check all fields and types.' });
  }
  next();
};

module.exports = middleware;
