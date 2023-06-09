"use strict";

console.log("Hello");

var add = function add(x, y) {
  return x + y;
};

var PI = 3.14159;
module.exports.add = add;
module.exports.PI = PI;

var math = require('./math');

console.log(math.PI);