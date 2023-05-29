"use strict";
exports.__esModule = true;
exports.PlayerModel = exports.goalkeeperPlayersModel = exports.midfilderPlayersModel = exports.attackerPlayersModel = exports.defenderPlayersModel = exports.goalkeeperPlayers = exports.midfilderPlayers = exports.attackerPlayers = exports.defenderPlayers = exports.PlayerSchema = exports.PositionType = void 0;
var mongoose_1 = require("mongoose");
var PositionType;
(function (PositionType) {
    PositionType["SUBSTITUTE"] = "SUBSTITUTE";
    PositionType["ATTACKER"] = "ATTACKER";
    PositionType["MIDFIELDER"] = "MIDFIELDER";
    PositionType["DEFENDER"] = "DEFENDER";
    PositionType["GOALKEEPER"] = "GOALKEEPER";
})(PositionType = exports.PositionType || (exports.PositionType = {}));
exports.PlayerSchema = new mongoose_1.Schema({
    userName: { require: true, type: String },
    position: { require: true, type: String },
    positionType: {
        type: String,
        "enum": PositionType,
        "default": PositionType.SUBSTITUTE
    }
});
exports.defenderPlayers = new mongoose_1.Schema({
    PositionType: { type: PositionType.DEFENDER }
});
exports.attackerPlayers = new mongoose_1.Schema({
    PositionType: { type: PositionType.ATTACKER }
});
exports.midfilderPlayers = new mongoose_1.Schema({
    PositionType: { type: PositionType.MIDFIELDER }
});
exports.goalkeeperPlayers = new mongoose_1.Schema({
    PositionType: { type: PositionType.GOALKEEPER }
});
exports.defenderPlayersModel = mongoose_1["default"].model('defenderPlayers', exports.defenderPlayers);
exports.attackerPlayersModel = mongoose_1["default"].model('attackerPlayers', exports.attackerPlayers);
exports.midfilderPlayersModel = mongoose_1["default"].model("midfilderPlayers", exports.midfilderPlayers);
exports.goalkeeperPlayersModel = mongoose_1["default"].model("goalkeeperPlayers", exports.goalkeeperPlayers);
exports.PlayerModel = mongoose_1["default"].model("players", exports.PlayerSchema);
exports["default"] = exports.PlayerModel;
