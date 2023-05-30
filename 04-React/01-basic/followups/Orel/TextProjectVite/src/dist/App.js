"use strict";
exports.__esModule = true;
var buttonTest_1 = require("./components/buttonTest/buttonTest");
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Hello world"),
        React.createElement("div", null,
            React.createElement(buttonTest_1["default"], { text: "Click here" }),
            React.createElement(buttonTest_1["default"], { text: "Right here" }),
            React.createElement(buttonTest_1["default"], { text: "Click here" }))));
}
exports["default"] = App;
