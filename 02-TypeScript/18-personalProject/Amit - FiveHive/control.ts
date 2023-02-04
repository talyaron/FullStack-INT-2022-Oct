let currentLine: number = 0;

const WORD_LENGTH = 5;
const LAST_CELL_IN_LINE = 4;

let streak: number = 0;

let currentCell = linesArray[0][0];


function insertLetterToCell(letter: string): void {
    try {

        if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText === "") {
            currentCell.innerText = letter;
            if (currentCell.nextElementSibling) {
                currentCell = currentCell.nextElementSibling as HTMLElement; //move to next cell
            }
        }

    } catch (error: unknown) {
        console.error(error);
    }
}


function deleteLetterFromCell(): void { //clicking BACK
    try {
        if (linesArray[currentLine][0].innerText !== "") {
            if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText === "") {
                currentCell = currentCell.previousElementSibling as HTMLElement;
                currentCell.innerText = "";
            }
            if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText !== "") {
                currentCell.innerText = "";
            }

        }

    } catch (error: unknown) {
        console.error(error);
    }
}


function enter(): void { //clicking ENTER
    try {

        if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText !== "") {
            let correctLetters: number = 0;

            const _guess: string[] = [];

            for (let i = 0; i < WORD_LENGTH; i++) {
                _guess.push(linesArray[currentLine][i].innerText);
            }

            const guessName: string = _guess.join("").toLowerCase();

            const guess = wordsArray.find(({ name }) => name === guessName);
            
            const foundLetters: string[] = [];

            if (guess) {

                for (let i = 0; i < WORD_LENGTH; i++) {

                    const checkedLetter = linesArray[currentLine][i];

                    if (solution?.includesLetter(checkedLetter.innerText)) {

                        if (checkedLetter.innerText === solution.name.toUpperCase()[i]) { //exact spot
                            foundLetters.push(checkedLetter.innerText);
                            checkedLetter.style.backgroundColor = "SeaGreen";

                            const keyOFCheckedLetter: HTMLDivElement | null = document.querySelector(`#${checkedLetter.innerText}`);
                            if (keyOFCheckedLetter){
                              keyOFCheckedLetter.style.backgroundColor = "SeaGreen";  
                              keyOFCheckedLetter.style.borderColor = "SeaGreen";  
                            } 
                            correctLetters++
                            if (correctLetters === WORD_LENGTH){
                                 alert("you win!"); // change to animation with 2sec delay//
                                 streak++
                            } 
                        } else {
                            const foundLettersAsString: string = foundLetters.join("");
                            const foundLettersAsWord = new Word(foundLettersAsString);
                         
                            if (foundLettersAsWord && solution) {
                                if ((foundLettersAsWord.letterRepetitions(checkedLetter.innerText)) < (solution.letterRepetitions(checkedLetter.innerText))) {
                                    foundLetters.push(checkedLetter.innerText);
                                    checkedLetter.style.backgroundColor = "gold";

                                    const keyOFCheckedLetter: HTMLDivElement | null = document.querySelector(`#${checkedLetter.innerText}`);
                                    if (keyOFCheckedLetter && (keyOFCheckedLetter.style.backgroundColor !== "SeaGreen")) {
                                        keyOFCheckedLetter.style.backgroundColor = "gold";
                                        keyOFCheckedLetter.style.borderColor = "gold";
                                    }
                                } else {
                                    checkedLetter.style.backgroundColor = "black";

                                    const keyOFCheckedLetter: HTMLDivElement | null = document.querySelector(`#${checkedLetter.innerText}`);
                                    if (keyOFCheckedLetter && (keyOFCheckedLetter.style.backgroundColor !== "SeaGreen" || "gold")) {
                                        keyOFCheckedLetter.style.backgroundColor = "black";
                                        keyOFCheckedLetter.style.borderColor = "gray";
                                    }
                                }
                            }
                        }
                    } else {
                        checkedLetter.style.backgroundColor = "gray";
                        const keyOFCheckedLetter: HTMLDivElement | null = document.querySelector(`#${checkedLetter.innerText}`);
                        if (keyOFCheckedLetter && (keyOFCheckedLetter.style.backgroundColor !== "SeaGreen" || "gold")) {
                            keyOFCheckedLetter.style.backgroundColor = "black";
                        }
                    }
                if ((currentCell === cell0605) && (correctLetters !== WORD_LENGTH) && (solution)){
                     streak = 0;
                     alert(`better luck next time... the solution was: ${solution.name}`);
                }    
                }
                currentLine++;

                currentCell = linesArray[currentLine][0]; // goes to the next line
            } else {
                (alert("sorry, this word is not on our dictionary yet"));
            }
        }

    } catch (error: unknown) {
        console.error(error);
    }
}




function randomSolutionSelector(): Word | undefined {
    try {
        const randomIndex = getRandomInt(0, wordsArray.length - 1);
        if (!randomIndex) throw new Error("random index not found");

        const solution = wordsArray[randomIndex];

        return solution;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}


