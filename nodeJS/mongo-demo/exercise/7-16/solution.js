// Get all published courses that are $15 or more
// Or have the word 'by' in title

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
    .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }]) // by in any title - case sensitive
    .sort('-price')
    .select('name author price');
}

// Running the query
async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
