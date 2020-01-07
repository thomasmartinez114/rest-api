// Get all published frontend and backend courses
// sort them by their price in descending order
// pick only their name and author
// display

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
  return await Course.find({ isPublished: true })
    .or([{ tages: 'frontend' }, { tags: 'backend' }])
    .sort('-price')
    .select('name author price');
}

// Running the query
async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
