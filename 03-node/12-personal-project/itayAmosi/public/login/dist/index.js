"use strict";
exports.__esModule = true;
exports.handleLogin = void 0;
function handleLogin(ev, user) {
    try {
        ev.preventDefault();
        var email = ev.target.elements.email.value;
        var password = ev.target.elements.password.value;
        if (!email)
            throw new Error("No name");
        if (!password)
            throw new Error("No Password");
        var loginUser = { email: email, password: password };
        // if(password === user.password) throw new Error("password incorrect");
        window.location.href = "/main/index.html";
        //send to server:
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
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
exports.handleLogin = handleLogin;
