"use strict";
///////////////////////Players////////////////////
exports.__esModule = true;
function hendlegetplayers() {
    try {
        fetch("/API/Players/get-players")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var players = _a.players;
            try {
                renderPlayers(players);
                console.log(players);
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
            return "<div class=\"playerCard\">\n        <img src=\"" + player.src + "\" alt=\"NA\">\n        <p contenteditable oninput=\"handlePlayerNameUpdate(event, '" + player._id + "')\">" + player.name + "</p>\n        <button onclick='handleDeletePlayer(\"" + player._id + "\")'>DELETE</button>\n        </div>";
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
        fetch("/API/Players/add-players", {
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
        fetch("/api/Players/delete-player", {
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
        fetch("/api/Players/update-player-name", {
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
function hendleGetTeams() {
    try {
        fetch("/API/Teams/get-teams")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var teams = _a.teams;
            try {
                renderTeams(teams);
                console.log(teams);
                if (!teams)
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
function renderTeams(teams) {
    try {
        if (!teams)
            throw new Error("could'nt find teams array");
        var html = teams.map(function (team) {
            return "<div class=\"playerCard\">\n        <img src=\"" + team.src + "\" alt=\"NA\">\n        <p contenteditable oninput=\"handleTeamNameUpdate(event, '" + team._id + "')\">" + team.pastTeamsName + "</p>\n        <button onclick='handleDeleteTeam(\"" + team._id + "\")'>DELETE</button>\n        </div>";
        }).join("");
        var userElement = document.querySelector(".teamsConteiner");
        if (!userElement)
            throw new Error("coundnt find teams element on DOM");
        userElement.innerHTML = html;
    }
    catch (error) {
        console.error(Error);
    }
}
function hendleAddTeam(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var src = ev.target.elements.src.value;
        if (!name)
            throw new Error("No name");
        if (!src)
            throw new Error("No src");
        var newTeam = { name: name, src: src };
        //send to server
        fetch("/API/Teams/add-team", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTeam)
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
function handleDeleteTeam(_id) {
    try {
        fetch("/api/Teams/delete-team", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: _id })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var teams = _a.teams;
            renderTeams(teams);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleTeamNameUpdate(ev, _id) {
    try {
        console.log(_id);
        var name = ev.target.textContent;
        fetch("/api/Teams/update-team-name", {
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
////////////////////queries/////////////
function hendleGetTeamsOfPlayer(ev) {
    try {
        ev.preventDefault();
        var teamName = ev.target.elements.teamName.value;
        if (!teamName)
            throw new Error("No name");
        var newTeam = { teamName: teamName };
        //send to server
        fetch("/API/Teams/hendle-Get-Teams-Of-Player?team=" + teamName, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTeam)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
// function hendleAddTeam(ev){
//   try {
//       ev.preventDefault();
//       const name = ev.target.elements.name.value;
//       const src = ev.target.elements.src.value;
//       if (!name) throw new Error("No name");
//       if (!src) throw new Error("No src");
//       const newTeam= {name, src}
//       //send to server
//       fetch("/API/Teams/add-team",{
//           method:"POST",
//           headers:{
//               Accept: "application/json",
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(newTeam), })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//   } catch (error) {
//       console.error(Error) 
//   }
// }
