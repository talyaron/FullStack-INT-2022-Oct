var boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach(function (box) { return box.style.backgroundColor = getRandomBoxColor(); });
