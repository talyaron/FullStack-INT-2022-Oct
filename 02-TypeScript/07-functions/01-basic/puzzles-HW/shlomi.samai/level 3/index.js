function reverseANumber(userNumberVar) {
    if (isNaN(userNumberVar)) {
        return alert("This is not a number!");
    }
    else {
        let userString = userNumberVar.toString();
        let stringLength = userString.length;
        let j = 0;
        let oppArray = [];
        for (let i = stringLength - 1; i >= 0; i--) {
            oppArray[j] = userString[i];
            j++;
        }
        let k = 0;
        let numberOppArray = [];
        for (k = 0; k <= stringLength - 1; k++) {
            numberOppArray[k] = parseInt(oppArray[k]);
        }
        return (numberOppArray.join(""));
    }
}
let userNumber = prompt("please write a number to be reversed");
console.log(`The reversed number is ${reverseANumber(userNumber)}`);