const mongoose = require('mongoose');
const express = require('express');
const genres = require('./routes/genres');
const app = express();

// Connect to Mongoose
mongoose
  .connect('mongodb://localhost/vidly-db')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.err('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
