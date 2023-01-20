const myBox: HTMLElement|null = document.querySelector("#myBox");
if (myBox) {
  myBox.addEventListener("click", (event) => {
    console.log(event);
  });
}

const boxs: any = document.querySelectorAll(".box");


boxs.forEach((box) => {
  box.addEventListener("click", (event) => {
    box.innerText = `Is The Sound Of The Police`;
  });
    box.addEventListener("click", (event) => {
      document.querySelector(`#audio`)
    });
  
  box.addEventListener("mouseenter", (event) => {
    box.style.backgroundColor = 'red';
  });
  box.addEventListener("mouseout", (event) => {
    box.style.backgroundColor = 'blue';
  });
});
