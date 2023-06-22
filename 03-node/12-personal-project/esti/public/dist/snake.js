// import { Scores } from './../API/scores/scoreModel';
;
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
var userId = "";
var namePlayer = ["", "", ""];
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", control);
    createBoard();
    startGame();
});
// built 100 div for snake
function createBoard() {
    try {
        getScores();
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var value = urlParams.get('value');
        var playerName = document.querySelector(".playerName");
        if (!value)
            throw new Error("No value from indexuser");
        namePlayer = value.split(",");
        playerName.innerText = "Welcome " + namePlayer[0];
        console.log(JSON.stringify(value));
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
function hendelReplay() {
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
function hendelFinishGame() {
    try {
        console.log("playername - " + namePlayer[1] + " id");
        console.log("score - " + score);
        updateScore();
        // const url = `index.html?value=${namePlayer[0]}, ${namePlayer[1]}, ${score}`;
        // window.location.href = url;
    }
    catch (error) {
        console.error(error);
    }
}
function updateScore() {
    try {
        var userId_1 = namePlayer[1];
        console.log(userId_1);
        fetch("/update-score", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: userId_1, score: score })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var scores = _a.scores;
            getScores();
        })["catch"](function (error) {
            console.error(error);
        });
        ;
    }
    catch (error) {
        console.error(error);
    }
}
function getScores() {
    try {
        fetch("/get-scores", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(function (res) {
            console.log("this is res" + res);
            return res.json();
        })
            .then(function (_a) {
            var scoreDB = _a.scoreDB;
            try {
                if (!scoreDB)
                    throw new Error("dodnt find scores");
                console.log(scoreDB);
                console.log("scores");
                renderScores(scoreDB);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderScores(scores) {
    try {
        if (!scores)
            throw new Error("No users");
        scores.sort(function (a, b) { return b.score - a.score; });
        console.log(scores);
        var html = scores.map(function (score) {
            // console.log(score)
            if (score.score > 0)
                return renderScore(score);
        })
            .join(" ");
        var htmlDiv = "<div class=\"container\"><h1>Palyer</h1>" + html + "</div>";
        console.log(htmlDiv);
        var scoresElement = document.querySelector(".centered");
        if (!scoresElement)
            throw new Error("coundnt find users element on DOM");
        scoresElement.innerHTML = htmlDiv;
    }
    catch (error) {
        console.error(error);
    }
}
function renderScore(score) {
    try {
        console.log(score);
        console.log("score");
        // const userNAme = getUserName(score.userId)
        return "<div> " + score.playerName + " = " + score.score + "</div>";
    }
    catch (error) {
        console.error(error);
    }
}
function hendelGoBack() {
    try {
        window.location.href = 'login.html';
    }
    catch (error) {
        console.error(error);
    }
}
