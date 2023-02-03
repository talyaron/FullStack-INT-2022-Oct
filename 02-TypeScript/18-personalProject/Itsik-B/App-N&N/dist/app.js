// catch all navbar
var welcomeH1 = document.querySelector(".targ");
startApp();
var newc = document.querySelector("#newC");
var dairy = document.querySelector("#dairy");
var clinet = document.querySelector("#clinet");
var mlay = document.querySelector("#mlay");
var sapak = document.querySelector("#sapak");
var todo = document.querySelector("#todo");
function startApp() {
    var firstName = (JSON.parse(localStorage.getItem("userName")));
    var password = (JSON.parse(localStorage.getItem("userPass")));
    welcomeH1.textContent = "welcome " + firstName;
}
function renderNewCustomer() {
    try {
        todo.style.display = "none";
        newc.style.display = "block";
        dairy.style.display = "none";
        clinet.style.display = "none";
        mlay.style.display = "none";
        sapak.style.display = "none";
    }
    catch (error) {
        console.error(error);
    }
}
function renderDairy() {
    try {
        todo.style.display = "none";
        newc.style.display = "none";
        dairy.style.display = "block";
        clinet.style.display = "none";
        mlay.style.display = "none";
        sapak.style.display = "none";
    }
    catch (error) {
        console.error(error);
    }
}
function renderCustomer() {
    try {
        sapak.style.display = "none";
        todo.style.display = "none";
        newc.style.display = "none";
        dairy.style.display = "none";
        clinet.style.display = "block";
        mlay.style.display = "none";
    }
    catch (error) {
        console.error(error);
    }
}
function renderMlay() {
    try {
        sapak.style.display = "none";
        todo.style.display = "none";
        newc.style.display = "none";
        dairy.style.display = "none";
        clinet.style.display = "none";
        mlay.style.display = "block";
    }
    catch (error) {
        console.error(error);
    }
}
function renderSapakim() {
    try {
        sapak.style.display = "block";
        todo.style.display = "none";
        newc.style.display = "none";
        dairy.style.display = "none";
        clinet.style.display = "none";
        mlay.style.display = "none";
    }
    catch (error) {
        console.error(error);
    }
}
function renderTodolist() {
    try {
        todo.style.display = "block";
        newc.style.display = "none";
        dairy.style.display = "none";
        clinet.style.display = "none";
        mlay.style.display = "none";
        sapak.style.display = "none";
        todoListRuns();
    }
    catch (error) {
        console.error(error);
    }
}
function todoListRuns() {
    var btnadd = document.querySelector("#btnadd");
    var inp = document.querySelector(".addMession");
    var padd = document.querySelector(".pAdd");
    inp.dir = "rtl";
    btnadd.addEventListener("click", function () {
        var newp = document.createElement("p");
        padd.appendChild(newp);
        newp.innerHTML = inp.value;
        inp.value = "";
        newp.addEventListener("click", function () {
            newp.style.textDecoration = "line-through";
        });
        newp.addEventListener("dblclick", function () {
            padd.removeChild(newp);
        });
    });
}
