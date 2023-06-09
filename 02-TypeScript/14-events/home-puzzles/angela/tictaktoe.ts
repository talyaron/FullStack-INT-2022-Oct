function themes(themeName){
    localStorage.setItem('theme',themeName);
    document.documentElement.classList = themeName;
}
function setThemes(){
    if(localStorage.getItem('theme')=== 'theme-dark'){
        themes('theme-light');
    }else {
        themes('theme-dark');
    }
}
(function () {
    if(localStorage.getItem('theme')=== 'theme-dark'){
        themes('theme-light');
    }else {
        themes('theme-dark');
    }
})
const game:HTMLHeadingElement|null = document.querySelector(".gameContainer__firstRow--cell");
let firstRow = document.querySelector(".gameContainer__firstRow");

let clicks = 0;

function getClicks (obj){
    let winner = "false";
    let rowwinner = "true"
    var colwinner = "true"
    clicks++;
    let value = "O"
    if(clicks%2==1){
        value="X"
    }
    obj.innerHTML = value;
    console.log(value);
    
let rowitems = obj.parentElement.children
let colItems = document.getElementsByClassName(obj.className.split(" ")[1])

for(let i=0; i<rowitems.length ; i++){
    try {
        let nextval = i+1;
        if(rowitems[i].innerHTML != rowitems[(nextval)].innerHTML){
            rowwinner="false";
        }
    } catch (error) { 

    }
}

if (rowwinner =="false"){
for(let i=0; i<colItems.length ; i++){
    try {
let nextval = i+1;
        if(colItems[i].innerHTML != colItems[(nextval)].innerHTML){
            
            colwinner="false";
        }
    } catch (error) {
        
    }
}
}

if (colwinner =="true" || rowwinner == "true"){
winner = "true";
}

if (winner == "false"){
    let diLeftWinner = document.querySelectorAll('#a1, #b2, #c3');
    let diRightWinner =document.querySelectorAll('#a3, #b2, #c1');
    if((diLeftWinner[0].innerHTML == diLeftWinner[1].innerHTML &&  diLeftWinner[1].innerHTML == diLeftWinner[2].innerHTML) ||(diRightWinner[0].innerHTML==diRightWinner[1].innerHTML &&  diRightWinner[1].innerHTML == diRightWinner[2].innerHTML)){
     winner="true"

    }
}

if (winner == "true"){
    console.log(`"winner is " ${value} ` );
}

if(clicks>=9 && winner == "false"){
    console.log("draw");
}


}
