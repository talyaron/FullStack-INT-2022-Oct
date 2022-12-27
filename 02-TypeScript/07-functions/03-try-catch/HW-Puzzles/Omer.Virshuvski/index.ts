//Q 1
function threeNumbers(num1: number, num2: number, num3: number): number | false {
    try {
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
            throw new Error("Not a number");
        }
        return num1 * num2 * num3;
    } catch (error) {
        console.error(error);
        return false;
    }
}
var check1 = true;
while (check1) {
    const num1 = prompt("Insert first number for first function");
    const num2 = prompt("Insert second number for first function");
    const num3 = prompt("Insert third number for first function");
    if (num1 !== null && num2 !== null && num3 !== null) {
        if (threeNumbers(parseInt(num1), parseInt(num2), parseInt(num3))) {
            alert(`The answer is ${threeNumbers(parseInt(num1), parseInt(num2), parseInt(num3))}`)
            check1 = false;
        } else {
            alert("Invalid input")
        }
    } else {
        alert("Some of the inputs are null")
    }
}

//Q2 + Q3
const code: Function = (line: string): string | false => {
    try {
        if (typeof line !== 'string') {
            throw new Error("Invalid input");
        }
        line.toLocaleLowerCase();
        var str = "";
        for (var i = 0; i < line.length; i++) {
            if ((line.charCodeAt(i) > 122 || line.charCodeAt(i) < 97) && line.charCodeAt(i) != 32) {
                str += String.fromCharCode(line.charCodeAt(i) + 48);
            } else if (line.charCodeAt(i) == 32) {
                str += " ";
            } else {
                str += line.charCodeAt(i) - 96;
            }
        }
        return str;
    } catch (error) {
        console.error(error);
        return false;
    }
}

var check2 = true;
while (check2) {
    const sentence = prompt("Enter a sentence to turn into a code or enter a code to turn into a sentence:");
    if (code(sentence)) {
        alert(code(sentence));
        check2 = false;
    } else {
        alert("Invalid input")
    }
}