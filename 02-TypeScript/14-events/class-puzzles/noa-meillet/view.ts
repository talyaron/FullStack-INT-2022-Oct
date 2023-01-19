const boxes: any = document.querySelectorAll(".box");
boxes.forEach((box) => box.innerHTML+=`<div class="box__little_box"></div>`);

const boxesParagraph = document.querySelectorAll(".box2__p");
boxesParagraph.forEach (paragraph => {paragraph.addEventListener('copy', (event) => {alert('You cant copy this text!') });});
boxesParagraph.forEach (paragraph => {paragraph.addEventListener('cut', (event) => {alert('You cant cut this text!') });});

document.addEventListener('keyup', (event) => {
    var keyName = event.key;
    var keyCode = event.code;
    alert(`Keyup: The key pressed is ${keyName} and its code value is ${keyCode}`);
  }, false);





