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

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number
});

// Model
const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  const courses = await Course.find().select({ name: 1, author: 1 });
  console.log(courses);
}

getCourses();
