// Level 1:
let number = prompt("Enter a number");
console.log("The invert value of ", number, "is: ", number * (-1));

let number2 = prompt("Enter a second number");
console.log("The square root of ", number2, "is: ", Math.sqrt(number2));

let celsius = prompt("Enter degrees in Celsius");
console.log("Degrees in Fahrenheit: ", celsius*1.8+32);

//Level 2:
let integer1 = prompt("Enter first integer");
let integer2 = prompt("Enter second integer"); // Given that integer2 isn't equal to integer1
if (integer1 > integer2) {
console.log(integer1, "is bigger than ", integer2);
}
else {
 console.log(integer2, "is bigger than ", integer1);
}


let gender = prompt("Are you a male or a female?");
let height:number = prompt("Enter your height in cm");
parseInt(height,8);
if (gender === "male") {
    if (height>174) {
        console.log("your height is ", (height-174), " cm above average");
    }
    else {
    console.log("Your height is ", (174-height), " cm below average");
}
}
else {
    if (height >= 160) {
    console.log("your height is ", (height-160), " cm above average");
    }
    else {
    console.log("Your height is ", (160-height), " cm below average");
    }
}


//level 3:

let str = prompt("Enter a number to reverse");
    
let splitString = str.split('')
let reverseArray = splitString.reverse();
let newString = reverseArray.join('');

console.log(newString);
