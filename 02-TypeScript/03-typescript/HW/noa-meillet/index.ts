console.log("First exercise");
const salaries:number[] = [15000, 20000, 23000,12000,41000,17000,36000,25000,41000,32000 ];
var salariesSum:number =salaries[0];
for (let i = 1; i < 10; i++) {
    salariesSum += salaries[i];
}
var salariesAvg:number= salariesSum/10;
console.log(`The average salary of a developer is ${salariesAvg}`);

console.log("Second exercise");
var num:number=50;
var numPower:number= Math.pow(num,2);
console.log(`The power of ${num} is ${numPower}`);

console.log("Third exercise");
var num1:number= 16;
var num2:number= 841;
console.log(`${num1} square root is ${Math.sqrt(num1)}`);
console.log(`${num2} square root is ${Math.sqrt(num2)}`);
