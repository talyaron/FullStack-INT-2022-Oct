var root = document.querySelector("#root");
var userfName = prompt('what is your name?');
var userAdress = prompt('what is your address?');
var UserEmail = prompt('what is your Email?');
var Userphoto = prompt('what is your photo?');
if (userfName && userAdress && UserEmail && Userphoto && root) {
    root.innerHTML = "<div class=\"usercard\"> \n    <h1> Name: " + userfName + "</h1>\n    <h1> Adress: " + userAdress + "</h1>\n    <h1> Email: " + UserEmail + "</h1>\n    <img src='" + Userphoto + "'/>\n    ";
}
