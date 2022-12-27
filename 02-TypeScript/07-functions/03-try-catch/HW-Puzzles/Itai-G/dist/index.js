var numbers = function (num1, num2, num3) {
    try {
        if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
            throw Error("you need to enter numbers alone");
        }
        return num1 * num2 * num3;
    }
    catch (error) {
        return false;
    }
};
var test1 = true;
var num1 = prompt("please enter the first number");
var num2 = prompt("please enter the second number");
var num3 = prompt("plaese enter the third number");
console.log(num1 * num2 * num3);
if (num1 !== null && num2 !== null && num3 !== null) {
    if ((numbers(parseInt(num1), parseInt(num2), parseInt(num3)))) {
        ("the answar is " + numbers(parseInt(num1), parseInt(num2), parseInt(num3)));
    }
}
else {
    alert("you have enterd not all numbers plaese enter numbers");
}
