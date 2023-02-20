var players = /** @class */ (function () {
    function players(name) {
        this.name = name;
    }
    return players;
}());
var player1 = new players("X");
var player2 = new players("O");
var currentPlayer = player1 || player2;
