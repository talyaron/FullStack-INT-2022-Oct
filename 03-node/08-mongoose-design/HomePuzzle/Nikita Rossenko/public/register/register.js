function registerTeacher(e) {
    try {
        e.preventDefault();
        var teacherUsername = e.target.elements.teacherUsername.value;
        var userError = document.querySelector("#userError");
        if (userError) {
            userError.innerHTML = '';
        }
        if (!teacherUsername) {
            var loginRegisterForm = document.querySelector("#loginRegisterForm");
            if (loginRegisterForm) {
                loginRegisterForm.insertAdjacentHTML('afterend', '<p id="userError">Please fill the username field!</p>');
            }
            throw new Error("Please fill the username field!");
        }
        var newTeacher = { teacherUsername: teacherUsername };
        //send to server:
        fetch("/api/v1/add-teacher", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTeacher)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
