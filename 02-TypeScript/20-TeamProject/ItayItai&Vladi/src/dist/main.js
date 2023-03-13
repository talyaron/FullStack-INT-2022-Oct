// if user is in entryPage.html run this
if (window.location.pathname.endsWith("entryPage.html")) {
    window.addEventListener("load", function () {
        if (localStorage.getItem("currentUser")) {
            window.location.href = "index.html";
        }
    });
    signUpPanelBtn.addEventListener("click", function () {
        entryPageMainContainer.classList.add("active");
    });
    signInPanelBtn.addEventListener("click", function () {
        entryPageMainContainer.classList.remove("active");
    });
    signUpForm.addEventListener("submit", handleSignUp);
    signInForm.addEventListener("submit", handleSignIn);
    signInForm.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            if (userNameInput.value === "" || passwordInput.value === "") {
                return;
            }
            handleSignIn(e);
        }
    });
}
// ---------------------- forgotPassword.html ----------------------
if (window.location.pathname.endsWith("forgotPassword.html")) {
    recoveryForm.addEventListener("submit", handleRecovery);
}
// ---------------------- index.html ----------------------
if (window.location.pathname.endsWith("index.html")) {
    window.addEventListener("load", function () {
        if (!localStorage.getItem("currentUser")) {
            window.location.href = "entryPage.html";
        }
    });
    renderBoardsToMain(currentUser.boardList);
    createBoardWindowBtn.addEventListener("click", function () { return (newBoardWindow.style.display = "flex"); });
    cancelCreateBoardBtn.addEventListener("click", function () { return (newBoardWindow.style.display = "none"); });
    boardImageBtn.addEventListener("click", function () {
        backgroundImageSelectionDiv.style.display = "grid";
        var backgroundImages = document.querySelectorAll(".backgroundImage");
        backgroundImages.forEach(function (img) {
            img.addEventListener("click", function () {
                imageDisplayedInCreate.src = img.src;
                backgroundImageSelectionDiv.style.display = "none";
            });
        });
    });
    createBoardBtn.addEventListener("click", function () {
        return createBoard(newBoardName.value, imageDisplayedInCreate.src.toString());
    });
    searchBar.addEventListener("keyup", function () {
        if (searchBar.value != "") {
            boardArea.innerHTML = "";
            var listToDisplay = currentUser.boardList.filter(function (ele) {
                return ele.name.toLowerCase().includes(searchBar.value);
            });
            if (listToDisplay) {
                renderBoardsToMain(listToDisplay);
            }
        }
        else {
            renderBoardsToMain(currentUser.boardList);
        }
    });
    boardArea.addEventListener("click", function (e) {
        var target = e.target;
        if (target.dataset.name) {
            var check = confirm("Are you sure you want to delete?");
            if (check)
                Board.deleteBoard(target.dataset.name);
            renderBoardsToMain(currentUser.boardList);
        }
        if (target.classList.contains("boardClick")) {
            Board.setCurrentBoard(target.innerHTML);
            window.location.href = "board.html";
        }
    });
}
//---------------------- board.html ----------------------
if (window.location.pathname.endsWith("board.html")) {
    window.addEventListener("load", function () {
        if (!localStorage.getItem("currentUser")) {
            window.location.href = "entryPage.html";
        }
    });
    renderBoardInBoardPage();
    addListBtn.addEventListener("click", function () {
        return List.createList(newListInput.value);
    });
    editBoardBtn.addEventListener("click", function () {
        currentBoard.edit(nameInputEle.value, imageDisplayedInEdit.src);
        editBoardWindow.style.display = "none";
    });
    updatedBoardImageBtn.addEventListener("click", function () {
        backgroundImageSelectionDiv.style.display = "grid";
        var backgroundImages = document.querySelectorAll(".backgroundImage");
        backgroundImages.forEach(function (img) {
            img.addEventListener("click", function () {
                imageDisplayedInEdit.src = img.src;
                backgroundImageSelectionDiv.style.display = "none";
            });
        });
    });
    boardContainer.addEventListener("dragover", function (_a) {
        var clientX = _a.clientX;
        var cardIsDragged = false;
        cards.forEach(function (card) {
            if (card.classList.contains("isDragging")) {
                cardIsDragged = true;
            }
        });
        if (cardIsDragged)
            return;
        var leftList = insertLeftOfLisk(boardContainer, clientX);
        var curList = boardContainer.querySelector(".isDragging");
        if (!leftList) {
            boardContainer.insertBefore(curList, trashCanDiv);
        }
        else {
            boardContainer.insertBefore(curList, leftList);
        }
        currentBoard.update();
    });
    window.addEventListener("click", function (e) {
        var target = e.target;
        if (target.className === "newCardBtn") {
            var listElement = target.closest(".boardContainer__main__list");
            var newCardTextArea = listElement.querySelector(".newCardTextArea");
            if (newCardTextArea.value == "")
                return;
            createCardElement(newCardTextArea.value, listElement);
            newCardTextArea.value = "";
        }
        if (target.classList.contains("cancelEditBoardBtn")) {
            editBoardWindow.style.display = "none";
        }
    });
    boardContainer.addEventListener("keyup", function () {
        currentBoard.update();
    });
    newListInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            List.createList(newListInput.value);
        }
    });
    trashCan.addEventListener("drop", function () {
        var confirmDelete = confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            var element = document.querySelector(".isDragging");
            element.remove();
            currentBoard.update();
        }
    });
    document.addEventListener("dragover", function (event) {
        event.preventDefault();
    });
}
