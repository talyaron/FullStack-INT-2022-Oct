var boxes = document.querySelectorAll(".box , .box2");
console.dir(boxes);
boxes.forEach(function (box) { return box.style.background = getRandomColor(); });
console.dir([]);
var box2 = document.getElementById("myBox");
console.dir(box2);
box2.style.borderRadius = "25%";
