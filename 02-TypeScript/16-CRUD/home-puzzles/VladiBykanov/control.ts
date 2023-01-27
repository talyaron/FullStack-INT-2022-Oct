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
  checkForWin();

  circleArray.forEach((circle) => {
    circle.draw().update();
  });
  requestAnimationFrame(animate);
}

function newGame() {
  // clearInterval(startTimer);
  const amountOfCircles = prompt(
    "How many circles you want to generate?"
  ) as string;
  if (!amountOfCircles || /[a-zA-Z]/.test(amountOfCircles)) return newGame();
  generateCircles(parseInt(amountOfCircles));
  time = parseInt(amountOfCircles) * 10 + 1;
  startTimer = setInterval(() => {
    time--;
    seconds.textContent = time.toString();
  }, 1000);
}
