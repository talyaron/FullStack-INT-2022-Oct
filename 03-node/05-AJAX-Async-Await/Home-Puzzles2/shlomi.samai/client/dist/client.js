"use strict";
exports.__esModule = true;
function hendlegetplayers() {
    try {
        debugger;
        fetch("/api/get-players")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var players = _a.players;
            try {
                renderPlayers(players);
                if (!players)
                    throw new Error("couldnt get players");
            }
            catch (error) {
                console.error(Error);
            }
        });
    }
    catch (error) {
    }
}
function renderPlayers(players) {
    try {
        if (!players)
            throw new Error("could'nt find players array");
        var html = players.map(function (player) {
            return "<div class=\"playerCard\"></div>\n        <img src=\"" + player.src + "\" alt=\"\">\n        <p>" + player.name;
        }).join("");
        var userElement = document.querySelector(".playersConteiner");
        if (!userElement)
            throw new Error("coundnt find users element on DOM");
        userElement.innerHTML = html;
    }
    catch (error) {
        console.error(Error);
    }
}
