function handleSignUp(e: Event) {
  try {
    e.preventDefault();
    // e.stopPropagation();
    const gender = this.elements.gender.value;
    const firstName = this.elements.firstName.value;
    const lastName = this.elements.lastName.value;
    const password = this.elements.password.value;
    const confirmPassword = this.elements.confirmPassword.value;
    const userName = this.elements.userName.value;
    const email = this.elements.email.value;
    const phone = this.elements.phoneNumber.value;
    if (confirmPassword != password) return alert("Passwords don't match");
    if (!/^\d+$/.test(phone))
      return alert("Please use only digit for phone number field");
    const arr = [gender, firstName, lastName, password, userName, email, phone];
    const regex = /^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/;
    if (arr.some((ele) => !regex.test(ele)))
      return alert("Please check your input(Only English characters allowed)");
    if (checkIfEmailExists(email))
      return alert("Email is alreay in the system");

    const newUser = new User(
      firstName,
      lastName,
      gender,
      userName,
      password,
      email,
      phone
    );
    const signedUpUsers = JSON.parse(
      localStorage.getItem("signedUpUsers") || "[]"
    ) as User[];
    signedUpUsers.push(newUser);
    localStorage.setItem("signedUpUsers", JSON.stringify(signedUpUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    location.href = "index.html";
    this.reset();
  } catch (error) {
    console.log(error);
  }
}

function handleSignIn(e: Event) {
  try {
    e.preventDefault();
    const userName = userNameInput.value;
    const password = passwordInput.value;

    if (checkIfUserExists(userName, password)) {
      User.setCurrentUser(userName);
      signInForm.reset();
      window.location.href = "index.html";
    } else {
      alert("User does not exist.");
    }
  } catch (error) {
    console.log(error);
  }
}

function handleRecovery(e: Event) {
  try {
    e.preventDefault();
    const firstName = this.elements.firstName.value;
    const lastName = this.elements.lastName.value;
    const userName = this.elements.userName.value;
    const email = this.elements.email.value;
    const phone = this.elements.phoneNumber.value;
    const arr = [firstName, lastName, userName, email, phone];
    if (arr.some((ele) => ele == "")) return alert("missing field");
    const userList = userListFromStorage();
    const findUser = userList.find(
      (user) =>
        user.userName == userName ||
        user.firstName == firstName ||
        user.lastName == lastName ||
        user.email == email ||
        user.phoneNumber == phone
    );
    if (!findUser) return alert("No such user exists");
    recoveredPassword.textContent = findUser.password;
    passwordDisplayDiv.style.display = "flex";
  } catch (error) {
    console.log(error);
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
          <li>Phone Number: ${user.phoneNumber}</li>
          <li>User Name: ${user.userName}</li>
          <li>Password: ${user.password}</li>
        </ul>
        `);
    }
  } catch (error) {
    console.log(error);
  }
}

function updateUserBoardList(userToUpdate: User, boardToUpdate: Board) {
  try {
    const userList = userListFromStorage();
    if (userList) {
      const findUser = userList.find((user) => user.uid === userToUpdate.uid);
      if (findUser) {
        const findBoard = findUser.boardList.find(
          (board) => board.uid === boardToUpdate.uid
        );
        if (findBoard) {
          const boardIndex = findUser.boardList.indexOf(findBoard);
          findUser.boardList[boardIndex] = boardToUpdate;
          currentUser.boardList[boardIndex] = boardToUpdate;
        } else {
          findUser.boardList.unshift(boardToUpdate);
          currentUser.boardList.unshift(boardToUpdate);
        }
      }
      localStorage.setItem("signedUpUsers", JSON.stringify(userList));
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  } catch (error) {
    throw error;
  }
}

function checkIfUserExists(userName: string, password: string) {
  try {
    const userList = userListFromStorage();
    return userList.find(
      (user) => user.userName === userName && user.password === password
    );
  } catch (error) {
    console.log(error);
  }
}

function renderBoardsToMain(listOFBoards: Board[]) {
  try {
    boardArea.innerHTML = listOFBoards
      .map((board) => {
        return `
      <div class='board' style="background: url(${board.backgroundImage}) center center / cover no-repeat">
      <p class="boardClick">${board.name}</p>
      <button class="removeBoard" data-name="${board.name}">Delete</button>
      </div>
      `;
      })
      .join("");
  } catch (error) {
    console.log(error);
  }
}

function createBoard(boardName: string, boardImage: string) {
  try {
    if (currentUser.boardList.length === 10)
      return alert("maxinum amount of boards is 10");
    if (boardName) {
      if (
        currentUser.boardList.find(
          (board) =>
            board.name.toLocaleUpperCase() == boardName.toLocaleLowerCase()
        )
      )
        return alert("There is already a board with that name");
      const newBoard = new Board(boardName, boardImage);
      updateUserBoardList(currentUser, newBoard);
      localStorage.setItem("currentBoard", JSON.stringify(newBoard));
      location.href = "board.html";
    } else {
      alert("Board Name Is Missing");
    }
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
}

function dragginCard({ clientY }) {
  try {
    let cardIsDragged = false;
    cards.forEach((card) => {
      if (card.classList.contains("isDragging")) {
        cardIsDragged = true;
      }
    });
    if (!cardIsDragged) return;
    // e.preventDefault();

    const bottomTask = insertAboveTask(this, clientY);
    const curTask = document.querySelector(".isDragging") as HTMLElement;

    if (!bottomTask) {
      this.appendChild(curTask);
    } else {
      this.insertBefore(curTask, bottomTask);
    }
    currentBoard.update();
  } catch (error) {
    console.log(error);
  }
}

function editList() {
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
    console.log(error);
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
    console.log(error);
  }
}

function renderBoardInBoardPage() {
  try {
    boardTitle.textContent = currentBoard.name;
    boardContainer.style.background = `url(${currentBoard.backgroundImage}) no-repeat center / cover`;
    currentBoard.lists.forEach((list) => {
      const listObj = new List(list.name, list.cards, list.uid, list.backColor);
      const ListElement = listObj.createListElement();

      list.cards.forEach((card) => {
        createCardElement(card, ListElement);
      });
    });
  } catch (error) {
    console.log(error);
  }
}
