const myBox: HTMLElement|null = document.querySelector("#myBox");
if (myBox) {
  myBox.addEventListener("click", (event) => {
    // console.log(event);
  });

  myBox.addEventListener("mousemove", (event) => {
    myBox.innerText = `(${event.x},${event.y})`;
  });
}

const boxes: any = document.querySelectorAll(".box, .box2");

console.dir(boxes);

boxes.forEach((box) => {
  box.addEventListener("mousemove", (event) => {
    box.innerText = `(${event.x},${event.y})`;
  });
  box.addEventListener("mouseenter", (event) => {
    box.style.backgroundColor = 'red';
  });
  box.addEventListener("mouseout", (event) => {
    box.style.backgroundColor = 'teal';
  });
});


// console.dir([]);
