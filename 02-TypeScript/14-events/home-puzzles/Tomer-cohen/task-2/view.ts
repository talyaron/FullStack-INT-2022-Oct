const divBox: HTMLElement|null = document.querySelector(".box");
if (divBox) {
  divBox.addEventListener("click", (event) => {
    console.log(event);
  });
}

const boxs:any = document.querySelectorAll(".box");


boxs.forEach((box) => {
  box.addEventListener("click",(event) => {
    box.style.backgroundImage= `url(https://img.lovepik.com/free-png/20211105/lovepik-chess-png-image_400298812_wh1200.png)`;
    box.style.backgroundSize= `100px 100px`;


  });
});
const divp1: HTMLElement|null = document.querySelector(".p1");
if (divp1) {
  divp1.addEventListener("click", (event) => {
    console.log(event);
  });
}

const p1: any = document.querySelectorAll(".p1")

p1.forEach((box1) => {
  box1.addEventListener("click",(event) => {
    box1.style.backgroundImage= `url(https://media.istockphoto.com/id/173838005/photo/black-pawn.jpg?s=612x612&w=0&k=20&c=5C-60Q9jSyakRXItxs47mrCkKKECKTcPiIGSD7RYC5U=)`;
    box1.style.backgroundSize= `100px 100px`;

  });
});