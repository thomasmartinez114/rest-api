// Get all the published backend courses
// Sort them by their name
// Pick only the name and author
// Display them

const mongoose = require('mongoose');

// Connect to DB
mongoose
  .connect('mongodb://localhost/mongo-exercises')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
