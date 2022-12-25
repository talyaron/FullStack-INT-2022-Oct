'use strict'

//1. Write a function to reverse a number.
// For example, the function gets 123 and returns 321

printReverseNum()

function printReverseNum() {
  let newNum = ''
  let number = prompt('Enter a number: ')
  for (let i = number.length - 1; i >= 0; i--) {
    newNum += number.charAt(i)

  }
  console.log(number)
  console.log(newNum)
}