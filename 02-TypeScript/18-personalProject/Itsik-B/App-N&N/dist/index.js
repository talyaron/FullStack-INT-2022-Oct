var btn_Log = document.querySelector(".btn_Login");
var form = document.querySelector("form");
btn_Log.addEventListener("click", runform);
function runform(e) {
    var inp_Name = document.querySelector(".inpn");
    var inp_pass = document.querySelector(".inp_pass");
    e.preventDefault();
    localStorage.setItem(inp_Name.value, inp_pass.value);
    window.location.href = "app.html";
    startApp();
}
