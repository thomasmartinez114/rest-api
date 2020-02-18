const express = require('express');
const router = express.Router();

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' }
];

// Get all courses
router.get('/', (req, res) => {
  res.send(courses);
});

// POST
router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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

// Get one course by id
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  // 404 = NOT FOUND
  if (!course) return res.status(404).send('The course with the given ID was not found!');
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

module.exports = router;
