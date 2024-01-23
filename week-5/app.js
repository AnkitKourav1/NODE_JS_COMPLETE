// app.js

const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/mydatabase'; // Replace with your MongoDB connection string

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});
