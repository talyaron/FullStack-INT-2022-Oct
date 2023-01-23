// level 2
const button = document.getElementById("ss");
console.log(25);

button?.addEventListener("click", (event) => {
  console.log(36);
  const box = document.getElementById("box");

  if (box != undefined) {
    box.style.backgroundColor = "red";
  }
});
