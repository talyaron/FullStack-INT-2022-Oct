var playerInput = document.querySelectorAll(".playbox__gridThing");
console.log(ticTacToePositionSaver.length);
playerInput.forEach(function (element) {
    element.addEventListener('click', function (event) {
        if (element.innerHTML != "X" && element.innerHTML != "O") {
            switch (turnCount % 2) {
                case 1:
                    element.innerHTML = "O";
                    turnCount++;
                    if (winCon()) {
                        alert('player 1 won');
                        element.innerHTML = "O";
                        setTimeout(reload, 5);
                    }
                    break;
                default:
                    element.innerHTML = "X";
                    turnCount++;
                    //should write 'x' before it alerts
                    if (winCon()) {
                        alert("player 1 won");
                        setTimeout(reload, 5);
                    }
                    break;
            }
        }
    });
});
