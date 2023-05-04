interface UserTemplate {
  firstName: string;
  lastName: string;
  gender: string;
  userName: string;
  password: string;
  email: string;
  boardList: [BoardTemplate];
  notifications: [NotificationInterface];
  _id: string;
}

class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public gender: string,
    public userName: string,
    public password: string,
    public email: string,
    public id: string = "",
    public boardList: Board[] = []
  ) {}

  static async getCurrentUser() {
    try {
      const user = await fetch(`${usersAPI}/getUser`)
        .then((res) => res.json())
        .then(({ user }) => user)
        .catch((error) => console.error(error));

      if (!user) return false;

      currentUser = new User(
        user.firstName,
        user.lastName,
        user.gender,
        user.userName,
        user.password,
        user.email,
        user._id
      );
    } catch (error) {
      console.error(error);
    }
  }
}

let currentUser: User;

interface BoardTemplate {
  boardName: string;
  imageSrc: string;
  userArray: [UserTemplate];
  listArray: [ListTemplate];
  _id: string;
}

class Board {
  constructor(
    public name: string,
    public imageSrc: string,
    public id: string = "",
    public listArray: List[] = []
  ) {}

  static async setCurrentBoard(boardId: string) {
    await fetch(`${boardsAPI}/${boardId}`, {
      method: "POST",
    }).catch((error) => console.error(error));
  }

  static async assignCurrentBoard() {
    const board: BoardTemplate = await fetch(`${boardsAPI}/getBoard`)
      .then((res) => res.json())
      .then(({ board }) => board)
      .catch((error) => console.error(error));

    const boardLists: ListTemplate[] = await fetch(
      `${boardsAPI}/getlists/${board._id}`
    )
      .then((res) => res.json())
      .then(({ board }) => board.listArray)
      .catch((error) => console.error(error));

    const listArrayNew = boardLists.map(
      (list) => new List(list.listName, list.cardsArray, list._id)
    );

    currentBoard = new Board(
      board.boardName,
      board.imageSrc,
      board._id,
      listArrayNew
    );
  }

  static async deleteBoard(boardId: string) {
    const userId = currentUser.id;
    await fetch(`${boardsAPI}/${boardId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    })
      .then((res) => res.json())
      .then(({ boards }) => boards)
      .catch((error) => console.error(error));
  }

  async update() {
    this.listArray = [];

    const listElements = boardContainer.querySelectorAll(
      ".boardContainer__main__list"
    );
    listElements.forEach(async (list) => {
      const listName = list.querySelector("h2")?.innerHTML as string;
      const cardsArray: string[] = [];
      const _id = list.id;

      list
        .querySelectorAll("p")
        .forEach((card) => cardsArray.unshift(card.innerHTML));

      const newList = new List(listName, cardsArray, _id);

      this.listArray.push(newList);

      const updateList: ListTemplate = await fetch(`${listsAPI}/${_id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ listName, cardsArray }),
      })
        .then((res) => res.json())
        .then(({ list }) => list)
        .catch((error) => console.error(error));
    });

    const listArrayID = this.listArray.map((list) => list.id);

    //update board on DB
    await fetch(`${boardsAPI}/${this.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        boardName: this.name,
        imageSrc: this.imageSrc,
        listArray: listArrayID,
      }),
    }).catch((error) => console.error(error));
  }

  async edit(
    boardName: string,
    imageSrc: string,
    boardId: string,
    listArray: List[]
  ) {
    this.name = boardName;
    this.imageSrc = imageSrc;
    this.listArray = [...listArray];
    await fetch(`${boardsAPI}/${boardId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ boardName, imageSrc, boardId }),
    });

    this.listArray.forEach(async (list) => {
      const userId = currentUser.id;
      await fetch(`${listsAPI}/${list.id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          listName: list.name,
          cardsArray: list.cards,
        }),
      });
    });

    boardTitle.textContent = boardName;
    boardContainer.style.background = `url(${imageSrc}) no-repeat center / cover`;
  }
}

let currentBoard: Board;

interface ListTemplate {
  listName: string;
  cardsArray: [string];
  _id: string;
}

class List {
  constructor(
    public name: string,
    public cards: string[] = [],
    public id = "",
    public backColor: string = `#${randomColor()}`
  ) {}

  static async createList(listName: string, boardId: string) {
    if (newListInput.value == "") return;
    const userId = currentUser.id;

    const createdList: ListTemplate = await fetch(`${listsAPI}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ listName, boardId }),
    })
      .then((res) => res.json())
      .then(({ list }) => list)
      .catch((error) => console.error(error));

    const newList = new List(listName, [], createdList._id);
    boardContainer.insertBefore(newList.createListElement(), trashCanDiv);
    newListInput.value = "";

    const message = `"${listName}" List is created at board #${currentBoard.name}#`;
    await createNotification(message, userId);
  }

  createListElement() {
    const listContainer = document.createElement("div");
    listContainer.classList.add("boardContainer__main__list");
    listContainer.setAttribute("draggable", "true");
    listContainer.setAttribute("id", `${this.id}`);
    // listContainer.setAttribute("ondragstart", `drag(event)`);

    const header = document.createElement("div");
    header.classList.add("boardContainer__main__list__header");
    header.setAttribute("id", `${this.name}_header`);
    header.innerHTML = `
    <div class="listTitle">
      <h2>${this.name}</h2>
      <i class="fa-regular fa-pen-to-square editListBtn"></i>
      </div>
      <div class="boardContainer__main__list__header--addCard">
        <textarea maxlength="50" class="newCardTextArea" cols="30" rows="2" placeholder="Task..."></textarea>
        <button class="newCardBtn">New Card</button>
      </div>
    `;
    listContainer.appendChild(header);
    header.style.backgroundColor = this.backColor;
    makeListFunctional(listContainer);
    boardContainer.insertBefore(listContainer, trashCanDiv);
    currentBoard.update();
    return listContainer;
  }
}

interface NotificationInterface {
  message: string;
  _id: string;
}
