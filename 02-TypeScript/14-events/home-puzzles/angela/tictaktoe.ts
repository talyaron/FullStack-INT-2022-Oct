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

firstRow?.parentElement?.children
console.log(firstRow);

let clicks = 0;
function getClicks (){
    clicks++;
    let value = "O"
    if(clicks%2==1){
        value="X"
    }
    console.log(value);
    if(game){
        game.innerHTML = value;
    }
}
