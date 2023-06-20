function handleAddUser(ev) {
    try {
        ev.preventDefault();
        console.log(ev.target.elements);
        var userName = ev.target.elements.userName.value;
        var password = ev.target.elements.password.value;
        if (!userName)
            throw new Error("No name");
        if (!password)
            throw new Error("No Password");
        var newUser = { userName: userName, password: password };
        fetch("/api/user/add-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            window.location.href = "./index.html";
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
