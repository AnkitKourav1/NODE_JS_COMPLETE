// Error Handling in Asynchronous Code

function asyncFunctionWithErrors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNum = Math.random();
        if (randomNum > 0.5) {
          resolve('Success!');
        } else {
          reject(new Error('Error: Random number is less than 0.5'));
        }
      }, 1000);
    });
  }
  
  async function handleAsyncErrors() {
    try {
      const result = await asyncFunctionWithErrors();
      console.log('Async success:', result);
    } catch (error) {
      console.error('Async error:', error.message);
    }
  }
  
  handleAsyncErrors();
  