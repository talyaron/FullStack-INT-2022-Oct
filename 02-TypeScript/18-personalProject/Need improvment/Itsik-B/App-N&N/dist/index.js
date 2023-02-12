var form = document.querySelector("form");
form.addEventListener("submit", runform);
var inp_Name = document.querySelector(".inpn");
var inp_pass = document.querySelector(".inp_pass");
function runform(e) {
    e.preventDefault();
    inp_Name.required;
    inp_pass.required;
    var inp_NameValue = inp_Name.value;
    var inp_passValue = inp_pass.value;
    localStorage.setItem("userName", JSON.stringify(inp_NameValue));
    localStorage.setItem("userPass", JSON.stringify(inp_passValue));
    if (inp_Name.value == "" && inp_pass.value == "") {
        alert("pls fill the login");
        return false;
    }
    window.location.href = "app.html";
    startApp();
}
