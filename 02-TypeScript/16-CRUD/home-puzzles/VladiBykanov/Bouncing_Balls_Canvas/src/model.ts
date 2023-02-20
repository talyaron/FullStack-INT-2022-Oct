const circleArray: Circle[] = [];

interface MouseCoordinates {
  x: number;
  y: number;
}

const mouseLocation: MouseCoordinates = { x: 0, y: 0 };

class Circle {
  private uid: number;
  // private lineWidth: number;
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
    // this.lineWidth = 0;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.lastX, this.lastY, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    return this;
  }
  update() {
    if (
      this.lastX + this.radius * 1.2 > window.innerWidth ||
      this.lastX - this.radius < 0
    ) {
      this.speedDirectionX = -this.speedDirectionX;
    }
    if (
      this.lastY + this.radius * 1.2 > window.innerHeight ||
      this.lastY - this.radius < 0
    ) {
      this.speedDirectionY = -this.speedDirectionY;
    }

    this.lastX += this.speedDirectionX;
    this.lastY += this.speedDirectionY;
  }
  handleClick() {
    const newColor = "red";
    const index = circleArray.findIndex((circle) => circle.uid == this.uid);
    if (this.color != newColor) {
      score++;
      liveScore.textContent = score.toString();
      tinkAudio.currentTime = 0;
      tinkAudio.play();
      return (this.color = newColor);
    }
    handleSecondClickOnCircle(index);
  }
}
