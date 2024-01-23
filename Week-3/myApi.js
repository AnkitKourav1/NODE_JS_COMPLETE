const express = require('express');
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log('Middleware executing...');
  next();
});

// Route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
