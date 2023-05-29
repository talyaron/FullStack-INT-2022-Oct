function handleSubmitRegisterForm(ev) {
    try {
        ev.preventDefault();
        var _a = ev.target.elements, fName = _a.fName, lName = _a.lName, email = _a.email, userName = _a.userName, password = _a.password, cPassword = _a.cPassword;
        console.log(fName.value, lName.value, email.value, userName.value, password.value, cPassword.value);
    }
    catch (error) {
        console.error(error);
    }
}
