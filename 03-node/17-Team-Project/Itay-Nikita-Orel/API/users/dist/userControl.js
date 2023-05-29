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
exports.changeUserIcon = exports.logout = exports.setUserResolution = exports.getUserResolution = exports.getUser = exports.UpdateUserDetails = exports.login = exports.addUser = exports.deleteUser = exports.UpdateUserDetailById = exports.adminCreateUser = exports.createUser = exports.restorePassword = exports.getUsersScoer = exports.getUsers = void 0;
var userModel_1 = require("./userModel");
var jwt_simple_1 = require("jwt-simple");
var bcryptjs_1 = require("bcryptjs");
var nodemailer_1 = require("nodemailer");
var dotenv = require("dotenv");
var path_1 = require("path");
dotenv.config();
var mailTransporter = nodemailer_1["default"].createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
});
exports.getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userModel_1["default"].find({})];
            case 1:
                users = _a.sent();
                res.send({ ok: true, users: users });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).send({ ok: false });
                console.error(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsersScoer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userModel_1["default"].find({}, { highScore: 1, userName: 1, src: 1 })
                        .sort({ highScore: -1 })
                        .limit(10)];
            case 1:
                users = _a.sent();
                res.send({ ok: true, users: users });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).send({ ok: false });
                console.error(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.restorePassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, email_1, password, passHash, existUser, imagePath, emailText, emailDetails, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userName = _a.userName, email_1 = _a.email;
                password = Math.random().toString(36).slice(-8);
                return [4 /*yield*/, bcryptjs_1["default"].hash(password, 10)];
            case 1:
                passHash = _b.sent();
                return [4 /*yield*/, userModel_1["default"].findOneAndUpdate({ userName: userName, email: email_1 }, { password: passHash })];
            case 2:
                existUser = _b.sent();
                if (!existUser)
                    throw new Error("Username or Email dosen't exist");
                imagePath = path_1["default"].join(__dirname + "../../../public/images/emailImages/emailBanner.png");
                emailText = "<div><p>Hello " + userName + ",<br><br>Here is your new password: " + password + "</p><p style=\"border-bottom:1px solid black; width: fit-content;\">Please login with this password and change it in the profile page!</p><p>Login: <a href=\"https://road-of-glory.onrender.com/login.html\">Road Of Glory - Login</a><br><br>Best Regards,<br><br>Road Of Glory - Team 3</p></div>";
                emailDetails = {
                    from: "\"Road Of Glory - Team 3\" <" + process.env.GMAIL + ">",
                    to: email_1,
                    subject: "Road Of Glory - Team 3 | " + userName + "'s Password Reset",
                    html: "<img src=\"cid:road.of.glory.team3@gmail.com\"/>" + emailText,
                    attachments: [
                        {
                            filename: "Road Of Glory - Team 3.png",
                            path: "" + imagePath,
                            cid: "road.of.glory.team3@gmail.com"
                        },
                    ]
                };
                mailTransporter.sendMail(emailDetails, function (err) {
                    if (err)
                        console.log(err);
                    else {
                        console.log("Email sent to " + email_1);
                        res.status(201).send({ ok: true });
                    }
                });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _b.sent();
                console.error(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var randomNumber, srcRandom, _a, firstName, lastName, userName, email, password, arr, regex_1, salt, passHash, existUser, userDB, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                randomNumber = Math.ceil(Math.random() * 48);
                srcRandom = "../images/PlayerIcons/" + randomNumber + ".png";
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, userName = _a.userName, email = _a.email, password = _a.password;
                if (password.length < 4)
                    throw new Error("Password must be at least 4 characters");
                arr = [firstName, lastName, userName, email, password];
                regex_1 = /^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/;
                if (arr.some(function (ele) { return !regex_1.test(ele); })) {
                    throw new Error("Please check your input(Only English characters allowed)");
                }
                salt = bcryptjs_1["default"].genSaltSync(10);
                passHash = bcryptjs_1["default"].hashSync(password, salt);
                return [4 /*yield*/, userModel_1["default"].findOne({
                        $or: [{ userName: userName }, { email: email }]
                    })];
            case 1:
                existUser = _b.sent();
                if (existUser)
                    throw new Error("User already exist");
                return [4 /*yield*/, userModel_1["default"].create({
                        firstName: firstName,
                        lastName: lastName,
                        userName: userName,
                        email: email,
                        password: passHash,
                        src: srcRandom
                    })];
            case 2:
                userDB = _b.sent();
                res.status(201).send({ ok: true, userDB: userDB });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _b.sent();
                console.error(error_4);
                res.status(500).send({ error: error_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.adminCreateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, userName, email, password, role, salt, passHash, existUser, userDB, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, userName = _a.userName, email = _a.email, password = _a.password, role = _a.role;
                salt = bcryptjs_1["default"].genSaltSync(10);
                passHash = bcryptjs_1["default"].hashSync(password, salt);
                return [4 /*yield*/, userModel_1["default"].findOne({
                        $or: [{ userName: userName }, { email: email }]
                    })];
            case 1:
                existUser = _b.sent();
                if (existUser)
                    throw new Error("User already exist");
                return [4 /*yield*/, userModel_1["default"].create({
                        firstName: firstName,
                        lastName: lastName,
                        userName: userName,
                        email: email,
                        password: passHash,
                        ROLE: role
                    })];
            case 2:
                userDB = _b.sent();
                res.status(201).send({ ok: true, userDB: userDB });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _b.sent();
                console.error(error_5);
                res.status(500).send({ error: error_5.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.UpdateUserDetailById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var uid, updateUser;
    return __generator(this, function (_a) {
        try {
            uid = req.body;
            if (!uid)
                throw new Error("no uID user");
            updateUser = userModel_1["default"].findByIdAndUpdate(uid, {});
            res.status(201).send({ ok: true, user: updateUser });
        }
        catch (error) {
            console.error(error);
        }
        return [2 /*return*/];
    });
}); };
exports.deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var uid, deleteUser_1, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                uid = req.body.uid;
                return [4 /*yield*/, userModel_1["default"].findByIdAndDelete(uid)];
            case 1:
                deleteUser_1 = _a.sent();
                if (!deleteUser_1)
                    throw new Error("user no founded");
                res.status(201).send({ ok: true, user: deleteUser_1 });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                res.status(500).send({ ok: false });
                console.error(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
        }
        catch (error) {
            console.error(error);
        }
        return [2 /*return*/];
    });
}); };
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var secret, _a, userName, password, userDB, token, error_7;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                secret = process.env.JWT_SECRET;
                _a = req.body, userName = _a.userName, password = _a.password;
                return [4 /*yield*/, userModel_1["default"].findOne({ userName: userName })];
            case 1:
                userDB = _b.sent();
                if (!userDB) {
                    res.status(401).send({
                        error: "username or password are inncorect"
                    });
                    return [2 /*return*/];
                }
                if (!bcryptjs_1["default"].compareSync(password, userDB.password))
                    throw new Error("wrong username or password");
                if (!secret)
                    throw new Error("Server Error");
                token = jwt_simple_1["default"].encode({ userId: userDB._id }, secret);
                res.cookie("currentUser", token, {
                    maxAge: 999 * 999 * 999,
                    httpOnly: true
                });
                res.status(201).send({ ok: true, userDB: userDB });
                return [3 /*break*/, 3];
            case 2:
                error_7 = _b.sent();
                console.error(error_7);
                res.status(500).send({ error: error_7.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.UpdateUserDetails = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _id, firstName, lastName, email, userName, password, salt, passHash, userDB, error_8;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, _id = _a._id, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, userName = _a.userName, password = _a.password;
                salt = bcryptjs_1["default"].genSaltSync(10);
                passHash = bcryptjs_1["default"].hashSync(password, salt);
                return [4 /*yield*/, userModel_1["default"].findByIdAndUpdate(_id, {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        userName: userName,
                        password: passHash
                    })];
            case 1:
                userDB = _b.sent();
                if (!userDB)
                    throw new Error("No userDB in array");
                res.send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_8 = _b.sent();
                console.error(error_8);
                res.status(500).send({ error: error_8.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var secret, currentUser, decoded, userId, userDB, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                secret = process.env.JWT_SECRET;
                currentUser = req.cookies.currentUser;
                if (!secret)
                    throw new Error("No secret");
                decoded = jwt_simple_1["default"].decode(currentUser, secret);
                userId = decoded.userId;
                return [4 /*yield*/, userModel_1["default"].findById(userId)];
            case 1:
                userDB = _a.sent();
                res.send({ ok: true, user: userDB });
                return [3 /*break*/, 3];
            case 2:
                error_9 = _a.sent();
                console.error(error_9);
                res.status(500).send({ error: error_9.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserResolution = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var secret, currentUser, decoded, userId, userDB, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                secret = process.env.JWT_SECRET;
                currentUser = req.cookies.currentUser;
                if (!secret)
                    throw new Error("No secret");
                decoded = jwt_simple_1["default"].decode(currentUser, secret);
                userId = decoded.userId;
                return [4 /*yield*/, userModel_1["default"].findById(userId)];
            case 1:
                userDB = _a.sent();
                res.send({ ok: true, userResolution: userDB === null || userDB === void 0 ? void 0 : userDB.resolution });
                return [3 /*break*/, 3];
            case 2:
                error_10 = _a.sent();
                console.error(error_10);
                res.status(500).send({ error: error_10.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.setUserResolution = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var resolution, secret, currentUser, decoded, userId, userDB, error_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                resolution = req.body.resolution;
                secret = process.env.JWT_SECRET;
                currentUser = req.cookies.currentUser;
                if (!secret)
                    throw new Error("No secret");
                decoded = jwt_simple_1["default"].decode(currentUser, secret);
                userId = decoded.userId;
                return [4 /*yield*/, userModel_1["default"].findByIdAndUpdate(userId, {
                        resolution: resolution
                    })];
            case 1:
                userDB = _a.sent();
                res.send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_11 = _a.sent();
                console.error(error_11);
                res.status(500).send({ error: error_11.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.logout = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            res.clearCookie("currentUser");
            res.send("Cookie deleted!");
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
exports.changeUserIcon = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var secret, currentUser, decoded, userId, userDB, uID, src, changeSrcUser, error_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                secret = process.env.JWT_SECRET;
                currentUser = req.cookies.currentUser;
                if (!secret)
                    throw new Error("No secret");
                decoded = jwt_simple_1["default"].decode(currentUser, secret);
                userId = decoded.userId;
                return [4 /*yield*/, userModel_1["default"].findById(userId)];
            case 1:
                userDB = _a.sent();
                if (!userDB)
                    throw new Error("no found UserDB");
                uID = userDB._id;
                src = req.body.src;
                if (!src)
                    throw new Error("no found src");
                return [4 /*yield*/, userModel_1["default"].findByIdAndUpdate(uID, { src: src })];
            case 2:
                changeSrcUser = _a.sent();
                if (!changeSrcUser)
                    throw new Error("no found user DB");
                res.status(201).send({ ok: true, user: changeSrcUser });
                return [3 /*break*/, 4];
            case 3:
                error_12 = _a.sent();
                console.error(error_12);
                res.status(500).send({ error: error_12.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
