var mainform = document.querySelector("form");
function userSubmit(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var address = ev.target.elements.name.value;
        var email = ev.target.elements.name.value;
        var phone = ev.target.elements.name.value;
        var password = ev.target.elements.name.value;
        var precolor = ev.target.elements.name.value;
        var file = ev.target.elements.name.value;
        userInfo.push(new formUser(name, address, email, phone, password, precolor, file));
        console.log(userInfo);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
