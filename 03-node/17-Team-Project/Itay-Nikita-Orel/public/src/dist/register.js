function handleSubmitRegisterForm(ev) {
    try {
        ev.preventDefault();
        var container__form_1 = document.querySelector(".container__form");
        var userNotification_1 = document.querySelector(".userNotification");
        if (!container__form_1)
            throw new Error("DOM Error");
        var firstName = ev.target.elements.firstName.value;
        var lastName = ev.target.elements.lastName.value;
        var userName = ev.target.elements.userName.value;
        var email = ev.target.elements.email.value;
        var password = ev.target.elements.password.value;
        var cPassword = ev.target.elements.cPassword.value;
        if (!firstName)
            throw new Error("No firstName");
        if (!lastName)
            throw new Error("No lastName");
        if (!userName)
            throw new Error("No userName");
        if (!email)
            throw new Error("No email");
        if (!password)
            throw new Error("No password");
        if (!cPassword)
            throw new Error("No cPassword");
        var newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            userName: userName,
            password: password,
            cPassword: cPassword
        };
        if (password !== cPassword) {
            if (!userNotification_1) {
                container__form_1.insertAdjacentHTML("afterend", "<p class='userNotification'>Passwords don't match<p>");
            }
            else {
                userNotification_1.innerText = "Passwords don't match";
            }
            throw new Error("Password must be at least 4 characterst");
        }
        if (password.length < 4) {
            if (!userNotification_1) {
                container__form_1.insertAdjacentHTML("afterend", '<p class="userNotification">Password must be at least 4 characterst<p>');
            }
            else {
                userNotification_1.innerText = "Password must be at least 4 characterst";
            }
            throw new Error("Password must be at least 4 characterst");
        }
        fetch("/api/users/create-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (data.error) {
                if (!userNotification_1) {
                    container__form_1.insertAdjacentHTML("afterend", "<p class=\"userNotification\">" + data.error + "<p>");
                }
                else {
                    userNotification_1.innerText = "" + data.error;
                }
                throw new Error(data.error);
            }
            window.location.href = "/login.html";
        });
    }
    catch (error) {
        console.error(error);
    }
}
