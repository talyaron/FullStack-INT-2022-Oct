"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = require("../config/config");
//routers
const userRoutes_1 = require("../routes/userRoutes");
const boardRoutes_1 = require("../routes/boardRoutes");
const deckRouter_1 = require("../routes/deckRouter");
const gameRoutes_1 = require("../routes/gameRoutes");
const playerRoutes_1 = require("../routes/playerRoutes");
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:8080",
    },
});
StartServer();
function StartServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default
            .connect(config_1.config.mongo.url, { retryWrites: true, w: "majority" })
            .then(() => {
            console.log("Connected to DB...");
        })
            .catch((err) => {
            console.error(err);
        });
        //middleware
        app.use(express_1.default.static("public"));
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: false }));
        app.use((0, cookie_parser_1.default)());
        //routes
        app.use("/api/v1/users", userRoutes_1.userRouter);
        app.use("/api/v1/games", gameRoutes_1.gameRouter);
        app.use("/api/v1/players", playerRoutes_1.playerRouter);
        app.use("/api/v1/boards", boardRoutes_1.boardRouter);
        app.use("/api/v1/decks", deckRouter_1.deckRouter);
        app.get("/signIn", (req, res, next) => {
            res.sendFile(path_1.default.join(__dirname, "../../public", "login.html"));
        });
        app.get("/signUp", (req, res, next) => {
            res.sendFile(path_1.default.join(__dirname, "../../public", "register.html"));
        });
        app.get("/profile", (req, res, next) => {
            res.sendFile(path_1.default.join(__dirname, "../../public", "profile.html"));
        });
        app.get("/game", (req, res, next) => {
            res.sendFile(path_1.default.join(__dirname, "../../public", "game.html"));
        });
        server.listen(config_1.config.server.port, () => {
            console.log(`Server is listening on port ${config_1.config.server.port}...`);
        });
        io.on("connection", (socket) => {
            console.log("new web socket connection: ", socket.id);
            socket.on("buttonClicked", (id) => {
                socket.broadcast.emit("broadcast", id);
            });
        });
    });
}
