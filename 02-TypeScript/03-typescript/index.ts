var myName:string = "Tal";
var age:number = 0;
var yearOfBirth = 1971;
var isMarried:boolean = true;

isMarried = true;

age = new Date().getFullYear() - yearOfBirth;

console.log(`${myName} age is ${age} and he is married:${isMarried}`);

myName = "Tomer";
age = 21;
isMarried = false;

console.log(`${myName} age is ${age} and he is married:${isMarried}`);

myName = 'Ayala';
age = 20;
isMarried = false;

console.log(`${myName} age is ${age} and she is married:${isMarried}`);
console.log(myName,age,isMarried)

// firstName = 
// firstAge


// "shlomi, shola avg age is 45"


