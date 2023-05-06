"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.handleLogin = void 0;
function handleLogin(ev) {
    try {
        ev.preventDefault();
        var email = ev.target.elements.email.value;
        var password = ev.target.elements.password.value;
        if (!email)
            throw new Error("No name");
        if (!password)
            throw new Error("No Password");
        var loginUser = { email: email, password: password };
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (data.error) {
                alert(data.error);
                return;
            }
            var _a = data.userDB, password = _a.password, currentUser = __rest(_a, ["password"]);
            localStorage.setItem("currentUser", JSON.stringify(currentUser)); //cookie
            //save user without password in cookies
            window.location.href = "/main/index.html";
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
exports.handleLogin = handleLogin;
