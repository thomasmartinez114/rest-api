console.log('Before');
getUser(1);
console.log('After');

// Callbacks
// Promises
// Async/await

function getUser(id) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    return { id: id, getHubUsername: 'mosh' };
  }, 2000);

  return 1;
}

// Will Log
// Before
// After
// Reading a user from a database
