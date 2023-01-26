const wrapper = document.querySelector(".cardsWrapper") as HTMLDivElement;
const form = document.querySelector(".addUserForm") as HTMLFormElement;
const file = document.querySelector("input[type=file]") as HTMLInputElement;
let imgSrc = "";
const preview = document.querySelector(".preview") as HTMLImageElement;
const errMsg = document.querySelector(
  ".addUserForm__errorMessage"
) as HTMLElement;
const inputs = document.querySelectorAll("input") as NodeListOf<HTMLElement>;


