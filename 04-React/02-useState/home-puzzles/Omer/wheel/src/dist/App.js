"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Box_1 = require("./comp/box/Box");
var students = ["Omer", "Guy", "Ben", "Alon"];
var colors = ["Blue", "Black", "Red", "Green"];
function App() {
    var _a = react_1.useState(0), num = _a[0], setNum = _a[1];
    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var handleClick = function () {
        setNum(randomNumberInRange(0, 3));
        setColorNum(randomNumberInRange(0, 3));
    };
    var _b = react_1.useState(0), colorNum = _b[0], setColorNum = _b[1];
    var color = colors[colorNum];
    var divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: "" + color,
        color: "White"
    };
    return (React.createElement("div", { style: divStyle },
        React.createElement("div", null,
            React.createElement(Box_1.Box, { color: color }),
            React.createElement("h2", null, students[num]),
            React.createElement("button", { onClick: handleClick }, "Get random student and color"))));
}
exports["default"] = App;
