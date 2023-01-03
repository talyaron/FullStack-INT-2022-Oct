"use strict";
// Create a function that gets three numbers,
// multiplies them with each other, and returns the multiplication.
// Make sure with try-catch that all three numbers are numbers.
// Get the three numbers from the user and print for the user
// the result of the function.
function multiplication(number1, number2, number3) {
    try {
        if (typeof number1 !== "number" ||
            typeof number2 !== "number" ||
            typeof number3 !== "number") {
            throw new Error("One of the arguments is not a number");
        }
        return number1 * number2 * number3;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
var num1 = prompt("Enter a number please");
var num2 = prompt("Enter another number please");
var num3 = prompt("Enter another one please");
var result = multiplication(parseInt(num1), parseInt(num2), parseInt(num3));
if (result && !isNaN(result)) {
    alert("the multiplication of the three numbers is " + result);
}
else {
    alert("we have an error");
}
