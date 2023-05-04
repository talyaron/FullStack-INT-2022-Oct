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
const app = (0, express_1.default)();
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = require("../config/config");
const userRoutes_1 = require("../routes/userRoutes");
const boardRoutes_1 = require("../routes/boardRoutes");
const listRoutes_1 = require("../routes/listRoutes");
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
        app.use(express_1.default.static("public"));
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: false }));
        app.use((0, cookie_parser_1.default)());
        //routes
        app.use("/api/v1/users", userRoutes_1.userRouter);
        app.use("/api/v1/boards", boardRoutes_1.boardRouter);
        app.use("/api/v1/lists", listRoutes_1.listRouter);
        app.get("/main", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.sendFile(path_1.default.join(__dirname, "../../public", "main.html"));
        }));
        app.get("/board", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.sendFile(path_1.default.join(__dirname, "../../public", "board.html"));
        }));
        app.get("/passwordRecovery", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.sendFile(path_1.default.join(__dirname, "../../public", "forgotPassword.html"));
        }));
        app.listen(config_1.config.server.port, () => {
            console.log(`Server is listening on port ${config_1.config.server.port}...`);
        });
    });
}
