var threeNumbers = function (num1, num2, num3) {
    try {
        if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
            throw new Error("not a number");
        }
        return num1 * num2 * num3;
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
var numberAllow = true;
while (numberAllow) {
    var num1 = prompt("what is your first number");
    var num2 = prompt("what is your second number");
    var num3 = prompt("what is your third number");
    if (num1 !== null && num2 !== null && num3 !== null) {
        if (threeNumbers(parseInt(num1), parseInt(num2), parseInt(num3))) {
            alert("The answer is " + num1 * num2 * num3);
            numberAllow = false;
        }
        else {
            alert("must be a number");
        }
    }
    else {
        alert("Some of the inputs are null");
        console.error("Some of the inputs are null");
    }
    console.log(num1 * num2 * num3);
}
