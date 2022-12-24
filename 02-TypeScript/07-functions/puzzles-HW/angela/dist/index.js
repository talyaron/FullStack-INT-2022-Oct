// ***level 1***
// 1.1
console.log("**level 1**");
function negative(number) {
    return -Math.abs(number);
}
var massageStr = prompt("choose a number");
if (massageStr) {
    var massage = parseInt(massageStr);
    console.log("1.1) " + negative(massage));
}
// 1.2
function square(num) {
    return Math.sqrt(num);
}
console.log("1.2) " + square(12).toFixed(3));
// 1.3
function Fahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log("1.3) " + Fahrenheit(15) + "\u00B0f ");
// ***level 2***
// 2.1
console.log("**level 2**");
function max(num1, num2) {
    return Math.max(num1, num2);
}
console.log("2.1) " + max(3, 9));
// 2.2
function avrageHeight(gender, height) {
    if (gender == "male") {
        return height - 174;
    }
    else if (gender == "woman" || "female") {
        return height - 160;
    }
}
var gender = prompt("what is your bio gender?");
if (gender == " " || !gender) {
    alert("please enter a gender");
}
if (gender == "male" || "man") {
    var heightStr = prompt("what is your height?");
    if (heightStr) {
        var height = parseInt(heightStr);
        console.log("2.2) you are a " + gender + " and your height is " + height + " ,compared to the average population you are taller or shorter by " + avrageHeight(gender, height) + "cm");
    }
    else if (gender == "woman" || "female") {
        var heightStr_1 = prompt("what is your height?");
        if (heightStr_1) {
            var height = parseInt(heightStr_1);
            console.log("2.2) you are a " + gender + " and your height is " + height + " ,compared to the average population you are taller or shorter by " + avrageHeight(gender, height) + "cm");
        }
    }
}
// ***level 3***
console.log("**level 3**");
function reversedNum(num) {
    return (num
        .toString()
        .split('')
        .reverse()
        .join(''));
}
console.log("3) " + reversedNum(6543.21));
