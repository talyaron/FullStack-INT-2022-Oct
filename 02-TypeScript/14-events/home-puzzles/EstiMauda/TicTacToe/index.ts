

const xSymbol = "X" 

const oSymbol = "O"
let playerX = true

const boxes = document.querySelectorAll(".box")
boxes.forEach((box) => {
    box.addEventListener("click", startPlayGame)
})


function startPlayGame(){
    if(this.textContent != "") return

    if(playerX) {
        this.textContent = xSymbol
        this.style.color = "red"
        
    }else {
        this.textContent = oSymbol
        this.style.color = "green"
    }
    playerX = !playerX
    let chackWin:string = chachWin()
    
    theWinnerIs(chackWin)
    changePlayer(playerX)
}

function chachWin() :string{
    let whoWin = ""
    const boxWin = document.querySelectorAll(".box")
    const checkWhoIsWinner = [
        {one: 0, two: 1, three: 2},
        {one: 3, two: 4, three: 5},
        {one: 6, two: 7, three: 8},
        {one: 0, two: 3, three: 6},
        {one: 1, two: 4, three: 7},
        {one: 2, two: 5, three: 8},
        {one: 0, two: 4, three: 8},
        {one: 2, two: 4, three: 6},
    ];
    
       for(let i=0; i<checkWhoIsWinner.length; i++){
          if((boxWin[checkWhoIsWinner[i].one].innerHTML ==
             boxWin[checkWhoIsWinner[i].two].innerHTML) && 
             (boxWin[checkWhoIsWinner[i].one].innerHTML ==
             boxWin[checkWhoIsWinner[i].three].innerHTML) &&
             boxWin[checkWhoIsWinner[i].one].innerHTML != ""){
              whoWin = (`${checkWhoIsWinner[i].one}${checkWhoIsWinner[i].two}${checkWhoIsWinner[i].three}${boxWin[checkWhoIsWinner[i].three].innerHTML}`)  
              return(whoWin)
          }
       }
       let chekTie = checkTie()
       if (chekTie){
            whoWin = "999T"
       }
       
       return(whoWin)
}

function theWinnerIs(chackWin:string){
    let arrayWinFromStr  =  chackWin
    if(arrayWinFromStr.length < 4) {
        return
    }
    if(arrayWinFromStr[3] != "T"){
        for(let i=0; i<3; i++){
            let strWin = `box${arrayWinFromStr[i]}`
            document.getElementById(strWin)!.style.backgroundColor = "blue" 
        }
    }
        setInterval(theWinner, 1, (arrayWinFromStr[3]));
        setTimeout(() => {window.location.reload()}, 3000);
        
}

function changePlayer(player: boolean){
    const playerSymbol = document.getElementById("player") as HTMLDivElement
    if (player){
        playerSymbol.innerText = "Player 1"
        playerSymbol.style.color = "red"
    }else{
        playerSymbol.innerText = "Player 2"
        playerSymbol.style.color = "green"

    }

}

function theWinner(theWinner:string){
    const playerWinner = document.getElementById("player") as HTMLDivElement
  
    switch(theWinner){
        case "X":
            theWinner = "Player 1"
            playerWinner.innerText = `The Winner is ${theWinner}`
            playerWinner.style.color = "red"
            playerWinner.style.fontSize = "50px"
            break
        
        case "O":
            theWinner = "Player 2"
            playerWinner.innerText = `The Winner is ${theWinner}`
            playerWinner.style.color = "green"
            playerWinner.style.fontSize = "50px"
            break

        case "T":
            playerWinner.innerText = `No Winner is Tie`
            playerWinner.style.color = "blue"
            playerWinner.style.fontSize = "50px"
            break
    }    
 
}

function checkTie(): boolean{
    let boxWin = document.querySelectorAll(".box") 
    let checkTie = true
    boxWin.forEach(box => {
        if(box.innerHTML == ""){
            checkTie = false
        }
    })
    return(checkTie)
}