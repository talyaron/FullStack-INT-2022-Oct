var welcomeH1 = document.querySelector(".targ");
startApp();
var todo = document.querySelector(".todo");
function startApp() {
    var firstName = (JSON.parse(localStorage.getItem("userName")));
    var password = (JSON.parse(localStorage.getItem("userPass")));
    welcomeH1.textContent = "welcome " + firstName;
    // renderNav()
}
// function renderNav(){
//    const newc = document.querySelector(".newC")as HTMLDivElement;
//    const dairy = document.querySelector(".dairy")as HTMLDivElement;
//    const clinet = document.querySelector(".clinet")as HTMLDivElement;
//    const mlay = document.querySelector(".mlay")as HTMLDivElement;
//    const sapak = document.querySelector(".spak")as HTMLDivElement;
//   // reder all the page from here
//   // todolist
// }
function todolist() {
    var addme = document.querySelector(".addMession");
    var btnM = document.querySelector("#btnadd");
    var padd = document.querySelector(".pAdd");
    btnM.addEventListener("click", function () {
        var newP = document.createElement("p");
        padd.appendChild(newP);
        newP.innerHTML = addme.value;
    });
}
