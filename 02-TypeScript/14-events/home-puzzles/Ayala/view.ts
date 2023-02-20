


//1) create a box. When the user press on the, an alert show "You pressed me"

const box1 =document.querySelector('.box1');
box1.addEventListener("click",(event)=>{
    alert("You pressed me")
})

// 2) create a 3 by 3 board of light blue color. when a box is pressed, the color is changed to black. even better, an image of a chess pawn appear.

const boxes = document.querySelectorAll('.box');
boxes.forEach((box)=>{
    box.addEventListener("click",(event)=>{
        // box.style.backgroundColor ="black";
        box.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Chess_piece_-_White_pawn.JPG/261px-Chess_piece_-_White_pawn.JPG')"
        box.style.backgroundSize ="contain";
        // box.style.backgroundSize ="cover";

    })

})


//  3) create tick tac toe game
let isX =true;

const boxes2 = document.querySelectorAll('.box2');
boxes2.forEach((box)=>{
    box.addEventListener("click",(event)=>{
      box.innerHTML = isX?"X":"O";
      isX = ! isX ; 

    })

})