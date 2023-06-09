var numBox = 81;
var indexRowBox = 1;
var indexRow = 0;
var indexCol = 0;
var grayBox = true;
function drawBox() {
    try {
        console.log(tmpArr);
        var html = "";
        if (document.querySelector(".sodoku__box__input") != null) {
            document.querySelector(".sodoku__box__input").remove;
        }
        for (var i = 0; i < numBox; i++) {
            var easyStr = "";
            if ((tmpArr[indexRow][indexCol]) != 0)
                easyStr = (tmpArr[indexRow][indexCol]).toString();
            if (((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
                ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
                ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 27 && i < 53)) ||
                ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
                ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)) {
                html += "<input type=\"number\"  id = \"c" + (i + 1) + "\" class=\"sodoku__box__input\" value=\"" + easyStr + "\">";
            }
            else {
                html += "<input type=\"number\" id = \"c" + (i + 1) + "\" class=\"sodoku__box__input sodoku__box__inputWhite\" value=\"" + easyStr + "\">";
            }
            if (i == 8 || i == 17 || i == 26 || i == 35 || i == 44 || i == 53 || i == 62 || i == 71) {
                indexRow++;
            }
            indexCol++;
            if (indexCol == 9)
                indexCol = 0;
        }
        var box = document.querySelector(".sodoku__box");
        box.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
