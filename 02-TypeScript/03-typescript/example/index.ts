var myName: string = "Tal";
var age: number = 0;
var yearOfBirth = 1971;
var isMarried: boolean = true;

isMarried = true;

age = new Date().getFullYear() - yearOfBirth;

console.log(`${myName} age is ${age} and he is married:${isMarried}`);

myName = "Tomer";
age = 21;
isMarried = false;

console.log(`${myName} age is ${age} and he is married:${isMarried}`);

myName = "Ayala";
age = 20;
isMarried = false;

console.log(`${myName} age is ${age} and she is married:${isMarried}`);
console.log(myName, age, isMarried);

var someNumber: number |undefined ;
var someNumber2: number | null;
someNumber = 2;
console.log(someNumber);

//artimetica

var x = 4;
console.log(x);
x++;
x = x**2;

console.log(x);
x = Math.sqrt(x);
console.log(x);

// firstName =
// firstAge

// "shlomi, shola avg age is 45"
