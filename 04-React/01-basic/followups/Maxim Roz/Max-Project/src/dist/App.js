"use strict";
exports.__esModule = true;
require("./App.css");
var Box_1 = require("./components/box/Box");
function App() {
    //JSX
    return (React.createElement("div", null,
        React.createElement("h1", null, "React Page 1"),
        React.createElement("p", null, "Hi"),
        React.createElement(Box_1["default"], { text: "Hi" }),
        React.createElement(Box_1["default"], { text: "Bye" }),
        React.createElement(Box_1["default"], { text: "whatsapp" }),
        React.createElement(Box_1["default"], { text: "great!!" })));
}
exports["default"] = App;
