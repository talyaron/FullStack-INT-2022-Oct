//task 1: average//

console.log(`task 1:`);
var n:number= 10; //the number of devlopers
var dev01:number= 28000; 
var dev02:number= 15000; 
var dev03:number= 34000; 
var dev04:number= 12000; 
var dev05:number= 34000; 
var dev06:number= 23000; 
var dev07:number= 50000; 
var dev08:number= 37000; 
var dev09:number= 29000; 
var dev10:number= 31000; 
var average:number= (dev01+dev02+dev03+dev04+dev05+dev06+dev07+dev08+dev09+dev10)/n;
console.log(`The average salary of a developer is ${average}.`);
console.log(``);
console.log(``);



//task 2: power of//
console.log(`task 2:`);
var base:number= 2;
var exponent:number= -3;
var power:number= 1;
var i:number= 0;
console.log(`${base} in the power of ${exponent} is`); 
if (exponent<0){
    exponent= -exponent;
    base= 1/base;
}
for (let i = 0; i < exponent; i++){
    power*=base;
}       
console.log(`${power}.`);
console.log(``);
console.log(``);



//task 3// square root
console.log(`task 3:`);
var x:number= 25;
var squareRootX = Math.sqrt(x);
console.log(`the square root of ${x} is ${squareRootX}.`);
var y:number= 144;
var squareRootY = Math.sqrt(y);
console.log(`the square root of ${y} is ${squareRootY}.`);



