function handleRegister(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var email = ev.target.elements.email.value;
        var password = ev.target.elements.password.value;
        var phoneNumber = ev.target.elements.tel.value;
        if (!name)
            throw new Error("No name");
        if (!email)
            throw new Error("No email");
        if (!password)
            throw new Error("No Password");
        if (!phoneNumber)
            throw new Error("No tel");
        var newUser = { name: name, email: email, password: password, phoneNumber: phoneNumber };
        window.location.href = "/login/index.html";
        fetch("/api/users/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
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
