var boxes = document.querySelectorAll(".box");
boxes.forEach(function (box) { return box.style.backgroundColor = getRandomColor(); });
