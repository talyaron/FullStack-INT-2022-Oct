function handleAdminLogin(ev: any) {
    try {
        console.log("handle admin login test");
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const password = ev.target.elements.password.value;
        if (!name) throw new Error("No name entered");
        if (!password) throw new Error("No password entered");
        const activeAdmin = { name, password };

        fetch("/api/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(activeAdmin),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });

        // if (name === "amit" && password === "123") {
        //     console.log("ok");
        // } else {
        //     alert("incorrect password or user name")
        // }
    } catch (error) {
        console.error(error);
    }
}

function handleAddUser(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const src = ev.target.elements.src.value;
        if (!name) throw new Error("No name");
        if (!src) throw new Error("No src");
        const newUser: any = { name, src };

        //send to server:
        fetch("/api/users'", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.error(error);
    }
}

function handleGetUsers() {
    console.log("test");
    try {
        fetch("/api/get-users")
            .then((res) => res.json())
            .then(({ users }) => {
                try {
                    if (!users) throw new Error("didnt find users");
                    console.log(users);
                    renderUsers(users);
                } catch (error) {
                    console.error(error);
                }
            });
    } catch (error) {
        console.error(error);
    }
}