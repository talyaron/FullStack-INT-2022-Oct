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
var clicks = 0;
function getClicks(obj) {
    var winner = "false";
    var rowwinner = "true";
    var colwinner = "true";
    clicks++;
    var value = "O";
    if (clicks % 2 == 1) {
        value = "X";
    }
    obj.innerHTML = value;
    console.log(value);
    var rowitems = obj.parentElement.children;
    var colItems = document.getElementsByClassName(obj.className.split(" ")[1]);
    for (var i = 0; i < rowitems.length; i++) {
        try {
            var nextval = i + 1;
            if (rowitems[i].innerHTML != rowitems[(nextval)].innerHTML) {
                rowwinner = "false";
            }
        }
        catch (error) {
        }
    }
    if (rowwinner == "false") {
        for (var i = 0; i < colItems.length; i++) {
            try {
                var nextval = i + 1;
                if (colItems[i].innerHTML != colItems[(nextval)].innerHTML) {
                    colwinner = "false";
                }
            }
            catch (error) {
            }
        }
    }
    if (colwinner == "true" || rowwinner == "true") {
        winner = "true";
    }
    if (winner == "false") {
        var diLeftWinner = document.querySelectorAll('#a1, #b2, #c3');
        var diRightWinner = document.querySelectorAll('#a3, #b2, #c1');
        if ((diLeftWinner[0].innerHTML == diLeftWinner[1].innerHTML && diLeftWinner[1].innerHTML == diLeftWinner[2].innerHTML) || (diRightWinner[0].innerHTML == diRightWinner[1].innerHTML && diRightWinner[1].innerHTML == diRightWinner[2].innerHTML)) {
            winner = "true";
        }
    }
    if (winner == "true") {
        console.log("\"winner is \" " + value + " ");
    }
    if (clicks >= 9 && winner == "false") {
        console.log("draw");
    }
}
