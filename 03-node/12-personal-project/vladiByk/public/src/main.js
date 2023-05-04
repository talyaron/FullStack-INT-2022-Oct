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
// if user is in index.html run this
if (window.location.pathname.endsWith("/")) {
    window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield User.getCurrentUser();
        if (user)
            currentUser = user;
        if (currentUser) {
            window.location.href = "/main";
        }
    }));
    signUpPanelBtn.addEventListener("click", () => {
        entryPageMainContainer.classList.add("active");
    });
    signInPanelBtn.addEventListener("click", () => {
        entryPageMainContainer.classList.remove("active");
    });
}
// ---------------------- main.html ----------------------
if (window.location.pathname.endsWith("/main")) {
    window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
        yield User.getCurrentUser();
        if (!currentUser) {
            window.location.href = "/";
        }
        const boards = yield getUserBoards(currentUser.id);
        renderBoardsToMain(boards);
    }));
    createBoardWindowBtn.addEventListener("click", () => {
        newBoardWindow.style.display = "flex";
        newBoardName.focus();
    });
    cancelCreateBoardBtn.addEventListener("click", () => (newBoardWindow.style.display = "none"));
    boardImageBtn.addEventListener("click", () => {
        backgroundImageSelectionDiv.style.display = "grid";
        const backgroundImages = document.querySelectorAll(".backgroundImage");
        backgroundImages.forEach((img) => {
            img.addEventListener("click", () => {
                imageDisplayedInCreate.src = img.src;
                backgroundImageSelectionDiv.style.display = "none";
            });
        });
    });
    createBoardBtn.addEventListener("click", () => createBoard(newBoardName.value, imageDisplayedInCreate.src.toString(), currentUser.id));
    searchBar.addEventListener("keyup", () => __awaiter(void 0, void 0, void 0, function* () {
        const boards = yield getUserBoards(currentUser.id);
        if (searchBar.value != "") {
            boardArea.innerHTML = "";
            const listToDisplay = boards.filter((ele) => ele.boardName.toLowerCase().includes(searchBar.value));
            if (listToDisplay) {
                renderBoardsToMain(listToDisplay);
            }
        }
        else {
            renderBoardsToMain(boards);
        }
    }));
    boardArea.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const target = e.target;
        if (target.dataset.name) {
            const check = confirm("Are you sure you want to delete?");
            if (check) {
                yield Board.deleteBoard(target.dataset.name);
                const boardName = (_b = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.innerHTML;
                if (target.parentElement)
                    target.parentElement.remove();
                const message = `"${boardName}" was deleted.`;
                yield createNotification(message, currentUser.id);
                // const boards = await getUserBoards(currentUser.id);
                // renderBoardsToMain(boards);
            }
        }
        if (target.classList.contains("boardClick")) {
            const board = target.parentElement;
            if (board.id) {
                yield Board.setCurrentBoard(board.id);
                window.location.href = "/board";
            }
        }
    }));
}
//---------------------- board.html ----------------------
if (window.location.pathname.endsWith("/board")) {
    window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
        yield Board.assignCurrentBoard();
        yield User.getCurrentUser();
        renderBoardInBoardPage();
        if (!currentBoard) {
            window.location.href = "/";
        }
    }));
    addListBtn.addEventListener("click", () => List.createList(newListInput.value, currentBoard.id));
    editBoardBtn.addEventListener("click", () => {
        currentBoard.edit(nameInputEle.value, imageDisplayedInEdit.src, currentBoard.id, currentBoard.listArray);
        editBoardWindow.style.display = "none";
    });
    updatedBoardImageBtn.addEventListener("click", () => {
        backgroundImageSelectionDiv.style.display = "grid";
        const backgroundImages = document.querySelectorAll(".backgroundImage");
        backgroundImages.forEach((img) => {
            img.addEventListener("click", () => {
                imageDisplayedInEdit.src = img.src;
                backgroundImageSelectionDiv.style.display = "none";
            });
        });
    });
    boardContainer.addEventListener("dragover", ({ clientX }) => {
        let cardIsDragged = false;
        cards.forEach((card) => {
            if (card.classList.contains("isDragging")) {
                cardIsDragged = true;
            }
        });
        if (cardIsDragged)
            return;
        const leftList = insertLeftOfLisk(boardContainer, clientX);
        const curList = boardContainer.querySelector(".isDragging");
        if (!leftList) {
            boardContainer.insertBefore(curList, trashCanDiv);
        }
        else {
            boardContainer.insertBefore(curList, leftList);
        }
        currentBoard.update();
    });
    window.addEventListener("click", (e) => {
        const target = e.target;
        if (target.className === "newCardBtn") {
            const listElement = target.closest(".boardContainer__main__list");
            const newCardTextArea = listElement.querySelector(".newCardTextArea");
            if (newCardTextArea.value == "")
                return;
            createCardElement(newCardTextArea.value, listElement);
            newCardTextArea.value = "";
        }
        if (target.classList.contains("cancelEditBoardBtn")) {
            editBoardWindow.style.display = "none";
        }
    });
    boardContainer.addEventListener("keyup", () => {
        currentBoard.update();
    });
    newListInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            List.createList(newListInput.value, currentBoard.id);
        }
    });
    trashCan.addEventListener("drop", () => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        const confirmDelete = confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            const element = document.querySelector(".isDragging");
            const listName = (_c = element.querySelector("h2")) === null || _c === void 0 ? void 0 : _c.innerHTML;
            element.remove();
            if (element.classList.contains("boardContainer__main__list")) {
                const listId = element.id;
                const boardName = currentBoard.name;
                const userId = currentUser.id;
                yield fetch(`${listsAPI}/${listId}`, {
                    method: "DELETE",
                }).catch((error) => console.error(error));
                const message = `"${listName}" deleted at board #${boardName}#`;
                yield createNotification(message, userId);
            }
            currentBoard.update();
        }
    }));
    document.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
}
