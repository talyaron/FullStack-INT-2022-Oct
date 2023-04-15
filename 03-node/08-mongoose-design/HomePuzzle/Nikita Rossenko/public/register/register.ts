function registerTeacher(e) {
    try {
        e.preventDefault();
        const teacherUsername = e.target.elements.teacherUsername.value;
        const userError = document.querySelector("#userError")
        if (userError){
            userError.innerHTML = ''
        }
        if (!teacherUsername) {
            const loginRegisterForm = document.querySelector("#loginRegisterForm")
            if (loginRegisterForm){
                loginRegisterForm.insertAdjacentHTML('afterend', '<p id="userError">Please fill the username field!</p>')
            }
            throw new Error("Please fill the username field!");
        }
        const newTeacher = { teacherUsername };

        //send to server:
        fetch("/api/v1/add-teacher", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTeacher),
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
