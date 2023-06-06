console.log("Hello");

const add = (x, y) => x + y;
const PI = 3.14159;

module.exports.add = add;
module.exports.PI = PI;

const math = require('./math');
console.log(math.PI)