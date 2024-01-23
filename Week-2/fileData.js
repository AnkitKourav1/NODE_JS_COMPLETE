const fs = require('fs');

// Reading a file
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('File content:', data);
});

// Writing to a file
const contentToWrite = 'This is a sample text.';
fs.writeFile('output.txt', contentToWrite, (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }
  console.log('File written successfully!');
});
