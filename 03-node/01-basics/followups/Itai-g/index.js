console.log("hi im useing node js!")


const fs = require('node:fs')

fs.readFile('./pow.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });