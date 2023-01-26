function handlerAddUser(ev) {
    try {
        ev.preventDefault();
        var _a = ev.target.elements, fullName = _a.fullName, address = _a.address, email = _a.email, phone = _a.phone, password = _a.password;
        users.push(new User(fullName.value, address.value, email.value, phone.value, password.value));
        ev.target.reset();
        renderUsers();
    }
    catch (error) {
        console.log(error);
    }
}
function handleRemoveItem(uid) {
    try {
        console.log(uid);
    }
    catch (error) {
        console.log(error);
    }
}
var inputElement = document.getElementById("file");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
    var fileList = this.files;
    console.log(fileList);
}
