function multiplication(number1, number2, number3) {
    try {
        if ((typeof number1 !== 'number') ||
            (typeof number2 !== 'number') ||
            (typeof number3 !== 'number')) {
            throw new Error('One of the arguments is not a number');
        }
        return number1 * number2 * number3;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
var firstNumber = prompt("give me the first number please");
var secondNumber = prompt("give me the second number please");
var thirdNumber = prompt("give me the third number please");
var result = multiplication(parseInt(firstNumber), parseInt(secondNumber), parseInt(thirdNumber));
if (result && !isNaN(result)) {
    alert("the multiplication of the three numbers is " + result);
}
else {
    alert("we have an error");
}
