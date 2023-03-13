"use strict";

var fs = require("node:fs");

console.log("hi world");
console.log("Hi all....");
var x = {
  a: 1,
  b: 3
};
var y = Math.random() * x.b;
console.log("Y is equal to ", y);
fs.readFile('/pwd.txt', utf8, function (err, data) {
  if (err) throw err;
  console.log(data);
});