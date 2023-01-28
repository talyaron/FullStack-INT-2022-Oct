function animate() {
  wrapper.replaceChildren();
  circleArray.forEach((circle) => {
    circle.draw().update();
  });

  requestAnimationFrame(animate);
}

function generateCircles(
  amount: number,
  locX: number,
  locY: number,
  arr: Circle[]
) {
  for (let i = 0; i < amount; i++) {
    const radius = Math.random() * 50 + 20;
    const locationX = locX;
    const locationY = locY;
    const speedDirectionX = Math.random() * 5 * randomDirection();
    const speedDirectionY = Math.random() * 5 * randomDirection();
    const color = randomColor();
    arr.push(
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
