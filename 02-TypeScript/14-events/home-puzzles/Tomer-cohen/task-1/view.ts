const myBox: HTMLElement|null = document.querySelector("#myBox");
if (myBox) {
  myBox.addEventListener("click", (event) => {
    console.log(event);
  });
}

const boxs: any = document.querySelectorAll(".box");


boxs.forEach((box) => {
  box.addEventListener("click", (event) => {
    
    box.innerHTML =alert(`Turn up the volume...!
      That's the sound of the police`)
      box.innerText = `Is The Sound Of The Police`;
    
  });
  box.addEventListener("click", (event) => {
    audio.play();
    });
  
  box.addEventListener("mouseenter", (event) => {
    box.style.backgroundColor = 'red';
  });
  box.addEventListener("mouseout", (event) => {
    box.style.backgroundColor = 'blue';
  });
});
