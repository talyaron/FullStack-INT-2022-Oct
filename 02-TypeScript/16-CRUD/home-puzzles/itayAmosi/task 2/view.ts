

const myBox: HTMLElement|null = document.querySelector(".balloons");
if (myBox) {
  myBox.addEventListener("click", (event) => {
    console.log(event);
  });
}

const balloon: any = document.querySelectorAll(".balloons, .box");

// console.dir(boxes);


balloon.forEach((box) => {
  box.addEventListener("click", (event) => {
    box.style.backgroundColor = getRandomColor();
  });
  box.addEventListener("dblclick", (event) => {
    box.remove(event);
  });
});