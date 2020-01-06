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
  // Comparasion operators
  // eq (equal)
  // ne (not equal)
  // gt (greater than)
  // gte (greater than or equal to)
  // lt (less than)
  // lte (less than or equal to)
  // in
  // nin (not in)

  // Logical Operators
  // or
  // and

  const courses = await Course
    // .find({ author: 'Mosh', isPublished: true })

    //              Comparasion Operators
    // .find({ price: { $gte: 10, $lte: 20 } })
    // .find({ price: { $in: [10, 15, 20] } })

    //              Logical Operators
    // .find()
    // .or([{ author: 'Mosh' }, { isPublished: true }])

    //              Regular Expressions
    // Starts with Mosh
    .find({ author: /^Mosh/ })
    // Ends with Hamedani /i not case sensitive
    .find({ author: /Hamedani$/i })
    // Contains Mosh
    .find({ author: /.*Mosh.*/ }) // characters before or after

    .limit(10)
    .sort({ name: 1 }) // 1 ascending, -1 descending
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

getCourses();
