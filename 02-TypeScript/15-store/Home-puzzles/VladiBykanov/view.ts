const wrapper = document.querySelector(".cardsWrapper") as HTMLDivElement;
const form = document.querySelector(".addUserForm") as HTMLFormElement;
const file = document.querySelector("input[type=file]") as HTMLInputElement;
let imgSrc = "";
const preview = document.querySelector(".preview") as HTMLImageElement;
const errMsg = document.querySelector(
  ".addUserForm__errorMessage"
) as HTMLElement;
const inputs = document.querySelectorAll("input") as NodeListOf<HTMLElement>;

setTimeout(() => {
  const imgElements = wrapper.querySelectorAll(
    "img"
  ) as NodeListOf<HTMLElement>;
  imgElements.forEach((ele) =>
    ele.addEventListener("click", () => {
      const target = ele.parentElement;
      const ulEl = target?.querySelector("ul") as HTMLUListElement;
      const img = target?.querySelector('img') as HTMLImageElement;
      toggleDisplay(ulEl, img);
    })
  );
}, 400);
