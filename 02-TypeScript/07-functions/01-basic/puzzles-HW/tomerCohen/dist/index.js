//level 1,1//
function negativnum(n) {
    return n * -1;
}
console.log(negativnum(n));
//level 1,2//
function squareNumbe(n) {
    return (Math.sqrt(n));
}
console.log(squareNumbe(n));
//level 1,3//
function celesuisToFahrenheit(celsius) {
    var fahrnhiet = celsius * 1.8 + 32;
    return fahrnhiet;
}
console.log(celesuisToFahrenheit(20));
//level 2,1//
function largerNumber(low, high) {
    if (low > high) {
        return low;
    }
    else {
        return high;
    }
}
console.log(largerNumber(1000, 350));
//level 2,2//
function genderHight(avr, male) {
    if (male === "male") {
        return avr - 174;
    }
    else {
    }
}
console.log(genderHight(170, "male"));
// level 3,1//
function reverseNumbers(n) {
    return (n
        .toString()
        .split("")
        .reverse()
        .join(""));
}
console.log(reverseNumbers(n));
