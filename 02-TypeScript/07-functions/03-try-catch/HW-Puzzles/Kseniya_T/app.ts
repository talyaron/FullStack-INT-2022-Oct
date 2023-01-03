// level 1
const isNumber = (num: number, argumentPosition: string): number | false => {
  if (typeof num !== "number") {
    throw new Error(`${argumentPosition} Argument should be a number`);
  }
  // if (/^\d+$/.test(num.toString())) {
  //   throw new Error('Only numbers are acceptable')
  // }
  return num;
};

const multiplicationNumbers = (
  firstNumber: number,
  secondNumber: number,
  thirdNumber: number
): number | false => {
  try {
    isNumber(firstNumber, "First");
    isNumber(secondNumber, "Second");
    isNumber(thirdNumber, "Third");
    return firstNumber * secondNumber * thirdNumber;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const firstAnswer = prompt("give me a number please");
const secondAnswer = prompt("give me a number please");
const thirdAnswer = prompt("give me a number please");

const result = multiplicationNumbers(
  +firstAnswer!,
  +secondAnswer!,
  +thirdAnswer!
);
if (result && !isNaN(result)) {
  alert(`Your number returned as ${result}`);
} else {
  alert("we have an error");
}

// level 2

const mapEncription: Map<string, string> = new Map();
mapEncription.set("a", "1");
mapEncription.set("b", "2");
mapEncription.set("c", "3");
mapEncription.set("d", "4");
mapEncription.set("e", "5");
mapEncription.set("f", "6");
mapEncription.set("g", "7");
mapEncription.set("h", "8");
mapEncription.set("i", "9");
mapEncription.set("j", "10");
mapEncription.set("k", "11");
mapEncription.set("l", "12");
mapEncription.set("m", "13");
mapEncription.set("n", "14");
mapEncription.set("o", "15");
mapEncription.set("p", "16");
mapEncription.set("q", "17");
mapEncription.set("r", "18");
mapEncription.set("s", "19");
mapEncription.set("t", "20");
mapEncription.set("u", "21");
mapEncription.set("v", "22");
mapEncription.set("w", "23");
mapEncription.set("x", "24");
mapEncription.set("y", "25");
mapEncription.set("z", "26");
mapEncription.set(' ', '')

const encryption = (stringToNum: string): number | false => {
  let encryptedMessage = "";
  try {

    if (!/^[a-zA-Z]+$/.test(stringToNum)) {
      throw new Error("input should only be letters");
    }

    const arrStringToNum = stringToNum.split("");
    arrStringToNum.forEach((element) => {
      encryptedMessage += mapEncription.get(element);
      
    });

    console.log(encryptedMessage);
    return +encryptedMessage;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const answer = prompt("give me a message please");

const message = encryption(answer!);
if (message) {
  alert(`Your message returned as ${message}`);
} else {
  alert("we have an error");
}
encryption("hi");


