// task1
var salaries = [123, 123, 234, 345, 455, 234, 142, 234, 234, 456];
console.log("10 salaries of developers:" + salaries);
var avg = 0;
for (var i = 0; i < salaries.length; i++) {
    avg += salaries[i];
}
avg = avg / salaries.length;
console.log("The average is:" + avg);
// task2
var num = 4;
var num2 = 6;
var power = Math.pow(num, num2);
console.log('num in power num2 is:' + power + '.');
// task3
var number1 = 144;
var number2 = 36;
console.log("this  squre root number " + Math.sqrt(number1) + " of the number " + number1);
console.log("this  squre root number " + Math.sqrt(number2) + " of the number " + number2);
