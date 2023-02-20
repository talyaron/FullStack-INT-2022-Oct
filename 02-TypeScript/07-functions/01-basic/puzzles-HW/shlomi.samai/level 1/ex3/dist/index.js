function CelsiusToFahrenheit(userNumberVar) {
    if (isNaN(userNumberVar)) {
        return false;
    }
    else {
        return userNumberVar * 1.8 + 32;
    }
}
var userNumberStr = prompt("please write a celsius degree");
if (userNumberStr) {
    var userNumber = parseInt(userNumberStr);
    console.log("The Fahrenheit degree is " + CelsiusToFahrenheit(userNumber));
}
