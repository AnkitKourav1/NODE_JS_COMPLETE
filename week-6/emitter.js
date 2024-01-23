// Event Emitters and Listeners

const EventEmitter = require('events');

// Create an event emitter instance
const myEmitter = new EventEmitter();

// Define an event handler
const eventHandler = (data) => {
  console.log('Event data:', data);
};

// Attach the event handler to an event
myEmitter.on('customEvent', eventHandler);

// Emit the event with data
myEmitter.emit('customEvent', 'Some event data');
