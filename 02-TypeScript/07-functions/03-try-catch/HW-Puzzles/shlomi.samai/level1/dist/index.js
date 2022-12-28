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
let inputA = prompt("please enter a number");
let inputB = prompt("please enter a number");
let inputC = prompt("please enter a number");
if ((inputA == null) || (inputB == null) || (inputC == null)) {
    console.log("number is null");
}
else {
    let inputANumber = parseInt(inputA);
    let inputBNumber = parseInt(inputB);
    let inputCNumber = parseInt(inputC);
    const functionResult = multiply(inputANumber, inputBNumber, inputCNumber);
    console.log(functionResult);
}
