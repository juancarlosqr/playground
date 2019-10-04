const fs = require('fs');

const filesSync = fs.readdirSync('./');
console.log(filesSync);

fs.readdir('./', (err, files) => {
  if (err) return console.log(err);
  console.log(files);
});
