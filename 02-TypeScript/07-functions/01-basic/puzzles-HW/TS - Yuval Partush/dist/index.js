// console.log(-Math.abs(10));
// function negate(num){
//     return -num;
// }
// let number = 25;
// let negativenumber = negate (number);
// console.log(negativenumber)
// TypeScript - HomeWork #1
// exercise #1
var num;
var negativenum;
document.getElementById("btn1").onclick = function () {
    var _a;
    num = document.getElementById("inp").value;
    negativenum = -num;
    (_a = document.getElementById("h4")) === null || _a === void 0 ? void 0 : _a.innerHTML = "The negative number is: " + negativenum;
};
// exercise #2
var num1;
var sqaure;
document.getElementById("btn2").onclick = function () {
    var _a;
    num1 = document.getElementById("inp1").value;
    sqaure = Math.sqrt(num1);
    (_a = document.getElementById("h41")) === null || _a === void 0 ? void 0 : _a.innerHTML = "The Sqaure number is : " + sqaure;
};
// exercise #3
var num2;
var Fah;
document.getElementById("btn3").onclick = function () {
    var _a;
    num2 = document.getElementById("inp2").value;
    Fah = (num2 * 1.8) + 32;
    (_a = document.getElementById("h42")) === null || _a === void 0 ? void 0 : _a.innerHTML = "The converted number is:" + Fah + "*F";
};
document.getElementById("HwBtn").onclick = function () {
    document.querySelector(".exercise1").style.display = "flex";
};
document.querySelector(".fa-circle-xmark").onclick = function () {
    document.querySelector(".exercise1").style.display = "none";
};
// TypeScript - End of HomeWork #1
document.querySelector(".fa-right-from-bracket").onclick = function () {
    document.querySelector(".exercise2").style.display = "none";
};
document.getElementById("Hw2Btn").onclick = function () {
    document.querySelector(".exercise2").style.display = "flex";
};
// TypeScript - HomeWork #2
// exercise #1
var pnum1;
var pnum2;
document.getElementById("pbtn").onclick = function () {
    var _a, _b, _c;
    pnum1 = document.getElementById("num1").value;
    pnum2 = document.getElementById("num2").value;
    if ((pnum1) > (pnum2)) {
        (_a = document.getElementById("pp")) === null || _a === void 0 ? void 0 : _a.innerHTML = "The Larger number is " + pnum1;
    }
    else {
        (_b = document.getElementById("pp")) === null || _b === void 0 ? void 0 : _b.innerHTML = "The larger number is " + pnum2;
    }
    if ((pnum1) === (pnum2)) {
        (_c = document.getElementById("pp")) === null || _c === void 0 ? void 0 : _c.innerHTML = "The both numbers are equals!";
    }
};
// exercise #2
var gender;
var height;
document.getElementById("HGbtn").onclick = function () {
    var _a;
    gender = document.getElementById("Gender").value;
    height = document.getElementById("height").value;
    (_a = document.getElementById("HGp")) === null || _a === void 0 ? void 0 : _a.innerHTML = "The height is:" + height + " and the Gender is:" + gender;
};
// TypeScript - End of HomeWork #2
// TypeScript - HomeWork #3
document.querySelector(".fa-xmark").onclick = function () {
    document.querySelector(".exercise3").style.display = "none";
};
document.getElementById("Hw3Btn").onclick = function () {
    document.querySelector(".exercise3").style.display = "flex";
    // exercise #1
    var rnum;
    var rnum1;
    document.getElementById("Rbtn").onclick = function () {
        var _a;
        rnum = document.getElementById("rnum").value;
        rnum1 = rnum.toString().split("").reverse().join("");
        (_a = document.getElementById("rp")) === null || _a === void 0 ? void 0 : _a.innerHTML = "The reverse number is : " + rnum1;
    };
};
