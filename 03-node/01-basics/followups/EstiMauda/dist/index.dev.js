"use strict";

var fs = require('node:fs');

fs.readFile("./psw.txt", 'utf8', function (err, data) {
  try {
    if (err) throw err;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}); // console.log("Hi all....");
// const x = {a:1, b:3};
// const y = Math.random()*x.b;
// console.log("Y is equal to ",y);