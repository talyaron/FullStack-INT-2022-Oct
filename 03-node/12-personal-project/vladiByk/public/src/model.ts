interface UserTemplate {
  firstName: string;
  lastName: string;
  gender: string;
  userName: string;
  password: string;
  email: string;
  boardList: [BoardTemplate];
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
      body: JSON.stringify({ boardId }),
    }).catch((error) => console.error(error));
  }

  static async assignCurrentBoard() {
    const board: BoardTemplate = await fetch(`${boardsAPI}/getBoard`)
      .then((res) => res.json())
      .then(({ board }) => board)
      .catch((error) => console.error(error));
    const boardLists: ListTemplate[] = await fetch(`${listsAPI}/${board._id}`)
      .then((res) => res.json())
      .then(({ lists }) => lists)
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
    await fetch(`${boardsAPI}/${boardId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(({ boards }) => boards)
      .catch((error) => console.error(error));
  }

  async update() {
    this.listArray = [];
    const boardId = this.id;

    const listElements = boardContainer.querySelectorAll(
      ".boardContainer__main__list"
    );
    listElements.forEach(async (list) => {
      const listName = list.querySelector("h2")?.innerHTML as string;
      const cardsArray: string[] = [];
      const _id = list.id;

      list
        .querySelectorAll("p")
        .forEach((card) => cardsArray.push(card.innerHTML));

      const newList = new List(listName, cardsArray, _id);

      this.listArray.push(newList);

      const updateList: ListTemplate = await fetch(`${listsAPI}/${_id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ listName, cardsArray, boardId }),
      })
        .then((res) => res.json())
        .then(({ list }) => list)
        .catch((error) => console.error(error));
    });
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
      await fetch(`${listsAPI}/${list.id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          listName: list.name,
          cardsArray: list.cards,
          boardId,
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

// ---------------------- pre made users ---------------------- //
const preMadeUserList: User[] = [
  new User(
    "Vladislav",
    "Bykanov",
    "male",
    "vladb89",
    "12345678",
    "vladi@gmail.com"
  ),
  new User("Itai", "Gelberg", "male", "itaiG", "87654321", "itaiGel@gmail.com"),
  new User(
    "Itay",
    "Amosi",
    "male",
    "itayz1e",
    "144322144",
    "itayAmosi@gmail.com"
  ),
];

const preMadeBoardList: Board[] = [
  new Board("Golden Board", "./img/NASA.jpg"),
  new Board("Cyan Board", "./img/pink-sea.jpg"),
  new Board("Magenta Board", "./img/purple-flower.jpg"),
  new Board("Salmon Board", "./img/sea.jpg"),
  new Board("SlateBlue Board", "./img/wall-painting.jpg"),
];

const preMadeListList = [
  new List("To Do", ["buy chocolate", "write a song", "go for a jog"]),
  new List("Design", ["Design html page", "Create logo"]),
  new List("Backlog", ["Register", "Accessibility", "CRUD Lists", "Login"]),
  new List("Finish", [
    "open repo",
    "Create Main Page",
    "Create Login Page",
    "Create Sign Up page",
  ]),
];

if (!localStorage.getItem("signedUpUsers")) {
  preMadeBoardList[0].listArray.push(...preMadeListList);
  preMadeUserList[0].boardList.push(...preMadeBoardList);
  preMadeUserList[1].boardList.push(...preMadeBoardList);
  preMadeUserList[2].boardList.push(...preMadeBoardList);
  localStorage.setItem("signedUpUsers", JSON.stringify(preMadeUserList));
}
