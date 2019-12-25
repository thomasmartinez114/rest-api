var _ = require('underscore');

// The require function steps
// 1) checks if Core module
// 2) checks if File or folder
// 3) assume its in node_modules folder

var result = _.contains([1, 2, 3], 2);
console.log(result);
