//task 1: average//
console.log("task 1:");
var n = 10; //the number of devlopers
var dev01 = 28000;
var dev02 = 15000;
var dev03 = 34000;
var dev04 = 12000;
var dev05 = 34000;
var dev06 = 23000;
var dev07 = 50000;
var dev08 = 37000;
var dev09 = 29000;
var dev10 = 31000;
var average = (dev01 + dev02 + dev03 + dev04 + dev05 + dev06 + dev07 + dev08 + dev09 + dev10) / n;
console.log("The average salary of a developer is " + average + ".");
console.log("");
console.log("");
//task 2: power of//
console.log("task 2:");
var base = 2;
var exponent = -3;
var power = 1;
var i = 0;
console.log(base + " in the power of " + exponent + " is");
if (exponent < 0) {
    exponent = -exponent;
    base = 1 / base;
}
for (var i_1 = 0; i_1 < exponent; i_1++) {
    power *= base;
}
console.log(power + ".");
console.log("");
console.log("");
//task 3// square root
console.log("task 3:");
var x = 25;
var squareRootX = Math.sqrt(x);
console.log("the square root of " + x + " is " + squareRootX + ".");
var y = 144;
var squareRootY = Math.sqrt(y);
console.log("the square root of " + y + " is " + squareRootY + ".");
