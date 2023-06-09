const boardGame = document.getElementById("boardGame")!
const boardGameChild = boardGame.querySelectorAll("input")!
const scorePlayer1 = document.querySelector(".score-player1")! as HTMLSpanElement
const scorePlayer2 = document.querySelector(".score-player2")! as HTMLSpanElement

let turn = true;
let score1 = 0, score2 = 0

function resetBoard() {
    const boardGame = document.getElementById("boardGame")!
    const boardGameChild = boardGame.querySelectorAll("input")!
    for (let i = 0; i < 9; i++) {
        boardGameChild[i].value = ''
    }
}

function resetGame() {
    resetBoard()
    score1 = 0; score2 = 0
    turn = true;
}

function gamesRules() {
    const boardGameChild = boardGame.querySelectorAll("input")!
    scorePlayer2.style.backgroundColor = "rgb(177, 190, 196)"
    scorePlayer1.style.backgroundColor = "green"
    boardGameChild.forEach((ceil) => {
        ceil.addEventListener('click', () => {
            if (ceil.value === "") {
                if (turn === true) {
                    player1Sound.play()
                    ceil.value! = "x";
                    scorePlayer1!.style.backgroundColor = ""
                    scorePlayer2!.style.backgroundColor = "green"
                    turn = false
                } else if (turn === false) {
                    player2Sound.play()
                    ceil.value! = "o";
                    scorePlayer2.style.backgroundColor = ""
                    scorePlayer1.style.backgroundColor = "green"
                    turn = true
                }
                else {
                    return
                }
                winOrNot(opinionToWin)
            } else {
                return
            }
        })
    })
}

function winOrNot(opinionToWin: number[][]) {
    for (let i = 0; i < opinionToWin.length; i++) {
        if (
            boardGameChild[opinionToWin[i][0]].value === "x" &&
            boardGameChild[opinionToWin[i][1]].value === "x" &&
            boardGameChild[opinionToWin[i][2]].value === "x"
        ) {
            winGame(1)
        } else if (
            boardGameChild[opinionToWin[i][0]].value === "o" &&
            boardGameChild[opinionToWin[i][1]].value === "o" &&
            boardGameChild[opinionToWin[i][2]].value === "o"
        ) {
            winGame(2)
        }
    }
}

function winGame(playerWin: number) {
    const fireWorks = document.getElementById("fireWorks")! as HTMLDivElement
    const playerWinsH1 = document.getElementById("playerWinsH1")! as HTMLSpanElement
    const scorePlayer1score = document.getElementById("player1Score")! as HTMLSpanElement
    const scorePlayer2score = document.getElementById("player2Score")! as HTMLSpanElement
    if (playerWin === 1) {
        score1++
        scorePlayer1score.textContent = score1.toString()
        fireWorks.style.display = "flex"
        playerWinsH1.textContent = "player 1"
    } else
        if (playerWin === 2) {
            score2++
            scorePlayer2score.textContent = score2.toString();
            fireWorks.style.display = "flex"
            playerWinsH1.textContent = "player 2"

        }
    gameOver.play()

    setTimeout(() => {
        fireWorks.style.display = "none"
        resetBoard()
        turn = true
        scorePlayer2.style.backgroundColor = "rgb(177, 190, 196)"
        scorePlayer1.style.backgroundColor = "green"
   
    }, 2500);



}

function resetScore() {
    const resetBtnScore = document.querySelector(".btn-reset-score")! as HTMLButtonElement
    const scorePlayer1score = document.getElementById("player1Score")! as HTMLSpanElement
    const scorePlayer2score = document.getElementById("player2Score")! as HTMLSpanElement

    resetBtnScore.addEventListener('click', () => {
        score1 = 0
        score2 = 0

        scorePlayer1score.textContent = score1.toString()
        scorePlayer2score.textContent = score2.toString()

    })
}

function resetButton() {
    const resetBtn = document.querySelector('.btn-reset')! as HTMLButtonElement
    resetBtn.addEventListener('click', resetGame)
}