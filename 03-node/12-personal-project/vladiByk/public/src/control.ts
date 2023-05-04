async function handleRecovery(e: Event) {
  try {
    e.preventDefault();

    const firstName = recoveryForm.firstName.value;
    const lastName = recoveryForm.lastName.value;
    const userName = recoveryForm.userName.value;
    const email = recoveryForm.email.value;

    const findUser: UserTemplate = await fetch(`${usersAPI}/userPassword`, {
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

    if (!findUser) return alert("No such user exists");

    recoveredPassword.textContent = findUser.password;

    passwordDisplayDiv.style.display = "flex";
  } catch (error) {
    console.error(error);
  }
}

function displayProfile(user: User) {
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
  } catch (error) {
    console.error(error);
  }
}

async function renderBoardsToMain(boards: BoardTemplate[]) {
  try {
    boardArea.innerHTML = boards
      .map((board: BoardTemplate) => {
        return `
      <div id="${board._id}" class='board' style="background: url(${board.imageSrc}) center center / cover no-repeat">
      <p class="boardClick">${board.boardName}</p>
      <button class="removeBoard" data-name="${board._id}">Delete</button>
      </div>
      `;
      })
      .join("");
  } catch (error) {
    console.error(error);
  }
}

async function createBoard(
  boardName: string,
  imageSrc: string,
  userId: string
) {
  try {
    const userBoards: BoardTemplate[] = await fetch(`${boardsAPI}/${userId}`)
      .then((res) => res.json())
      .then(({ boards }) => boards)
      .catch((error) => console.error(error));

    if (userBoards.length === 10)
      return alert("maxinum amount of boards is 10");

    if (
      userBoards.find(
        (board) => board.boardName.toLowerCase() == boardName.toLowerCase()
      )
    ) {
      return alert("There is already a board with that name");
    }

    //create board
    await fetch(`${boardsAPI}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ boardName, imageSrc, userId }),
    }).catch((error) => console.error(error));

    //create notification
    const message = `"${boardName}" is created.`;
    await createNotification(message, userId);

    location.href = "/board";
  } catch (error) {
    console.error(error);
  }
}

function makeListFunctional(listContainer: HTMLElement) {
  try {
    listContainer.addEventListener("dragstart", (ev) => {
      if (listContainer != ev.target) return;
      listContainer.classList.add("isDragging");
    });
    listContainer.addEventListener("dragend", () => {
      listContainer.classList.remove("isDragging");
    });

    listContainer.addEventListener("dragover", dragginCard);

    const editListBtn = listContainer.querySelector(
      ".editListBtn"
    ) as HTMLElement;
    editListBtn.addEventListener("click", editList);

    const newCardTextArea = listContainer.querySelector(
      ".newCardTextArea"
    ) as HTMLTextAreaElement;
    newCardTextArea.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        if (newCardTextArea.value.trim() !== "") {
          createCardElement(newCardTextArea.value.trim(), listContainer);
          newCardTextArea.value = "";
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function dragginCard(this: HTMLElement, e: MouseEvent) {
  try {
    let cardIsDragged = false;
    cards.forEach((card) => {
      if (card.classList.contains("isDragging")) {
        cardIsDragged = true;
      }
    });

    if (!cardIsDragged) return;

    const bottomTask = insertAboveTask(this, e.clientY);
    const curTask = document.querySelector(".isDragging") as HTMLElement;

    if (!bottomTask) {
      this.appendChild(curTask);
    } else {
      this.insertBefore(curTask, bottomTask);
    }
    currentBoard.update();
  } catch (error) {
    console.error(error);
  }
}

function editList(this: HTMLElement) {
  try {
    const listTitle = this.parentNode as HTMLElement;
    const listTitleText = listTitle.querySelector("h2") as HTMLElement;
    const editListInput = document.createElement("input");

    editListInput.type = "text";
    editListInput.value = listTitleText.textContent!;
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
  } catch (error) {
    console.error(error);
  }
}

function createCardElement(cardName: string, list: Element) {
  try {
    const card = document.createElement("div");
    card.classList.add("boardContainer__main__list__card");
    card.setAttribute("draggable", "true");
    card.setAttribute("id", `${uid()}`);

    card.innerHTML = `
    <p>${cardName}</p>
    <i class="fa-regular fa-pen-to-square editCardBtn"></i>
    `;

    const cardTitle = list.querySelector(
      ".boardContainer__main__list__header"
    ) as HTMLDivElement;

    list.insertBefore(card, cardTitle.nextSibling);

    const editCardBtn = card.querySelector(".editCardBtn") as HTMLElement;

    editCardBtn.addEventListener("click", () => {
      const cardTitle = card.querySelector(
        ".boardContainer__main__list__card > p"
      ) as HTMLElement;

      if (!cardTitle) {
        console.error("Card title element not found!");
        return;
      }

      const editCardInput = document.createElement("input");

      editCardInput.type = "text";
      editCardInput.value = cardTitle.textContent!;
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
    cards = document.querySelectorAll(
      ".boardContainer__main__list__card"
    ) as NodeListOf<HTMLDivElement>;
  } catch (error) {
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
  } catch (error) {
    console.error(error);
  }
}

function renderNotifications(list: string[]) {
  const ulEl = document.createElement("ul") as HTMLUListElement;
  ulEl.innerHTML = list
    .reverse()
    .map((el) => `<li>${el}</li>`)
    .join("");
  return ulEl;
}
