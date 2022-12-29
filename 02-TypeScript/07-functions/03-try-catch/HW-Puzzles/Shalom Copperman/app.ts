// function gets string of numbers and returns integer. or false.
let isNumber: Function = (numberString): number | false => {
  try {
    if (isNaN(numberString)) {
      throw new Error("This in not a number!");
    }
    return parseInt(numberString);
  } catch (error) {
    console.error(error);
    return false;
  }
};
// function gets a number from the user and retuns it as an integer.
// If the user entered a letter, the loop will continue.
let getNumber: Function = (textNumber:string): number => {
  let rightInput: boolean = false;
  while (!rightInput) {
    let numberString = prompt(`Please enter your ${textNumber} number.`);
    const intNumber = isNumber(numberString);
    if (intNumber) {
      rightInput = true;
    }
  }
  return intNumber ;
};

// get three numbers and prints the result.
const firstNumber = getNumber ("first");
const secondNumber = getNumber ("second");
const thirdNumber = getNumber ("third");
const result:number = firstNumber*secondNumber*thirdNumber
document.write (`${firstNumber}*${secondNumber}*${thirdNumber}=${result}`)

