const message = document.querySelector("#message") as HTMLInputElement;
const encryptionCode = document.querySelector(
  "#encryptionCode"
) as HTMLInputElement;

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const code = "JTREKYAVOGDXPSNCUIZLFBMWHQ";

function encrypt(userInput: string): string {
  let encytedToNum = "";

  for (let i = 0; i < userInput.length; i++) {
    // check for space
    if (userInput[i] == " ") {
      encytedToNum += " ";
    }
    // check if letter is capital
    else if (userInput[i].toUpperCase() == userInput[i]) {
      encytedToNum += (userInput.charCodeAt(i) - 65).toString();
    } else {
      encytedToNum += (userInput.charCodeAt(i) - 97).toString();
      //   encytedToNum += "-";
    }
  }
  return encytedToNum;
}

function decrypt(userInput: string): string {
  let encytedToNum = "";

  for (let i = 0; i < userInput.length; i++) {
    // check for space
    if (userInput[i] == " ") {
      encytedToNum += " ";
    }
    // check if letter is capital
    else if (userInput[i].toUpperCase() == userInput[i]) {
      encytedToNum += (userInput.charCodeAt(i) - 65).toString();
    } else {
      encytedToNum += (userInput.charCodeAt(i) - 97).toString();
      //   encytedToNum += "-";
    }
  }
  return encytedToNum;
}

console.log(" ".charCodeAt(0));
console.log(encrypt("encrypt this message"));
