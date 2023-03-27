function switchPlayers(event) {
    try {
        var box = event.target;
        if (box.textContent !== "") {
            return;
        }
        box.textContent = currentPlayer.name;
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
    catch (error) {
        console.error(error);
    }
}
