console.log('Before');
getUser(1, user => {
  console.log('User', user);
});
console.log('After');

// Callbacks
// Promises
// Async/await

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id: id, getHubUsername: 'mosh' });
  }, 2000);
}

// Will Log
// Before
// After
// Reading a user from a database
