function getRandomBoxColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
}
const boxes:any = document.querySelectorAll(".box")
console.log(boxes);
boxes.forEach(box=>box.style.backgroundColor = getRandomBoxColor())


