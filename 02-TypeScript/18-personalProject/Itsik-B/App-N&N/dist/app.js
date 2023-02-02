var welcomeH1 = document.querySelector(".targ");
function startApp() {
    var firstName = (JSON.parse(localStorage.getItem("userName")));
    var password = (JSON.parse(localStorage.getItem("userPass")));
    welcomeH1.textContent = "welcome" + firstName;
}
