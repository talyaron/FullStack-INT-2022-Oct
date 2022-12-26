function positiveToNegitive(userNumberVar) {
    if (isNaN(userNumberVar)) {
        return alert("This is not a number!");
    }
    else if (userNumberVar == 0) {
        return alert("The number zero is neither positive nor negative");
    }
    else {
        return (userNumberVar * (-1));
    }
}
let userNumber = prompt("please write a number");
console.log(`The negative number is ${positiveToNegitive(userNumber)}`);
