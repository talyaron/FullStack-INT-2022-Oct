//Q 1
const threeNumbers = (num1: number, num2: number, num3: number): number | false => {
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

//Q2
const code: Function = (line: string): string | false => {
    try {
        if (typeof line !== 'string') {
            throw new Error("Invalid input");
        }
        const newLine = line.toLocaleLowerCase();
        var str = "";
        for (var i = 0; i < newLine.length; i++) {
            if ((newLine.charCodeAt(i) > 122 || newLine.charCodeAt(i) < 97) && newLine.charCodeAt(i) != 32) {
                throw new Error("Invalid input");
            } else if (newLine.charCodeAt(i) == 32) {
                str += " ";
            } else {
                str += newLine.charCodeAt(i) - 96;
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
    const sentence = prompt("Enter a sentence to turn into a code:");
    if (code(sentence)) {
        alert(code(sentence));
        check2 = false;
    } else {
        alert("Invalid input")
    }
}

//Q3
//I based the solution on the ASCII table
//The function will recive only letters to encrypt and will add 10 to the ASCII table value
//To decrypt the input should be in the range (the function will check it as well)
const q3Function:Function = (q3Line:string, whatToDo:boolean):string|false => {
    try {
        var str = "";
        if (whatToDo) {
            if (typeof q3Line !== 'string') {
                throw new Error("Invalid input");
            }
            for (var i = 0; i < q3Line.length; i++) {
                if (q3Line.charCodeAt(i) != 32 && (q3Line.charCodeAt(i) < 65 || (q3Line.charCodeAt(i) > 90 && q3Line.charCodeAt(i) < 97) || q3Line.charCodeAt(i) > 122)) {
                    throw new Error("Invalid input");
                } else if (q3Line.charCodeAt(i) == 32) {
                    str += " ";
                } else {
                    str += String.fromCharCode(q3Line.charCodeAt(i) + 10);
                }
            }
        } else {
            for (var i = 0; i < q3Line.length; i++) {
                if (q3Line.charCodeAt(i) != 32 && (q3Line.charCodeAt(i) < 75 || (q3Line.charCodeAt(i) > 100 && q3Line.charCodeAt(i) < 107) || q3Line.charCodeAt(i) > 132)) {
                    throw new Error("Invalid input");
                } else if (q3Line.charCodeAt(i) == 32) {
                    str += " ";
                } else {
                    str += String.fromCharCode(q3Line.charCodeAt(i) - 10);
                }
            }
        }
        return str;
    } catch (error) {
        console.error(error);
        return false;
    }
}

var check3 = true;
while(check3) {
    const q3 = prompt("Enter e if you would like to encrypt a message or enter d if you would like to decrypt a message")
    if(q3 != 'e' && q3 != 'd') {
        alert("Invalid input");
    } else {
        var whatToDo:boolean;
        var message:string|null;
        if (q3 == 'e') {
            message = prompt("Enter the message you would like to encrypt");
            whatToDo = true;
        } else {
            message = prompt("Enter the message you would like to decrypt");
            whatToDo = false;
        }
        if (message == null) {
            alert("Invalid input");
        } else {
            if (q3Function(message, whatToDo)) {
                alert(q3Function(message,whatToDo));
                check3 = false;
            } else {
                alert("Invalid input");
            }
        }

    }
}

