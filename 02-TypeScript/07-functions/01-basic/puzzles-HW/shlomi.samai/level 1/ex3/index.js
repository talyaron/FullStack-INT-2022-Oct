
function CelsiusToFahrenheit(userNumberVar) {
    if (isNaN(userNumberVar)) {
        return alert("This is not a number!");
    }
    else {
        return (userNumberVar * 1.8 + 32);
    }
}
let userNumber = prompt("please write a celsius degree");
console.log(`The Fahrenheit degree is ${CelsiusToFahrenheit(userNumber)}`)

