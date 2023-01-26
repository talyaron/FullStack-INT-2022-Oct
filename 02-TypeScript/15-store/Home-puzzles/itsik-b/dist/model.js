// const mainform = document.querySelector("form")as HTMLFormElement;
function userSubmit(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var address = ev.target.elements.address.value;
        var email = ev.target.elements.email.value;
        var phone = ev.target.elements.phone.value;
        var password = ev.target.elements.password.value;
        var precolor = ev.target.elements.precolor.value;
        var file = ev.target.elements.file.value;
        userInfo.push(new formUser(name, address, email, phone, password, precolor, file));
        // ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
