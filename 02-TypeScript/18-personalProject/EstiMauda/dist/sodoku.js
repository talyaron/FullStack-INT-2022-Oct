// const storgUser = localStorage.getItem("user", users[1].uid)
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
drawBox();
var getUid = localStorage.getItem("users");
console.log(getUid);
var indexArr = users.findIndex(getUid);
var tmpArr = [];
var levels = 3;
if (levels == 3)
    tmpArr = __spreadArrays(easy);
playInGrid();
