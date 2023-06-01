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
exports.searchUser = exports.updateUserByAdmin = exports.updateUser = exports.deleteUser = exports.deleteAllUsers = exports.passwordRecovery = exports.userLogout = exports.userLogin = exports.getUser = exports.createUser = exports.getAllSimpleUsers = exports.getAllUsers = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const secret = process.env.JWT_SECRET;
const bcrypt = require("bcryptjs");
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.find({});
        res.status(200).json({ users });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getAllUsers = getAllUsers;
const getAllSimpleUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.find({ userRole: "simple" });
        res.status(200).json({ users });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getAllSimpleUsers = getAllSimpleUsers;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, gender, userName, password, email, adminToken, } = req.body;
        if (!firstName)
            throw new Error("No first name found");
        if (!lastName)
            throw new Error("No last name found");
        if (!gender)
            throw new Error("No gender found");
        if (!userName)
            throw new Error("No user name found");
        if (!password)
            throw new Error("No password found");
        if (!email)
            throw new Error("No email found");
        const takenEmail = yield userModel_1.default.findOne({ email });
        //bcryption//
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        if (takenEmail) {
            res.status(500).json({
                ok: false,
                errorMessage: `Email already exists in the system`,
            });
        }
        else {
            const user = yield userModel_1.default.create({
                firstName: firstName.toLowerCase(),
                lastName: lastName.toLowerCase(),
                gender: gender.toLowerCase(),
                userName,
                password: hash,
                email: email.toLowerCase(),
            });
            if (adminToken === "amit" && user.userRole === "simple") {
                user.userRole = "admin";
                user.save();
            }
            if (!secret)
                throw new Error("Missing jwt secret");
            const token = jwt_simple_1.default.encode(user._id, secret);
            res.cookie("userId", token, {
                expires: new Date(Date.now() + 7200000),
                httpOnly: true,
            });
            res.redirect("/signIn");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.createUser = createUser;
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.cookies;
        if (!secret)
            throw new Error("No secret");
        if (!userId)
            throw new Error("No user found");
        const decoded = jwt_simple_1.default.decode(userId, secret);
        const user = yield userModel_1.default.findById(decoded);
        res.send({ ok: true, user });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: "error.message" });
    }
});
exports.getUser = getUser;
const userLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userModel_1.default.findOne({ email });
        if (!user)
            throw new Error("User not found on userLogin function");
        if (!secret)
            throw new Error("Missing jwt secret");
        const hash = user.password;
        const isValidPassword = bcrypt.compareSync(password, hash); //1:password from user, 2:hashed password from db
        if (isValidPassword === false)
            return res.json("Not valid password.");
        const token = jwt_simple_1.default.encode(user._id, secret);
        res.cookie("userId", token, {
            expires: new Date(Date.now() + 7200000),
            httpOnly: true,
        });
        res.redirect("/profile");
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.userLogin = userLogin;
const userLogout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie("userId");
        res.send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.userLogout = userLogout;
const passwordRecovery = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, userName, email } = req.body;
        const user = yield userModel_1.default.findOne({
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
const deleteAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteUsers = yield userModel_1.default.deleteMany({});
        res.status(200).send({ deleteUsers });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.deleteAllUsers = deleteAllUsers;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const deletedUser = yield userModel_1.default.findByIdAndDelete(userId);
        if (!deletedUser)
            throw new Error("User  was not found in delete user route");
        const users = yield userModel_1.default.find({ userRole: "simple" });
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
        const { userId, firstName, lastName, gender, userName, email } = req.body;
        const takenEmailUser = yield userModel_1.default.findOne({ email });
        if (takenEmailUser) {
            if (takenEmailUser.email !== email) {
                res.status(500).json({
                    ok: false,
                    errorMessage: `Email already exists in the system`,
                });
            }
            else if (takenEmailUser.email === email) {
                updatedUser(userId, firstName, lastName, gender, userName, email, res);
            }
        }
        else {
            updatedUser(userId, firstName, lastName, gender, userName, email, res);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.updateUser = updateUser;
function updatedUser(userId, firstName, lastName, gender, userName, email, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedUser = yield userModel_1.default.findByIdAndUpdate({ _id: userId }, {
                firstName,
                lastName,
                gender,
                userName,
                email,
            });
            const user = yield userModel_1.default.findById(userId);
            res.status(201).json({ ok: true, user });
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ error: error.message });
        }
    });
}
//////////////////////////
const updateUserByAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, firstName, lastName, gender, userName, email } = req.body;
        const takenEmailUser = yield userModel_1.default.findOne({ email });
        if (takenEmailUser) {
            if (takenEmailUser.email !== email) {
                res.status(500).json({
                    ok: false,
                    errorMessage: `Email already exists in the system`,
                });
            }
            else if (takenEmailUser.email === email) {
                updatedUserByAdmin(userId, firstName, lastName, gender, userName, email, res);
            }
        }
        else {
            updatedUserByAdmin(userId, firstName, lastName, gender, userName, email, res);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.updateUserByAdmin = updateUserByAdmin;
function updatedUserByAdmin(userId, firstName, lastName, gender, userName, email, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedUser = yield userModel_1.default.findByIdAndUpdate({ _id: userId }, {
                firstName,
                lastName,
                gender,
                userName,
                email,
            });
            const user = yield userModel_1.default.findById(userId);
            res.status(201).json({ ok: true, user });
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ error: error.message });
        }
    });
}
const searchUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userInputValue } = req.body;
        const users = yield userModel_1.default.find({
            userRole: "simple",
            $or: [
                { firstName: userInputValue },
                { lastName: userInputValue },
                { userName: userInputValue },
                { gender: userInputValue },
                { email: userInputValue },
            ],
        });
        res.status(200).json({ ok: true, users });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.searchUser = searchUser;
