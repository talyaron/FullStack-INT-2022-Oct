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
exports.updateUser = exports.deleteUser = exports.passwordRecovery = exports.login = exports.getUser = exports.createUser = exports.getAllUsers = void 0;
const UserModel_1 = __importDefault(require("../model/UserModel"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const secret = process.env.JWT_SECRET;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield UserModel_1.default.find({});
        res.status(200).json({ users });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllUsers = getAllUsers;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, gender, userName, password, email } = req.body;
        const findUser = yield UserModel_1.default.findOne({ email });
        if (findUser)
            return res.send(`Email exists in the system`);
        const user = yield UserModel_1.default.create({
            firstName: firstName.toLowerCase(),
            lastName: lastName.toLowerCase(),
            gender: gender.toLowerCase(),
            userName,
            password,
            email: email.toLowerCase(),
        });
        if (!secret)
            throw new Error("Missing jwt secret");
        const token = jwt_simple_1.default.encode({ userId: user._id, role: "public" }, secret);
        res.cookie("user", token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        res.redirect("/main");
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.createUser = createUser;
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body;
        const user = yield UserModel_1.default.findById(userId);
        res.json({ user });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getUser = getUser;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, password } = req.body;
        //User Authentication....
        const findUser = yield UserModel_1.default.findOne({ userName, password });
        if (!findUser)
            throw new Error("User not found on get user function");
        if (!secret)
            throw new Error("Missing jwt secret");
        const token = jwt_simple_1.default.encode({ userId: findUser._id, role: "public" }, secret);
        res.cookie("user", token, {
            maxAge: 60 * 60 * 1000,
            httpOnly: true,
        });
        res.redirect("/main");
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.login = login;
const passwordRecovery = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, userName, email } = req.body;
        const user = yield UserModel_1.default.findOne({
            firstName,
            lastName,
            userName,
            email,
        });
        if (!user)
            throw new Error("User not found, check entered data");
        res.status(200).send({ user });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.passwordRecovery = passwordRecovery;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: userId } = req.params;
        const user = yield UserModel_1.default.deleteOne({ _id: userId });
        const users = yield UserModel_1.default.find({});
        res.status(200).send({ users });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: userId } = req.params;
        const data = req.body;
        const users = yield UserModel_1.default.find({});
        const user = yield UserModel_1.default.findById({ _id: userId });
        res.status(201).json({ users });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.updateUser = updateUser;
