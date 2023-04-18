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
    var html = "\n <button class=\"goBackBtn\" onclick=\"hendelGoback()\">go back</button>\n <form class=\"signup__formTeacher\">\n    <label for=\"tname\" class=\"signup__formTeacher__label\">Teacher Name</label>\n    <input type=\"text\" name=\"tname\" placeholder=\"enter name\"  class=\"signup__formTeacher__inputt\">\n    <br>\n    <label for=\"temail\" class=\"signup__formTeacher__label\">Teacher Email</label>\n    <input type=\"email\" name=\"temail\"placeholder=\"enter email\" class=\"signup__formTeacher__inputt\">\n    <br>\n    <label for=\"tpassword\" class=\"signup__formTeacher__label\">Teacher Password</label>\n    <input type=\"password\" name=\"tpassword\" placeholder=\"enter password\" class=\"signup__formTeacher__inputt\">\n    <br>\n    <button class=\"signUpBtn\" onclick=\"signUpBtn()\">Sign Up</button>\n </form>";
    divteacher.innerHTML = html;
}
function renderStudent() {
    var choose = document.querySelector(".chooseOne");
    choose.style.display = "none";
    var divstudent = document.querySelector(".divstudent");
    divstudent.style.display = "flex";
    var divteacher = document.querySelector(".divteacher");
    divteacher.style.display = "none";
    var html = "\n    <button class=\"goBackBtn\" onclick=\"hendelGoback()\">go back</button>\n    <form class=\"signup__formTeacher\">\n    <label for=\"tname\" class=\"signup__formTeacher__label\">Student Name</label>\n    <input type=\"text\" name=\"tname\" placeholder=\"enter name\" required class=\"signup__formTeacher__inputt\">\n    <br>\n    <label for=\"temail\" class=\"signup__formTeacher__label\">Teacher Email</label>\n    <input type=\"email\" name=\"temail\" placeholder=\"enter email\" required class=\"signup__formTeacher__inputt\">\n    <br>\n    <label for=\"tpassword\" class=\"signup__formTeacher__label\">Teacher Password</label>\n    <input type=\"password\" name=\"tpassword\" placeholder=\"enter password\" required class=\"signup__formTeacher__inputt\">\n    <button class=\"signUpBtn\" onclick=\"signUpBtn()\">Sign Up</button>\n </form>\n ";
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
// function signUpBtn(){
//   if() 
// }
