var currentLine = 0;
var WORD_LENGTH = 5;
var LAST_CELL_IN_LINE = 4;
var LAST_LINE = 5;
var streak = 0;
var currentCell = linesArray[0][0];
function insertLetterToCell(letter) {
    try {
        if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText === "") {
            currentCell.innerText = letter;
            if (currentCell.nextElementSibling) {
                currentCell = currentCell.nextElementSibling; //move to next cell
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function deleteLetterFromCell() {
    try {
        if (linesArray[currentLine][0].innerText !== "") {
            if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText === "") {
                currentCell = currentCell.previousElementSibling;
                currentCell.innerText = "";
            }
            if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText !== "") {
                currentCell.innerText = "";
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function enter() {
    try {
        if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText !== "") {
            var correctLetters = 0;
            var _guess = [];
            for (var i = 0; i < WORD_LENGTH; i++) {
                _guess.push(linesArray[currentLine][i].innerText);
            }
            var guessName_1 = _guess.join("").toLowerCase();
            var guess = wordsArray.find(function (_a) {
                var name = _a.name;
                return name === guessName_1;
            });
            var foundLetters = [];
            if (guess) {
                for (var i = 0; i < WORD_LENGTH; i++) {
                    var checkedLetter = linesArray[currentLine][i];
                    if (checkedLetter !== linesArray[LAST_LINE][LAST_CELL_IN_LINE]) {
                        if (solution === null || solution === void 0 ? void 0 : solution.includesLetter(checkedLetter.innerText)) {
                            if (checkedLetter.innerText === solution.name.toUpperCase()[i]) { //exact spot
                                foundLetters.push(checkedLetter.innerText);
                                checkedLetter.style.transform = "rotateX(360deg)";
                                checkedLetter.style.backgroundColor = "SeaGreen";
                                var keyOFCheckedLetter = document.querySelector("#" + checkedLetter.innerText);
                                if (keyOFCheckedLetter) {
                                    keyOFCheckedLetter.style.backgroundColor = "SeaGreen";
                                    keyOFCheckedLetter.style.borderColor = "SeaGreen";
                                }
                                correctLetters++;
                                if (correctLetters === WORD_LENGTH) {
                                    if (loggedInUser) {
                                        updateStreak(loggedInUser.streak + 1);
                                        renderUserData(users, "userDataRoot");
                                    }
                                    setTimeout(win, 8000, users);
                                }
                            }
                            else {
                                var foundLettersAsString = foundLetters.join("");
                                var foundLettersAsWord = new Word(foundLettersAsString);
                                if (foundLettersAsWord && solution) {
                                    if ((foundLettersAsWord.letterRepetitions(checkedLetter.innerText)) < (solution.letterRepetitions(checkedLetter.innerText))) {
                                        foundLetters.push(checkedLetter.innerText);
                                        checkedLetter.style.transform = "rotateX(360deg)";
                                        checkedLetter.style.backgroundColor = "gold";
                                        var keyOFCheckedLetter = document.querySelector("#" + checkedLetter.innerText);
                                        if (keyOFCheckedLetter && (keyOFCheckedLetter.style.backgroundColor !== "SeaGreen")) {
                                            keyOFCheckedLetter.style.backgroundColor = "gold";
                                            keyOFCheckedLetter.style.borderColor = "gold";
                                        }
                                    }
                                    else {
                                        checkedLetter.style.transform = "rotateX(360deg)";
                                        checkedLetter.style.backgroundColor = "gray";
                                        var keyOFCheckedLetter = document.querySelector("#" + checkedLetter.innerText);
                                        if (keyOFCheckedLetter && (keyOFCheckedLetter.style.backgroundColor !== "SeaGreen" || "gold")) {
                                            keyOFCheckedLetter.style.backgroundColor = "black";
                                            keyOFCheckedLetter.style.borderColor = "gray";
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            checkedLetter.style.transform = "rotateX(360deg)";
                            checkedLetter.style.backgroundColor = "gray";
                            var keyOFCheckedLetter = document.querySelector("#" + checkedLetter.innerText);
                            if (keyOFCheckedLetter && (keyOFCheckedLetter.style.backgroundColor !== "SeaGreen" || "gold")) {
                                keyOFCheckedLetter.style.backgroundColor = "black";
                            }
                        }
                    }
                    else if (solution) {
                        if (solution === null || solution === void 0 ? void 0 : solution.includesLetter(checkedLetter.innerText)) {
                            if (checkedLetter.innerText === solution.name.toUpperCase()[i]) { //exact spot
                                foundLetters.push(checkedLetter.innerText);
                                checkedLetter.style.transform = "rotateX(360deg)";
                                checkedLetter.style.backgroundColor = "SeaGreen";
                                var keyOFCheckedLetter = document.querySelector("#" + checkedLetter.innerText);
                                if (keyOFCheckedLetter) {
                                    keyOFCheckedLetter.style.backgroundColor = "SeaGreen";
                                    keyOFCheckedLetter.style.borderColor = "SeaGreen";
                                }
                                correctLetters++;
                                if (correctLetters === WORD_LENGTH) {
                                    if (loggedInUser) {
                                        updateStreak(loggedInUser.streak + 1);
                                        renderUserData(users, "userDataRoot");
                                    }
                                    setTimeout(win, 8000, users);
                                }
                                else if (loggedInUser) {
                                    updateStreak(0);
                                    renderUserData(users, "userDataRoot");
                                    setTimeout(lose, 8000, users);
                                }
                            }
                            else {
                                var foundLettersAsString = foundLetters.join("");
                                var foundLettersAsWord = new Word(foundLettersAsString);
                                if (foundLettersAsWord && solution) {
                                    if ((foundLettersAsWord.letterRepetitions(checkedLetter.innerText)) < (solution.letterRepetitions(checkedLetter.innerText))) {
                                        foundLetters.push(checkedLetter.innerText);
                                        checkedLetter.style.transform = "rotateX(360deg)";
                                        checkedLetter.style.backgroundColor = "gold";
                                        var keyOFCheckedLetter = document.querySelector("#" + checkedLetter.innerText);
                                        if (keyOFCheckedLetter && (keyOFCheckedLetter.style.backgroundColor !== "SeaGreen")) {
                                            keyOFCheckedLetter.style.backgroundColor = "gold";
                                            keyOFCheckedLetter.style.borderColor = "gold";
                                        }
                                    }
                                    else {
                                        checkedLetter.style.transform = "rotateX(360deg)";
                                        checkedLetter.style.backgroundColor = "gray";
                                        var keyOFCheckedLetter = document.querySelector("#" + checkedLetter.innerText);
                                        if (keyOFCheckedLetter && (keyOFCheckedLetter.style.backgroundColor !== "SeaGreen" || "gold")) {
                                            keyOFCheckedLetter.style.backgroundColor = "black";
                                            keyOFCheckedLetter.style.borderColor = "gray";
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            checkedLetter.style.transform = "rotateX(360deg)";
                            checkedLetter.style.backgroundColor = "gray";
                            var keyOFCheckedLetter = document.querySelector("#" + checkedLetter.innerText);
                            if (keyOFCheckedLetter && (keyOFCheckedLetter.style.backgroundColor !== "SeaGreen" || "gold")) {
                                keyOFCheckedLetter.style.backgroundColor = "black";
                            }
                        }
                    }
                }
                currentLine++;
                if (currentLine < LAST_LINE + 1)
                    currentCell = linesArray[currentLine][0]; // goes to the next line    
            }
            else {
                notValid();
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function randomSolutionSelector() {
    try {
        var randomIndex = getRandomInt(0, wordsArray.length - 1);
        if (!randomIndex)
            throw new Error("random index not found");
        var solution = wordsArray[randomIndex];
        return solution;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function handleLogin(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        var streak_1 = 0;
        var loggedInUser = new User(name, password, streak_1);
        users.push(loggedInUser);
        ev.target.reset();
        handleSaveUsersData(loggedInUser);
    }
    catch (error) {
        console.error(error);
    }
}
function renderUserData(users, renderUserDataId) {
    try {
        var userDataRoot = document.querySelector("#" + renderUserDataId);
        if (userDataRoot) {
            userDataRoot.innerHTML = "\n            <h3>" + users[users.length - 1].name + "</h3>\n            <div> Current streak: " + users[users.length - 1].streak + "</div>\n            ";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleSaveUsersData(loggedInUser) {
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
}
function getUsersDataFromStorage() {
    try {
        var usersString = localStorage.getItem("users");
        if (!usersString)
            throw new Error("Couldn't find users in storage");
        var users = JSON.parse(usersString);
        return users;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function getLoggedInUserFromStorage() {
    try {
        var loggedInUserString = localStorage.getItem("loggedInUser");
        if (!loggedInUserString)
            throw new Error("Couldn't find logged-in user in storage");
        var loggedInUser = JSON.parse(loggedInUserString);
        return loggedInUser;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function updateStreak(streak) {
    try {
        if (loggedInUser) {
            loggedInUser.streak = streak;
            users.forEach(function (user) {
                if (user.uid === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.uid)) {
                    user.streak = streak;
                }
            });
            handleSaveUsersData(loggedInUser);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function win(users) {
    var winRoot = document.querySelector("#winRoot");
    if (winRoot)
        winRoot.innerHTML = "\n    <div class=\" gameEnd gameEnd--win\">\n        <div> You Win!</div>\n        <div> Current streak: " + users[users.length - 1].streak + "</div>\n        <a href=\"https://www.morfix.co.il/" + solution.name + "\">Translation</a>\n    </div>\n    ";
}
function lose(users) {
    var loseRoot = document.querySelector("#loseRoot");
    if (loseRoot && solution)
        loseRoot.innerHTML = "\n    <div class=\"gameEnd gameEnd--lose\">\n        <div> better luck next time... the solution was: " + solution.name + "</div>\n        <div> Current streak: 0</div>\n        <a href=\"https://www.morfix.co.il/" + solution.name + "\">Translation</a>\n    </div>\n    ";
}
function notValid() {
    var notValid = document.querySelector("#notValidRoot");
    if (notValid && solution)
        notValid.innerHTML = "\n    <div class=\"notValid\"> Not in word list </div>";
}
