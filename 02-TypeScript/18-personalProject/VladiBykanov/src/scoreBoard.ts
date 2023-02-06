const users = localStorage.getItem("users") as string;
const sortedUsers = JSON.parse(users).sort(
  (a: User, b: User) => b.highScore - a.highScore
);

console.table(sortedUsers);

const userNamesListElement = document.querySelector(
  ".userNames"
) as HTMLUListElement;
const userScoreListElement = document.querySelector(
  ".userScore"
) as HTMLUListElement;

function renderScoreTable() {
  sortedUsers.forEach((user: User) => {
    const liNameElement = document.createElement("li") as HTMLElement;
    liNameElement.textContent = user.userName;
    userNamesListElement.append(liNameElement);
    const liScoreElement = document.createElement("li") as HTMLElement;
    liScoreElement.textContent = user.highScore.toString();
    userScoreListElement.append(liScoreElement);
  });
}

renderScoreTable();