const EventEmitter = require('events');

// Create an EventEmitter instance
const myEmitter = new EventEmitter();

// Define an event handler
const eventHandler = () => {
  console.log('Event has occurred!');
};

// Attach the event handler to an event
myEmitter.on('myEvent', eventHandler);

// Trigger the event
myEmitter.emit('myEvent');
