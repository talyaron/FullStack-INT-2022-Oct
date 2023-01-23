const square:any = document.querySelectorAll(".square")

let currentPlayer:string = "X"


//Winning Pattern Array
const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// Display X/O on click
for(let i = 0; i < square.length; i++){
    square[i].addEventListener("click", (event) => {
        const square = event.target
        // If the square is empty, it should place an "X" or "O" in the square
        if (square.innerHTML == ""){
            square.innerHTML = currentPlayer
            setTimeout(() => {winChecker()}, 100)
            switchPlayer()
        }
    })
}

// Function to switch between the players
const switchPlayer = () => {
    if(currentPlayer == "X"){
        currentPlayer = "O"
    }else{
        currentPlayer = "X"
    }
}

// Function to check for win or draw
const winChecker = () => {
    // Loop through all win patterns
    for(let i of winningPattern){
        // Check if squares are filled
        // If 3 empty squares are same and would give win as would
        if((square[i[0]].innerHTML != "") && (square[i[1]].innerHTML != "") && (square[i[2]].innerHTML != "")){
            if(square[i[0]].innerHTML == square[i[1]].innerHTML && square[i[1]].innerHTML == square[i[2]].innerHTML){
                // If all 3 squares have same values
                alert(`Player ${currentPlayer} is won!`)
                resetTheBoard()
            }
        }
    }

    let draw = true
    //It's a draw since there are a total of 9 boxes
    for(let i = 0; i < square.length; i++){
        if(square[i].innerHTML == ""){
            draw = false
            break
        }
    }
    if(draw){
        alert("It's a Draw!")
        resetTheBoard()
    }
}

// Function to reset the board
const resetTheBoard = () => {
    for (let i = 0; i < square.length; i++){
        square[i].innerHTML = ""
    }
}
