"use strict";
exports.__esModule = true;
require("./box.css");
var box = function (_a) {
    var header = _a.header, body = _a.body, auther = _a.auther;
    return (React.createElement("div", { className: "box" },
        React.createElement("h2", null, header),
        React.createElement("p", null, body),
        React.createElement("h5", null, auther)));
};
exports["default"] = box;
