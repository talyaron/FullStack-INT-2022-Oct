// Question 1
var threeNumbers = function (x, y, z) {
    try {
        if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
            throw new Error("error is not a number");
        }
        return x * y * z;
    }
    catch (Error) {
        alert("Can't do a calculation, There must be 3 numbers to calculate");
        console.error(Error);
        return false;
    }
};
var calculation = true;
var x = prompt("Enter a Number 1");
var y = prompt("Enter a Number 2");
var z = prompt("Enter a Number 3");
console.log(x * y * z);
if (x !== null && y !== null && z !== null) {
    if (threeNumbers(parseInt(x), parseInt(y), parseInt(z))) {
        alert("The answer is " + x * y * z);
        calculation = false;
    }
}
else {
    alert("Can't do a calculation, There must be 3 numbers to calculate");
}
// Question 2
