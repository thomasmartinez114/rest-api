const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan'); // Logs HTTP requests to terminal - but can slow down app
const Joi = require('joi');
const logger = require('./logger');
const auth = require('./auth');
const express = require('express');
const app = express();

// Built-In Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // URL encoded payload parsed
app.use(express.static('public'));

// Third Party Middleware
app.use(helmet());

// Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

// Running middleware on Development phase not during Production
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled...');
}

// Custom Middleware
app.use(logger);
app.use(auth);

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' }
];

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Get all courses
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

// POST
app.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body);

  if (error) return res.status(400).send(result.error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

// PUT Request
app.put('/api/courses/:id', (req, res) => {
  // Look up the course
  // If not exisiting, return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found!');

  // Validate
  // If invalid, return 400 - Bad request
  const { error } = validateCourse(req.body);

  if (error) return res.status(400).send(result.error.details[0].message);

  // Update the course
  course.name = req.body.name;
  // Return the updated course
  res.send(course);
});

// DELETE request
app.delete('/api/courses/:id', (req, res) => {
  // Look up course by ID
  // Not exisiting, return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found!');

  // Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  // Return the same course
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(course, schema);
}

// Get one course by id
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  // 404 = NOT FOUND
  if (!course) return res.status(404).send('The course with the given ID was not found!');
  res.send(course);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
