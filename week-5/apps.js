// app.js

const mongoose = require('mongoose');
const User = require('./User1');

const dbUrl = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');

  // Create
  const newUser = new User({
    username: 'john_doe',
    email: 'john@example.com',
    password: 'securepassword',
  });

  newUser.save()
    .then(user => {
      console.log('User created:', user);

      // Read
      return User.find({});
    })
    .then(users => {
      console.log('All users:', users);

      // Update
      return User.updateOne({ username: 'john_doe' }, { password: 'newpassword' });
    })
    .then(result => {
      console.log('User updated:', result);

      // Delete
      return User.deleteOne({ username: 'john_doe' });
    })
    .then(() => {
      console.log('User deleted');
    })
    .catch(err => {
      console.error('Error:', err);
    })
    .finally(() => {
      mongoose.disconnect();
    });
});
