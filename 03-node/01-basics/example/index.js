import { readFile } from "node:fs";
// const fs = require('node:fs');

console.log("Hi all....");

const x = { a: 1, b: 3 };
const y = Math.random() * x.b;
console.log("Y is equal to ", y);

readFile("./pwd.txt", 'utf8', (err, data) => {
  try {
    if (err) throw err;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});

//please write a new password to a new file
