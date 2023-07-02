"use strict";
exports.__esModule = true;
function handelAddUser(ev) {
    try {
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        var email = ev.target.elements.email.value;
        if (!name)
            throw new Error("no name!");
        if (!password)
            throw new Error("no password!!!");
        if (!email)
            throw new Error("no email!");
        var newUser = { name: name, password: password, email: email };
        fetch("/api/users/add-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(function (res) {
            // console.log(data);
        });
    }
    catch (error) {
        console.error("coudlds complete the add user");
    }
}
