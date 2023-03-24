"use strict";
exports.__esModule = true;
function hendlegetplayers(ev) {
    try {
        fetch("/api/get-players")
            .then(function (res) { res.json(); })
            .then(function (_a) {
            var players = _a.players;
            try {
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
