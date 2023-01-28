function generateCircles(amount: number) {
  for (let i = 0; i < amount; i++) {
    const radius = Math.random() * 50 + 20;
    const locationX = Math.random() * (window.innerWidth - radius * 2) + radius;
    const locationY =
      Math.random() * (window.innerHeight - radius * 2) + radius;
    const speedDirectionX = Math.random() * 5;
    const speedDirectionY = Math.random() * 5;
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
  checkForWin();

  circleArray.forEach((circle) => {
    circle.draw().update();
  });
  requestAnimationFrame(animate);
}

function newGame() {
  score = 0;
  const amountOfCircles = prompt(
    "How many circles you want to generate?"
  ) as string;
  if (!amountOfCircles || /[a-zA-Z]/.test(amountOfCircles)) return newGame();
  generateCircles(parseInt(amountOfCircles));
  startTimer = setInterval(() => {
    time--;
    seconds.textContent = time.toString();
  }, 1000);
}
