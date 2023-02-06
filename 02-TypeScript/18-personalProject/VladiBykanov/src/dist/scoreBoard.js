var users = localStorage.getItem("users");
var sortedUsers = JSON.parse(users).sort(function (a, b) { return b.highScore - a.highScore; });
console.table(sortedUsers);
var userNamesListElement = document.querySelector(".userNames");
var userScoreListElement = document.querySelector(".userScore");
function renderScoreTable() {
    sortedUsers.forEach(function (user) {
        var liNameElement = document.createElement("li");
        liNameElement.textContent = user.userName;
        userNamesListElement.append(liNameElement);
        var liScoreElement = document.createElement("li");
        liScoreElement.textContent = user.highScore.toString();
        userScoreListElement.append(liScoreElement);
    });
}
renderScoreTable();
