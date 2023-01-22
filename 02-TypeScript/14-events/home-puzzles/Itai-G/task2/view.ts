const cell: HTMLElement|null = document.querySelector(".cell");
if (cell) {
  cell.addEventListener("click", (event) => {
    console.log(event);
  });
}

const boxs: any = document.querySelectorAll(".cell");

boxs.forEach((box) => {
  box.addEventListener("click",(event) => {
    box.style.backgroundImage= `url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Chess_pawn_0968.jpg/1200px-Chess_pawn_0968.jpg)`;
    box.style.backgroundSize= `100px 100px`;

  });
});