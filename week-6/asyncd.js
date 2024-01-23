// Using the 'async' Module for Control Flow

const async = require('async');

// Example tasks
const task1 = (callback) => {
  setTimeout(() => {
    console.log('Task 1 completed');
    callback(null, 'Result from Task 1');
  }, 1000);
};

const task2 = (callback) => {
  setTimeout(() => {
    console.log('Task 2 completed');
    callback(null, 'Result from Task 2');
  }, 500);
};

const task3 = (callback) => {
  setTimeout(() => {
    console.log('Task 3 completed');
    callback(null, 'Result from Task 3');
  }, 800);
};

// Execute tasks in parallel
async.parallel([task1, task2, task3], (err, results) => {
  if (err) {
    console.error('Error in parallel execution:', err);
    return;
  }
  console.log('Results from parallel execution:', results);
});
