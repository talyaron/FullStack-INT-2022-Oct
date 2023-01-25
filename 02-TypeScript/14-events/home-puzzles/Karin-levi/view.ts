const myBox: HTMLElement|null = document.querySelector(".box");
if (myBox) {
  myBox.addEventListener("click", (event) => {
    window.alert("You pressed me");
  });
}
