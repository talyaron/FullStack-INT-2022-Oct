// const storgUser = localStorage.getItem("user", users[1].uid)
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// drawBox()
var getInfo = localStorage.getItem("user");
var tmpArr = [];
var getInfoStr = [];
if (getInfo != null) {
    getInfoStr = getInfo.split('-');
    console.log(getInfoStr);
    if (getInfoStr[1] == "easy")
        tmpArr = __spreadArrays(easy);
    if (getInfoStr[1] == "middum")
        tmpArr = __spreadArrays(middum);
    if (getInfoStr[1] == "difficalt")
        tmpArr = __spreadArrays(difficult);
}
var element = document.querySelector("h2");
element.innerHTML = getInfoStr[0] + " Welcome to " + getInfoStr[1] + " game";
console.log(tmpArr);
drawBox();
playInGrid();
