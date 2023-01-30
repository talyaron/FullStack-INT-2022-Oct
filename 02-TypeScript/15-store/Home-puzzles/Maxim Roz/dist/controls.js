function handleAddUserData(ev) {
    var _a;
    try {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        var adress = ev.target.elements.adress.value;
        var email = ev.target.elements.email.value;
        var phone = ev.target.elements.phone.value;
        var password = ev.target.elements.password.value;
        var color = ev.target.elements.color.value;
        var image = (_a = ev.target.elements.image) === null || _a === void 0 ? void 0 : _a.value;
        usersData.push(new UserData(name, adress, email, phone, password, color, image));
        ev.target.reset();
        console.log(usersData);
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddUserDataAndImageUrl(ev) {
    var _a;
    try {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        var adress = ev.target.elements.adress.value;
        var email = ev.target.elements.email.value;
        var phone = ev.target.elements.phone.value;
        var password = ev.target.elements.password.value;
        var color = ev.target.elements.color.value;
        var image = (_a = ev.target.elements.image) === null || _a === void 0 ? void 0 : _a.value;
        users.push(new UserData(name, adress, email, phone, password, color, image));
        dataOnDomUrl();
        ev.target.reset();
        console.log(users);
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddUserDataAndImageLocal(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var adress = ev.target.elements.adress.value;
        var email = ev.target.elements.email.value;
        var phone = ev.target.elements.phone.value;
        var password = ev.target.elements.password.value;
        var color = ev.target.elements.color.value;
        var image = ev.target.elements.image.value;
        usersLocalImg.push(new UserData(name, adress, email, phone, password, color, image));
        dataOnDom();
        ev.target.reset();
        console.log(usersLocalImg);
    }
    catch (error) {
        console.error(error);
    }
}
