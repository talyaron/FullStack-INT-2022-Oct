renderScoreBoard(getPlayersFromStorage());
function renderScoreBoard(players) {
    try {
        console.log(players);
        if (!players || !Array.isArray(players))
            throw new Error("players is not an array");
        players.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
        const page = players.map((player) => {
            return `<div class="line" >
                <i class="fa-solid fa-arrow-right"></i>
                <img class="small_logo" src='${player.file}'/>
                <div class="line__player_name">${player.name}</div>
                <div class="line__player_score">${player.score} </div>
                </div>`;
        }).join(" ");
        const html = document.querySelector(".scoreBoard");
        if (html !== null) {
            html.innerHTML = page;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function getPlayersFromStorage() {
    try {
        const emptyPlayers = [];
        const playersString = localStorage.getItem("players");
        if (!playersString)
            return emptyPlayers;
        const players = JSON.parse(playersString);
        return (players);
    }
    catch (error) {
        console.error(error);
        return (undefined);
    }
}
function getUIDFromStorage() {
    try {
        const emptyUID = "";
        const uidFromStorage = localStorage.getItem("uid");
        if (!uidFromStorage)
            return emptyUID;
        return (uidFromStorage);
    }
    catch (error) {
        console.error(error);
        return (undefined);
    }
}
