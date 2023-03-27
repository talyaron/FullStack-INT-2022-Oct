function hendelClearTheBoard() {
    drawBox();
}
function playInGrid() {
    try {
        var inputAll = document.querySelectorAll(".sodoku__box__input");
        inputAll.forEach(function (inputs, indexInput) {
            inputs.addEventListener('input', function (event) {
                var target = event.target;
                var trueValue = false;
                var checkError = "";
                for (var i = 0; i < 9; i++) {
                    if (target.value === i.toString()) {
                        trueValue = true;
                        checkError = check_grid(target.value, indexInput);
                        if (checkError != "" && checkError != undefined) {
                            target.value = "";
                            checkError = "";
                        }
                        console.log("target.value " + target.value);
                    }
                }
                if (!trueValue) {
                    alert("Only number bettwin 1-9");
                    target.value = "";
                }
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
function check_grid(targetValue, inputIndex) {
    try {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (rowBox[i][j] == inputIndex) {
                    tmpArr[i][j] = parseInt(targetValue);
                    var checkError = check_value(i, j, targetValue, inputIndex);
                    if (checkError != "")
                        return checkError;
                    break;
                }
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function check_value(indexRow, indexCol, targetValue, inputIndex) {
    try {
        var errorChack = "";
        var indexI = 0;
        var indexJ = 0;
        var indexBoxI = 0;
        var indexBoxJ = 0;
        console.log("start");
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (rowBox[i][j] == inputIndex) {
                    indexI = i;
                    indexJ = j;
                }
                if (boxBox[i][j] == inputIndex) {
                    indexBoxI = i;
                    indexBoxJ = j;
                    console.log("j " + j);
                }
            }
        }
        console.log(indexBoxI + " indexBoxI");
        for (var i = 0; i < 9; i++) {
            if ((i != indexI) && (i != indexJ)) {
                if ((tmpArr[indexI][i] == targetValue && tmpArr[indexI][i] != 0) || (tmpArr[i][indexJ] == targetValue && tmpArr[i][indexJ] != 0)) {
                    errorChack = ("Duplicate number in the row or column");
                    console.log("row");
                }
            }
        }
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if ((i != indexBoxI) && (i != indexBoxJ)) {
                    if ((tmpArr[box[indexBoxI].row1][box[indexBoxI].col1] == targetValue) &&
                        (tmpArr[box[indexBoxI].row1][box[indexBoxI].col1] != 0))
                        errorChack = ("Duplicate number in the Box");
                }
            }
        }
        if (errorChack != "") {
            alert(errorChack);
            var checkError = "true";
            return checkError;
        }
    }
    catch (error) {
        console.error(error);
    }
}
