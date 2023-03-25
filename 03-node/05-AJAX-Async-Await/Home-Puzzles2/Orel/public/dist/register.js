"use strict";
exports.__esModule = true;
function handleSubmitLogin(ev) {
    try {
        ev.preventDefault();
        var email = ev.target.elements.email.value;
        var password = ev.target.elements.password.value;
        checkMatchUser(email, password);
    }
    catch (error) {
        console.error(error);
    }
}
function checkMatchUser(email, password) {
    try {
        fetch('/api/admins')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            data.find(function (admin) {
                console.log(admin);
                if (admin.password === password && admin.email === email) {
                    localStorage.setItem("admin", "true");
                    window.location.href = "/";
                }
                else {
                    console.log("no Match");
                }
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
