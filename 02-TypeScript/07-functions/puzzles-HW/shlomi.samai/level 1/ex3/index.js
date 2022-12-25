let userNumber = prompt("please write a number");
function positiveToNegitive(userNumberVar) {
    console.log(userNumberVar);
    if (isNaN(userNumberVar)) {
        return alert("This is not a number!");
    }
    else {
        return (userNumberVar * 1.8 + 32);
    }
}
console.log(userNumber);
console.log(positiveToNegitive(userNumber));
