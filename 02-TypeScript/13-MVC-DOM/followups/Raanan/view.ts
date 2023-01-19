const boxes: any = document.querySelectorAll(".box , .box2");

console.dir(boxes);

boxes.forEach(box => box.style.background = getRandomColor());

console.dir([]);

const box2: any = document.getElementById("myBox");

console.dir(box2);

box2.style.borderRadius = "25%";