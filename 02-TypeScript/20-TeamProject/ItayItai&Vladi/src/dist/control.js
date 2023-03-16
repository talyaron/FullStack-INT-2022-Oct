function handleSignUp(e) {
    try {
        e.preventDefault();
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
        console.error(error);
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
        console.error(error);
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
        console.error(error);
    }
}
function displayProfile(user) {
    try {
        profileWindow.style.display = "flex";
        if (user) {
            profileDiv.innerHTML = "\n        <ul>\n          <h1>About you:</h1>\n          <li>Name: <span class=\"user-info\">" + user.firstName + " " + user.lastName + "</span>\n          </li>\n          <li>Gender: <span class=\"user-info\">" + user.gender + "</span>\n          </li>\n          <li>Email: <span class=\"user-info\">" + user.email + "</span>\n          </li>\n          <li>Phone Number: <span class=\"user-info\">" + user.phoneNumber + "</span>\n          </li>\n          <li>User Name: <span class=\"user-info\">" + user.userName + "</span>\n          </li>\n          <li>Password: <span class=\"user-info\">" + user.password + "</span>\n          </li>\n        </ul>\n      ";
            // const editProfileInfoBtns = document.querySelectorAll('.editInfo');
            // editProfileInfoBtns.forEach((editBoardBtn)=>{
            //   editBoardBtn.addEventListener("click",()=>{
            //     const userProfileInfoTitle = editBoardBtn.parentNode as HTMLElement;
            //     const userProfileInfoText = userProfileInfoTitle.querySelector(".user-info") as HTMLElement;
            //     const editprofileInput = document.createElement("input");
            //     editprofileInput.type = "text";
            //     editprofileInput.value = userProfileInfoText.textContent!;
            //     editprofileInput.classList.add("editUserInput");
            //     userProfileInfoTitle.replaceChild(editprofileInput, userProfileInfoText);
            //     editprofileInput.focus();
            //     const saveButton = document.createElement("button");
            //     saveButton.textContent = "Save";
            //     saveButton.classList.add("saveInfo");
            //     userProfileInfoTitle.insertBefore(saveButton, editBoardBtn.nextSibling);
            //     const cancelButton = document.createElement("button");
            //     cancelButton.textContent = "Cancel";
            //     cancelButton.classList.add("cancelEdit");
            //     userProfileInfoTitle.insertBefore(cancelButton, editBoardBtn.nextSibling);
            //     editBoardBtn.style.display = "none";
            //     saveButton.addEventListener("click", () => {
            //       const newContent = editprofileInput.value.trim();
            //       userProfileInfoTitle.replaceChild(userProfileInfoText, editprofileInput);
            //       userProfileInfoText.textContent = newContent;
            //       editBoardBtn.style.display = "inline-block";
            //       saveButton.remove();
            //       cancelButton.remove();
            //     });
            //     cancelButton.addEventListener("click", () => {
            //       userProfileInfoTitle.replaceChild(userProfileInfoText, editprofileInput);
            //       editBoardBtn.style.display = "inline-block";
            //       saveButton.remove();
            //       cancelButton.remove();
            //     });
            //   });
            // });
        }
    }
    catch (error) {
        console.error(error);
    }
}
function displayNotifictions() {
    try {
        var notifications = localStorage.getItem("notifications-" + currentUser.uid);
        if (notifications) {
            var notificationss = JSON.parse(notifications);
            notifictionWindow.style.display = "flex";
            return (notificationsDiv.innerHTML = "\n      <ul>\n      <h3>notifications :</h3>\n      <li>" + notificationss + "</li>\n    </ul>\n          ");
        }
    }
    catch (error) {
        console.error(error);
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
        console.error(error);
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
        console.error(error);
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
        console.error(error);
    }
}
function makeListFunctional(listContainer) {
    listContainer.addEventListener("dragstart", function () {
        listContainer.classList.add("is-draggin");
    });
    listContainer.addEventListener("dragend", function () {
        listContainer.classList.remove("is-draggin");
    });
    listContainer.addEventListener("dragover", dragginCard);
    var editListBtn = listContainer.querySelector(".editListBtn");
    editListBtn.addEventListener("click", editList);
    var newCardTextArea = listContainer.querySelector(".newCardTextArea");
    newCardTextArea.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            if (newCardTextArea.value.trim() !== "") {
                createCardElement(newCardTextArea.value.trim(), listContainer);
                var successcardMsg = "<i class=\"fa-solid fa-circle-check\"></i>Add new card: " + newCardTextArea.value;
                notification(successcardMsg);
                saveNotificationToLocalStorage(successcardMsg, currentBoard, currentUser);
                newCardTextArea.value = "";
            }
        }
    });
}
function dragginCard(_a) {
    var clientY = _a.clientY;
    var cardIsDragged = false;
    cards.forEach(function (card) {
        if (card.classList.contains("is-dragging")) {
            cardIsDragged = true;
        }
    });
    if (!cardIsDragged)
        return;
    var bottomTask = insertAboveTask(this, clientY);
    var curTask = document.querySelector(".is-dragging");
    if (!bottomTask) {
        this.appendChild(curTask);
    }
    else {
        this.insertBefore(curTask, bottomTask);
    }
    currentBoard.update();
}
function editList() {
    var listTitle = this.parentNode;
    var listTitleText = listTitle.querySelector("h2");
    var editListInput = document.createElement("input");
    editListInput.type = "text";
    editListInput.value = listTitleText.textContent;
    editListInput.classList.add("editListInput");
    listTitle.replaceChild(editListInput, listTitleText);
    editListInput.focus();
    editListInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            listTitle.replaceChild(listTitleText, editListInput);
            listTitleText.textContent = editListInput.value.trim();
            var successcardMsg = "<i class=\"fa-solid fa-circle-check\"></i>New List Name: " + editListInput.value;
            notification(successcardMsg);
            saveNotificationToLocalStorage(successcardMsg, currentBoard, currentUser);
            currentBoard.update();
        }
    });
    editListInput.addEventListener("blur", function (event) {
        var newListTitle = document.createElement("h2");
        newListTitle.textContent = editListInput.value.trim();
        editListInput.replaceWith(newListTitle);
        currentBoard.update();
    });
}
function createCardElement(cardName, list) {
    var card = document.createElement("div");
    card.classList.add("boardContainer__main__list__card");
    card.setAttribute("draggable", "true");
    card.setAttribute("ondragstart", "drag(event)");
    card.setAttribute("id", "" + uid());
    card.innerHTML = "\n  <h2>" + cardName + "</h2>\n  <i class=\"fa-regular fa-pen-to-square editCardBtn\"></i>\n  ";
    var cardTitle = list.querySelector(".boardContainer__main__list__header");
    list.insertBefore(card, cardTitle.nextSibling);
    var editCardBtn = card.querySelector(".editCardBtn");
    editCardBtn.addEventListener("click", function () {
        var cardTitle = card.querySelector(".boardContainer__main__list__card > h2");
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
                var newCardTitle = document.createElement("h2");
                newCardTitle.textContent = editCardInput.value.trim();
                var successcardMsg = "<i class=\"fa-solid fa-circle-check\"></i>New Card Name: " + editCardInput.value;
                notification(successcardMsg);
                saveNotificationToLocalStorage(successcardMsg, currentBoard, currentUser);
                editCardInput.replaceWith(newCardTitle);
            }
        });
        editCardInput.addEventListener("blur", function () {
            var newCardTitle = document.createElement("h2");
            newCardTitle.textContent = editCardInput.value.trim();
            editCardInput.replaceWith(newCardTitle);
            currentBoard.update();
        });
        cardTitle.replaceWith(editCardInput);
        editCardInput.focus();
        currentBoard.update();
    });
    card.addEventListener("dragstart", function () {
        card.classList.add("is-dragging");
    });
    card.addEventListener("dragend", function () {
        card.classList.remove("is-dragging");
    });
    currentBoard.update();
    // Add new card to cards variable
    cards = document.querySelectorAll(".boardContainer__main__list__card");
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
        console.error(error);
    }
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var el = document.getElementById(data);
    // el?.parentNode?.removeChild(el); => delete without Warning //
    currentBoard.update();
}
function saveNotificationToLocalStorage(notification, board, user) {
    var userNotifications = JSON.parse(localStorage.getItem("notifications-" + user.uid) || "[]");
    userNotifications.push(notification);
    localStorage.setItem("notifications-" + user.uid, JSON.stringify(userNotifications));
    var boardNotifications = JSON.parse(localStorage.getItem("notifications-board-" + board.uid) || "[]");
    boardNotifications.push(notification);
    localStorage.setItem("notifications-board-" + board.uid, JSON.stringify(boardNotifications));
}
function notification(msg) {
    var note = document.createElement("div");
    note.classList.add("notification");
    note.innerHTML = msg;
    noteBox.appendChild(note);
    if (msg.includes("Delete")) {
        note.classList.add("Delete");
    }
    if (msg.includes("List")) {
        note.classList.add("List");
    }
    if (msg.includes("card")) {
        note.classList.add("card");
    }
    setTimeout(function () {
        note.remove();
    }, 6000);
}
