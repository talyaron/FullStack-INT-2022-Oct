// function gets string of numbers and returns integer. or false.
var isNumber = function (numberString) {
    try {
        if (isNaN(numberString)) {
            throw new Error("This in not a number!");
        }
        return parseInt(numberString);
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
// function gets a number from the user and retuns it as an integer.
// If the user entered a letter, the loop will continue.
var getNumber = function (textNumber) {
    while (true) {
        var numberString = prompt("Please enter your " + textNumber + " number.");
        var intNumber = isNumber(numberString);
        if (intNumber) {
            return intNumber;
        }
    }
};
// get three numbers and prints the result.
var firstNumber = getNumber("first");
var secondNumber = getNumber("second");
var thirdNumber = getNumber("third");
var result = firstNumber * secondNumber * thirdNumber;
document.write(firstNumber + "*" + secondNumber + "*" + thirdNumber + "=" + result);
