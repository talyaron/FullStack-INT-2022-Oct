var forma = document.querySelector("#theForm");
function accountInfo(ev) {
    try {
        debugger;
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var address = ev.target.elements.address.value;
        var email = ev.target.elements.email.value;
        var phone = ev.target.elements.phone.value;
        // const password= ev.target.elements.password.value;
        var favoriteColor = ev.target.elements.favoriteColor.name;
        userinfo.push(new user(name, address, email, phone, favoriteColor));
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
        var favoriteColor = ev.target.value;
        document.body.style.backgroundColor = favoriteColor;
    }
    catch (error) {
        console.error(error);
    }
}
