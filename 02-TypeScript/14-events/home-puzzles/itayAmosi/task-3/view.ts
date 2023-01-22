let ticTacToeGame= document.querySelector(`.box`) as HTMLElement;

let TicTacToe = document.querySelectorAll(`.box`);

// function switchPlayer(player) {
// try {
//    if (turn === player1) {
//    turn = player1;
//    TicTacToe.forEach((box:any) => {
//    box.addEventListener("click", (event) => {
//      box.innerText = `X`
//    })
//    })
//    }else{
//    turn = player2;
//    TicTacToe.forEach((box:any) => {
//    box.addEventListener("click", (event) => {
//      box.innerText = `O`
//    })
//    })
//    }
//    }catch (error) {
   
// }
// };


function clickTurn(square) {
   if (typeof player1[square.target.id] == 'number') {
       turn(square.target.id, currentPlayer);
   
       if (currentPlayer === player1) {
           currentPlayer = player2;
       } else {
           currentPlayer = player1;
       }
       // currentPlayer = currentPlayer === player1 ? player2 : player1;
   }

}

