function handleLogin(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        if (!name)
            throw new Error("No name found");
        if (!password)
            throw new Error("No Password found");
        var newUser = { name: name, password: password };
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log("data", data);
            console.log("redirecting");
            redirectToHomePage();
        })["catch"](function (error) {
            console.error(error);
        });
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function redirectToHomePage() {
    try {
        var newUrl = "../index";
        window.location.replace(newUrl);
    }
    catch (error) {
        console.error(error);
    }
}
