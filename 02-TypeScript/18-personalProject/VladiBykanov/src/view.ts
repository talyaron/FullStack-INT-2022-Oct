const mazeDiv = document.querySelector(".maze") as HTMLDivElement;
const scoreEl = document.querySelector("#score") as HTMLSpanElement;

const winMessage = document.querySelector(".winMessage") as HTMLHeadElement;
const loseMessage = document.querySelector(".loseMessage") as HTMLHeadElement;
const finalScore = document.querySelectorAll(
  ".finalScore"
) as NodeListOf<HTMLSpanElement>;

const backToStartingPageBtn = document.querySelectorAll(
  ".backToStartingPageBtn"
) as NodeListOf<HTMLButtonElement>;
const tryAgainBtn = document.querySelectorAll(
  ".tryAgainBtn"
) as NodeListOf<HTMLButtonElement>;
const scoreboardBtn = document.querySelectorAll(
  ".scoreboardBtn"
) as NodeListOf<HTMLButtonElement>;

const loginPage = document.querySelector(".loginPage") as HTMLDivElement;
const welcomePage = document.querySelector(".welcomePage") as HTMLDivElement;
const userNameInput = document.querySelector("#userName") as HTMLInputElement;
const passwordInput = document.querySelector("#password") as HTMLInputElement;

const mapImgElement = document.querySelectorAll(
  ".mapImg"
) as NodeListOf<HTMLImageElement>;

let usersList: User[] = [];

backToStartingPageBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "startPage.html";
    localStorage.removeItem("userChoice");
  });
});

