let btns = document.querySelectorAll("tic_tac_toe__btn");

// X=bibi
let x = document.getElementsByClassName(
  "tic_tac_toe__btn__x"
) as HTMLCollectionOf<HTMLElement>;

// O=lapid
let o = document.getElementsByClassName(
  "tic_tac_toe__btn__o"
) as HTMLCollectionOf<HTMLElement>;

//The squares of X circle each numbered div
let Cube1 = document.querySelector(".tic_tac_toe__btn_0") as HTMLDivElement;
let Cube2 = document.querySelector(".tic_tac_toe__btn_1") as HTMLDivElement;
let Cube3 = document.querySelector(".tic_tac_toe__btn_2") as HTMLDivElement;
let Cube4 = document.querySelector(".tic_tac_toe__btn_3") as HTMLDivElement;
let Cube5 = document.querySelector(".tic_tac_toe__btn_4") as HTMLDivElement;
let Cube6 = document.querySelector(".tic_tac_toe__btn_5") as HTMLDivElement;
let Cube7 = document.querySelector(".tic_tac_toe__btn_6") as HTMLDivElement;
let Cube8 = document.querySelector(".tic_tac_toe__btn_7") as HTMLDivElement;
let Cube9 = document.querySelector(".tic_tac_toe__btn_8") as HTMLDivElement;

//result of game
let result = document.querySelector(".result__btn") as HTMLButtonElement;
