function multiply(x: number, y: number, z: number): number | false {
  try {
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
      console.log("not a number");
      throw new Error("not a number");
    }

    return x * y * z;
  } catch {
    return false;
  }
}

let inputA = prompt("please enter a number");
let inputB = prompt("please enter a number");
let inputC = prompt("please enter a number");

if (inputA == null || inputB == null || inputC == null) {
  console.log("number is null");
} else {
  let inputANumber: number = parseInt(inputA);
  let inputBNumber: number = parseInt(inputB);
  let inputCNumber: number = parseInt(inputC);

  const functionResult = multiply(inputANumber, inputBNumber, inputCNumber);
  console.log(functionResult);
}
