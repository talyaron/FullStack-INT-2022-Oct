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
exports.deleteAll = exports.deleteBallon = exports.getBallon = exports.createBallon = exports.getAllBallons = void 0;
const BallonModel_1 = __importDefault(require("../model/BallonModel"));
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const randomRadius = () => Math.floor(Math.random() * (100 - 50) + 1) + 50;
const getAllBallons = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ballons = yield BallonModel_1.default.find({});
        res.status(200).json({ ballons });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getAllBallons = getAllBallons;
const createBallon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ballon = yield BallonModel_1.default.create({
            color: getRandomColor(),
            radius: randomRadius(),
        });
        res.status(200).json({ ballon });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.createBallon = createBallon;
const getBallon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const ballon = yield BallonModel_1.default.findById(id);
        res.status(200).json({ ballon });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getBallon = getBallon;
const deleteBallon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const ballon = yield BallonModel_1.default.findByIdAndDelete(id);
        res.status(200).json({ ballon });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.deleteBallon = deleteBallon;
const deleteAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("deleted");
        const ballons = yield BallonModel_1.default.deleteMany({});
        res.status(200).json({ ballons });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.deleteAll = deleteAll;
