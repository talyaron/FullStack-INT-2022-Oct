"use strict";
//1.

const img: HTMLHeadingElement | null = document.querySelector("#img");

function getPic() {
  for (let i = 0; i < 5; i++) {
    const image: string | null = prompt("Enter URL address");
    if (image) {
      img?.innerHTML = `<img src='${image}'/>`;
    }
  }
}

getPic();
