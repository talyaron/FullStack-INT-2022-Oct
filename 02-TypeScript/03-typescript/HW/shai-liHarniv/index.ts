"use strict";
console.log("first ex:");

var firstSalary: number = 8000;
var secondSalary: number = 10000;
var thirdSalary: number = 12000;
var forthSalary: number = 15000;
var fifthSalary: number = 18000;
var sixthSalary: number = 20000;
var seventhSalary: number = 23000;
var eighthSalary: number = 25000;
var ninthSalary: number = 27000;
var tenthSalary: number = 30000;

var sumAllSalaries =
  firstSalary +
  secondSalary +
  thirdSalary +
  forthSalary +
  fifthSalary +
  sixthSalary +
  seventhSalary +
  eighthSalary +
  ninthSalary +
  tenthSalary;
var avg = sumAllSalaries / 10;

console.log("The average salary of a developers is: " + avg);

console.log("second ex:");

var firstNum = 5;
var secondNum = 3;

var power = firstNum ** secondNum;
console.log("The power is: " + power);

console.log("third ex:");

var num1 = 4;
var num2 = 64;

var newNum1 = Math.sqrt(num1);
var newNum2 = Math.sqrt(num2);

console.log(num1 + " square root is: " + newNum1);
console.log(num2 + " square root is: " + newNum2);
