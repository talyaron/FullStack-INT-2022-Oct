function handleAddUser(ev) {
    ev.preventDefault();
    try {
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        var email = ev.target.elements.email.value;
        if (!name)
            throw new Error("No name!");
        if (!password)
            throw new Error("No password!");
        if (!email)
            throw new Error("No email!");
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
            if (res.ok) {
                console.log("User registered successfully!");
                window.location.href = "http://localhost:3000/login/login.html";
            }
            else {
                throw new Error("Failed to register user");
            }
        })["catch"](function (error) {
            console.error("Could not complete the registration:", error);
        });
    }
    catch (error) {
        console.error("Could not complete the add user:", error);
    }
}
