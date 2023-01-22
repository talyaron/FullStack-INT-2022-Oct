const myBox: HTMLElement|null = document.querySelector("#myBox");
if (myBox) {
  myBox.addEventListener("click", (event) => {
    console.log(event);
  });
}

const boxs: any = document.querySelectorAll(".box");

const img = document.querySelector("img"); 

boxs.forEach((box) => {
  box.addEventListener("click",(event) => {
    box.style.backgroundImage= `url(https://img.lovepik.com/free-png/20211105/lovepik-chess-png-image_400298812_wh1200.png)`;
    box.style.backgroundSize= `100px 100px`;

  });
});