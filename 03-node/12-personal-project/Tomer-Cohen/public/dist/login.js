function handleLogin(ev) {
    try {
        ev.preventDefault();
        console.log(ev.target.elements);
        var userName = ev.target.elements.userName.value;
        var password = ev.target.elements.password.value;
        if (!userName)
            throw new Error("No userName");
        if (!password)
            throw new Error("No Password");
        var newUser = { userName: userName, password: password };
        fetch("/api/user/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            var ok = data.ok;
            if (ok) {
                window.location.href = "timeManger.html";
            }
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
