const fs = require('node:fs');

fs.readFile("./getfile.txt", 'utf8', (err, data) => {
    try {
      if (err) throw err;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  });