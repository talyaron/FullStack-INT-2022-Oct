function handleSignUp(e: Event) {
  try {
    e.preventDefault();
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
    console.error(error);
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
    console.error(error);
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
    console.error(error);
  }
}

function displayProfile(user: User) {
  try {
    profileWindow.style.display = "flex";
    if (user) {
      profileDiv.innerHTML = `
        <ul>
          <h1>About you:</h1>
          <li>Name: <span class="user-info">${user.firstName} ${user.lastName}</span>
          </li>
          <li>Gender: <span class="user-info">${user.gender}</span>
          </li>
          <li>Email: <span class="user-info">${user.email}</span>
          </li>
          <li>Phone Number: <span class="user-info">${user.phoneNumber}</span>
          </li>
          <li>User Name: <span class="user-info">${user.userName}</span>
          </li>
          <li>Password: <span class="user-info">${user.password}</span>
          </li>
        </ul>
      `;
      
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
  } catch (error) {
    console.error(error);
  }
}
function displayNotifictions() {
  try {
    const notifications = localStorage.getItem(
      `notifications-${currentUser.uid}`
    );
    if (notifications) {
      const notificationss = JSON.parse(notifications);
      notifictionWindow.style.display = "flex";
      return (notificationsDiv.innerHTML = `
      <ul>
      <h3>notifications :</h3>
      <li>${notificationss}</li>
    </ul>
          `);
    }
  } catch (error) {
    console.error(error);
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
    console.error(error);
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
    console.error(error);
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
    console.error(error);
  }
}
function makeListFunctional(listContainer: HTMLElement) {
  listContainer.addEventListener("dragstart", () => {
    listContainer.classList.add("is-draggin");
  });
  listContainer.addEventListener("dragend", () => {
    listContainer.classList.remove("is-draggin");
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
        let successcardMsg = `<i class="fa-solid fa-circle-check"></i>Add new card: ${newCardTextArea.value}`;
        notification(successcardMsg);
        saveNotificationToLocalStorage(successcardMsg, currentBoard, currentUser);
        newCardTextArea.value = "";
      }
    }
  });
}

function dragginCard({ clientY }) {
  let cardIsDragged = false;
  cards.forEach((card) => {
    if (card.classList.contains("is-dragging")) {
      cardIsDragged = true;
    }
  });
  if (!cardIsDragged) return;
  const bottomTask = insertAboveTask(this, clientY);
  const curTask = document.querySelector(".is-dragging") as HTMLElement;

  if (!bottomTask) {
    this.appendChild(curTask);
  } else {
    this.insertBefore(curTask, bottomTask);
  }
  currentBoard.update();
}
function editList() {
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
      let successcardMsg = `<i class="fa-solid fa-circle-check"></i>New List Name: ${editListInput.value}`;
      notification(successcardMsg);
      saveNotificationToLocalStorage(successcardMsg, currentBoard, currentUser);
      currentBoard.update();
    }
  });
  editListInput.addEventListener("blur", (event) => {
    const newListTitle = document.createElement("h2");
    newListTitle.textContent = editListInput.value.trim();
    editListInput.replaceWith(newListTitle);
    currentBoard.update();
  });
}

function createCardElement(cardName: string, list: Element) {
  const card = document.createElement("div");
  card.classList.add("boardContainer__main__list__card");
  card.setAttribute("draggable", "true");
  card.setAttribute("ondragstart", `drag(event)`);
  card.setAttribute("id", `${uid()}`);
  card.innerHTML = `
  <h2>${cardName}</h2>
  <i class="fa-regular fa-pen-to-square editCardBtn"></i>
  `;
  const cardTitle = list.querySelector(
    ".boardContainer__main__list__header"
  ) as HTMLDivElement;
  list.insertBefore(card, cardTitle.nextSibling);
  const editCardBtn = card.querySelector(".editCardBtn") as HTMLElement;
  editCardBtn.addEventListener("click", () => {
    const cardTitle = card.querySelector(
      ".boardContainer__main__list__card > h2"
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
        const newCardTitle = document.createElement("h2");
        newCardTitle.textContent = editCardInput.value.trim();
        let successcardMsg = `<i class="fa-solid fa-circle-check"></i>New Card Name: ${editCardInput.value}`;
        notification(successcardMsg);
        saveNotificationToLocalStorage(successcardMsg, currentBoard, currentUser);
        editCardInput.replaceWith(newCardTitle);
      }
    });
    editCardInput.addEventListener("blur", () => {
      const newCardTitle = document.createElement("h2");
      newCardTitle.textContent = editCardInput.value.trim();
      editCardInput.replaceWith(newCardTitle);
      currentBoard.update();
    });
    cardTitle.replaceWith(editCardInput);
    editCardInput.focus();
    currentBoard.update();
  });
  card.addEventListener("dragstart", () => {
    card.classList.add("is-dragging");
  });
  card.addEventListener("dragend", () => {
    card.classList.remove("is-dragging");
  });
  currentBoard.update();
  // Add new card to cards variable
  cards = document.querySelectorAll(
    ".boardContainer__main__list__card"
  ) as NodeListOf<HTMLDivElement>;
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
  const data = ev.dataTransfer.getData("Text");
  const el = document.getElementById(data);
  // el?.parentNode?.removeChild(el); => delete without Warning //
  currentBoard.update();
}

function saveNotificationToLocalStorage(notification, board, user) {
  let userNotifications = JSON.parse(
    localStorage.getItem(`notifications-${user.uid}`) || `[]`
  );
  userNotifications.push(notification);
  localStorage.setItem(
    `notifications-${user.uid}`,
    JSON.stringify(userNotifications)
  );
  let boardNotifications = JSON.parse(
    localStorage.getItem(`notifications-board-${board.uid}`) || `[]`
  );
  boardNotifications.push(notification);
  localStorage.setItem(
    `notifications-board-${board.uid}`,
    JSON.stringify(boardNotifications)
  );
}

function notification(msg) {
  let note = document.createElement("div");
  note.classList.add("notification");
  note.innerHTML = msg;
  noteBox.appendChild(note);

  if (msg.includes(`Delete`)) {
    note.classList.add("Delete");
  }
  if (msg.includes(`List`)) {
    note.classList.add("List");
  }
  if (msg.includes(`card`)) {
    note.classList.add("card");
  }
  setTimeout(() => {
    note.remove();
  }, 6000);
}