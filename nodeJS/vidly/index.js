const express = require('express');
const Joi = require('joi');
const app = express();

// Middleware
app.use(express.json());

// List of movies
const movies = [
  { id: 1, title: 'Dumb and Dumber' },
  { id: 2, title: 'Heavyweights' },
  { id: 3, title: 'Tommyboy' },
  { id: 4, title: 'Friday' }
];

// Get list of all movies
app.get('/api/movies', (req, res) => {
  res.send(movies);
});

// POST
app.post('/api/movies', (req, res) => {
  const { error } = validateMovie(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const movie = {
    id: movies.length + 1,
    title: req.body.title
  };
  movies.push(movie);
  res.send(movie);
});

// PUT
app.put('/api/movies/:id', (req, res) => {
  // Look up course, if don't exist return 404
  const movie = movies.find(c => c.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('The movie with the given ID was not found!');

  // Validate
  // If invalid, return 400 = Bad request
  const { error } = validateMovie(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Update the course
  movie.title = req.body.title;
  res.send(movie);
});

// DELETE
app.delete('api/movies/:id', (req, res) => {
  const movie = movies.find(c => c.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('The movie with the given ID was not found!');

  const index = movies.indexOf(movie);
  movies.splice(index, 1);

  res.send(movie);
});

// GET
app.get('api/movies/:id', (req, res) => {
  const movie = movies.find(c => c.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('The movie with the given ID was not found!');

  res.send(movie);
});

// Validating function
function validateMovie(movie) {
  const schema = {
    title: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(movie, schema);
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
