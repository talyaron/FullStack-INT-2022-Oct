var btn_Log = document.querySelector(".btn_Login");
var form = document.querySelector("form");
form.addEventListener("submit", runform);
function runform(e) {
    var inp_Name = document.querySelector(".inpn");
    var inp_pass = document.querySelector(".inp_pass");
    e.preventDefault();
    inp_Name.required;
    inp_pass.required;
    localStorage.setItem(inp_Name.value, inp_pass.value);
    window.location.href = "app.html";
    startApp();
}
