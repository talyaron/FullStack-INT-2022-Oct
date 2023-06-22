"use strict";
exports.__esModule = true;
exports.User = void 0;
exports.User = function (_a) {
    var name = _a.name, age = _a.age;
    return (React.createElement("div", { className: 'user' },
        React.createElement("h2", null,
            "Name: ",
            name),
        React.createElement("h4", null,
            "Age: ",
            age)));
};
