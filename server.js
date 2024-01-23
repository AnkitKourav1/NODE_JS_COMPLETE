// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const tasks = [];

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/add-task', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
