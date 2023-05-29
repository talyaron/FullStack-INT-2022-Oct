"use strict";
exports.__esModule = true;
function hendlegetplayers() {
    try {
        fetch("/api/players/get-players")
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
            return "<div class=\"playerCard\">\n        <img src=\"" + player.src + "\" alt=\"\">\n        <p contenteditable oninput=\"handlePlayerNameUpdate(event, '" + player._id + "')\">" + player.name + "</p>\n        <button onclick='handleDeletePlayer(\"" + player._id + "\")'>DELETE</button>\n        </div>";
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
function hendleAddPlayer(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var url = ev.target.elements.url.value;
        if (!name)
            throw new Error("No name");
        if (!url)
            throw new Error("No src");
        var newPlayer = { name: name, url: url };
        //send to server
        fetch("/api/players/add-players", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlayer)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(Error);
    }
}
function handleDeletePlayer(_id) {
    try {
        console.log(_id);
        fetch("/API/Players/delete-player", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: _id })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var players = _a.players;
            renderPlayers(players);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handlePlayerNameUpdate(ev, _id) {
    try {
        console.log(_id);
        var name = ev.target.textContent;
        fetch("/api/players/update-player-name", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, _id: _id })
        });
    }
    catch (error) {
        console.error(error);
    }
}
