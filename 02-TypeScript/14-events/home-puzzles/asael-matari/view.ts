// 1) create a box. When the user press on the, an alert show "You pressed me"

// const box= document.querySelector(".box")
// box?.addEventListener("click",()=>{
//     alert("you press me")
// })





// 2) create a 3 by 3 board of light blue color. when a box is pressed, the color
// is changed to black.
// even better, an image of a chess pawn appear.
const boxs = document.querySelectorAll(".box");
boxs?.forEach((box) =>
  box.addEventListener("click", () => {
    box.style.backgroundColor =
      box.style.backgroundColor === "black" ? "blue" : "black";
      box.innerHTML=box.innerHTML===""?`<img src="https://bit.ly/3WvTBOX" alt="" style="height: 5vh; width: 5vw;"> `:""
    })
);




// 3) create tick tac toe game
