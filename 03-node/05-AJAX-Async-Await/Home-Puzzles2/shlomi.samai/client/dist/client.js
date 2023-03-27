"use strict";
exports.__esModule = true;
function hendlegetplayers() {
    try {
        fetch("/api/get-players")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var players = _a.players;
            try {
                console.log(players);
                // if(!players) throw new Error("couldnt get players")
            }
            catch (error) {
                console.error(Error);
            }
        });
    }
    catch (error) {
    }
}
