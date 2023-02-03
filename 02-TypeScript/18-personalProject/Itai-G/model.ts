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
    if (keysPressed[keyUp]) {
      this.pos.y -= this.velocity.y;
    }
    if (keysPressed[keyDown]) {
      this.pos.y += this.velocity.y;
    }
  }

  draw() {
    ctx.fillStyle = "#ggff00";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }
}

const ball = new Ball(vec2(200, 200), vec2(5, 5), 20);
const paddle1 = new Paddle(vec2(0, 50), vec2(0, 0), 20, 160);
const paddle2 = new Paddle(vec2(canvas.width - 20, 80), vec2(0, 0), 20, 160);
const keysPressed = [];
const keyUp = 38;
const keyDown = 40;

window.addEventListener("keyup", function (e) {
  keysPressed[e.key] = false;
});

window.addEventListener("keydown", function (e) {
  keysPressed[e.key] = true;
});
