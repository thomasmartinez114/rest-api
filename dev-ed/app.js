const express = require('express');

const app = express();

// Middlewares
//     function that executes when routes are hit
app.use('/posts', () => {
  console.log('This is a middleware running');
});

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});
app.get('/posts', (req, res) => {
  res.send('We are on posts');
});

// How do we start listening to the server
app.listen(3000);
