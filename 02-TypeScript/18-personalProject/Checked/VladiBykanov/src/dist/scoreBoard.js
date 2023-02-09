var users = localStorage.getItem("signedUpUsers");
var sortedUsers = JSON.parse(users).sort(function (a, b) { return b.highScore - a.highScore; });
console.table(sortedUsers);
var userNamesListElement = document.querySelector(".userNames");
var userScoreListElement = document.querySelector(".userScore");
var newPlayerBtn = document.querySelectorAll(".newPlayerBtn");
newPlayerBtn.forEach(function (btn) {
    return btn.addEventListener("click", function () {
        localStorage.removeItem("currentUser");
        window.location.href = "startPage.html";
    });
});
function renderScoreTable() {
    try {
        sortedUsers.forEach(function (user) {
            var liNameElement = document.createElement("li");
            liNameElement.textContent = user.userName;
            userNamesListElement.append(liNameElement);
            var liScoreElement = document.createElement("li");
            liScoreElement.textContent = user.highScore.toString();
            userScoreListElement.append(liScoreElement);
        });
    }
    catch (error) {
        console.log(error);
    }
}
renderScoreTable();
