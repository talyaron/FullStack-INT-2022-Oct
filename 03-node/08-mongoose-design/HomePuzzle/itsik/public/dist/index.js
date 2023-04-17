var tbsu = document.querySelector(".teacherbtn");
var sbsu = document.querySelector(".studentbtn");
tbsu.addEventListener("click", renderTeacher);
sbsu.addEventListener("click", renderStudent);
function renderTeacher() {
    var choose = document.querySelector(".chooseOne");
    choose.style.display = "none";
    var divteacher = document.querySelector(".divteacher");
    divteacher.style.display = "flex";
}
function renderStudent() {
    var choose = document.querySelector(".chooseOne");
    choose.style.display = "none";
    var divstudent = document.querySelector(".divstudent");
    divstudent.style.display = "flex";
    var divteacher = document.querySelector(".divteacher");
    divteacher.style.display = "none";
}
