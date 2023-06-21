"use strict";
exports.__esModule = true;
exports.BalloonComp = void 0;
exports.BalloonComp = function (_a) {
    var width = _a.width, height = _a.height, color = _a.color;
    console.log({ width: width });
    var myStyle = {
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: '50%'
    };
    return (React.createElement("div", { style: myStyle }));
};
