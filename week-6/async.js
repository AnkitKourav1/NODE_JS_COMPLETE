// Callbacks, Promises, and Async/Await

// Callback example
function fetchDataCallback(callback) {
    setTimeout(() => {
      const data = 'Callback data';
      callback(null, data);
    }, 1000);
  }
  
  // Promise example
  function fetchDataPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Promise data';
        resolve(data);
      }, 1000);
    });
  }
  
  // Async/Await example
  async function fetchDataAsync() {
    try {
      const data = await fetchDataPromise();
      console.log('Async/Await data:', data);
    } catch (error) {
      console.error('Error in Async/Await:', error);
    }
  }
  
  // Using callbacks
  fetchDataCallback((err, data) => {
    if (err) {
      console.error('Error in Callback:', err);
      return;
    }
    console.log('Callback data:', data);
  
    // Using promises
    fetchDataPromise()
      .then((data) => {
        console.log('Promise data:', data);
  
        // Using async/await
        fetchDataAsync();
      })
      .catch((error) => {
        console.error('Error in Promise:', error);
      });
  });
  