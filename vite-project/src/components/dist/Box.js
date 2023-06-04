"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./box.css");
var Box = function (_a) {
    var text = _a.text;
    var _b = react_1.useState(0), counter = _b[0], setCounter = _b[1];
    function handleClick() {
        setCounter(function (counter) { return counter + 1; });
    }
    return (React.createElement("div", { className: "box", onClick: handleClick },
        text,
        ": ",
        counter));
};
exports["default"] = Box;
