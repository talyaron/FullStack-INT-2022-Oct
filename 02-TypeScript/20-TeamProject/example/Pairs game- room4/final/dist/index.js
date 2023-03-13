const scoreDisplay = document.querySelector("#score");
const boxes = document.querySelectorAll(".box");
const winner = document.querySelector("#winnerMas");
// const winner = document.getElementById("#winnerMas") as HTMLElement;
//timer and push
let intervalId;
let time = 0;
let lastStopTime = 0;
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resumeButton = document.querySelector(".resume");
const timeDisplay = document.querySelector(".time");
scoreDisplay.textContent = "score:";
startButton.addEventListener("click", startGame);
function startGame() {
    try {
        hasGameStarted = true;
        if (!intervalId) {
            intervalId = setInterval(() => {
                time += 1;
                timeDisplay.textContent = time.toString();
            }, 1000);
        }
    }
    catch (error) {
        console.error(error);
    }
}
stopButton.addEventListener("click", stopTimer);
function stopTimer() {
    try {
        lastStopTime = time;
        clearInterval(intervalId);
        intervalId = undefined;
    }
    catch (error) {
        console.error(error);
    }
}
resumeButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = undefined;
    time = 0;
    timeDisplay.textContent = "00:00";
    window.location.reload();
});
//start game//
function beginGame(uid) {
    localStorage.setItem("uid", uid.toString());
}
function hendleLevel(ev) {
    try {
        ev.preventDefault();
        const level = ev.target.elements.levels.value;
        showRelevntLevels(level);
    }
    catch (error) {
        console.error(error);
    }
}
// let level=prompt("choose a level");
function showRelevntLevels(level) {
    try {
        if (level == "level1") {
            const boxes = document.querySelectorAll(".level1");
            document.querySelectorAll(".level2,.level3").forEach(function (node) {
                let item = node;
                item.style.display = "none";
            });
            const uid = getUIDFromStorage();
            if (uid)
                playGame(boxes, 3, uid);
        }
        if (level == "level2") {
            const boxes = document.querySelectorAll(".level1,.level2");
            document.querySelectorAll(".level3").forEach(function (node) {
                let item = node;
                item.style.display = "none";
            });
            const uid = getUIDFromStorage();
            if (uid)
                playGame(boxes, 6, uid);
        }
        if (level == "level3") {
            const boxes = document.querySelectorAll(".level1,.level2,.level3");
            const uid = getUIDFromStorage();
            if (uid)
                playGame(boxes, 10, uid);
        }
    }
    catch (error) {
        console.error(error);
    }
}
let hasGameStarted = false;
let first;
let second;
let matchCounter = 0;
let score = 0;
function playGame(boxes, numOfPairs, uid) {
    try {
        boxes.forEach(function (box) {
            // מסדר את הbox במסך בסדר אקראי לפי מספר
            const randomNum = Math.floor(Math.random() * 12);
            box.style.order = randomNum;
            box.addEventListener("click", function Game() {
                if (!hasGameStarted) {
                    startGame();
                    hasGameStarted = true;
                }
                if (!first && !second) {
                    first = box;
                    box.classList.add("show");
                }
                else if (first && !second) {
                    second = box;
                    box.classList.add("show");
                    if (first.innerHTML === second.innerHTML) {
                        // first.style.pointerEvents = 'none';
                        // second.style.pointerEvents = 'none';
                        first = null;
                        second = null;
                        matchCounter++;
                        score += 10;
                        scoreDisplay.textContent = "score:" + score;
                        if (matchCounter === numOfPairs) {
                            stopTimer();
                            setTimeout(() => {
                                winner.style.display = `block`;
                                winner.innerHTML = `<div></div><h1><span>Congratulations!<br><div id="yourScore">Your score is ${score}</div></span>
                <br></h1><a href="scoreBoard.html" id="scoreBtn">Score Board</a><div/>
            `;
                            }, 2000);
                            // update score to Players
                            debugger;
                            const players = getPlayersFromStorage();
                            for (let i = 0; i <= players.length - 1; i++) {
                                if (players[i].uid === uid) {
                                    players[i].score = score;
                                    localStorage.setItem("players", JSON.stringify(players));
                                }
                            }
                        }
                    }
                    else {
                        first.classList.add("hide");
                        second.classList.add("hide");
                        setTimeout(() => {
                            first.classList.remove("show");
                            second.classList.remove("show");
                            first.classList.remove("hide");
                            second.classList.remove("hide");
                            first = null;
                            second = null;
                            score -= 2;
                            if (score < 0)
                                score = 0;
                            scoreDisplay.textContent = "score:" + score;
                        }, 2000);
                    }
                }
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
