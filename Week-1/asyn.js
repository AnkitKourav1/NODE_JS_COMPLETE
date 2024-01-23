// Callback Function
function fetchData(callback) {
    setTimeout(() => {
      const data = 'Some asynchronous data';
      callback(data);
    }, 2000);
  }
  
  fetchData((result) => {
    console.log(result);
  });
  
  // Promise
  const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Some asynchronous data with Promise';
        resolve(data);
      }, 2000);
    });
  };
  
  fetchDataPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  