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
exports.boardCookieAuthentication = exports.userCookieAuthentication = void 0;
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const secret = process.env.JWT_SECRET;
const userCookieAuthentication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!secret)
            throw new Error("Missing jwt secret");
        const token = req.cookies;
        if (!token)
            throw new Error("Missing token from cookise");
        const decodedToken = jwt_simple_1.default.decode(token.user, secret);
        req.body = decodedToken.userId;
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.userCookieAuthentication = userCookieAuthentication;
const boardCookieAuthentication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!secret)
            throw new Error("Missing jwt secret");
        const token = req.cookies;
        if (!token)
            throw new Error("Missing token from cookise");
        const decodedToken = jwt_simple_1.default.decode(token.board, secret);
        req.body = decodedToken.boardId;
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.boardCookieAuthentication = boardCookieAuthentication;
