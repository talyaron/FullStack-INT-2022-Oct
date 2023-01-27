const canvas = document.querySelector(".playground") as HTMLCanvasElement;

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth - 10;
  canvas.height = window.innerHeight - 10;
});

class Circle {
  private uid: number;
  private lineWidth: number;
  constructor(
    public lastX,
    public lastY,
    public speedDirectionX,
    public speedDirectionY,
    public radius,
    public color
  ) {
    this.lastX = lastX;
    this.lastY = lastY;
    this.speedDirectionX = speedDirectionX;
    this.speedDirectionY = speedDirectionY;
    this.radius = radius;
    this.color = color;
    this.uid = Math.random() * 1000000;
    this.lineWidth = 0;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.lastX, this.lastY, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "rgba(0, 0, 0, 0.236)";
    ctx.lineWidth = this.lineWidth;
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    return this;
  }
  update() {
    if (
      this.lastX + this.radius > window.innerWidth ||
      this.lastX - this.radius < 0
    ) {
      this.speedDirectionX = -this.speedDirectionX;
    }
    if (
      this.lastY + this.radius > window.innerHeight ||
      this.lastY - this.radius < 0
    ) {
      this.speedDirectionY = -this.speedDirectionY;
    }

    this.lastX += this.speedDirectionX;
    this.lastY += this.speedDirectionY;
  }
  handleClick() {
    const newColor = "red";
    if (this.color != newColor) {
      this.color = newColor;
      return (this.lineWidth = 10);
    }
    const index = circleArray.findIndex((circle) => circle.uid == this.uid);
    circleArray.splice(index, 1);
  }
}

interface MouseCoordinates {
  x: number;
  y: number;
}

const mouseLocation: MouseCoordinates = { x: 0, y: 0 };

window.addEventListener("click", (e) => {
  [mouseLocation.x, mouseLocation.y] = [e.x, e.y];
  circleArray.forEach((circle) => {
    if (isIntersect(mouseLocation, circle)) {
      circle.handleClick();
      circle.speedDirectionX += 10;
      circle.speedDirectionY += 10;
    }
  });
});

function isIntersect(point: MouseCoordinates, circle: Circle) {
  return (
    Math.sqrt((point.x - circle.lastX) ** 2 + (point.y - circle.lastY) ** 2) <
    circle.radius
  );
}

function generateCircles(amount: number) {
  for (let i = 0; i < amount; i++) {
    const radius = Math.random() * 50 + 20;
    const locationX = Math.random() * (window.innerWidth - radius * 2) + radius;
    const locationY =
      Math.random() * (window.innerHeight - radius * 2) + radius;
    const speedDirectionX = Math.random() * 1;
    const speedDirectionY = Math.random() * 1;
    const color = randomColor();
    circleArray.push(
      new Circle(
        locationX,
        locationY,
        speedDirectionX,
        speedDirectionY,
        radius,
        color
      )
    );
  }
}

function animate() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  circleArray.forEach((circle) => {
    circle.draw().update();
  });
  requestAnimationFrame(animate);
}

generateCircles(10);
animate();
