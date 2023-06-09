const boxes: any = document.querySelectorAll(".box");

boxes.forEach((box) => box.innerHTML+=`<div class="box__little_box"></div>`);
