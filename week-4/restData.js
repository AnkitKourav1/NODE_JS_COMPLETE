const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Example resource
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Get a specific item
app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((item) => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Create a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update an existing item
app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;
  items = items.map((item) => (item.id === itemId ? updatedItem : item));
  res.json(updatedItem);
});

// Delete an item
app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter((item) => item.id !== itemId);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
