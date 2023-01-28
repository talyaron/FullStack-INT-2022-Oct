function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function isIntersect(point: MouseCoordinates, circle: Circle) {
  return (
    Math.sqrt((point.x - circle.lastX) ** 2 + (point.y - circle.lastY) ** 2) <
    circle.radius
  );
}


function handleSecondClickOnCircle(index: number) {
  circleArray.splice(index, 1);
}