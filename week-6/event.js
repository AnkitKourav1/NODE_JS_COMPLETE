// Understanding the Event Loop

const fs = require('fs');

console.log('Start of the program');

// Asynchronous file read
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

console.log('End of the program');
