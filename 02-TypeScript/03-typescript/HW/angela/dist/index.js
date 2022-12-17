console.log("task 1");
var salaries = [
    10000,
    12400,
    9800,
    13400,
    11230,
    12000,
    9900,
    18900,
    23000,
    28000
];
var sum = 0;
salaries.forEach(function (num) { sum += num; });
var average = sum / salaries.length;
console.log("the average salary of a developer is $ " + average + " ");
console.log('');
// taske 2
console.log("task 2");
var x = 6;
var y = Math.pow(x, 2);
console.log("the power of " + x + " is " + y);
console.log("another way to calculate the power of a number is: x*x");
x = 15;
y = x * x;
console.log("the power of " + x + " is " + y);
console.log('');
// task 3
var a = 200;
var b = 840;
var c = Math.sqrt(a).toFixed(2);
var d = Math.sqrt(b).toFixed(3);
console.log("the square root of " + a + " is " + c + " and the square root of " + b + " is " + d);
console.log('');
var num = prompt("choose an intger number to get the squre root of ");
var root = Math.sqrt(num).toFixed(2);
console.log("the squre root of " + num + " is " + root);
