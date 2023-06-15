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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
require("./Balloon.scss");
var axios_1 = require("axios");
var Balloon = function (_a) {
    var balloons = _a.balloons, setBalloons = _a.setBalloons, speed = _a.speed;
    var _b = react_1.useState(null), randomBall = _b[0], setRandomBall = _b[1];
    var _c = react_1.useState({
        left: '50%',
        animationDuration: speed + "s"
    }), style = _c[0], setStyle = _c[1];
    react_1.useEffect(function () {
        try {
            var newBalloon = __spreadArrays(balloons);
            var randomIndex = Math.floor(Math.random() * newBalloon.length);
            setRandomBall(newBalloon[randomIndex]);
        }
        catch (error) {
            console.error(error);
        }
    }, [balloons]);
    function handleClickBalloon() {
        try {
            if (!randomBall)
                throw new Error('No random balloon found');
            var copyBalloon = __spreadArrays(balloons);
            var randomIndex = Math.ceil((Math.random() * 80) - 20) + 20;
            var updateBalloons = copyBalloon.filter(function (b) { return b._id !== (randomBall === null || randomBall === void 0 ? void 0 : randomBall._id); });
            setRandomBall(null);
            setStyle({
                left: randomIndex + "%",
                animationDuration: speed + "s"
            });
            setBalloons(updateBalloons);
            if (randomBall === null || randomBall === void 0 ? void 0 : randomBall._id)
                getScoreAndUpdateByOne(randomBall === null || randomBall === void 0 ? void 0 : randomBall._id);
        }
        catch (error) {
            console.error(error);
        }
    }
    function getScoreAndUpdateByOne(balloonId) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].post('api/balloons//get-score-by-id-and-update-by-one', { id: balloonId })];
                    case 1:
                        data = (_a.sent()).data;
                        if (!data)
                            throw new Error("no found dataJs");
                        console.log(data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return (randomBall &&
        react_1["default"].createElement("div", { style: style, className: "balloon-container" },
            react_1["default"].createElement("img", { width: "150px", src: randomBall.src, alt: randomBall.name, onClick: handleClickBalloon, className: "container-balloon__balloon" })));
};
exports["default"] = Balloon;
