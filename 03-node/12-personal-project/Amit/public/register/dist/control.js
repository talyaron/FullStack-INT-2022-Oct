function handleUserRegister(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        if (!name)
            throw new Error("No name found");
        if (!password)
            throw new Error("No Password found");
        var user = { name: name, password: password };
        fetch("/api/users/create-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            var newUrl = "../login";
            window.location.replace(newUrl);
        })["catch"](function (error) {
            console.error(error);
        });
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
