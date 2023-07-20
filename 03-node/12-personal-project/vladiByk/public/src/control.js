"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function handleLogin(e) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            e.preventDefault();
            const userName = signInForm.userName.value;
            const password = signInForm.password.value;
            const user = yield fetch(`${usersAPI}/login`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName, password }),
            })
                .then((res) => res.json())
                .then(({ findUser }) => findUser)
                .catch((error) => console.error(error));
            if (!user) {
                alert("User doesn't exist in database. Please check your input.");
            }
            else {
                location.href = "/main";
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleRecovery(e) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            e.preventDefault();
            const firstName = recoveryForm.firstName.value;
            const lastName = recoveryForm.lastName.value;
            const userName = recoveryForm.userName.value;
            const email = recoveryForm.email.value;
            const findUser = yield fetch(`${usersAPI}/userPassword`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: firstName.toLowerCase(),
                    lastName: lastName.toLowerCase(),
                    userName,
                    email: email.toLowerCase(),
                }),
            })
                .then((res) => res.json())
                .then(({ user }) => user)
                .catch((error) => console.error(error));
            if (!findUser)
                return alert("No such user exists");
            recoveredPassword.textContent = findUser.password;
            passwordDisplayDiv.style.display = "flex";
        }
        catch (error) {
            console.error(error);
        }
    });
}
function displayProfile(user) {
    try {
        profileWindow.style.display = "flex";
        if (user) {
            return (profileDiv.innerHTML = `
        <ul>
          <h1>About you:</h1>
          <li>Name: ${user.firstName} ${user.lastName}</li>
          <li>Gender: ${user.gender}</li>
          <li>Email: ${user.email}</li>
          <li>User Name: ${user.userName}</li>
          <li>Password: ${user.password}</li>
        </ul>
        `);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderBoardsToMain(boards) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            boardArea.innerHTML = boards
                .map((board) => {
                return `
      <div id="${board._id}" class='board' style="background: url(${board.imageSrc}) center center / cover no-repeat">
      <p class="boardClick">${board.boardName}</p>
      <button class="removeBoard" data-name="${board._id}">Delete</button>
      </div>
      `;
            })
                .join("");
        }
        catch (error) {
            console.error(error);
        }
    });
}
function createBoard(boardName, imageSrc, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userBoards = yield fetch(`${boardsAPI}/${userId}`)
                .then((res) => res.json())
                .then(({ boards }) => boards)
                .catch((error) => console.error(error));
            if (userBoards.length === 10)
                return alert("maxinum amount of boards is 10");
            if (userBoards.find((board) => board.boardName.toLowerCase() == boardName.toLowerCase())) {
                return alert("There is already a board with that name");
            }
            //create board
            yield fetch(`${boardsAPI}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ boardName, imageSrc, userId }),
            }).catch((error) => console.error(error));
            //create notification
            const message = `"${boardName}" is created.`;
            yield createNotification(message, userId);
            location.href = "/board";
        }
        catch (error) {
            console.error(error);
        }
    });
}
function makeListFunctional(listContainer) {
    try {
        listContainer.addEventListener("dragstart", (ev) => {
            if (listContainer != ev.target)
                return;
            listContainer.classList.add("isDragging");
        });
        listContainer.addEventListener("dragend", () => {
            listContainer.classList.remove("isDragging");
        });
        listContainer.addEventListener("dragover", dragginCard);
        const editListBtn = listContainer.querySelector(".editListBtn");
        editListBtn.addEventListener("click", editList);
        const newCardTextArea = listContainer.querySelector(".newCardTextArea");
        newCardTextArea.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                if (newCardTextArea.value.trim() !== "") {
                    createCardElement(newCardTextArea.value.trim(), listContainer);
                    newCardTextArea.value = "";
                }
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function dragginCard(e) {
    try {
        let cardIsDragged = false;
        cards.forEach((card) => {
            if (card.classList.contains("isDragging")) {
                cardIsDragged = true;
            }
        });
        if (!cardIsDragged)
            return;
        const bottomTask = insertAboveTask(this, e.clientY);
        const curTask = document.querySelector(".isDragging");
        if (!bottomTask) {
            this.appendChild(curTask);
        }
        else {
            this.insertBefore(curTask, bottomTask);
        }
        currentBoard.update();
    }
    catch (error) {
        console.error(error);
    }
}
function editList() {
    try {
        const listTitle = this.parentNode;
        const listTitleText = listTitle.querySelector("h2");
        const editListInput = document.createElement("input");
        editListInput.type = "text";
        editListInput.value = listTitleText.textContent;
        editListInput.classList.add("editListInput");
        listTitle.replaceChild(editListInput, listTitleText);
        editListInput.focus();
        editListInput.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                listTitle.replaceChild(listTitleText, editListInput);
                listTitleText.textContent = editListInput.value.trim();
                currentBoard.update();
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function createCardElement(cardName, list) {
    try {
        const card = document.createElement("div");
        card.classList.add("boardContainer__main__list__card");
        card.setAttribute("draggable", "true");
        card.setAttribute("id", `${uid()}`);
        card.innerHTML = `
    <p>${cardName}</p>
    <i class="fa-regular fa-pen-to-square editCardBtn"></i>
    `;
        const cardTitle = list.querySelector(".boardContainer__main__list__header");
        list.insertBefore(card, cardTitle.nextSibling);
        const editCardBtn = card.querySelector(".editCardBtn");
        editCardBtn.addEventListener("click", () => {
            const cardTitle = card.querySelector(".boardContainer__main__list__card > p");
            if (!cardTitle) {
                console.error("Card title element not found!");
                return;
            }
            const editCardInput = document.createElement("input");
            editCardInput.type = "text";
            editCardInput.value = cardTitle.textContent;
            editCardInput.classList.add("editCardInput");
            editCardInput.addEventListener("keyup", (event) => {
                if (event.key === "Enter") {
                    const newCardTitle = document.createElement("p");
                    newCardTitle.textContent = editCardInput.value.trim();
                    editCardInput.replaceWith(newCardTitle);
                }
            });
            cardTitle.replaceWith(editCardInput);
            editCardInput.focus();
            currentBoard.update();
        });
        card.addEventListener("dragstart", (ev) => {
            card.classList.add("isDragging");
        });
        card.addEventListener("dragend", () => {
            card.classList.remove("isDragging");
        });
        currentBoard.update();
        // Add new card to cards variable
        cards = document.querySelectorAll(".boardContainer__main__list__card");
    }
    catch (error) {
        console.error(error);
    }
}
function renderBoardInBoardPage() {
    try {
        boardTitle.textContent = currentBoard.name;
        boardContainer.style.background = `url(${currentBoard.imageSrc}) no-repeat center / cover`;
        currentBoard.listArray.forEach((list) => {
            const listObj = new List(list.name, list.cards, list.id, list.backColor);
            const ListElement = listObj.createListElement();
            list.cards.forEach((card) => {
                createCardElement(card, ListElement);
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderNotifications(list) {
    const ulEl = document.createElement("ul");
    ulEl.innerHTML = list
        .reverse()
        .map((el) => `<li>${el}</li>`)
        .join("");
    return ulEl;
}
