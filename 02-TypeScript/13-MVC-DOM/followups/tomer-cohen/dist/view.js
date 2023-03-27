var boxes = document.querySelectorAll(".box, .box2");
console.dir(boxes);
boxes.forEach(function (box) { return box.style.backgroundColor = getRandomColor(); });
console.dir([]);
