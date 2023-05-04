// if user is in index.html run this
if (window.location.pathname.endsWith("/")) {
  window.addEventListener("load", async () => {
    const user = await User.getCurrentUser();
    if (user) currentUser = user;
    if (currentUser) {
      window.location.href = "/main";
    }
  });
  signUpPanelBtn.addEventListener("click", () => {
    entryPageMainContainer.classList.add("active");
  });

  signInPanelBtn.addEventListener("click", () => {
    entryPageMainContainer.classList.remove("active");
  });
}

// ---------------------- main.html ----------------------
if (window.location.pathname.endsWith("/main")) {
  window.addEventListener("load", async () => {
    await User.getCurrentUser();
    if (!currentUser) {
      window.location.href = "/";
    }
    const boards: BoardTemplate[] = await getUserBoards(currentUser.id);
    renderBoardsToMain(boards);
  });

  createBoardWindowBtn.addEventListener("click", () => {
    newBoardWindow.style.display = "flex";
    newBoardName.focus();
  });

  cancelCreateBoardBtn.addEventListener(
    "click",
    () => (newBoardWindow.style.display = "none")
  );

  boardImageBtn.addEventListener("click", () => {
    backgroundImageSelectionDiv.style.display = "grid";

    const backgroundImages = document.querySelectorAll(
      ".backgroundImage"
    ) as NodeListOf<HTMLImageElement>;

    backgroundImages.forEach((img) => {
      img.addEventListener("click", () => {
        imageDisplayedInCreate.src = img.src;
        backgroundImageSelectionDiv.style.display = "none";
      });
    });
  });

  createBoardBtn.addEventListener("click", () =>
    createBoard(
      newBoardName.value,
      imageDisplayedInCreate.src.toString(),
      currentUser.id
    )
  );

  searchBar.addEventListener("keyup", async () => {
    const boards: BoardTemplate[] = await getUserBoards(currentUser.id);

    if (searchBar.value != "") {
      boardArea.innerHTML = "";

      const listToDisplay: BoardTemplate[] = boards.filter((ele) =>
        ele.boardName.toLowerCase().includes(searchBar.value)
      );
      if (listToDisplay) {
        renderBoardsToMain(listToDisplay);
      }
    } else {
      renderBoardsToMain(boards);
    }
  });

  boardArea.addEventListener("click", async (e) => {
    const target = e.target as HTMLElement;
    if (target.dataset.name) {
      const check = confirm("Are you sure you want to delete?");
      if (check) {
        await Board.deleteBoard(target.dataset.name);
        const boardName = target.parentElement?.firstElementChild?.innerHTML;
        if (target.parentElement) target.parentElement.remove();
        const message = `"${boardName}" was deleted.`;
        await createNotification(message, currentUser.id);
        // const boards = await getUserBoards(currentUser.id);
        // renderBoardsToMain(boards);
      }
    }

    if (target.classList.contains("boardClick")) {
      const board = target.parentElement as HTMLDivElement;
      if (board.id) {
        await Board.setCurrentBoard(board.id);
        window.location.href = "/board";
      }
    }
  });
}

//---------------------- board.html ----------------------
if (window.location.pathname.endsWith("/board")) {
  window.addEventListener("load", async () => {
    await Board.assignCurrentBoard();
    await User.getCurrentUser();

    renderBoardInBoardPage();
    if (!currentBoard) {
      window.location.href = "/";
    }
  });

  addListBtn.addEventListener("click", () =>
    List.createList(newListInput.value, currentBoard.id)
  );

  editBoardBtn.addEventListener("click", () => {
    currentBoard.edit(
      nameInputEle.value,
      imageDisplayedInEdit.src,
      currentBoard.id,
      currentBoard.listArray
    );
    editBoardWindow.style.display = "none";
  });

  updatedBoardImageBtn.addEventListener("click", () => {
    backgroundImageSelectionDiv.style.display = "grid";

    const backgroundImages = document.querySelectorAll(
      ".backgroundImage"
    ) as NodeListOf<HTMLImageElement>;
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

    if (cardIsDragged) return;

    const leftList = insertLeftOfLisk(boardContainer, clientX);
    const curList = boardContainer.querySelector(".isDragging") as HTMLElement;

    if (!leftList) {
      boardContainer.insertBefore(curList, trashCanDiv);
    } else {
      boardContainer.insertBefore(curList, leftList);
    }
    currentBoard.update();
  });

  window.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.className === "newCardBtn") {
      const listElement = target.closest(
        ".boardContainer__main__list"
      ) as HTMLDivElement;
      const newCardTextArea = listElement.querySelector(
        ".newCardTextArea"
      ) as HTMLTextAreaElement;
      if (newCardTextArea.value == "") return;
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

  trashCan.addEventListener("drop", async () => {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      const element = document.querySelector(".isDragging") as HTMLDivElement;
      const listName = element.querySelector("h2")?.innerHTML;

      element.remove();

      if (element.classList.contains("boardContainer__main__list")) {
        const listId = element.id;
        const boardName = currentBoard.name;
        const userId = currentUser.id;

        await fetch(`${listsAPI}/${listId}`, {
          method: "DELETE",
        }).catch((error) => console.error(error));

        const message = `"${listName}" deleted at board #${boardName}#`;
        await createNotification(message, userId);
      }

      currentBoard.update();
    }
  });
  document.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
}
