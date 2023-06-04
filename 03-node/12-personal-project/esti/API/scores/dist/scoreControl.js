"use strict";
// import { getScore } from './scoreControl';
// import UserModel from "../users/userModel";
// import ScoreModel from "./scoreModel";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.updateScore = exports.addScore = exports.getScores = void 0;
var scoreModel_1 = require("./scoreModel");
exports.getScores = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, score, competitionPlace;
    return __generator(this, function (_b) {
        try {
            _a = req.body, name = _a.name, score = _a.score, competitionPlace = _a.competitionPlace;
            // console.log( name, score, competitionPlace );
            // let scoreDBArray = []
            // for (let i = 1; i < 10; i++ ){
            //     const scoreDB = await ScoreModel.findOne({ i });
            //     console.log(scoreDB)
            //     console.log("scoreDB")
            //     // scoreDBArray.push(scoreDB)
            //   };
            // interface CustomError {
            //   code: number;
            //   message: string;
            // }
            // if (!scoreDBArray) throw new Error("Username or password are inncorect");
            // if (!scoreDBArray){
            //     // If an error occurs
            //     const error: CustomError = {
            //       code: 1001,
            //       message: "No play user"
            //     };
            //     res.status(1001).send({ error });
            //   };
            //   if (!secret) throw new Error("Missing jwt secret");
            //   
            //   const token = jwt.encode({ userId: userDB._id, role: "public" }, secret);
            //   console.log(token);
            //   console.log("token");
            //   res.cookie("user", userDB._id , { maxAge: 5000000, httpOnly: true });
            //   res.status(201).send({ ok: true });
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
// export const addScore = async (req: any, res: any) => {
//   try {
//   //   res.status(201).send({ ok: true });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// };
exports.addScore = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, userId, score, competitionPlace, userDB, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, userName = _a.userName, userId = _a.userId, score = _a.score, competitionPlace = _a.competitionPlace;
                // console.log(name, password);
                console.log(req.body);
                return [4 /*yield*/, scoreModel_1.ScoreModel.create({ userName: userName, userId: userId, score: score, competitionPlace: competitionPlace })];
            case 1:
                userDB = _b.sent();
                console.log(userDB);
                // console.log(UserModel);
                // console.log("userDB");
                res.status(201).send({ ok: true, user: userDB });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateScore = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            //   res.status(201).send({ ok: true });
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
