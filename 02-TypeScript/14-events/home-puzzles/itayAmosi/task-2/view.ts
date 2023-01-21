const myBox: HTMLElement|null = document.querySelector("#myBox");
if (myBox) {
  myBox.addEventListener("click", (event) => {
    console.log(event);
  });
}

const boxs: any = document.querySelectorAll(".box");

const img = document.querySelector("img"); 

boxs.forEach((box) => {
  box.addEventListener("click", (event) => {
    box.style.img = "https://picsum.photos/200/301";
  });
});