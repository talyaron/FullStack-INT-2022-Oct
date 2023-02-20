function handleAddItem(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        var address = ev.target.elements.address.value;
        var email = ev.target.elements.email.value;
        var phone = ev.target.elements.phone.value;
        var password = ev.target.elements.password.value;
        var preferdColor = ev.target.elements.preferdColor.value;
        ev.target.reset();
        console.log(name, address, email, phone, password, preferdColor);
    }
    catch (error) {
        console.error(error);
    }
}
