"use strict";
function handlerAddUser(ev) {
    try {
        ev.preventDefault();
        const { fullName, address, email, phone, password } = ev.target.elements;
        users.push(new User(fullName.value, address.value, email.value, phone.value, password.value));
        ev.target.reset();
        renderUsers();
    }
    catch (error) {
        console.log(error);
    }
}
const inputElement = document.getElementById("file");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
    //@ts-ignore
    const fileList = this.files; /* now you can work with the file list */
    console.log(fileList);
}
