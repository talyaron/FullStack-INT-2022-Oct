var forma = document.querySelector("#theForm");
function accountInfo(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var address = ev.target.elements.address.value;
        var email = ev.target.elements.email.value;
        var phone = ev.target.elements.phone.value;
        var password = ev.target.elements.password.value;
        var favoriteColor = ev.target.elements.favoriteColor.value;
        userinfo.push(new user(name, address, email, phone, password, favoriteColor));
        console.log(user);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function ChangerColor(ev) {
    try {
        console.log(ev);
        var color = ev.target.value;
        document.body.style.backgroundColor = color;
    }
    catch (error) {
        console.error(error);
    }
}
