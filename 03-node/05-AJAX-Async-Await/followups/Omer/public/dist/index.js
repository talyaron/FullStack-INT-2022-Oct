function formHandler(ev) {
    ev.preventDefault();
    try {
        var name = ev.target.elements.name.value;
        var img = ev.target.elements.img.value;
        var newUser = { name: name, img: img };
        console.log(newUser);
        ev.target.reset();
        fetch("/api-data", {
            method: "POST",
            headers: {
                //   'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
        getUsers();
    }
    catch (error) {
        console.error(error);
    }
}
function getUsers() {
    try {
        fetch("/api-users")
            .then(function (response) { return response.json(); })
            .then(function (_a) {
            var data = _a.data;
            try {
                // if (!data) throw new Error("didn't find users");
                console.log("Data at getUser()");
                console.log(data);
                renderUser(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderUser(users) {
    console.log("render");
    var display = document.getElementById("users");
    try {
        if (!display)
            throw new Error("Display not found");
        var html = users
            .map(function (user) {
            return "<div class=\"userCard\">\n            <img src=\"" + user.img + "\" alt=\"user name is " + user.name + "\">\n            <p>" + user.name + "</p>\n            </div>";
        })
            .join(" ");
        display.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
