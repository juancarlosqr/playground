const path = require('path');

const filenameInfo = path.parse(__filename);
const basenameInfo = path.basename(__dirname);

console.log(filenameInfo);
console.log(basenameInfo);
console.log(path);
