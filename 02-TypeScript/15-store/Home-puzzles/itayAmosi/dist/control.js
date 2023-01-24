var registerForm = document.querySelector("#form");
function handleUser(event) {
    try {
        event.preventDefault();
        var username = event.target.elements.username.value;
        var password = event.target.elements.password.value;
        var email = event.target.elements.email.value;
        var theOfBirth = event.target.elements.theOfBirth.value;
        var country = event.target.elements.country.value;
        // const profileImage = imgSrc;
        userList.push(new User(username, password, email, theOfBirth, country));
        console.log(userList);
        event.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
