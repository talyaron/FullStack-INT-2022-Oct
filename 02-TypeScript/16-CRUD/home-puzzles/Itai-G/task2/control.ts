let score = 0;
let xPos: number;
let yPos : number;
const gameWidth = document.querySelector("#game").clientWidth;
const gameHeight = document.querySelector("#game").clientHeight;


function generateBalloon() {
  var balloon = document.createElement("div");
  balloon.classList.add("balloon");
  xPos = Math.random() * (gameWidth - 50);
  yPos = Math.random() * (gameHeight - 80);
  balloon.style.left = xPos + "px";
  balloon.style.top = yPos + "px";
  balloon.addEventListener("click", pop);

  document.querySelector("#game").appendChild(balloon);
  balloons.push(balloon);
}


function pop() {
  this.style.display = "none";
  score++;
  document.querySelector("#score").innerHTML = score;

  let index = balloons.indexOf(this);
  balloons.splice(index, 1);
}

for (let i = 0; i < 20; i++) {
  generateBalloon();
}
function moveBalloons() {
  for (let i = 0; i < balloons.length; i++) {
    let balloon = balloons[i];

    let xPos = parseInt(balloon.style.left);
    let yPos = parseInt(balloon.style.top);

    if (xPos + 50 >= gameWidth || xPos <= 0) {
      balloon.xVel = -balloon.xVel;
    }
    if (yPos + 80 >= gameHeight || yPos <= 0) {
      balloon.yVel = -balloon.yVel;
    }

    xPos += xVel;
    yPos += yVel;
    balloon.style.left = xPos + "px";
    balloon.style.top = yPos + "px";
  }
}

setInterval(generateBalloon , 2000)
setInterval(moveBalloons, 50);