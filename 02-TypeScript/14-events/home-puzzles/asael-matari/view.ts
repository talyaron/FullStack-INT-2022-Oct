// 1) create a box. When the user press on the, an alert show "You pressed me"

// const box= document.querySelector(".box")
// box?.addEventListener("click",()=>{
//     alert("you press me")
// })





// 2) create a 3 by 3 board of light blue color. when a box is pressed, the color
// is changed to black.
// even better, an image of a chess pawn appear.
// const boxs = document.querySelectorAll(".box");
// boxs?.forEach((box) =>
//   box.addEventListener("click", () => {
//     box.style.backgroundColor =
//       box.style.backgroundColor === "black" ? "blue" : "black";
//       box.innerHTML=box.innerHTML===""?`<img src="https://bit.ly/3WvTBOX" alt="" style="height: 5vh; width: 5vw;"> `:""
//     })
// );




// 3) create tick tac toe game


let globalSign = "";

function getSign() {
  const setButton = document.getElementById("sign");
  setButton?.addEventListener("click", () => {
    globalSign = globalSign === "X" ? "O" : "X";
  });
}

function renderSign() {
  const box = document.querySelectorAll(".box");
  box.forEach((box) =>
    box.addEventListener("click", () => {
      box.innerHTML = box.innerHTML === "" ? globalSign : "";
    })
  );
}

function winner() {
const box1=document.getElementById("0")
const box2=document.getElementById("1")
const box3=document.getElementById("2")
const box4=document.getElementById("3")
const box5=document.getElementById("4")
const box6=document.getElementById("5")
const box7=document.getElementById("6")
const box8=document.getElementById("7")
const box9=document.getElementById("8")
// checking who won

if(box1?.innerHTML!=""){
if((box1?.innerHTML===box2?.innerHTML && box2?.innerHTML===box3?.innerHTML)||
(box1?.innerHTML===box5?.innerHTML && box5?.innerHTML===box9?.innerHTML)||
(box1?.innerHTML===box3?.innerHTML && box3?.innerHTML===box7?.innerHTML)){
  alert("player "+globalSign+" won") 


}}
if(box3?.innerHTML!=""){
if((box3?.innerHTML===box5?.innerHTML && box5?.innerHTML===box7?.innerHTML)||
(box3?.innerHTML===box6?.innerHTML && box6?.innerHTML===box9?.innerHTML)){
      alert("player "+globalSign+" won") 

}}
if(box5?.innerHTML!=""){
if((box4?.innerHTML===box5?.innerHTML && box5?.innerHTML===box6?.innerHTML)||
    (box2?.innerHTML===box5?.innerHTML && box5?.innerHTML===box8?.innerHTML)){
     alert("player "+globalSign+" won") 

}}
if(box7?.innerHTML!=""){
if(box7?.innerHTML===box8?.innerHTML && box8?.innerHTML===box9?.innerHTML){
     alert("player "+globalSign+" won") 

}
}
}


function restart() {
  const box = document.querySelectorAll(".box");
  box.forEach((box) => (box.innerHTML = ""));
}

