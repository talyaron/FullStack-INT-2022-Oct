const boxes:any = document.querySelectorAll(".box")
console.log(boxes);
boxes.forEach(box=>box.style.backgroundColor = getRandomBoxColor())


