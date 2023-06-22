function handleGetPlayers() {
    console.log("test");
    try {
        fetch("/api/player/get-players")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var Players = _a.Players;
            try {
                if (!Players)
                    throw new Error("didnt find Players");
                console.log(Players);
                renderPlayers(Players);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderPlayers(players) {
    try {
        if (!players)
            throw new Error("No players");
        var teams_1 = {
            "Team 1": [],
            "Team 2": []
        };
        players.forEach(function (player, index) {
            var team = index % 2 === 0 ? "Team 1" : "Team 2";
            teams_1[team].push(player);
        });
        renderTeam("team1-positions", "Team 1", teams_1["Team 1"]);
        renderTeam("team2-positions", "Team 2", teams_1["Team 2"]);
    }
    catch (error) {
        console.error(error);
    }
}
function renderTeam(containerId, teamName, players) {
    try {
        var container = document.querySelector("#" + containerId);
        if (!container)
            throw new Error("Couldn't find container element with id " + containerId);
        var positions_1 = {};
        players.forEach(function (player) {
            if (!positions_1[player.position]) {
                positions_1[player.position] = [];
            }
            positions_1[player.position].push(player.userName);
        });
        var positionsHtml = Object.keys(positions_1)
            .map(function (position) {
            var playersHtml = positions_1[position]
                .map(function (playerName) { return "<div class=\"player\">" + playerName + "</div>"; })
                .join("");
            return "<div class=\"position\">\n                    <h3>" + position + "s</h3>\n                    " + playersHtml + "\n                  </div>";
        })
            .join("");
        container.innerHTML = "\n        \n        <div class=\"positions-container\">" + positionsHtml + "</div>\n      ";
    }
    catch (error) {
        console.error(error);
    }
}
