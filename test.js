const fs = require('fs');
const path = process.argv[2];
const content = process.argv[3];

fs.writeFile(path, content, function (err) {
  if (err) throw err;
  console.log(`File is created successfully at ${path}.`);
});