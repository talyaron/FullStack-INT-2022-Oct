// HW
// level 1 
console.log (`level 1.1`)
function negativeNumber(a: number): number {
  return a * -1
}

console.log(negativeNumber(50))

console.log (`level 1.2`)
function sqrtNumber(b: number): number {
  return (b = Math.sqrt(b))
}
console.log(sqrtNumber(9))

console.log (`level 1.3`)
function celsiusToFahrnhit(celsius:number): number {
  const cTemp = celsius
  const fahr = (cTemp * 9) / 5 + 32
  // const message = `${cTemp}\xB0C is ${cToFahr}\xB0F`
  // return message;
  return fahr
}
console.log(celsiusToFahrnhit(0));

function fahrenheitTemp(fahrenheit:number): value {
  var fTemp = fahrenheit
  var fToCel = ((fTemp - 32) * 5) / 9
  var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.'
  console.log(message)
}
celsiusToFahrnhit(40)
fahrenheitTemp(30)

// level 2
console.log (`level 2.1`)
function maxOfTwo(number1, number2) {
  if (parseFloat(number1) < parseFloat(number2)) {
    return number2
  } else if (parseFloat(number1) > parseFloat(number2)) {
    return number1
  } else {
    console.log(number1 + ' and ' + number2 + ' are equal!')
  }
}
console.log(maxOfTwo(1, 5))
console.log(maxOfTwo(9, 12))


console.log (`level 2.2`)
function genderHeightAvrge(avr:number,male:string){
    if (male === `male`) {
        return avr - 174;
    } 
}
console.log(genderHeightAvrge(168,`male`));


// level 3
console.log (`level 3`)

function reverseNum(x:number) {
    return (
        x
        .toString()
        .split('')
        .reverse()
        .join('')
    )
           
  }
console.log(`${reverseNum(987654321)}`)
