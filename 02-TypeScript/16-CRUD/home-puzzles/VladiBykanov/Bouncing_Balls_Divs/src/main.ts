const wrapper = document.querySelector(".playground") as HTMLDivElement;
const circleArray: Circle[] = [];


window.addEventListener("click", (e) => {
    [mouseLocation.x, mouseLocation.y] = [e.x, e.y];
    circleArray.forEach((circle) => {
      if (isIntersect(mouseLocation, circle)) {
        circle.handleClick();
        circle.speedDirectionX = 2;
        circle.speedDirectionY = 2;
      }
    });
  });


generateCircles(10);
animate();

// const ball = document.createElement('div')
// ball.classList.add('ball')
// wrapper.append(ball)