
function randomNumberColors(){
    const numbers:any = document.querySelectorAll(".number")

    for (let i = 0 ; i < numbers.length ; i++){
        numbers[i].style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
}

randomNumberColors();