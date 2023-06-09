// # Level 3 #

// 1. Write a function to reverse a number. For example, the function gets 123 and returns 321

var userNum = prompt("give me a number?");

var newNum = reversNum(userNum);
console.log(newNum);

function reversNum(num: string | null) {
  if (num !== null) {
    let reversedNumber = num.split("").reverse().join("");
    alert(`your number is ${reversedNumber}`);
  } else {
    alert("please give me a number");
  }
}
