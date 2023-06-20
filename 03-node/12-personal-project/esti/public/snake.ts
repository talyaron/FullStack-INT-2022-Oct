

// import { Scores } from './../API/scores/scoreModel';

interface Scores {
  userName: string,
  userId: string,
  score: number,
  competitionPlace: number,
};

const grid = document.querySelector(".grid") as HTMLElement;
const popup = document.querySelector(".popup")  as HTMLElement;
const playAgain = document.querySelector(".playAgain") as HTMLElement;
const scoreDisplay = document.querySelector(".scoreDisplay") as HTMLDivElement;
const displayMessage = document.querySelector(".displayMessage") as HTMLDivElement;
// const left = document.querySelector(".left") as HTMLElement;
// const bottom = document.querySelector(".bottom") as HTMLElement;
// const right = document.querySelector(".right") as HTMLElement;
// const up = document.querySelector(".top") as HTMLElement;
const boardSize = 400

let width = boardSize / 20;
let currentIndex = 0;
let appleIndex = 0;
let randomColor = ""
let currentSnake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 0.8;
let intervalTime = 0;
let interval = 0;
let userId = "";
let namePlayer = ["", "", ""];

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", control);
    createBoard();
    startGame();
  });

// built 100 div for snake
  function createBoard() {
    try{
      getScores()
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const value = urlParams.get('value');
      const playerName = document.querySelector(".playerName") as HTMLHeadElement
      if(!value) throw new Error ("No value from indexuser")

      
      namePlayer = value.split(",");      
      playerName.innerText = `Welcome ${namePlayer[0]}`
      console.log(JSON.stringify(value))

      
      popup.style.display = "none";
      let html = ""
      for (let i = 0; i < boardSize; i++) {
        html = html + `<div></div>`  
      }
      grid.innerHTML = html;
    } catch (error) {
      console.error(error)      
    }

  }

  function startGame() {
    try{
      const squares = document.querySelectorAll(".grid div");
      randomApple(squares);

      //random apple
      direction = 1;
      displayMessage.innerHTML = ""
      scoreDisplay.innerHTML = `Your score: ${score.toString()}`;
      scoreDisplay.style.color = "white"

      intervalTime = 500;
      currentSnake = [2, 1, 0];
      currentIndex = 0;
      currentSnake.forEach((index) => squares[index].classList.add("snake"));
      interval = setInterval(moveOutcome, intervalTime);

    } catch (error) {
      console.error(error)      
    }

    }


  function moveOutcome() {
    try{
        let squares = document.querySelectorAll(".grid div");
        if (checkForHits(squares)) {
          scoreDisplay.innerHTML = ""
          displayMessage.innerHTML = "You hit something";
          displayMessage.style.color = "red"
          popup.style.display = "flex";
          return clearInterval(interval);
        } else {
          moveSnake(squares);
        }
    } catch (error) {
      console.error(error)      
  }

  }

  function moveSnake(squares) {
    try {
        const tail = currentSnake.pop();
        if(tail === null || tail === undefined) throw new Error("tail is undefined")
        // console.log(`tail ${tail}`)

        squares[tail].classList.remove("snake");
        
        currentSnake.unshift(currentSnake[0] + direction);

        // console.log(`currentSnake ${currentSnake}`)
        // movement ends here
        eatApple(squares, tail);
        squares[currentSnake[0]].classList.add("snake");
  } catch (error) {
        console.error(error)      
  }

  }


  function checkForHits(squares) {
    try{
      if (
        // (currentSnake[0] + width >= width * width && direction === width) ||
        (currentSnake[0] + width >= boardSize && direction === width) ||
        (currentSnake[0] % width === width  - 1 && direction === 1) ||
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] - width <= 0 && direction === -width) ||
        squares[currentSnake[0] + direction].classList.contains("snake")
      ) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error)      
    }

  }

  function eatApple(squares, tail) {
    try{
      if (squares[currentSnake[0]].classList.contains("apple")) {
        squares[currentSnake[0]].classList.remove("apple");
        squares[tail].classList.add("snake");

        currentSnake.push(tail);
     

        randomApple(squares);
        score++;
        displayMessage.innerHTML = ""
        scoreDisplay.innerHTML = `Your score: ${score.toString()}`;
        scoreDisplay.style.color = "withe"
  
        clearInterval(interval);
        intervalTime = intervalTime * speed;
        interval = setInterval(moveOutcome, intervalTime);
      }
    } catch (error) {
      console.error(error)      
    }

  }


  function randomApple(squares) {
    try{
      do {
        appleIndex = Math.floor(Math.random() * squares.length);
      } while (squares[appleIndex].classList.contains("snake"));
          squares[appleIndex].classList.add("apple");

    } catch (error) {
          console.error(error)      
    }
    
  }


    function control(event){

      try{
        switch (event.key) {
            case "ArrowLeft":
              direction = -1;
            break;
            case "ArrowUp":
              direction = -width;
            break;
            case "ArrowRight":
              direction = 1;
            break;
            case "ArrowDown":
              direction = +width;
            break;
 
        }

  
      } catch (error) {
         console.error(error)      
      }
  }


function hendelReplay() {
  try{
    grid.innerHTML = "";
    createBoard();
    startGame();
    popup.style.display = "none";
  } catch (error) {
    console.error(error)      
  }

}

function hendelFinishGame() {
  try{
    console.log(`playername - ${namePlayer[1]} id`)
    console.log(`score - ${score}`)
    updateScore ()
    // const url = `index.html?value=${namePlayer[0]}, ${namePlayer[1]}, ${score}`;
    // window.location.href = url;
  } catch (error) {
    console.error(error)      
  }

}




function updateScore () {
  try {
    const userId = namePlayer[1]
    console.log(userId)
    fetch("/update-score", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, score }),
    })
    .then((res) => res.json())
      .then(({ scores }) => {
        getScores();
      })
      .catch((error) => {
        console.error(error);
      });;
  } catch (error) {
    console.error(error);
  }
}


function getScores() {
  try {
  
    fetch("/get-scores", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
                                                                                                     },
    })
      .then((res) => {
        console.log("this is res" + res);
        return res.json();
      })
      .then(({ scoreDB }) => {
        try {
          if (!scoreDB) throw new Error("dodnt find scores");
          console.log(scoreDB);
          console.log("scores");
          renderScores(scoreDB);
        } catch (error) {
          console.error(error);
        }
      });

  } catch (error) {
    console.error(error);
  }
}

function renderScores(scores: Array<Scores>) {
  try {
    if (!scores) throw new Error("No users");
    scores.sort((a, b) => b.score - a.score);
    console.log(scores)
    let html = 
        scores.map((score) => {
        // console.log(score)
        if(score.score > 0) return renderScore(score);
      })
      .join(" ");

      const htmlDiv = `<div class="container"><h1>Palyer</h1>${html}</div>`  
      console.log(htmlDiv)
    const scoresElement = document.querySelector(".centered") as HTMLElement;
    if (!scoresElement) throw new Error("coundnt find users element on DOM");

    scoresElement.innerHTML = htmlDiv;
  } catch (error) {
    console.error(error);
  }
}

function  renderScore(score){
  try {
    console.log(score)
    console.log("score")
    // const userNAme = getUserName(score.userId)
    return `<div> ${score.playerName} = ${score.score}</div>`
      } catch (error) {
    console.error(error);
  } 
}


function hendelGoBack(){
  try{
      window.location.href = 'login.html';
    } catch (error) {
    console.error(error)      
  }
}