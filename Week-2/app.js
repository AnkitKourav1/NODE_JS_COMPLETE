// Module: greetings.js
const sayHello = () => {
    console.log('Hello from the greetings module!');
  };
  
  // Module: farewells.js
  const sayGoodbye = () => {
    console.log('Goodbye from the farewells module!');
  };
  
  // Main Module: app.js
  const greetingsModule = require('./greetings');
  const farewellsModule = require('./farewells');
  
  greetingsModule.sayHello();
  farewellsModule.sayGoodbye();
  