var welcomeH1 = document.querySelector(".targ");
startApp();
function startApp() {
    var firstName = (JSON.parse(localStorage.getItem("userName")));
    var password = (JSON.parse(localStorage.getItem("userPass")));
    welcomeH1.textContent = "welcome " + firstName;
    renderNav();
}
function renderNav() {
    var newc = document.querySelector(".newC");
    var dairy = document.querySelector(".dairy");
    var clinet = document.querySelector(".clinet");
    var mlay = document.querySelector(".mlay");
    var sapak = document.querySelector(".spak");
    var tazrim = document.querySelector(".todo");
    // reder all the page from here
}
