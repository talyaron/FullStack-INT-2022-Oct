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
var gender = "mail" || "female";
function HeightoGender(height, gender) {
    if (gender === "male") {
        return averegeMale - height;
    }
    else if (gender === "female") {
        return avaregeFemale - height;
    }
}
var gender = prompt("what is your gender ?");
if (gender) {
    var heightStr = prompt("what is your height?");
    var height = parseInt(heightStr);
    if (!isNaN(height) && heightStr !== "") {
        console.log(HeightoGender(height, gender));
    }
    else {
        alert("you did not enter a number");
    }
}
else if (gender === "") {
    if (!gender) {
        {
            alert("you did not enter a gender");
        }
    }
}
