var upBox = document.querySelector(".box");
upBox.addEventListener("click", alertMsg);
function alertMsg() {
    alert("You pressed me!");
}
var chessBox1 = document.querySelector(".chessBox1");
chessBox1.addEventListener("click", chessImg1, true);
function chessImg1() {
    var chessImag = document.createElement("img");
    chessImag.src = chessImages[getRandomImg()];
    chessBox1.appendChild(chessImag);
    chessBox1.removeEventListener("click", chessImg1, true);
}
var chessBox2 = document.querySelector(".chessBox2");
chessBox2.addEventListener("click", chessImg2, true);
function chessImg2() {
    var chessImag = document.createElement("img");
    chessImag.src = chessImages[getRandomImg()];
    chessBox2.appendChild(chessImag);
    chessBox2.removeEventListener("click", chessImg2, true);
}
var chessBox3 = document.querySelector(".chessBox3");
chessBox3.addEventListener("click", chessImg3, true);
function chessImg3() {
    var chessImag = document.createElement("img");
    chessImag.src = chessImages[getRandomImg()];
    chessBox3.appendChild(chessImag);
    chessBox3.removeEventListener("click", chessImg3, true);
}
var chessBox4 = document.querySelector(".chessBox4");
chessBox4.addEventListener("click", chessImg4, true);
function chessImg4() {
    var chessImag = document.createElement("img");
    chessImag.src = chessImages[getRandomImg()];
    chessBox4.appendChild(chessImag);
    chessBox4.removeEventListener("click", chessImg4, true);
}
var chessBox5 = document.querySelector(".chessBox5");
chessBox5.addEventListener("click", chessImg5, true);
function chessImg5() {
    var chessImag = document.createElement("img");
    chessImag.src = chessImages[getRandomImg()];
    chessBox5.appendChild(chessImag);
    chessBox5.removeEventListener("click", chessImg5, true);
}
var chessBox6 = document.querySelector(".chessBox6");
chessBox6.addEventListener("click", chessImg6, true);
function chessImg6() {
    var chessImag = document.createElement("img");
    chessImag.src = chessImages[getRandomImg()];
    chessBox6.appendChild(chessImag);
    chessBox6.removeEventListener("click", chessImg6, true);
}
var chessBox7 = document.querySelector(".chessBox7");
chessBox7.addEventListener("click", chessImg7, true);
function chessImg7() {
    var chessImag = document.createElement("img");
    chessImag.src = chessImages[getRandomImg()];
    chessBox7.appendChild(chessImag);
    chessBox7.removeEventListener("click", chessImg7, true);
}
var chessBox8 = document.querySelector(".chessBox8");
chessBox8.addEventListener("click", chessImg8, true);
function chessImg8() {
    var chessImag = document.createElement("img");
    chessImag.src = chessImages[getRandomImg()];
    chessBox8.appendChild(chessImag);
    chessBox8.removeEventListener("click", chessImg8, true);
}
var chessBox9 = document.querySelector(".chessBox9");
chessBox9.addEventListener("click", chessImg9, true);
function chessImg9() {
    var chessImag = document.createElement("img");
    chessImag.src = chessImages[getRandomImg()];
    chessBox9.appendChild(chessImag);
    chessBox9.removeEventListener("click", chessImg9, true);
}
var resetBtn = document.querySelector("#resetBtn");
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", resetBtnFunction);
function resetBtnFunction() {
    location.reload();
}
