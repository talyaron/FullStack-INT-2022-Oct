class Ball {
  constructor(
    public pos: { x: number; y: number },
    public velocity: { x: number; y: number },
    public radius: number
  ) {
    this.pos = pos;
    this.velocity = velocity;
    this.radius = radius;
  }

  Update() {
    this.pos.x += this.velocity.x;
    this.pos.y += this.velocity.y;
  }

  draw() {
    ctx.fillStyle = "#33ff00";
    ctx.strokeStyle = "#33ff00";
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}

class Paddle {
  constructor(
    public pos: { x: number; y: number },
    public velocity: { x: number; y: number },
    public width: number,
    public height: number
  ) {
    this.pos = pos;
    this.velocity = velocity;
    this.width = width;
    this.height = height;
  }
  Update() {
    if (isDownKeyPressed) {
      this.pos.y -= this.velocity.y;
    }
    if (isUpKeyPressed) {
      this.pos.y += this.velocity.y;
    }
  }

  draw() {
    ctx.fillStyle = "#ggff00";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }
}

const ball = new Ball({ x: 200, y: 200 }, { x: 5, y: 5 }, 20);
const paddle1 = new Paddle({ x: 0, y: 50 }, { x: 0, y: 10 }, 20, 160);
const paddle2 = new Paddle({ x: canvas.width - 20, y: 80 }, { x: 0, y: 10 }, 20, 160);
let isUpKeyPressed = false;
let isDownKeyPressed = false;

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 38) {
    isUpKeyPressed = true;
    isDownKeyPressed = false;
  } else if (e.keyCode === 40) {
    isUpKeyPressed = false;
    isDownKeyPressed = true;
  }
});

window.addEventListener("keyup", function (e) {
  if (e.keyCode === 38) {
  isUpKeyPressed = false;
  } else if (e.keyCode === 40) {
  isDownKeyPressed = false;
  }
  });