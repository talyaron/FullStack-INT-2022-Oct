function handleUser(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var adress = ev.target.elements.adress.value;
        var email = ev.target.elements.email.value;
        var phone = ev.target.elements.phone.valueAsNumber;
        var password = ev.target.elements.password.valueAsNumber;
        var color = ev.target.elements.color.value;
        var img = ev.target.elements.img.value;
        ev.target.reset();
        users.push(new User(name, adress, email, phone, password, color));
        console.log(users);
        renderUser();
    }
    catch (error) {
        console.error(error);
    }
}
