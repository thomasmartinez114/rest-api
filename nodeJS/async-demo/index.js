console.log('Before');
getUser(1, user => {
  // Get the repositories
  getRepositories(user.gitHubUsername, repos => {
    console.log('Repos', repos[0]);
  });
});
console.log('After');

// Callbacks
// Promises
// Async/await

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id: id, gitHubUsername: 'mosh' });
  }, 2000); // 2 sec timeout
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Gathering the user's GitHub repo");
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}
