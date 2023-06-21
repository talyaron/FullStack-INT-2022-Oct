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
var react_1 = require("react");
var axios_1 = require("axios");
var Balloon_1 = require("./components/balloon/Balloon");
require("./App.css");
function App() {
    var _this = this;
    var _a = react_1.useState(0), index = _a[0], setIndex = _a[1];
    var _b = react_1.useState([]), balloons = _b[0], setBalloons = _b[1];
    var _c = react_1.useState(), balloon = _c[0], setBalloon = _c[1];
    var _d = react_1.useState(false), isData = _d[0], setIsData = _d[1];
    react_1.useEffect(function () {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var data, balloons;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get("/api/get-balloons")];
                    case 1:
                        data = (_a.sent()).data;
                        balloons = data.balloons;
                        console.log(balloons);
                        if (balloons != null) {
                            setBalloons(balloons);
                            setIsData(true);
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [setBalloon]);
    function click() {
        if (index == balloons.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
        setBalloon(balloons[index]);
    }
    return (React.createElement("div", null,
        React.createElement("button", { onClick: click }, "Get"),
        React.createElement("h1", null, index),
        React.createElement("h1", null, balloon ? balloon.color : "Empty"),
        isData ? React.createElement(Balloon_1.BalloonComp, { width: balloons[index].width, height: balloons[index].height, color: balloons[index].color }) : "Empty"));
}
exports["default"] = App;
