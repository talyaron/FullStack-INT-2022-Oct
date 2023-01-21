var _a;
function themes(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.classList = themeName;
}
function setThemes() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        themes('theme-light');
    }
    else {
        themes('theme-dark');
    }
}
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        themes('theme-light');
    }
    else {
        themes('theme-dark');
    }
});
var game = document.querySelector(".gameContainer__firstRow--cell");
var firstRow = document.querySelector(".gameContainer__firstRow");
(_a = firstRow === null || firstRow === void 0 ? void 0 : firstRow.parentElement) === null || _a === void 0 ? void 0 : _a.children;
console.log(firstRow);
var clicks = 0;
function getClicks() {
    clicks++;
    var value = "O";
    if (clicks % 2 == 1) {
        value = "X";
    }
    console.log(value);
    if (game) {
        game.innerHTML = value;
    }
}
