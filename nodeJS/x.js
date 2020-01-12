// Trade off between query performance vs consistency

// Using References (Normalization) => CONSISTENCY
let author = {
  name: 'Mosh Hamedani'
};

let course = {
  author: 'id'
};

// Using Embedded Documents (Denormalization) => PERFORMANCE but not much consistency
let course = {
  author: {
    name: 'Mosh'
  }
};
