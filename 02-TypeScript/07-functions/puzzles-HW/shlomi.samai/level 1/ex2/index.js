function squareOfANumber(userNumberVar) {
    if (isNaN(userNumberVar)) {
        return alert("This is not a number!");
    }
    else {
        return (userNumberVar * userNumberVar);
    }
}
let userNumber = prompt("please write a number");
console.log(` The square number of ${userNumber} is ${squareOfANumber(userNumber)}`);
