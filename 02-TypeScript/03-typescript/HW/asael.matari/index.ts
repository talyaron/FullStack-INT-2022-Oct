// task1
var salaries: number[] = [123, 123, 234, 345, 455, 234, 142, 234, 234, 456];
console.log("10 salaries of developers:" + salaries);

var avg: number = 0;
for (var i = 0; i < salaries.length; i++) {
  avg += salaries[i];
}
avg = avg / salaries.length;
console.log("The average is:" + avg);

// task2

var num: number = 4;
var num2: number = 6;
var power:number = Math.pow(num,num2)
console.log('num in power num2 is:'+ power+'.');

// task3

var number1:number = 144;
var number2:number = 36;
console.log(`this  squre root number ${Math.sqrt(number1)} of the number ${number1}`)
console.log(`this  squre root number ${Math.sqrt(number2)} of the number ${number2}`)

