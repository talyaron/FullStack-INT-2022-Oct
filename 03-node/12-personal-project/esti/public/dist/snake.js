var grid = document.querySelector(".grid");
var popup = document.querySelector(".popup");
var playAgain = document.querySelector(".playAgain");
var scoreDisplay = document.querySelector(".scoreDisplay");
var displayMessage = document.querySelector(".displayMessage");
// const left = document.querySelector(".left") as HTMLElement;
// const bottom = document.querySelector(".bottom") as HTMLElement;
// const right = document.querySelector(".right") as HTMLElement;
// const up = document.querySelector(".top") as HTMLElement;
var boardSize = 400;
var width = boardSize / 20;
var currentIndex = 0;
var appleIndex = 0;
var randomColor = "";
var currentSnake = [2, 1, 0];
var direction = 1;
var score = 0;
var speed = 0.8;
var intervalTime = 0;
var interval = 0;
var playerID = "";
var namePlayer = "";
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", control);
    createBoard();
    startGame();
});
// built 100 div for snake
function createBoard() {
    try {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var value = urlParams.get('value');
        var playerName = document.querySelector(".playerName");
        playerName.innerText = "Welcome " + value;
        console.log(JSON.stringify(value));
        namePlayer = value;
        popup.style.display = "none";
        var html = "";
        for (var i = 0; i < boardSize; i++) {
            html = html + "<div></div>";
        }
        grid.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function startGame() {
    try {
        var squares_1 = document.querySelectorAll(".grid div");
        randomApple(squares_1);
        //random apple
        direction = 1;
        displayMessage.innerHTML = "";
        scoreDisplay.innerHTML = "Your score: " + score.toString();
        scoreDisplay.style.color = "white";
        intervalTime = 500;
        currentSnake = [2, 1, 0];
        currentIndex = 0;
        currentSnake.forEach(function (index) { return squares_1[index].classList.add("snake"); });
        interval = setInterval(moveOutcome, intervalTime);
    }
    catch (error) {
        console.error(error);
    }
}
function moveOutcome() {
    try {
        var squares = document.querySelectorAll(".grid div");
        if (checkForHits(squares)) {
            scoreDisplay.innerHTML = "";
            displayMessage.innerHTML = "You hit something";
            displayMessage.style.color = "red";
            popup.style.display = "flex";
            return clearInterval(interval);
        }
        else {
            moveSnake(squares);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function moveSnake(squares) {
    try {
        var tail = currentSnake.pop();
        if (tail === null || tail === undefined)
            throw new Error("tail is undefined");
        // console.log(`tail ${tail}`)
        squares[tail].classList.remove("snake");
        currentSnake.unshift(currentSnake[0] + direction);
        // console.log(`currentSnake ${currentSnake}`)
        // movement ends here
        eatApple(squares, tail);
        squares[currentSnake[0]].classList.add("snake");
    }
    catch (error) {
        console.error(error);
    }
}
function checkForHits(squares) {
    try {
        if (
        // (currentSnake[0] + width >= width * width && direction === width) ||
        (currentSnake[0] + width >= boardSize && direction === width) ||
            (currentSnake[0] % width === width - 1 && direction === 1) ||
            (currentSnake[0] % width === 0 && direction === -1) ||
            (currentSnake[0] - width <= 0 && direction === -width) ||
            squares[currentSnake[0] + direction].classList.contains("snake")) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function eatApple(squares, tail) {
    try {
        if (squares[currentSnake[0]].classList.contains("apple")) {
            squares[currentSnake[0]].classList.remove("apple");
            squares[tail].classList.add("snake");
            currentSnake.push(tail);
            randomApple(squares);
            score++;
            displayMessage.innerHTML = "";
            scoreDisplay.innerHTML = "Your score: " + score.toString();
            scoreDisplay.style.color = "withe";
            clearInterval(interval);
            intervalTime = intervalTime * speed;
            interval = setInterval(moveOutcome, intervalTime);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function randomApple(squares) {
    try {
        do {
            appleIndex = Math.floor(Math.random() * squares.length);
        } while (squares[appleIndex].classList.contains("snake"));
        squares[appleIndex].classList.add("apple");
    }
    catch (error) {
        console.error(error);
    }
}
function control(event) {
    try {
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
    }
    catch (error) {
        console.error(error);
    }
}
function replay() {
    try {
        grid.innerHTML = "";
        createBoard();
        startGame();
        popup.style.display = "none";
    }
    catch (error) {
        console.error(error);
    }
}
function finishGame() {
    try {
        console.log("playername - " + namePlayer + " id");
        var backString = "playerSorce:" + score + " playerName:" + namePlayer;
        var url = "login.html?value=" + backString;
        window.location.href = url;
    }
    catch (error) {
        console.error(error);
    }
}
