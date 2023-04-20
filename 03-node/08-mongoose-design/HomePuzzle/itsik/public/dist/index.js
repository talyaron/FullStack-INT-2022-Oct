var tbsu = document.querySelector(".teacherbtn");
var sbsu = document.querySelector(".studentbtn");
tbsu.addEventListener("click", renderTeacher);
sbsu.addEventListener("click", renderStudent);
function renderTeacher() {
    var choose = document.querySelector(".chooseOne");
    choose.style.display = "none";
    var divteacher = document.querySelector(".divteacher");
    divteacher.style.display = "flex";
    var divstudent = document.querySelector(".divstudent");
    divstudent.style.display = "none";
    var html = "\n <button class=\"goBackBtn\" onclick=\"hendelGoback()\">go back</button>\n    <form class=\"signup__formTeacher\">\n    <label for=\"tname\" class=\"signup__formTeacher__label\">Student Name</label>\n    <input id=\"nameInput\" type=\"text\" name=\"tname\" placeholder=\"enter name\" required class=\"signup__formTeacher__inputt\">\n    <br>\n    <label for=\"temail\" class=\"signup__formTeacher__label\">Student Email</label>\n    <input id=\"nameEmail\" type=\"email\" name=\"temail\" placeholder=\"enter email\" required class=\"signup__formTeacher__inputt\">\n    <br>\n    <label for=\"tpassword\" class=\"signup__formTeacher__label\">Student Password</label>\n    <input id=\"namePassword\" type=\"password\" name=\"tpassword\" placeholder=\"enter password\" required class=\"signup__formTeacher__inputt\">\n    <button type=\"button\" class=\"signUpBtn\" onclick=\"signUpBtn()\">Sign Up</button>\n </form>";
    divteacher.innerHTML = html;
}
function renderStudent() {
    var choose = document.querySelector(".chooseOne");
    choose.style.display = "none";
    var divstudent = document.querySelector(".divstudent");
    divstudent.style.display = "flex";
    var divteacher = document.querySelector(".divteacher");
    divteacher.style.display = "none";
    var html = "\n    <button class=\"goBackBtn\" onclick=\"hendelGoback()\">go back</button>\n    <form class=\"signup__formTeacher\">\n    <label for=\"tname\" class=\"signup__formTeacher__label\">Student Name</label>\n    <input id=\"nameInput\" type=\"text\" name=\"tname\" placeholder=\"enter name\" required class=\"signup__formTeacher__inputt\">\n    <br>\n    <label for=\"temail\" class=\"signup__formTeacher__label\">Student Email</label>\n    <input id=\"nameEmail\" type=\"email\" name=\"temail\" placeholder=\"enter email\" required class=\"signup__formTeacher__inputt\">\n    <br>\n    <label for=\"tpassword\" class=\"signup__formTeacher__label\">Student Password</label>\n    <input id=\"namePassword\" type=\"password\" name=\"tpassword\" placeholder=\"enter password\" required class=\"signup__formTeacher__inputt\">\n    <button type=\"button\" class=\"signUpBtn\" onclick=\"signUpBtn()\">Sign Up</button>\n </form>\n ";
    divstudent.innerHTML = html;
}
function hendelGoback() {
    var choose = document.querySelector(".chooseOne");
    choose.style.display = "block";
    var divstudent = document.querySelector(".divstudent");
    divstudent.style.display = "none";
    var divteacher = document.querySelector(".divteacher");
    divteacher.style.display = "none";
}
function signUpBtn(ev) {
    try {
        //  ev.preventDefault();
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        var email = ev.target.elements.email.value;
        if (!name)
            throw new Error("No name");
        if (!password)
            throw new Error("No password");
        if (!email)
            throw new Error("No email insert");
        var newUser = { name: name, password: password, email: email };
        //send to server:
        fetch("http://localhost:3000/API/userLogin/signUp", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
// async function signUpBtn(){
//    let nameInput = document.getElementById("nameInput")as HTMLInputElement
//    let namePassword = document.getElementById("namePassword")as HTMLInputElement
//    let nameEmail = document.getElementById("nameEmail")as HTMLInputElement
//    const options = {
//    method: 'POST',
//    headers: {
//        'Content-Type': 'application/json' ,
//        'Set-Cookie': 'token = 33'
//    },
//    body: JSON.stringify({ name: nameInput.value, password: namePassword.value, email: nameEmail.value })
// }
// try {
//    let result = await fetch(`http://localhost:3000/API/userLogin/signUp`, options);
//    result = await result.json();
//    console.log(result)
// }
// catch (err){
//    console.log(err)
//    console.log("no");
// }
// }
