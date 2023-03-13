const fs = require(`node:fs`)

console.log("hi world")

console.log("Hi all....");

const x = {a:1, b:3};
const y = Math.random()*x.b;
console.log("Y is equal to ",y);


fs.readFile('/pwd.txt', utf8, (err, data) => {
    if (err) throw err;
    console.log(data);
  });