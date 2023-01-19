const myBox = document.querySelector("#myBox");
if (myBox) {
  myBox.addEventListener("click", (event) => {
    console.log(event);
  });
}

// const boxes: any = document.querySelectorAll(".box, .box2");

// console.dir(boxes);

// boxes.forEach((box) => (box.style.backgroundColor = "pink"));

// console.dir([]);
