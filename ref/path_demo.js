const path = require('path');

console.log(__filename);
console.log(path.basename(__filename));

//directory
console.log(__dirname);
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));

//path object
console.log((path.parse(__filename)));
console.log((path.parse(__filename).base));