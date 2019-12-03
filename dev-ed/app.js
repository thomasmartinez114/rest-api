const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Middlewares
//     function that executes when routes are hit

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});
app.get('/posts', (req, res) => {
  res.send('We are on posts');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('Connected to DB'));

// How do we start listening to the server
app.listen(3000);
