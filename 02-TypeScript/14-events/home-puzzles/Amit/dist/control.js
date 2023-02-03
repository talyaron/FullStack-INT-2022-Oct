var enterCounter = 0;
var solution = "SMART";
var currentCell = linesArray[0][0];
function insertLetterToCell(letter) {
    try {
        if (linesArray[enterCounter][4].innerText === "") {
            currentCell.innerText = letter;
            if (currentCell.nextElementSibling) {
                currentCell = currentCell.nextElementSibling; //move to next cell
            }
        }
    }
    catch (error) {
        console.error(Error);
    }
}
function deleteLetterFromCell() {
    try {
        if (linesArray[enterCounter][0].innerText !== "") {
            if (linesArray[enterCounter][4].innerText === "") {
                currentCell = currentCell.previousElementSibling;
                currentCell.innerText = "";
            }
            if (linesArray[enterCounter][4].innerText !== "") {
                currentCell.innerText = "";
            }
        }
    }
    catch (error) {
        console.error(Error);
    }
}
function enter() {
    try {
        if (linesArray[enterCounter][4].innerText !== "") {
            var correctLetters = 0;
            for (var i = 0; i < 5; i++) {
                if (solution.includes(linesArray[enterCounter][i].innerText)) {
                    if (linesArray[enterCounter][i].innerText === solution[i]) {
                        linesArray[enterCounter][i].style.backgroundColor = "orange";
                        correctLetters++;
                        if (correctLetters === 5)
                            alert("you win!"); // change to animation with 2sec dealy//
                    }
                    else {
                        linesArray[enterCounter][i].style.backgroundColor = "blue";
                    }
                }
            }
            enterCounter++;
            currentCell = linesArray[enterCounter][0]; // goes to the next line
        }
    }
    catch (error) {
        console.error(Error);
    }
}
