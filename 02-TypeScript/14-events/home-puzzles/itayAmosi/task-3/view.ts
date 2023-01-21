const ticTacToeGame= document.querySelector(`.box`) as HTMLElement;

const TicTacToe = document.querySelectorAll(`.box`);

function switchPlayer(): void {
if (turn === player1){
   turn = player2;
   TicTacToe.forEach((box:any) => {
   box.addEventListener("click", (event) => {
     box.innerText = `X`;
   });
   box.addEventListener("click", (event) => {
      box.innerText = `O`;
   });
 });
}else{
   turn = player1;
}





}















// const ticTacToe = document.querySelector(`.box`)
// if (ticTacToe) {
//    ticTacToe.addEventListener(`click`,(play) => {
//     console.log(play)
//  });{

// }}

