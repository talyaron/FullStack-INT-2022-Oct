const box: HTMLElement | null = document.querySelector("#box");

box.addEventListener("click", (event) => {
  box.style.backgroundColor = "red";
});

box.addEventListener("click", (event) => {   
  alert (`you shuldnt have preesed`)
});