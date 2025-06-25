require('dotenv').config();
const express = require('express');
const productRoutes = require('./Routes/products-Routes');
const authRoutes = require('./Routes/auth');
const middleware = require('./middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(middleware.jsonParser);     // Parse JSON request bodies
app.use(middleware.logRequest);     // Log requests
app.use(middleware.authenticate);   // Check API key auth

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Use /api/products or /api/auth/login');
});

// Route handlers
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.name || 'ServerError',
    message: err.message || 'Something went wrong',
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
