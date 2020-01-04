const p = new Promise((resolve, reject) => {
  // Kick off some async work
  // ...
  setTimeout(() => {
    // resolve(1);
    reject(new Error('message'));
  }, 2000);
});

p.then(result => console.log('Result', result)).catch(err => console.log('Error', err.message));

// .then for the successfully
// .catch for error

// Promise holds eventual result of async operation
// if passes - pending => resolved, fullfilled
// if failes - pending => rejected
