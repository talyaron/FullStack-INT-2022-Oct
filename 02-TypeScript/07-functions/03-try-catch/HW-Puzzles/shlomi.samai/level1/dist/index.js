function multiply(x, y, z) {
    try {
        if (isNaN(x) || isNaN(y) || isNaN(z)) {
            console.log("not a number");
            throw new Error("not a number");
        }
        return x * y * z;
    }
    catch (_a) {
        return false;
    }
}
var inputA = prompt("please enter a number");
var inputB = prompt("please enter a number");
var inputC = prompt("please enter a number");
if (inputA == null || inputB == null || inputC == null) {
    console.log("number is null");
}
else {
    var inputANumber = parseInt(inputA);
    var inputBNumber = parseInt(inputB);
    var inputCNumber = parseInt(inputC);
    var functionResult = multiply(inputANumber, inputBNumber, inputCNumber);
    console.log(functionResult);
}
