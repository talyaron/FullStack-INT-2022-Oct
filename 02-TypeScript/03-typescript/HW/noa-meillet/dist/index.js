console.log("First exercise");
var salaries = [15000, 20000, 23000, 12000, 41000, 17000, 36000, 25000, 41000, 32000];
var salariesSum = salaries[0];
for (var i = 1; i < 10; i++) {
    salariesSum += salaries[i];
}
var salariesAvg = salariesSum / 10;
console.log("The average salary of a developer is " + salariesAvg);
console.log("Second exercise");
var num = 50;
var numPower = Math.pow(num, 2);
console.log("The power of " + num + " is " + numPower);
console.log("Third exercise");
var num1 = 16;
var num2 = 841;
console.log(num1 + " square root is " + Math.sqrt(num1));
console.log(num2 + " square root is " + Math.sqrt(num2));
