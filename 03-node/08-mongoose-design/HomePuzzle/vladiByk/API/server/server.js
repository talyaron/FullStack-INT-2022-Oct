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
const config_1 = require("../config/config");
const studentRoutes_1 = require("../routes/studentRoutes");
const teacherRoutes_1 = require("../routes/teacherRoutes");
const courseRoutes_1 = require("../routes/courseRoutes");
const gradesRoutes_1 = require("../routes/gradesRoutes");
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
        //routes
        app.use("/api/v1/students", studentRoutes_1.studentRouter);
        app.use("/api/v1/teachers", teacherRoutes_1.teacherRouter);
        app.use("/api/v1/courses", courseRoutes_1.courseRouter);
        app.use("/api/v1/grades", gradesRoutes_1.gradeRouter);
        app.listen(config_1.config.server.port, () => {
            console.log(`Server is listening on port ${config_1.config.server.port}...`);
        });
    });
}
