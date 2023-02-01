const circleArray: Circle[] = [];

const explosionArr: Circle[] = [];
interface MouseCoordinates {
  x: number;
  y: number;
}

const mouseLocation: MouseCoordinates = { x: 0, y: 0 };
class Circle {
  private uid: number;
  private boxShadow: string;
  // give them a type.
  constructor(
    public lastX: number,
    public lastY: number,
    public speedDirectionX: number,
    public speedDirectionY: number,
    public radius: number,
    public color: string
  ) {
    this.lastX = lastX;
    this.lastY = lastY;
    this.speedDirectionX = speedDirectionX;
    this.speedDirectionY = speedDirectionY;
    this.radius = radius;
    this.color = color;
    this.uid = Math.random() * 1000000;
    this.boxShadow = "0 0 10px white";
  }
  draw() {
    const newBall = document.createElement("div") as HTMLDivElement;
    newBall.classList.add("ball");
    newBall.style.left = `${this.lastX}px`;
    newBall.style.top = `${this.lastY}px`;
    newBall.style.width = `${this.radius}px`;
    newBall.style.background = `${this.color}`;
    newBall.style.boxShadow = `${this.boxShadow}`;
    wrapper.append(newBall);
    return this;
  }
  update() {
    if (this.lastX + this.radius > wrapper.offsetWidth || this.lastX < 0) {
      this.speedDirectionX = -this.speedDirectionX;
    }
    if (this.lastY + this.radius > wrapper.offsetHeight || this.lastY < 0) {
      this.speedDirectionY = -this.speedDirectionY;
    }

    this.lastX += this.speedDirectionX;
    this.lastY += this.speedDirectionY;
  }
  handleClick() {
    const newColor =
      "radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(255, 0, 0, 1) 52%)";

      //you should able to find it by the this keyword
    const index = circleArray.indexOf(this)
    if (this.color != newColor) {
      tinkAudio.play();
      this.boxShadow = "0 0 30px black";
      return (this.color = newColor);
    }
    handleSecondClickOnCircle(index);
    generateCircles(50, this.lastX, this.lastY, explosionArr, true);
    setTimeout(() => explosionArr.splice(0), 500);
  }
}
