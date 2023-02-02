var toggleTheme = function () {
    var body = document.querySelector("body");
    body.classList.toggle("darkTheme");
};
var themeToggle = document.createElement("button");
themeToggle.innerText = "Toggle Dark/Light Theme";
themeToggle.addEventListener("click", toggleTheme);
document.querySelector("header").appendChild(themeToggle);
displayMovies(latestMovies);
