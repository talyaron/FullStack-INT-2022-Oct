//Level 1
console.log("Level 1");
function negativeNum(num) {
    return num * -1;
}
console.log("5 as a negative number is: " + negativeNum(5));
function square(num) {
    return num * num;
}
console.log("5 square is: " + square(5));
function cTof(num) {
    return num * 1.8 + 32;
}
console.log("24 deg in C is " + cTof(24) + "in F");
//Level 2
console.log("Level 2");
function biggerNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
console.log("The bigger number between 3 and 7 is: " + biggerNum(7, 3));
function avrHeight() {
    var check1 = true;
    var realHeight = 0;
    while (check1) {
        var heightSTR = prompt("Insert your height:");
        if (heightSTR != null && heightSTR != "") {
            var height = parseInt(heightSTR);
            realHeight = height;
            check1 = false;
        }
        else {
            alert("Try again");
        }
    }
    var avrHeight = 0;
    var check = true;
    while (check) {
        var gender = prompt("Enter your gender(male/female):");
        switch (gender) {
            case "male":
                avrHeight = 177;
                check = false;
                break;
            case "female":
                avrHeight = 166;
                check = false;
                break;
            default: alert("Invalid gender");
        }
    }
    return realHeight - avrHeight;
}
console.log("Average: " + avrHeight());
//Level 3
console.log("Level 3");
function reverse(num) {
    var str = num.toString();
    var count = 0;
    while (num > 1) {
        count++;
        num /= 10;
    }
    var newStr = "";
    for (var i = count; i > 0; i--) {
        newStr += str[i - 1];
    }
    return parseInt(newStr);
}
console.log("123 reverse is: " + reverse(123));
