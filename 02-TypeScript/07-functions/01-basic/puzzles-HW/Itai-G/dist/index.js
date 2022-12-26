//exerise level 1;
var num1 = 32243;
function negetiveNum(num1) {
    return num1 * -1;
}
console.log("the negetive value of this " + num1 + " is " + negetiveNum(num1));
//2.
var num2 = 4;
function square(num2) {
    return num2 * num2;
}
console.log("the square number of " + num2 + " is " + square(num2));
//3.
var clToFr = 23;
function clToFrConvert(clToFr) {
    return (clToFr * 1.8) + 32;
}
console.log("Now outside is " + clToFr + " c and " + clToFrConvert(clToFr) + " Fr");
//ex level 1.
var numBig = 20;
var numSmall = 12;
function max(numBig, numSmall) {
    if ((numBig) > (numSmall)) {
        return numBig;
    }
    else
        return numSmall;
}
console.log("this number " + max(numBig, numSmall) + " is biger then " + numSmall);
//ex level 2 2.
function genderToHghit(gender, height) {
    if (gender === 'male') {
        return height - 175;
    }
    else {
        return height - 160;
    }
}
console.log("your height is " + genderToHghit('male', 185) + " below / above avrege height");
//ex level 3.
var num3 = 425;
var value = 0;
function revers(num3) {
    var reversNumer = 0;
    while (num3) {
        value = num3 % 10;
        reversNumer = (reversNumer * 10) + value;
        num3 = num3 / 10 | 0;
    }
    return reversNumer;
}
console.log("this number " + num3 + " and the revers is " + revers(num3));
