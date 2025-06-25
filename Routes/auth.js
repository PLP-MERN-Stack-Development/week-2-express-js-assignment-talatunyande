const express = require('express');
const router = express.Router();

const users = [
  { username: 'admin', password: '1234', role: 'admin' },
  { username: 'user', password: 'abcd', role: 'user' }
];

// POST login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  res.json({
    message: 'Login successful',
    apiKey: process.env.API_KEY,
    role: user.role
  });
});

module.exports = router;
