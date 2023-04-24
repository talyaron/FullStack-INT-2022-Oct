// 1) Create a function that gets three numbers, multiplies them with each other, and returns the multiplication.
// Make sure with try-catch that all three numbers are numbers.
// Get the three numbers from the user and print for the user the result of the function.
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// ///exercise1
// const multiplicationNumbers: Function = (
//   num1: any,
//   num2: any,
//   num3: any
// ): number | false => {
//   try {
//     if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//       throw new Error("enter a number");
//     } else if (
//       typeof num1 === "number" &&
//       typeof num2 === "number" &&
//       typeof num3 === "number"
//     ) {
//       const result: number = num1 * num2 * num3;
//       alert(`the answer is ${result}`);
//       return result;
//     }
//     throw new Error("you should enter a number");
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// };
// var userNum1: any = prompt("please enter the first num");
// console.log(userNum1);
// var userNum2: any = prompt("please enter the second num");
// console.log(userNum2);
// var userNum3: any = prompt("please enter the third num");
// console.log(userNum3);
// console.log(
//   multiplicationNumbers(
//     parseInt(userNum1),
//     parseInt(userNum2),
//     parseInt(userNum3)
//   )
// );
// 2) create a function that encrypts a word to numbers (e.g., hi -> 89) (h is 8th in the alphabet order,
// i is 9th in the alphabetic order). Check to see that only letters were entered.
// let the user enter a message, and then return for her the encrypted code.
// ////exercise2
function encryptMessagee(message) {
    try {
        if (!message) {
            throw new Error("must enter a message");
        }
        else {
            var messageChars = __spreadArrays(message);
            var encryptedMessage = "";
            for (var i in messageChars) {
                var letter = messageChars[i];
                encryptedMessage += (letter.charCodeAt(0) - ("a".charCodeAt(0)) + 1) + " ";
            }
            return (encryptedMessage);
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function decryptMessage(hashedString) {
    if (!hashedString)
        return false;
    console.log(hashedString);
    var hashArr = hashedString.split(" ");
    var encrypt = "";
    hashArr.forEach(function (num, i) {
        if (i !== hashArr.length - 1) {
            //? Casting number to char/string ==> (97 === "a") === String.fromCharCode(97) === "a"
            encrypt += String.fromCharCode(+num + ("a".charCodeAt(0)) - 1);
        }
    });
    return encrypt;
}
{
    var msg = prompt("Please enter a message to encrypt: ");
    var hashPass = encryptMessagee(msg);
    var encryptPass = decryptMessage(hashPass);
    console.log(encryptPass);
}
// 3) create the function in puzzle 2, but add another argument that tells the function to encrypt
// (letter to numbers) or decrypt (numbers to letters). If you want to challenge yourself, create a better 
// encryption method.
// let the user enter a message, and then return for her the encrypted code. let here also decrypt a massege.
