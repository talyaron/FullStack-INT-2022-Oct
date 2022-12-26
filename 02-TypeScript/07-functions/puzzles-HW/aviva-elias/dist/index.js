//level 1 1
//1.1
var x = 123;
function negativReturn(x) {
    return (-x);
}
console.log(negativReturn(x));
//1.2
function squareNumber(x) {
    return Math.pow(x, 2);
}
console.log(squareNumber(x));
//1.3
var Celsius = 36.4;
function Fahrenheit(Celsius) {
    return Celsius * 9 / 5 + 32;
}
console.log(Fahrenheit(Celsius));
//level 2
//2.1
var y = 123;
function theLarger(x, y) {
    if (x > y) {
        return x;
    }
    else if (x < y) {
        return y;
    }
    else {
        return "Equals";
    }
}
console.log(theLarger(x, y));
//2.2
var averegeMale = 174;
var avaregeFemale = 164;
function averegeHeightoGender(userheight, usergender) {
    if (usergender === "male") {
        return averegeMale - userheight;
    }
    else {
        return avaregeFemale - userheight;
    }
}
var userheight = prompt("what is your height?");
var usergender = prompt("what is your gender ?");
console.log(averegeHeightoGender(userheight, usergender));
//level3
//function reverseNumbers( num:number):number{
//}
var num = 4;
for (i = 1; i < num; i++) {
    console.log(i);
}
