// app.js

const express = require('express');
const app = express();
const port = 3000;

// Setting up a simple route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Setting up a route with dynamic content using EJS template engine
app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.render('greet', { name });
});

// Using middleware to log requests
app.use((req, res, next) => {
  console.log(`Request received at ${new Date()}`);
  next();
});

// Using EJS as the view engine
app.set('view engine', 'ejs');

// Setting up a static file server for public assets
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
