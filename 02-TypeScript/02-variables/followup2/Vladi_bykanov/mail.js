
let btnClick = document.getElementById("count")
let btnReser = document.getElementById("")
let count = 0;

function increment(){
    count++;
    btnClick.innerText = count;
}

function reset(){
    btnClick.innerText = 0;
}