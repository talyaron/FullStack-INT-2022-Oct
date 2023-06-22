"use strict";
exports.__esModule = true;
require("./App.css");
require("./index.css");
var PopUp_1 = require("./components/popUp/PopUp");
var react_1 = require("react");
function App() {
    var _a = react_1.useState(false), usePopUp = _a[0], setUsePopUp = _a[1];
    function showPopUp() {
        setUsePopUp(function (usePopUp) { return !usePopUp; });
    }
    return (React.createElement("div", null,
        React.createElement("button", { onClick: showPopUp }, usePopUp ? "Hide" : "Show"),
        usePopUp ? React.createElement(PopUp_1.PopUp, null) : null));
}
exports["default"] = App;
