console.log("Hello World!");
console.log("Welcome to Node.js development.");

const fs = require('fs'); 


// Reading from a file
fs.readFile('file.txt', 'utf8', function (err, data) { 
if (err) throw err; 
console.log(data); 
}); 

// Writing to a file
fs.writeFile('file.txt', 'Hello World!', function (err) { 
  if (err) throw err; 
  console.log('File saved!'); 
}); 