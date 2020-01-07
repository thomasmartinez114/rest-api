const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

// Classes, Objects
// Course, nodeCourse

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'Angular Course',
    author: 'Mosh',
    tags: ['angular', 'frontend'],
    // Date is defaulted
    isPublished: true
  });
  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course.find({ author: 'Mosh', isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 }) // 1 ascending, -1 descending
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

getCourses();

async function updateCourse(id) {
  // Approach: Query First
  // findById()
  // Modify its properties
  // save()

  const course = await Course.findById(id);
  if (!course) return;

  // Setting the queries in 2 diff ways
  // First way
  course.isPublished = true;
  course.author = 'Another Author';
  //Second way
  // course.set({
  //   isPublished: true,
  //   author: 'Another Author'
  // });

  const result = await course.save();
  console.log(result);
}

updateCourse('5e127d9446eb8552a87fc383');
