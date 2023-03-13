function handleSignUp(e) {
    try {
        e.preventDefault();
        // e.stopPropagation();
        var gender = this.elements.gender.value;
        var firstName = this.elements.firstName.value;
        var lastName = this.elements.lastName.value;
        var password = this.elements.password.value;
        var confirmPassword = this.elements.confirmPassword.value;
        var userName = this.elements.userName.value;
        var email = this.elements.email.value;
        var phone = this.elements.phoneNumber.value;
        if (confirmPassword != password)
            return alert("Passwords don't match");
        if (!/^\d+$/.test(phone))
            return alert("Please use only digit for phone number field");
        var arr = [gender, firstName, lastName, password, userName, email, phone];
        var regex_1 = /^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/;
        if (arr.some(function (ele) { return !regex_1.test(ele); }))
            return alert("Please check your input(Only English characters allowed)");
        if (checkIfEmailExists(email))
            return alert("Email is alreay in the system");
        var newUser = new User(firstName, lastName, gender, userName, password, email, phone);
        var signedUpUsers = JSON.parse(localStorage.getItem("signedUpUsers") || "[]");
        signedUpUsers.push(newUser);
        localStorage.setItem("signedUpUsers", JSON.stringify(signedUpUsers));
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        location.href = "index.html";
        this.reset();
    }
    catch (error) {
        console.log(error);
    }
}
function handleSignIn(e) {
    try {
        e.preventDefault();
        var userName = userNameInput.value;
        var password = passwordInput.value;
        if (checkIfUserExists(userName, password)) {
            User.setCurrentUser(userName);
            signInForm.reset();
            window.location.href = "index.html";
        }
        else {
            alert("User does not exist.");
        }
    }
    catch (error) {
        console.log(error);
    }
}
function handleRecovery(e) {
    try {
        e.preventDefault();
        var firstName_1 = this.elements.firstName.value;
        var lastName_1 = this.elements.lastName.value;
        var userName_1 = this.elements.userName.value;
        var email_1 = this.elements.email.value;
        var phone_1 = this.elements.phoneNumber.value;
        var arr = [firstName_1, lastName_1, userName_1, email_1, phone_1];
        if (arr.some(function (ele) { return ele == ""; }))
            return alert("missing field");
        var userList = userListFromStorage();
        var findUser = userList.find(function (user) {
            return user.userName == userName_1 ||
                user.firstName == firstName_1 ||
                user.lastName == lastName_1 ||
                user.email == email_1 ||
                user.phoneNumber == phone_1;
        });
        if (!findUser)
            return alert("No such user exists");
        recoveredPassword.textContent = findUser.password;
        passwordDisplayDiv.style.display = "flex";
    }
    catch (error) {
        console.log(error);
    }
}
function displayProfile(user) {
    try {
        profileWindow.style.display = "flex";
        if (user) {
            return (profileDiv.innerHTML = "\n        <ul>\n          <h1>About you:</h1>\n          <li>Name: " + user.firstName + " " + user.lastName + "</li>\n          <li>Gender: " + user.gender + "</li>\n          <li>Email: " + user.email + "</li>\n          <li>Phone Number: " + user.phoneNumber + "</li>\n          <li>User Name: " + user.userName + "</li>\n          <li>Password: " + user.password + "</li>\n        </ul>\n        ");
        }
    }
    catch (error) {
        console.log(error);
    }
}
function updateUserBoardList(userToUpdate, boardToUpdate) {
    try {
        var userList = userListFromStorage();
        if (userList) {
            var findUser = userList.find(function (user) { return user.uid === userToUpdate.uid; });
            if (findUser) {
                var findBoard = findUser.boardList.find(function (board) { return board.uid === boardToUpdate.uid; });
                if (findBoard) {
                    var boardIndex = findUser.boardList.indexOf(findBoard);
                    findUser.boardList[boardIndex] = boardToUpdate;
                    currentUser.boardList[boardIndex] = boardToUpdate;
                }
                else {
                    findUser.boardList.unshift(boardToUpdate);
                    currentUser.boardList.unshift(boardToUpdate);
                }
            }
            localStorage.setItem("signedUpUsers", JSON.stringify(userList));
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
        }
    }
    catch (error) {
        throw error;
    }
}
function checkIfUserExists(userName, password) {
    try {
        var userList = userListFromStorage();
        return userList.find(function (user) { return user.userName === userName && user.password === password; });
    }
    catch (error) {
        console.log(error);
    }
}
function renderBoardsToMain(listOFBoards) {
    try {
        boardArea.innerHTML = listOFBoards
            .map(function (board) {
            return "\n      <div class='board' style=\"background: url(" + board.backgroundImage + ") center center / cover no-repeat\">\n      <p class=\"boardClick\">" + board.name + "</p>\n      <button class=\"removeBoard\" data-name=\"" + board.name + "\">Delete</button>\n      </div>\n      ";
        })
            .join("");
    }
    catch (error) {
        console.log(error);
    }
}
function createBoard(boardName, boardImage) {
    try {
        if (currentUser.boardList.length === 10)
            return alert("maxinum amount of boards is 10");
        if (boardName) {
            if (currentUser.boardList.find(function (board) {
                return board.name.toLocaleUpperCase() == boardName.toLocaleLowerCase();
            }))
                return alert("There is already a board with that name");
            var newBoard = new Board(boardName, boardImage);
            updateUserBoardList(currentUser, newBoard);
            localStorage.setItem("currentBoard", JSON.stringify(newBoard));
            location.href = "board.html";
        }
        else {
            alert("Board Name Is Missing");
        }
    }
    catch (error) {
        console.log(error);
    }
}
function makeListFunctional(listContainer) {
    try {
        listContainer.addEventListener("dragstart", function (ev) {
            if (listContainer != ev.target)
                return;
            listContainer.classList.add("isDragging");
        });
        listContainer.addEventListener("dragend", function () {
            listContainer.classList.remove("isDragging");
        });
        listContainer.addEventListener("dragover", dragginCard);
        var editListBtn = listContainer.querySelector(".editListBtn");
        editListBtn.addEventListener("click", editList);
        var newCardTextArea_1 = listContainer.querySelector(".newCardTextArea");
        newCardTextArea_1.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                if (newCardTextArea_1.value.trim() !== "") {
                    createCardElement(newCardTextArea_1.value.trim(), listContainer);
                    newCardTextArea_1.value = "";
                }
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
function dragginCard(_a) {
    var clientY = _a.clientY;
    try {
        var cardIsDragged_1 = false;
        cards.forEach(function (card) {
            if (card.classList.contains("isDragging")) {
                cardIsDragged_1 = true;
            }
        });
        if (!cardIsDragged_1)
            return;
        // e.preventDefault();
        var bottomTask = insertAboveTask(this, clientY);
        var curTask = document.querySelector(".isDragging");
        if (!bottomTask) {
            this.appendChild(curTask);
        }
        else {
            this.insertBefore(curTask, bottomTask);
        }
        currentBoard.update();
    }
    catch (error) {
        console.log(error);
    }
}
function editList() {
    try {
        var listTitle_1 = this.parentNode;
        var listTitleText_1 = listTitle_1.querySelector("h2");
        var editListInput_1 = document.createElement("input");
        editListInput_1.type = "text";
        editListInput_1.value = listTitleText_1.textContent;
        editListInput_1.classList.add("editListInput");
        listTitle_1.replaceChild(editListInput_1, listTitleText_1);
        editListInput_1.focus();
        editListInput_1.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                listTitle_1.replaceChild(listTitleText_1, editListInput_1);
                listTitleText_1.textContent = editListInput_1.value.trim();
                currentBoard.update();
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
function createCardElement(cardName, list) {
    try {
        var card_1 = document.createElement("div");
        card_1.classList.add("boardContainer__main__list__card");
        card_1.setAttribute("draggable", "true");
        card_1.setAttribute("id", "" + uid());
        card_1.innerHTML = "\n    <p>" + cardName + "</p>\n    <i class=\"fa-regular fa-pen-to-square editCardBtn\"></i>\n    ";
        var cardTitle = list.querySelector(".boardContainer__main__list__header");
        list.insertBefore(card_1, cardTitle.nextSibling);
        var editCardBtn = card_1.querySelector(".editCardBtn");
        editCardBtn.addEventListener("click", function () {
            var cardTitle = card_1.querySelector(".boardContainer__main__list__card > p");
            if (!cardTitle) {
                console.error("Card title element not found!");
                return;
            }
            var editCardInput = document.createElement("input");
            editCardInput.type = "text";
            editCardInput.value = cardTitle.textContent;
            editCardInput.classList.add("editCardInput");
            editCardInput.addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                    var newCardTitle = document.createElement("p");
                    newCardTitle.textContent = editCardInput.value.trim();
                    editCardInput.replaceWith(newCardTitle);
                }
            });
            cardTitle.replaceWith(editCardInput);
            editCardInput.focus();
            currentBoard.update();
        });
        card_1.addEventListener("dragstart", function (ev) {
            card_1.classList.add("isDragging");
        });
        card_1.addEventListener("dragend", function () {
            card_1.classList.remove("isDragging");
        });
        currentBoard.update();
        // Add new card to cards variable
        cards = document.querySelectorAll(".boardContainer__main__list__card");
    }
    catch (error) {
        console.log(error);
    }
}
function renderBoardInBoardPage() {
    try {
        boardTitle.textContent = currentBoard.name;
        boardContainer.style.background = "url(" + currentBoard.backgroundImage + ") no-repeat center / cover";
        currentBoard.lists.forEach(function (list) {
            var listObj = new List(list.name, list.cards, list.uid, list.backColor);
            var ListElement = listObj.createListElement();
            list.cards.forEach(function (card) {
                createCardElement(card, ListElement);
            });
        });
    }
    catch (error) {
        console.log(error);
    }
}
