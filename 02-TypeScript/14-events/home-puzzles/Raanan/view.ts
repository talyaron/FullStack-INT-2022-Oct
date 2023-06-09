const box: HTMLElement|null = document.querySelector(".box");
if (box) {
  box.addEventListener("click", (event) => {
    box.style.backgroundColor = 'black';  });

  box.addEventListener("click", (event) => {
    box.innerText = `you presed me`;
  });
}

