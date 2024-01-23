// Function Declaration
function greet(name) {
    return 'Hello, ' + name + '!';
  }
  
  // Function Expression
  const multiply = function (a, b) {
    return a * b;
  };
  
  // Arrow Function
  const square = (num) => num * num;
  
  // Scopes
  const globalVar = 'I am global';
  
  function exampleScope() {
    const localVar = 'I am local';
    console.log(globalVar); // Accessing global variable
    console.log(localVar);  // Accessing local variable
  }
  
  exampleScope();
  