// 1.
// function multiplyNumbers(num1: number, num2: number, num3: number) {
//     try {
//       if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
//         throw new Error("One or more input values is not a number.");
//       }
//       return num1 * num2 * num3;
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
// const num1 = parseInt(prompt("Enter the first number:"));
// const num2 = parseInt(prompt("Enter the second number:"));
// const num3 = parseInt(prompt("Enter the third number:"));
// const result = multiplyNumbers(num1, num2, num3);
// console.log(`The result is: ${result}`);
// 2.
// function encrypt(message: string): string {
//     let encrypted = '';
//     for (const char of message) {
//       encrypted += (char.toLowerCase().charCodeAt(0) - 96).toString();
//     }
//     return encrypted;
//   }
//   const message = prompt('Enter a message to encrypt:');
//   console.log(encrypt(message));
3.;
