const fs = require('node:fs');

console.log("AYALA");

const x = 30;

console.log(x);

fs.readFile("./pwd.txt", 'utf8', (err, data) => {
    try {
        if (err) throw err;
    console.log(data);
    } catch (error) {
        console.error(error);
    }
    
  });
