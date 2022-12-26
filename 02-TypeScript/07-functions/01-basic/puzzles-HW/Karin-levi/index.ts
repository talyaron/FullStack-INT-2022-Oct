// Level 1
// A
function negativeNumber(number:number): number{
    if (number <0){
        return number;
    } 
    return -1*number;  
}
console.log(`This is the negative number ${negativeNumber(323)}`);


// B
function square(number:number): number{
    return number**2;
}
console.log(`The squre of the number ${4} is ${square(4)}`)


// C
function fahrenheit(number:number):number{
    return number*1.8+32;
}
console.log(`${20} celciuse is ${fahrenheit(20)} fahrenheit`)


// Level 2
// A
function largerNumber(a,b:number): number{
    if(a>b){
        return a;
    }
    return b; 
}
console.log(`The larger number is ${largerNumber(20,30)}`);

// B
function relativeHeight(height:number,gender:string): number{
    if(gender === "male" ){
        return height-174;
    }
    else if (gender === "female"){
        return height-160
    }
}
// console.log(`Your relative height is ${relativeHeight(170,`male`)}`);

// Level 3
// reverse function!!!
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}


function reverseNumber(number:number): number{
    let numAsString = number.toString()
   numAsString = reverseString(numAsString)
   return Number(numAsString)
}
    console.log(`The reverse number of ${123456} is ${reverseNumber(123456)}`)





// let n = prompt("Please enter a number");
// let y: number = parseInt(n);



