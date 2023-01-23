const boxes: any = document.querySelectorAll(".box");
const box1_1: HTMLElement | null= document.querySelector("#box-1_1");
const box1_2: HTMLElement | null = document.querySelector("#box-1_2");
const box1_3: HTMLElement | null = document.querySelector("#box-1_3");
const box2_1: HTMLElement | null = document.querySelector("#box-2_1");
const box2_2: HTMLElement | null = document.querySelector("#box-2_2");
const box2_3: HTMLElement | null = document.querySelector("#box-2_3");
const box3_1: HTMLElement | null = document.querySelector("#box-3_1");
const box3_2: HTMLElement | null = document.querySelector("#box-3_2");
const box3_3: HTMLElement | null = document.querySelector("#box-3_3");
const playerX: any = document.querySelector("#player_x");
const playerO: any = document.querySelector("#player_o");
const winner: any = document.querySelector(".nav-bar__winner");

boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    if (playerO.checked) {
      box.style.backgroundColor = `pink`;
      box.style.backgroundImage= `url(./img/o-tictactoe.png)`;
      playerX.checked = true;
      box.style.pointerEvents = `none`;
      didIWin();
    } else if (playerX.checked) {
      box.style.backgroundColor = `blue`;
      box.style.backgroundImage= `url(./img/x-tictactoe.png)`;
      playerO.checked = true;
      box.style.pointerEvents = `none`;
      didIWin();
    }
  });
});



