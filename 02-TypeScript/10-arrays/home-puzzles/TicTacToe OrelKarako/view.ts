const btnStart = document.getElementById("btnStart");
const gameStart = document.getElementById("startGameContainer")!

const player1Name = document.getElementById("player1Name") as HTMLInputElement
const player2Name = document.getElementById("player2Name") as HTMLInputElement
const formPlayerName = document.getElementById("formPlayerName") as HTMLFormElement



// function getNameFromPlayers() :void{
//     btnStart!.addEventListener("click", (e: Event) => {
//         if (player1Name.value === "" || player2Name.value === "") {
//             console.log("no fill names");
//         } else {
//             scorePlayer1.innerHTML = `${player1Name.value} :<br><span id="player1Score">0</span>`
//             scorePlayer2.innerHTML = `${player2Name.value} :<br><span id="player2Score">0</span>`
//         }

//     })
// }