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

// Querying the databases
async function getCourses() {
  return await Course.find({ isPublished: true, tags: 'backend' })
    .sort('name')
    .select('name author');
}

// Running the query
async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
